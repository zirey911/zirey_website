import { Desktop } from "./_components/desktop";
export default function Home() {
  return <Desktop current="Home" title="welcome.html">
    <div className="home-grid"><section className="intro">
      <p className="eyebrow">ENGINEERING / SOFTWARE / INVESTIGATION</p>
      <h1>Hello, world.<br />I’m <span>Zirey.</span></h1>
      <p className="lead">I build things to understand them.</p>
      <p>Software, hardware, physics, and whatever happens between them. I am drawn to Cybersecurity, aerospace, and projects where code has to deal with the physical world.</p>
      
      <div className="actions"><a className="button primary" href="/projects">Open the workbench ↗</a><a className="button" href="/cv">Read my CV</a></div>
      <p className="small">Usually in a quiet place building!</p>
    </section><div className="postcard" role="img" aria-label="Retro pink sunset above a purple perspective grid, with the words stay curious">
      <div className="postcard-label">GREETINGS FROM MY LITTLE WORLD</div><div className="sun" /><div className="mountains" /><div className="grid-floor" />
      <span className="star star-one">✦</span><span className="star star-two">✧</span><div className="postcard-word">stay<br /><em>curious.</em></div>
      <div className="postcard-footer">Won't you take me, Far away!</div>
    </div></div>
    <div className="home-bottom"><div><span className="tiny-label">DIRECTION</span><p>Cybersecurity ahead. Mechatronics alongside.</p></div><div><span className="tiny-label">CURRENT ORBIT</span><p>ESP32s, engineering design, and questions about space.</p></div><span className="sticker">100%<br />human spirit</span></div>
    <section className="home-routes" aria-label="Explore the desktop">
      <a href="/projects#dresyn"><span className="tiny-label">PROJECT / COMPLETE</span><strong>Dresynz</strong><span>Your Personal AI Stylist! ↗</span></a>
      <a href="/logbook"><span className="tiny-label">OPEN / FIELD NOTES</span><strong>From the bench</strong><span>Hardware, investigation, and engineering questions. ↗</span></a>
      <a href="/contact"><span className="tiny-label">OPEN / A CONVERSATION</span><strong>Got a strange problem?</strong><span>Engineering, security, or something in between. ↗</span></a>
    </section>
  </Desktop>;
}
