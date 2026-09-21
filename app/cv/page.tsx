import { Desktop, PageHeading } from "../_components/desktop";

export const metadata = { title: "CV" };
const skills = [
  ["Programming", "Python, Java, C++, Rust, Typescript/Javascript, and some Lua."],
  ["Web & backend", "Next.js, FastAPI, Spring Boot; MySQL"],
  ["Systems & tools", "Linux, Kali Linux, macOS, Windows; Git, Postman, and PlatformIO."],
  ["Hardware", "ESP32, Raspberry Pi 5, Arduino, PCB prototyping, soldering, small displays, radio/drone components, and embedded electronics."],
  ["AI integration", "API Providers such as OpenAI or Gemini along with Local models through Ollama and API-based LLM integration. (Custom Models incoming)"],
];

export default function CV() {
  return <Desktop current="CV" title="curriculum.txt">
    <PageHeading label="FILE 01 / CURRICULUM VITAE" title="The working version.">What I study, what I use, and where I’m headed.</PageHeading>
    <div className="paper cv-paper">
      <div className="paper-header"><h2>Zirey</h2><span className="stamp">PERSONAL CV</span></div>
      <section className="cv-section"><h3>01 / Profile</h3><p>I create software and experiment with hardware to understand how everything work. I’m especially interested in the point where code meets something physical: a motor, an actuator, a speaker, or a board that needs soldering.</p><p>My long-term direction is Cybersecurity. Aerospace engineering & mechatronics are parallel discipline's I want to keep developing, particularly investigation and computational thinking.</p></section>
      <section className="cv-section"><h3>02 / Current studies</h3><p>Mathematics, Physics, and Computer Science.</p><p>These connect directly to my interests in Cybersecurity, electronics, and information gathering.</p></section>
      <section className="cv-section"><h3>03 / Technical skills</h3><p className="section-note">Technologies I’ve used, with different levels of experience. No progress bars to measure expertise</p><dl className="skills-list">{skills.map(([name, description]) => <div key={name}><dt>{name}</dt><dd>{description}</dd></div>)}</dl></section>
      <section className="cv-section"><h3>04 / Engineering interests</h3><p>Aerospace, robotics and mechanical concepts, embedded systems, electronics, CAD, and engineering design. I’m learning CAD and exploring stability, sensing, materials, and recovery through the Sahelanthropus design project.</p></section>
      <section className="cv-section"><h3>05 / Cybersecurity</h3><p>My four main areas are OSINT and digital investigation, red teaming, intelligence analysis, and digital forensics. I prefer practical investigation, CTF-style challenges, systems, networks, and hardware experimentation in authorised settings.</p></section>
      <section className="cv-section"><h3>06 / Selected projects</h3><ul className="cv-projects"><li><a href="/projects#dresyn">Dresyn</a> — completed wardrobe / AI stylist application, with a SwiftUI frontend and FastAPI backend.</li><li><a href="/projects#sahelanthropus">Sahelanthropus</a> — Biomimicry project for engineering a robotic/mechanical platform for difficult environments.</li><li><a href="/projects#experiments">Hardware & investigation</a> — ESP32 prototyping, cybersecurity lab tools, and OSINT geolocation practice.</li></ul></section>
    </div>
    <div className="actions"><a className="button primary" href="/projects">See the work ↗</a><a className="button" href="/contact">Get in touch</a></div>
  </Desktop>;
}
