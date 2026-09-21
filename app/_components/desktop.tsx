"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { AmbientEnvironment } from "./ambient-environment";

const pages = [
  { name: "Home", href: "/", icon: "⌂", file: "welcome.html" },
  { name: "CV", href: "/cv", icon: "▤", file: "curriculum.txt" },
  { name: "Testimonials", href: "/testimonials", icon: "❝", file: "kind_words.txt" },
  { name: "Logbook", href: "/logbook", icon: "▥", file: "field_notes.txt" },
  { name: "Projects :3", href: "/projects", icon: "□", file: "projects" },
  { name: "Contact", href: "/contact", icon: "✉", file: "inbox" },
];
export function Desktop({ current, title, children }: { current: string; title: string; children: React.ReactNode }) {
    const router = useRouter();
  const currentPage = pages.find(page => page.name === current);

  const [address, setAddress] = useState(
    `zirey://${currentPage?.file ?? ""}`
  );

 function goToAddress() {
  const typed = address
    .replace("zirey://", "")
    .trim()
    .toLowerCase()
    .replace(/\.(html|txt)$/i, "");

  const page = pages.find(
    p =>
      p.file.toLowerCase().replace(/\.(html|txt)$/i, "") === typed ||
      p.href.replace("/", "").toLowerCase() === typed ||
      p.name.toLowerCase() === typed
  );

  if (page) {
    router.push(page.href);
  } else {
    router.push("/");
  }
}

  return <div className="desktop">
    <AmbientEnvironment />
    <a className="skip-link" href="#content">Skip to content</a>
    <header className="masthead"><a href="/" className="brand">zirey<span>®</span></a><span className="masthead-note">PERSONAL COMPUTER / PERSONAL UNIVERSE</span><span className="edition">WEB EDITION · VOL. 01</span></header>
    <div className="workspace">
      <nav className="desktop-nav" aria-label="Main navigation">{pages.map(page => <a key={page.href} href={page.href} className={`desktop-icon ${current === page.name ? "selected" : ""}`} aria-current={current === page.name ? "page" : undefined}><span className="file-icon" aria-hidden="true">{page.icon}</span><span>{page.name}</span></a>)}</nav>
      <div className="window">
        <div className="titlebar"><span>▣ {title} — Zirey Explorer</span><span className="window-controls" aria-hidden="true">− □ ×</span></div>
        <div className="menubar"><span>File</span><span>Edit</span><span>View</span><span className="menu-note">a work in progress, like all good things</span></div>
        

        <div className="addressbar">
          
          <span>Address</span>
        
        {/* <div>▸ zirey://{pages.find(page => page.name === current)?.file}</div><span aria-hidden="true">↵</span> */}
              <div>▸
          <input
            aria-label="Desktop address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") goToAddress();
            }}
          />
        </div>

        <button onClick={goToAddress} aria-label="Go">
          ↵
        </button>
        </div>
        
        
        <main id="content" className="window-content">{children}</main>
        <footer className="statusbar"><span>✓ {current} loaded</span><span>Made of pixels & possibility</span><span aria-hidden="true">◢</span></footer>
      </div>
    </div>
    <footer className="desktop-footer"><span>A small website in a very big world.</span><span className="badge">I ♥ THE PERSONAL WEB</span></footer>
    <div className="taskbar"><a className="start-button" href="/"><span aria-hidden="true">✦</span> Start</a><span className="task-divider" /><span className="active-task">▣ {title}</span><span className="taskbar-right">LOCAL TIME? TIME TO CREATE.</span></div>
  </div>;
}
export function PageHeading({ label, title, children }: { label: string; title: string; children: React.ReactNode }) {
  return <header className="page-heading"><p className="eyebrow">{label}</p><h1>{title}</h1><p className="lead">{children}</p></header>;
}
