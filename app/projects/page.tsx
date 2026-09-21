// import { Desktop, PageHeading } from "../_components/desktop";

// export const metadata = { title: "Projects", description: "Software, engineering research, hardware experiments, and investigations by Zirey." };

// export default function Projects() {
//   return <Desktop current="Projects :3" title="projects">
//     <PageHeading label="FILE 04 / THE WORKBENCH" title="Things I’ve put together.">Software, hardware, and a few questions that got out of hand.</PageHeading>
//     <nav className="project-index" aria-label="Project index">
//       <a href="#dresyn">01 / Dresyn</a><a href="#sahelanthropus">02 / Sahelanthropus</a><a href="#experiments">03 / Experiments & investigations</a>
//     </nav>

//     <article id="dresyn" className="project-feature paper">
//       <div className="project-meta"><span>01 / SOFTWARE</span><span className="project-status">COMPLETE</span></div>
//       <h2>Dresyn</h2>
//       <p className="lead">A birthday gift that became a full-stack product.</p>
//       <p>I built a wardrobe and AI stylist application as a birthday gift. It grew into one of my largest completed software projects: an iOS frontend, a backend, authentication, and an LLM-powered stylist working together.</p>
//       <div className="project-columns">
//         <section><h3>Inside the app</h3><ul className="detail-list"><li>Create, view, edit, and remove wardrobe items</li><li>AI stylist and daily clothing recommendations</li><li>Clothing planner and user authentication</li></ul></section>
//         <section><h3>Under the surface</h3><p>SwiftUI on iOS, FastAPI on the backend, and SQLite for storage. JWT authentication and Argon2 password hashing sit alongside the LLM integration.</p></section>
//       </div>
//       <div className="tag-list">{["SwiftUI", "FastAPI", "SQLite", "JWT", "Argon2", "LLM integration"].map(tag => <span className="tag" key={tag}>{tag}</span>)}</div>
//     </article>

//     <article id="sahelanthropus" className="project-feature engineering-paper">
//       <div className="project-meta"><span>02 / ENGINEERING</span><span className="project-status">DESIGN RESEARCH</span></div>
//       <h2>Sahelanthropus</h2>
//       <p className="project-subtitle">Metal Gear engineering project</p>
//       <p className="lead">Fiction starts the question. Physics gets the final say.</p>
//       <p>I’m exploring a robotic/mechanical platform for places that are difficult or unsafe for humans to enter. The inspiration comes from fictional mechs; the work is about terrain, stability, actuation, materials, sensing, and what happens when something goes wrong.</p>
//       <p className="scope-note">An engineering and design research project, not a finished industrial robot. The systems below are concepts being explored.</p>
//       <div className="subsystem-grid">
//         <section><span className="tiny-label">A / BALANCE & MOVEMENT</span><h3>A tail with a job to do</h3><p>A load-bearing, counterbalance tail inspired by kangaroo biomechanics. Mechanical stability, terrain navigation, and actuation are central questions.</p></section>
//         <section><span className="tiny-label">B / RECOVERY</span><h3>Plan for getting stuck</h3><p>Emergency anchoring and tethered retrieval concepts, with balance and recovery considered as part of the design.</p></section>
//         <section><span className="tiny-label">C / SENSING</span><h3>Send the instruments first</h3><p>Remote deployable sensor pods, environmental sensors, and radiation sensing concepts for hazardous-site operation.</p></section>
//         <section><span className="tiny-label">D / ENVIRONMENT</span><h3>The outside world is unhelpful</h3><p>Materials, water and rain ingress protection, corrosion resistance, and ruggedisation.</p></section>
//       </div>
//       <a className="text-link" href="/logbook#tail-notes">Read the tail research note ↗</a>
//     </article>

//     <section id="experiments" className="experiment-section">
//       <p className="eyebrow">ALSO ON THE BENCH</p><h2>Smaller systems. Useful questions.</h2>
//       <article className="project-row"><div><span className="tiny-label">HARDWARE / CYBERSECURITY</span><h3>ESP32 & hardware security</h3></div><div><p>I experiment with embedded interfaces, custom device UIs, local servers, serial communication, and cybersecurity lab tools. Wi-Fi experimentation stays in controlled, authorised environments.</p><p className="equipment-note">On the bench: ESP32 boards, displays, RFID and IR modules, buttons, joysticks, PCB boards, radio/drone receivers, wiring, and soldered prototypes.</p></div></article>
//       <article className="project-row"><div><span className="tiny-label">OSINT / GEOLOCATION EXERCISE</span><h3>Finding the scene</h3></div><div><p>In a geolocation exercise, I identified footage around Bulengo near Goma, Democratic Republic of the Congo. I compared terrain, nearby water, geographic features, and visual references across scenes.</p><p className="equipment-note">Result: located the target area to within roughly 150 metres.</p></div></article>
//       <article className="project-row"><div><span className="tiny-label">SOFTWARE / SPACE</span><h3>Asteroid Impact Visualizer</h3></div><p>A software project exploring asteroid impact and space-related visualisation.</p></article>
//       <article className="project-row"><div><span className="tiny-label">SOFTWARE / MATCHING</span><h3>ChoiceMap</h3></div><p>A semantic matching project.</p></article>
//       <article className="project-row"><div><span className="tiny-label">BACKEND / SERVICES</span><h3>Open Banking Certificate Microservice</h3></div><p>A backend service project related to Open Banking certificates.</p></article>
//     </section>
//     <aside className="bench-note"><span className="tiny-label">LOOSE COMPONENTS</span><p>Pygame, web experiments, local AI through Ollama, electronics, drone-related work, and cybersecurity labs also find their way onto the desk. Not everything needs its own project page.</p></aside>
//     <div className="actions"><a className="button" href="/logbook">Read the field notes</a><a className="button" href="/contact">Talk about a project ↗</a></div>
//   </Desktop>;
// }

import { Desktop, PageHeading } from "../_components/desktop";

export const metadata = { title: "Projects", description: "Software, engineering research, cybersecurity, hardware experiments, and investigations by Zirey." };

export default function Projects() {
  return <Desktop current="Projects :3" title="projects">
    <PageHeading label="FILE 04 / THE WORKBENCH" title="Things I’ve built, tested, broken, and chased too far.">
      Software, engineering, cybersecurity, investigation, hardware, and whatever sits between them.
    </PageHeading>

    <nav className="project-index" aria-label="Project index">
      <a href="#dresyn">01 / Software systems</a>
      <a href="#sahelanthropus">02 / Engineering research</a>
      <a href="#experiments">03 / Experiments & investigations</a>
    </nav>

    <article id="dresyn" className="project-feature paper">
      <div className="project-meta">
        <span>01 / SOFTWARE SYSTEMS</span>
        <span className="project-status">BUILT & ITERATING</span>
      </div>

      <h2>Software, but not just websites.</h2>

      <p className="lead">
        I like building systems where multiple parts have to cooperate properly.
      </p>

      <p>
        Most of my software work sits somewhere between backend systems, interfaces, APIs, AI-assisted features, automation, and experiments that begin with a very simple question and become substantially less simple.
      </p>

      <div className="project-columns">
        <section>
          <h3>Dresyn</h3>
          <ul className="detail-list">
            <li>SwiftUI iOS frontend with a FastAPI backend</li>
            <li>Wardrobe management, planning, and recommendation systems</li>
            <li>JWT authentication and Argon2 password hashing</li>
            <li>LLM-powered styling and daily recommendation features</li>
          </ul>
        </section>

        <section>
          <h3>Other software work</h3>
          <p>
            I’ve worked with semantic matching, backend microservices, asteroid-impact visualisation, local and hosted AI models, web applications, game projects, and API-driven systems. I tend to move between Python, Java, JavaScript, C++, Swift, and whatever else the project requires.
          </p>
        </section>
      </div>

      <div className="tag-list">
        {["Python", "SwiftUI", "FastAPI", "Next.js", "Java", "C++", "APIs", "AI integration"].map(tag =>
          <span className="tag" key={tag}>{tag}</span>
        )}
      </div>
    </article>

    <article id="sahelanthropus" className="project-feature engineering-paper">
      <div className="project-meta">
        <span>02 / ENGINEERING RESEARCH</span>
        <span className="project-status">ACTIVE</span>
      </div>

      <h2>Sahelanthropus</h2>
      <p className="project-subtitle">Bio-inspired robotics and hazardous-environment engineering</p>

      <p className="lead">
        Fiction starts the question. Physics gets the final say.
      </p>

      <p>
        Sahelanthropus is my current engineering research project: a small robotic platform designed around terrain mobility, stability, sensing, recovery, and operation in environments where sending a person would be difficult or dangerous.
      </p>

      <p className="scope-note">
        The goal is not to copy a fictional mech. It is to take interesting ideas from fiction, animal biomechanics, robotics, and field engineering, then ask what would actually survive contact with physics.
      </p>

      <div className="subsystem-grid">
        <section>
          <span className="tiny-label">A / LOCOMOTION</span>
          <h3>Movement inspired by animals</h3>
          <p>
            Reverse-jointed bipedal legs, hopping and running behaviour, foot-pressure considerations for sand and snow, and movement that feels less like a rigid machine and more like an animal.
          </p>
        </section>

        <section>
          <span className="tiny-label">B / BALANCE & RECOVERY</span>
          <h3>A tail with actual mechanical purpose</h3>
          <p>
            A kangaroo-inspired counterbalance tail intended to shift load, improve stability, assist recovery, and potentially anchor the robot on slopes or during strong external forces.
          </p>
        </section>

        <section>
          <span className="tiny-label">C / REMOTE SENSING</span>
          <h3>Send the instruments first</h3>
          <p>
            Deployable sensor-pod concepts for environmental measurements, including temperature and radiation sensing, with tethered data return and retrieval.
          </p>
        </section>

        <section>
          <span className="tiny-label">D / SURVIVABILITY</span>
          <h3>Design for the environment, not the desk</h3>
          <p>
            Water ingress, drainage, corrosion, accidental immersion, materials, ruggedisation, and the less glamorous problem of making a machine continue working after the environment starts attacking it.
          </p>
        </section>
      </div>

      <a className="text-link" href="/logbook#tail-notes">Read the tail research note ↗</a>
    </article>

    <section id="experiments" className="experiment-section">
      <p className="eyebrow">ALSO ON THE BENCH</p>
      <h2>Investigations, hardware, cyber work, and smaller systems.</h2>

      <article className="project-row">
        <div>
          <span className="tiny-label">CYBERSECURITY / INVESTIGATION</span>
          <h3>OSINT, red teaming, forensics & intelligence</h3>
        </div>
        <div>
          <p>
            Cybersecurity for me is less about staring at dashboards and more about investigation: finding information, understanding systems, following evidence, testing assumptions, and learning how things fail.
          </p>
          <p className="equipment-note">
            Current focus areas include OSINT, digital investigation, red teaming, intelligence analysis, digital forensics, CTF-style challenges, Linux, and practical lab work.
          </p>
        </div>
      </article>

      <article className="project-row">
        <div>
          <span className="tiny-label">OSINT / GEOLOCATION</span>
          <h3>Finding the scene</h3>
        </div>
        <div>
          <p>
            In one geolocation exercise, I investigated footage around Bulengo near Goma in the Democratic Republic of the Congo by comparing terrain, nearby water, geographic features, and visual references across multiple scenes.
          </p>
          <p className="equipment-note">
            Result: I narrowed the target location to roughly 150 metres.
          </p>
        </div>
      </article>

      <article className="project-row">
        <div>
          <span className="tiny-label">EMBEDDED / HARDWARE</span>
          <h3>ESP32, electronics & physical systems</h3>
        </div>
        <div>
          <p>
            I use embedded hardware when software alone gets boring. That has included ESP32 systems, Raspberry Pi, Arduino, displays, RFID, IR, buttons, joysticks, sensors, serial communication, local servers, soldering, and small prototype boards.
          </p>
          <p className="equipment-note">
            The point is not one specific device. I like understanding how software behaves once it has wires, timing constraints, noisy signals, power limits, and physical consequences.
          </p>
        </div>
      </article>

      <article className="project-row">
        <div>
          <span className="tiny-label">AI / MODEL INTEGRATION</span>
          <h3>Using models as components</h3>
        </div>
        <div>
          <p>
            I have experimented with multiple AI providers and model setups, including OpenAI, Gemini, Groq, and local models through Ollama. I’m more interested in integrating models into useful systems than treating any single provider as the project itself.
          </p>
        </div>
      </article>

      <article className="project-row">
        <div>
          <span className="tiny-label">SOFTWARE / SPACE</span>
          <h3>Asteroid Impact Visualizer</h3>
        </div>
        <p>
          A space-related visualisation project exploring asteroid-impact behaviour and presenting physical effects in an interactive software format.
        </p>
      </article>

      <article className="project-row">
        <div>
          <span className="tiny-label">SOFTWARE / SEMANTIC SYSTEMS</span>
          <h3>ChoiceMap</h3>
        </div>
        <p>
          A semantic matching project exploring how software can compare meaning rather than relying only on exact keywords.
        </p>
      </article>

      <article className="project-row">
        <div>
          <span className="tiny-label">BACKEND / SERVICES</span>
          <h3>Open Banking Certificate Microservice</h3>
        </div>
        <p>
          A backend service project involving Open Banking certificate handling and service-oriented architecture.
        </p>
      </article>
    </section>

    <aside className="bench-note">
      <span className="tiny-label">LOOSE COMPONENTS</span>
      <p>
        There is more scattered around the desk: Linux experiments, Pygame projects, web applications, drone work, electronics, cybersecurity labs, AI prototypes, Raspberry Pi systems, embedded interfaces, physics notes, and ideas that have not yet earned their own page. The common thread is usually the same: I want to know how the thing works, and then I want to build one.
      </p>
    </aside>

    <div className="actions">
      <a className="button" href="/logbook">Read the field notes</a>
      <a className="button" href="/contact">Talk about a project ↗</a>
    </div>
  </Desktop>;
}
