"use client";

import { useEffect, useRef, useState } from "react";
import type { AnimationEvent, PointerEvent } from "react";
import "./ambient-environment.css";

type Season = "spring" | "summer" | "autumn" | "winter";
type Mode = "day" | "irl" | "night";
type Scene = { season: Season; mode: Mode; count: number };
const storageKey = "zirey-ambient-mode";
const modes: Mode[] = ["day", "irl", "night"];
const groundCount = 6;
const sessionGround = new Map<string, number[]>();
let rememberedMode: Mode = "irl";
const clamp = (n: number, low = 0, high = 1) => Math.max(low, Math.min(high, n));
const smooth = (n: number) => { const t = clamp(n); return t * t * (3 - 2 * t); };

export function seasonAt(date: Date): Season {
  const month = date.getMonth();
  return month >= 2 && month <= 4 ? "spring" : month >= 5 && month <= 7 ? "summer" : month >= 8 && month <= 10 ? "autumn" : "winter";
}

// Smooth interpolation between local-time lighting landmarks, without geolocation.
export function lightingAt(date: Date) {
  const hour = date.getHours() + date.getMinutes() / 60 + date.getSeconds() / 3600;
  const stops = [
    [0, 0, 0, 0], [5, 0, 0, 0], [6, .28, 0, 0], [7, .78, .08, 0],
    [9, 1, .05, 0], [16, 1, .08, 0], [17.5, .7, .85, .35],
    [19, .12, .28, .8], [20, 0, 0, 0], [24, 0, 0, 0],
  ];
  const upper = stops.findIndex(stop => stop[0] > hour);
  const a = stops[Math.max(0, upper - 1)];
  const b = stops[upper === -1 ? stops.length - 1 : upper];
  const t = smooth((hour - a[0]) / (b[0] - a[0] || 1));
  const mix = (column: number) => a[column] + (b[column] - a[column]) * t;
  return { light: mix(1), warmth: mix(2), dusk: mix(3) };
}
export function lightAt(date: Date) { return lightingAt(date).light; }

// Area scaling is capped; resizing reuses the existing particle IDs.
export function particleCount(season: Season, width: number, height: number) {
  const area = width * height;
  const settings = { winter: [10500, 28, 144], autumn: [17500, 20, 88], spring: [95000, 4, 18], summer: [80000, 5, 22] }[season];
  return Math.round(clamp(area / settings[0], settings[1], settings[2]));
}
function random(seed: number) {
  let value = seed >>> 0;
  return () => {
    value += 0x6d2b79f5;
    let t = Math.imul(value ^ value >>> 15, 1 | value);
    t ^= t + Math.imul(t ^ t >>> 7, 61 | t);
    return ((t ^ t >>> 14) >>> 0) / 4294967296;
  };
}
function properties(node: HTMLElement, values: Record<string, string | number>) {
  // CSSOM assignment preserves compatibility with the existing nonce-only CSP.
  Object.entries(values).forEach(([key, value]) => node.style.setProperty(`--${key}`, String(value)));
}
function configureParticle(node: HTMLElement, id: number, cycle = 0) {
  const rng = random(7219 + id * 7919 + cycle * 104729);
  const depth = rng();
  const x = rng() < .55 ? (rng() < .5 ? rng() * 12 : 88 + rng() * 12) : rng() * 100;
  const landingX = clamp(x + (rng() - .5) * 13, .5, 99.5);
  node.dataset.landing = String(Math.round(landingX / 100 * (groundCount - 1)));
  properties(node, { x: `${x}%`, drift: `${landingX - x}vw`, turn: `${rng() * 280 - 140}deg`,
    sway: `${3.1 + rng() * 7.7}s`, swing: `${5 + rng() * 27}px`, phase: `${-rng() * 19}s`,
    "still-y": `${8 + rng() * 78}%`, "start-y": `${-20 - rng() * 90}px`,
    alpha: .32 + depth * .56, size: `${1.2 + depth * 3.5}px`,
    leaf: ["#a58254", "#ac704f", "#95675b", "#bcab76", "#8e794d"][Math.floor(rng() * 5)],
  });
  if (cycle === 0) properties(node, { fall: `${17 + (1 - depth) * 24 + rng() * 13}s`, delay: `${-rng() * 53}s` });
}
function Flower() {
  return <svg viewBox="0 0 40 70" aria-hidden="true"><path d="M20 68 Q27 40 18 20 M23 51 Q7 49 10 39 Q22 40 23 51 M23 43 Q36 33 34 46 Q29 51 23 51" fill="none" stroke="#74856b" strokeWidth="2" /><g fill="#c9b5c7"><ellipse cx="18" cy="13" rx="5" ry="8" /><ellipse cx="10" cy="20" rx="8" ry="5" /><ellipse cx="25" cy="21" rx="8" ry="5" /><ellipse cx="18" cy="27" rx="5" ry="8" /></g><circle cx="18" cy="21" r="4" fill="#d5bc85" /></svg>;
}
function Duck() {
  return <svg viewBox="0 0 44 30" aria-hidden="true"><path d="M5 17 L1 12 L11 15 Q18 10 27 17 L28 10 Q24 2 32 2 Q40 2 38 11 L36 18 Q35 27 20 27 Q7 27 5 17Z" fill="#d7c28f" stroke="#756449" strokeWidth="1.2" /><path d="M37 7 L43 10 L37 12" fill="#b97c52" /><circle cx="34" cy="7" r="1" fill="#443749" /><path d="M13 18 Q19 24 26 18" fill="none" stroke="#a8926e" /></svg>;
}

export function AmbientEnvironment() {
  const root = useRef<HTMLDivElement>(null);
  const [scene, setScene] = useState<Scene | null>(null);
  const mode = useRef<Mode>("irl");
  const ground = useRef<number[]>(Array(groundCount).fill(.35));
  const groundKey = useRef("");
  const hold = useRef<ReturnType<typeof setInterval> | null>(null);
  const held = useRef<{ button: HTMLButtonElement; pointer: number; strength: number } | null>(null);
  const effects = useRef(new Set<Animation>());
  const saveTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  function paintGround() {
    root.current?.querySelectorAll<HTMLElement>("[data-ground]").forEach(node => {
      const mass = ground.current[Number(node.dataset.ground)] ?? .35;
      properties(node, { accumulation: mass, cleared: 1 - mass });
    });
    sessionGround.set(groundKey.current, [...ground.current]);
  }
  function saveGround() {
    if (!groundKey.current) return;
    try { sessionStorage.setItem(groundKey.current, JSON.stringify(ground.current)); } catch { /* Memory fallback survives client navigation. */ }
  }
  function queueSave() {
    if (saveTimer.current) return;
    saveTimer.current = setTimeout(() => { saveTimer.current = null; saveGround(); }, 800);
  }
  function stopHold() {
    if (hold.current) clearInterval(hold.current);
    hold.current = null;
    held.current = null;
  }

  useEffect(() => {
    const node = root.current;
    const desktop = node?.closest<HTMLElement>(".desktop");
    if (!node || !desktop) return;
    try {
      const saved = localStorage.getItem(storageKey);
      if (modes.includes(saved as Mode)) rememberedMode = saved as Mode;
    } catch { /* Use the last in-memory mode. */ }
    mode.current = rememberedMode;
    let resizeTimer: ReturnType<typeof setTimeout> | undefined;
    function refresh() {
      if (!desktop) return;
      const now = new Date();
      const season = seasonAt(now);
      const key = `zirey-ground-v2-${now.getFullYear()}-${season}`;
      if (groundKey.current !== key) {
        stopHold();
        saveGround();
        groundKey.current = key;
        let saved = sessionGround.get(key);
        try {
          const parsed: unknown = JSON.parse(sessionStorage.getItem(key) ?? "null");
          if (Array.isArray(parsed) && parsed.length === groundCount && parsed.every(n => typeof n === "number" && Number.isFinite(n))) saved = parsed.map(n => clamp(n));
        } catch { /* Invalid/unavailable storage is harmless. */ }
        ground.current = saved ?? Array.from({ length: groundCount }, (_, i) => .28 + random(i + 99)() * .22);
      }
      const light = mode.current === "irl" ? lightingAt(now) : { light: mode.current === "day" ? 1 : 0, warmth: 0, dusk: 0 };
      properties(desktop, { "ambient-light": light.light, "ambient-warmth": light.warmth,
        "night-strength": 1 - light.light, "ambient-dark": 1 - light.light, "dusk-strength": light.dusk });
      desktop.dataset.season = season;
      desktop.dataset.lightMode = mode.current;
      node!.dataset.paused = String(document.hidden);
      const count = particleCount(season, window.innerWidth, window.innerHeight);
      setScene(previous => previous?.season === season && previous.mode === mode.current && previous.count === count ? previous : { season, mode: mode.current, count });
      paintGround();
    }
    const resize = () => { clearTimeout(resizeTimer); resizeTimer = setTimeout(refresh, 180); };
    const storage = (event: StorageEvent) => {
      if (event.key !== storageKey && event.key !== null) return;
      mode.current = modes.includes(event.newValue as Mode) ? event.newValue as Mode : "irl";
      rememberedMode = mode.current;
      refresh();
    };
    const visibility = () => { if (document.hidden) stopHold(); refresh(); };
    refresh();
    const timer = setInterval(() => { if (!document.hidden) refresh(); }, 30_000);
    window.addEventListener("resize", resize);
    window.addEventListener("storage", storage);
    window.addEventListener("focus", refresh);
    window.addEventListener("blur", stopHold);
    window.addEventListener("pagehide", saveGround);
    document.addEventListener("visibilitychange", visibility);
    node.addEventListener("ambient-mode-change", refresh);
    return () => {
      saveGround(); stopHold();
      clearInterval(timer); clearTimeout(resizeTimer);
      if (saveTimer.current) { clearTimeout(saveTimer.current); saveTimer.current = null; }
      effects.current.forEach(effect => effect.cancel()); effects.current.clear();
      window.removeEventListener("resize", resize); window.removeEventListener("storage", storage);
      window.removeEventListener("focus", refresh); window.removeEventListener("blur", stopHold);
      window.removeEventListener("pagehide", saveGround);
      document.removeEventListener("visibilitychange", visibility);
      node.removeEventListener("ambient-mode-change", refresh);
      ["ambient-light", "ambient-warmth", "night-strength", "ambient-dark", "dusk-strength"].forEach(key => desktop.style.removeProperty(`--${key}`));
      delete desktop.dataset.season; delete desktop.dataset.lightMode;
    };
    // Lifecycle handlers use refs, so animations/holds never need an effect restart.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    root.current?.querySelectorAll<HTMLElement>(".ambient-track").forEach((node, id) => {
      if (!node.dataset.configured) { configureParticle(node, id); node.dataset.configured = "true"; }
    });
    root.current?.querySelectorAll<HTMLElement>(".ambient-ground-piece").forEach((node, id) => {
      const rng = random(id * 103 + 17);
      properties(node, { "piece-x": `${rng() * 85}%`, "piece-y": `${rng() * 13}px`,
        "piece-rotation": `${rng() * 170 - 85}deg`, "piece-scale": .65 + rng() * .7,
        "scatter-x": `${(rng() - .5) * 70}px` });
    });
    paintGround();
    // Only new particles and seasonal ground nodes need setup, not each lighting tick.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [scene?.count, scene?.season]);

  function choose(next: Mode) {
    mode.current = next; rememberedMode = next;
    try { localStorage.setItem(storageKey, next); } catch { /* Keep session choice. */ }
    root.current?.dispatchEvent(new Event("ambient-mode-change"));
  }
  function land(event: AnimationEvent<HTMLSpanElement>, id: number) {
    if (event.target !== event.currentTarget || ! ["ambient-arrive", "ambient-petal-drift", "ambient-pollen"].includes(event.animationName) || document.hidden) return;
    const node = event.currentTarget;
    const index = Number(node.dataset.landing ?? 0);
    // The last 10% of each flight settles at ground level before its next cycle.
    if ((scene?.season === "winter" || scene?.season === "autumn") && id % 3 === 0) {
      ground.current[index] = clamp(ground.current[index] + (scene.season === "winter" ? .008 : .012));
      paintGround(); queueSave();
    }
    const cycle = Number(node.dataset.cycle ?? 0) + 1;
    node.dataset.cycle = String(cycle);
    configureParticle(node, id, cycle);
  }
  function animate(node: HTMLElement, frames: Keyframe[], duration: number) {
    node.getAnimations().forEach(effect => {
      if (effects.current.has(effect)) { effects.current.delete(effect); effect.cancel(); }
    });
    const effect = node.animate(frames, { duration, easing: "cubic-bezier(.2,.65,.35,1)" });
    effects.current.add(effect);
    effect.onfinish = () => { effects.current.delete(effect); effect.cancel(); };
  }
  function disturb(button: HTMLButtonElement, strength: number, localX = .5) {
    const index = Number(button.dataset.ground);
    const material = scene?.season === "winter" || scene?.season === "autumn";
    const mass = ground.current[index];
    if (material) {
      ground.current[index] = clamp(mass - strength);
      paintGround(); queueSave();
    }
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (!material) button.querySelectorAll<HTMLElement>(".ambient-living").forEach((node, i) => {
      animate(node, [{ transform: "rotate(0deg)" }, { transform: `rotate(${i % 2 ? -12 : 12}deg)`, offset: .35 }, { transform: "rotate(0deg)" }], 1500 + i * 150);
    });
    if (material && mass < .005) return;
    button.querySelectorAll<HTMLElement>(".ambient-kick").forEach((node, i) => {
      const direction = localX < .5 ? 1 : -1;
      const distance = direction * (12 + i * 8 + strength * 130);
      animate(node, [
        { transform: `translate(${localX * 20}px,0) rotate(0deg)`, opacity: .85 },
        { transform: `translate(${distance * .6}px,${-12 - i * 4 - strength * 45}px) rotate(${i * 47}deg)`, opacity: .7, offset: .55 },
        { transform: `translate(${distance}px,4px) rotate(${i * 91}deg)`, opacity: 0 },
      ], 650 + i * 100);
    });
  }
  function press(event: PointerEvent<HTMLButtonElement>) {
    if (!event.isPrimary || event.button !== 0) return;
    stopHold();
    const button = event.currentTarget;
    const bounds = button.getBoundingClientRect();
    const x = clamp((event.clientX - bounds.left) / bounds.width);
    button.setPointerCapture(event.pointerId);
    held.current = { button, pointer: event.pointerId, strength: .045 };
    disturb(button, .12, x);
    hold.current = setInterval(() => {
      const active = held.current;
      if (!active) return;
      active.strength = Math.min(.13, active.strength + .012);
      disturb(active.button, active.strength, x);
    }, 240);
  }

  return <div ref={root} className="ambient-root">
    {scene && <>
      <div className="ambient-scene" aria-hidden="true">
        <div className="ambient-lighting" /><div className="ambient-daylight" /><div className="ambient-dusk" />
        <div className="ambient-stars">{Array.from({ length: 14 }, (_, i) => <i key={i} className={`ambient-star ambient-star-${i}`} />)}</div>
        <div className="ambient-particles">{Array.from({ length: scene.count }, (_, i) => <span key={`${scene.season}-${i}`} className="ambient-track" onAnimationIteration={event => land(event, i)}><i className="ambient-particle" /></span>)}</div>
        {scene.season === "summer" && <><div className="ambient-summer-haze" /><div className="ambient-sun" /></>}
      </div>
      <div className="ambient-edge-objects">
        {Array.from({ length: scene.season === "winter" || scene.season === "autumn" ? groundCount : 2 }, (_, index) => <button
          type="button" key={`${scene.season}-${index}`} data-ground={index} className={`ambient-object ambient-object-${index}`}
          aria-label={scene.season === "winter" ? "Disturb snow; hold to clear" : scene.season === "autumn" ? "Scatter leaves; hold to clear" : scene.season === "spring" ? "Sway blossoms and release petals" : "Nudge the little duck"}
          onPointerDown={press} onPointerUp={stopHold} onPointerCancel={stopHold} onLostPointerCapture={stopHold}
          onClick={event => { if (event.detail === 0) disturb(event.currentTarget, .16); }}>
          <span className="ambient-ground-art" aria-hidden="true">
            {scene.season === "spring" ? [0, 1, 2].map(i => <span className={`ambient-living ambient-flower ambient-flower-${i}`} key={i}><Flower /></span>) : scene.season === "summer" ? <span className="ambient-living ambient-duck"><Duck /></span> : <>
              {scene.season === "winter" && <span className="ambient-bank" />}
              {Array.from({ length: 12 }, (_, i) => <span key={i} className="ambient-ground-piece" />)}
            </>}
            {scene.season !== "summer" && Array.from({ length: 6 }, (_, i) => <span key={`kick-${i}`} className="ambient-kick" />)}
          </span>
        </button>)}
      </div>
      <div className="ambient-mode-control" role="group" aria-label="Ambient lighting">
        {modes.map(option => <button type="button" key={option} aria-pressed={scene.mode === option} title={option === "irl" ? "IRL: follow your local time" : `${option === "day" ? "Day" : "Night"} lighting`} onClick={() => choose(option)}>{option === "day" ? "☼ Day" : option === "night" ? "☾ Night" : "IRL"}</button>)}
      </div>
    </>}
  </div>;
}
