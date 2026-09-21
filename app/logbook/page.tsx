// import { Desktop, PageHeading } from "../_components/desktop";

// export const metadata = { title: "Logbook" };
// const entries = [
//   { id: "dresyn-notes", kind: "SOFTWARE / DRESYN", title: "A birthday gift, with a backend.", text: "Dresyn started as a wardrobe and AI stylist app for a birthday gift. It became one of my largest completed software projects: SwiftUI, FastAPI, SQLite, authentication, a planner, and LLM integration. A very personal reason to build a fairly involved system.", tags: ["full-stack", "complete"] },
//   { id: "embedded-notes", kind: "HARDWARE / BENCH NOTES", title: "Code is only part of the circuit.", text: "ESP32 boards, small displays, RFID, IR, buttons, joysticks, and soldered prototypes: I like the part where software has to deal with actual components. Embedded interfaces, local servers, and serial communication give me plenty to experiment with.", tags: ["ESP32", "electronics"] },
//   { id: "tail-notes", kind: "ENGINEERING / RESEARCH QUESTION", title: "What if the tail carried some weight?", text: "For Sahelanthropus, I’m investigating a load-bearing and counterbalance tail inspired by kangaroo biomechanics. The interesting questions are mechanical: how might it help with stability, terrain, and recovery? This is a subsystem concept, not a claim that I’ve solved the balance problem.", tags: ["biomechanics", "design research"] },
//   { id: "cad-notes", kind: "DESIGN / LEARNING", title: "The idea has to fit in three dimensions.", text: "I’m learning CAD alongside the engineering design work. Drawing a convincing shape is one thing. Thinking about materials, actuation, clearances, and how parts could fit together is the part I want to get better at.", tags: ["CAD", "mechanical design"] },
//   { id: "geolocation-notes", kind: "OSINT / GEOLOCATION", title: "Terrain is a useful witness.", text: "One exercise took me to footage around Bulengo near Goma, in the Democratic Republic of the Congo. I used terrain, geographic features, nearby water, and cross-referenced scenes to narrow the target area to roughly 150 metres. Small visual details can give you a lot to work with.", tags: ["investigation", "geolocation"] },
//   { id: "physics-notes", kind: "STUDY / DIRECTION", title: "The equations belong on the workbench too.", text: "Mathematics, Physics, and Computer Science are my current study areas. Aerospace engineering is the direction I want to take them. I’m interested in how abstract models connect to materials, motion, electronics, and machines that have to exist outside a screen.", tags: ["physics", "aerospace"] },
//   { id: "systems-notes", kind: "SYSTEMS / LAB WORK", title: "Keep asking what the system is doing.", text: "Linux and cybersecurity labs are another way I explore systems. My focus sits around OSINT, red teaming, intelligence analysis, and digital forensics. I like practical investigation and CTF-style problems where there is evidence to examine and assumptions to question.", tags: ["Linux", "cybersecurity"] },
//   { id: "recovery-notes", kind: "ENGINEERING / OPEN QUESTIONS", title: "Design the way back out.", text: "A platform for difficult environments needs more than a way in. Emergency anchoring, tethered retrieval, water ingress protection, and corrosion resistance are all concepts I’m exploring for Sahelanthropus. Recovery deserves space in the design from the start.", tags: ["Sahelanthropus", "recovery"] },
// ];

// export default function Logbook() {
//   return <Desktop current="Logbook" title="field_notes.txt">
//     <PageHeading label="FILE 03 / TECHNICAL FIELD LOG" title="Notes from the bench.">Things I’m building, questions I’m chasing, and details worth keeping.</PageHeading>
//     <p className="scope-note">Undated notes collected by topic. Some are project reflections; others are questions still on the workbench.</p>
//     <div className="field-log">{entries.map((entry, index) => <article className="log-entry" id={entry.id} key={entry.id}>
//       <div className="log-number">{String(index + 1).padStart(3, "0")}<span>FIELD NOTE</span></div>
//       <div><p className="eyebrow">{entry.kind}</p><h2>{entry.title}</h2><p>{entry.text}</p><div className="tag-list">{entry.tags.map(tag => <span className="tag" key={tag}>{tag}</span>)}</div></div>
//     </article>)}</div>
//     <div className="next-entry">END OF FILE / for now_</div>
//   </Desktop>;
// }


import { Desktop, PageHeading } from "../_components/desktop";

export const metadata = {
  title: "Logbook",
  description:
    "Engineering notes, investigations, software, hardware experiments, physics, cybersecurity, and unfinished ideas from Zirey's workbench.",
};

const entries = [
  {
    id: "sahelanthropus",
    kind: "ENGINEERING / ACTIVE RESEARCH",
    title: "Build the machine that can go where I cannot.",
    intro:
      "Sahelanthropus is the project that currently ties the most parts of my brain together: physics, robotics, biomechanics, electronics, sensing, control, materials, and a frankly unreasonable amount of thinking about mechanical tails.",
    body: [
      "The original idea came from fictional machines: Metal Gear, Titanfall, Chappie, Pacific Rim, E3N, Pathfinder, and the sort of robots that look as though they belong somewhere more dangerous than a laboratory floor.",
      "But copying fiction is not the interesting part. The interesting part is asking what survives once physics gets involved.",
      "The design direction is a small bio-inspired biped intended for difficult or hazardous terrain. I am exploring reverse-jointed legs, fast hopping, walking, running, variable foot area for surfaces such as sand and snow, and movement that feels more animal than industrial.",
      "The tail is not decoration. I am studying kangaroo biomechanics to understand whether a load-bearing counterbalance could help shift the centre of mass, stabilise motion, assist recovery, brace the robot on slopes, and potentially anchor it during strong external forces.",
      "Other concepts include deployable tethered sensor pods, temperature and radiation sensing, environmental hardening, drainage, corrosion resistance, water ingress protection, emergency recovery, and designing around what happens when the robot inevitably meets something unpleasant.",
      "The larger research question is about adaptive morphology: whether changing how the body interacts with terrain can materially improve the stability and mobility of a small bipedal robot.",
    ],
    tags: ["robotics", "physics", "biomechanics", "EPQ", "active"],
  },
  {
    id: "dresyn",
    kind: "SOFTWARE / PRODUCT BUILD",
    title: "A birthday present somehow became a full-stack application.",
    intro:
      "Dresyn began with a simple deadline: build something meaningful as a birthday gift. Naturally, I responded by creating an iOS application, backend, database, authentication system, wardrobe manager, planner, and AI stylist.",
    body: [
      "The frontend was built in SwiftUI and connected to a FastAPI backend. SQLite handled storage, while authentication used JWTs and Argon2 password hashing.",
      "The product included wardrobe CRUD, daily outfit recommendations, an AI stylist, planning tools, authentication, and the plumbing required to make all of those features behave like one application rather than unrelated demos.",
      "One part I enjoyed was working across the entire stack. A feature was never just a button. It could involve the interface, state management, an API request, validation, database behaviour, authentication, model output, and the way the final result was presented back to the user.",
      "I have used different AI providers and model setups across projects, including OpenAI, Gemini, Groq, and local models. I care much more about choosing and integrating the appropriate model into a system than attaching myself to one provider.",
      "Dresyn taught me what happens when an idea stops being an experiment and has to become something another person can actually use.",
    ],
    tags: ["SwiftUI", "FastAPI", "SQLite", "AI", "full-stack"],
  },
  {
    id: "hardware",
    kind: "HARDWARE / EMBEDDED SYSTEMS",
    title: "Software becomes more interesting when it has wires.",
    intro:
      "A program crashing is mildly annoying. A physical prototype refusing to work introduces considerably more suspects.",
    body: [
      "I work with ESP32 boards, Raspberry Pi, Arduino, small displays, RFID modules, IR hardware, joysticks, buttons, sensors, radio components, breadboards, soldering equipment, and whatever collection of wires is currently occupying the desk.",
      "Embedded work forces me to think differently from ordinary application development. Timing matters. Power matters. Pins matter. Serial output matters. The component you were absolutely certain was wired correctly is often not wired correctly.",
      "I have experimented with custom device interfaces, local servers, serial communication, embedded controls, small cybersecurity lab tools, and connecting physical input and output to software.",
      "I like hardware because abstractions eventually run out. Somewhere beneath the interface there is a voltage, a signal, a transistor, a motor, a radio packet, or a piece of metal that has to physically do what you asked.",
    ],
    tags: ["ESP32", "Raspberry Pi", "Arduino", "electronics"],
  },
  {
    id: "physics",
    kind: "PHYSICS / ENGINEERING FOUNDATIONS",
    title: "Eventually the cool idea has to survive an equation.",
    intro:
      "Physics is becoming less of a school subject for me and more of the language I need in order to build the things I actually want to build.",
    body: [
      "My current studies centre on Mathematics, Physics, and Computer Science, with aerospace engineering as the direction I want to take them.",
      "Mechanics has become particularly relevant because almost every question in Sahelanthropus eventually becomes one about forces, torque, momentum, pressure, energy, stability, centre of mass, or material behaviour.",
      "Even apparently strange questions become useful. How much torque can a tail produce? Why does increasing foot area reduce sinking in soft terrain? What actually happens to the centre of mass during a jump? How much force would an anchor have to withstand? How should a robot distribute load while crouching?",
      "The appeal is that the equations are not separate from the machine. They are the machine, written another way.",
    ],
    tags: ["mechanics", "mathematics", "aerospace", "study"],
  },
  {
    id: "cad",
    kind: "DESIGN / CAD / LEARNING",
    title: "Unfortunately, the idea has to fit in three dimensions.",
    intro:
      "Sketching something intimidating is easy. Making all its parts occupy real space without colliding with each other is where CAD enters the room.",
    body: [
      "I am learning both sketching and CAD because the engineering projects I want to attempt have reached the point where imagination alone is not enough.",
      "The challenge is not merely making a model that looks good. I need to think about pivots, actuator placement, clearances, structural members, wiring paths, joints, centre of mass, manufacturing, materials, and whether the geometry can actually move.",
      "I also care about aesthetics more than I probably should. I do not want engineering work to look like an anonymous science-fair box if I can avoid it. Function comes first, but good industrial design can communicate what a machine is intended to do before it even moves.",
      "CAD remains one of the skills I am actively forcing myself to become competent at. Against my will, perhaps. But competently.",
    ],
    tags: ["CAD", "sketching", "mechanical design", "learning"],
  },
  {
    id: "systems",
    kind: "CYBERSECURITY / SYSTEMS",
    title: "The interesting part is figuring out what the system is really doing.",
    intro:
      "Cybersecurity appeals to the same instinct as engineering: open the box, understand the assumptions, find the weak points, and work out what happens when reality disagrees with the design.",
    body: [
      "My current cybersecurity interests are concentrated around OSINT and digital investigation, red teaming, intelligence analysis, and digital forensics.",
      "I use Linux and Kali, work through practical labs and CTF-style challenges, and prefer exercises where there is an actual system, artefact, packet, file, image, clue, or mistake to investigate.",
      "I am particularly drawn to the less polished side of computing: hardware, networks, radios, embedded systems, strange protocols, command lines, debugging, and environments where understanding how something works matters more than knowing which menu to click.",
      "The objective is not to collect tool names. It is to develop the ability to enter an unfamiliar system and methodically determine what is happening.",
    ],
    tags: ["Linux", "red teaming", "forensics", "CTF"],
  },
  {
    id: "007",
    kind: "DOSSIER 007 / INTELLIGENCE & OSINT",
    title: "Observe first. Assume nothing.",
    intro:
      "The closest thing on this site to a classified file. OSINT, geolocation, intelligence analysis, digital investigation, and learning how much information can hide inside details most people ignore.",
    body: [
      "One of my favourite investigation exercises involved locating footage around Bulengo, near Goma in the Democratic Republic of the Congo.",
      "I compared terrain, mountain profiles, the position of a large body of water, nearby geographic features, roads, structures, and separate scenes from the footage. I used those pieces to narrow down the possible area rather than relying on one obvious clue.",
      "The final location I selected was roughly 150 metres from the target.",
      "What I liked most was not the answer. It was the method: establish what is known, separate observation from assumption, cross-reference independent clues, eliminate impossible locations, and keep tightening the search area.",
      "That same mindset is why intelligence analysis interests me. Information is rarely useful simply because it exists. It becomes useful when you can judge its reliability, connect it to other evidence, recognise uncertainty, and turn scattered facts into a defensible assessment.",
      "No tuxedo has yet been issued.",
    ],
    tags: ["007", "OSINT", "geolocation", "intelligence"],
    bond: true,
  },
  {
    id: "ctf",
    kind: "CYBERSECURITY / COMPETITION TRAINING",
    title: "I do not want to merely enter.",
    intro:
      "Competitions changed the goal slightly. Solving challenges is good. Solving them under pressure, against other people who also intend to win, is better.",
    body: [
      "I am deliberately training toward CTFs and cybersecurity competitions rather than treating them as things I might casually attend someday.",
      "That means developing breadth across networking, Linux, web security, reconnaissance, exploitation concepts, forensics, scripting, and investigation while also becoming faster at recognising familiar patterns.",
      "The same applies to mathematics and physics competitions. If I enter something, I want preparation behind the name rather than relying on whatever I happen to know that morning.",
      "The long-term aim is simple: build enough competence that pressure exposes skill rather than the absence of it.",
    ],
    tags: ["CTF", "training", "competition", "cybersecurity"],
  },
  {
    id: "moonwake",

  kind: "HACKATHON / SOFTWARE / AI",

  title: "Moonwake: built under pressure, finished anyway.",

  intro:
    "Moonwake was a sleep-focused web project I built for a vibecoding hackathon: part winding-down tool, part dream journal, part sleep assistant, and part experiment in turning AI into something more useful than a chatbox.",

  body: [
    "The idea was to build something for the awkward hours before sleep: racing thoughts, insomnia, winding down, dream journaling, lucid dreaming, sleep analysis, and helping someone understand what their nights actually look like.",

    "I wanted Moonwake to feel like a real product rather than a single generic AI conversation. The concept split different jobs into their own experiences, with dedicated areas for cooldown, dreams, lucid dreaming, sleep scoring, journaling, shutdown routines, and wake-up support.",

    "The site used Node.js across the web stack, with frontend and backend work tied together around the product flow. Groq-powered AI was used to assist with areas such as winding down, interpreting sleep-related input, dream-focused features, and handling the more conversational parts of the experience.",

    "A lot of the project was about designing the behaviour around the AI rather than making the AI the entire product: what the user sees, when a model should respond, what information matters, and how separate features should work together.",

    "We did not win the hackathon. We did, however, leave with an actual working project instead of an idea sitting in a pitch deck, which I value considerably more than pretending every build ends with a medal.",

    "Moonwake is one of the projects that taught me what it feels like to build quickly under a deadline, make product decisions with incomplete time, and still get something coherent across the line.",
  ],

  tags: ["Moonwake", "Node.js", "Groq", "hackathon", "sleep tech"],
  },
  {
    id: "ai",
    kind: "AI / INTEGRATION",
    title: "The model is a component, not the personality of the project.",
    intro:
      "I use AI when it solves part of a system well. I do not particularly care whether the logo attached to the API is green, blue, multicoloured, or running locally.",
    body: [
      "Across different projects I have worked with OpenAI, Gemini, Groq-hosted models, and local models through Ollama.",
      "The useful part is architecture: deciding what information the model receives, what format comes back, what the application is allowed to trust, what needs validation, and where deterministic software should remain in control.",
      "I am especially interested in structured model output, AI-assisted interfaces, recommendation systems, tool use, local inference, and combining models with ordinary backend services.",
      "AI is interesting to me primarily as another capable subsystem I can wire into something larger.",
    ],
    tags: ["OpenAI", "Gemini", "Groq", "Ollama", "LLM"],
  },
  {
    id: "aerospace",
    kind: "AEROSPACE / DIRECTION",
    title: "The long game points upward.",
    intro:
      "Aerospace engineering is where many of my interests start collapsing into the same problem set.",
    body: [
      "Physics, mathematics, control systems, programming, electronics, embedded computers, materials, mechanical design, sensing, autonomy, and reliability all meet naturally in aerospace.",
      "Space has fascinated me for a long time, but what interests me now is increasingly the engineering beneath it: the systems that have to work correctly when maintenance is impossible, mass matters, energy is limited, environments are hostile, and failure is expensive.",
      "That is also why robotics and hazardous-environment engineering fit naturally beside aerospace for me. Both reward careful design, redundancy, sensing, control, and thinking ahead about failure.",
      "I am still early in that path. The point of the workbench is to make sure I arrive later with more than theoretical interest.",
    ],
    tags: ["aerospace", "space", "engineering", "future"],
  },
  {
    id: "impact-visualizer",
    kind: "SOFTWARE / SPACE",
    title: "Asteroids are considerably more interesting when they hit something.",
    intro:
      "One of my software experiments explored asteroid impacts and how space-related physical behaviour could be represented visually.",
    body: [
      "The project sits somewhere between software and physics: taking quantities that normally live in equations and turning them into something that can be explored visually.",
      "Projects like this are useful to me because they make abstract quantities harder to hand-wave. Scale, speed, energy, distance, and consequence become easier to reason about once the program has to turn them into an actual output.",
    ],
    tags: ["space", "visualisation", "software", "physics"],
  },
  {
    id: "choicemap",
    kind: "SOFTWARE / SEMANTIC SYSTEMS",
    title: "Matching words is easy. Matching meaning is more interesting.",
    intro:
      "ChoiceMap was an experiment around semantic matching: comparing things by what they mean rather than only by whether their text happens to be identical.",
    body: [
      "Semantic systems interest me because human input is messy. Two people can describe effectively the same thing with completely different vocabulary.",
      "That pushes software away from rigid string comparison and toward representations of meaning, similarity, context, and ranking.",
      "It is one of several smaller projects that helped me become more comfortable treating AI or semantic models as components inside conventional software.",
    ],
    tags: ["semantic matching", "software", "AI"],
  },
  {
    id: "open-banking",
    kind: "BACKEND / SERVICES",
    title: "Some projects are less cinematic and extremely useful anyway.",
    intro:
      "I have also worked on backend service architecture, including an Open Banking certificate microservice.",
    body: [
      "Work like this is a useful counterweight to the louder projects. It forces attention onto APIs, certificates, service boundaries, validation, configuration, security, and the parts of software that users rarely see directly.",
      "I enjoy the contrast. One day I can be thinking about mechanical counterbalance tails. Another day the problem is an API contract refusing to behave.",
    ],
    tags: ["backend", "microservices", "Open Banking"],
  },
  {
    id: "build-break-repeat",
    kind: "WORKBENCH / GENERAL",
    title: "Build it. Break it. Find out why.",
    intro:
      "There is a considerable amount of work that does not deserve a polished project card but still contributes to everything else.",
    body: [
      "Small web experiments. Pygame projects. Linux installations. Electronics. Soldering. Drone components. Raspberry Pi systems. ESP32 screens. API experiments. Cybersecurity labs. Broken configurations. Working configurations that become broken configurations shortly afterwards.",
      "I value those smaller experiments because they reduce the number of things that remain mysterious.",
      "A finished project proves that something worked once. A workbench full of smaller experiments teaches me why.",
    ],
    tags: ["experiments", "hardware", "software", "learning"],
  },
];

export default function Logbook() {
  return (
    <Desktop current="Logbook" title="field_notes.txt">
      <PageHeading
        label="FILE 03 / TECHNICAL FIELD LOG"
        title="Notes from the workbench."
      >
        Engineering, investigations, software, hardware, physics, things that
        worked, and things that objected.
      </PageHeading>

      <p className="scope-note">
        This is less of a blog and more of an archive. Open a field note to read
        the full entry.
      </p>

      <nav className="log-index" aria-label="Field note index">
        {entries.map((entry, index) => (
          <a
            key={entry.id}
            href={`#${entry.id}`}
            className={entry.bond ? "bond-index-link" : ""}
          >
            <span>{String(index + 1).padStart(3, "0")}</span>
            {entry.title}
          </a>
        ))}
      </nav>

      <div className="field-log">
        {entries.map((entry, index) => {
          const number = String(index + 1).padStart(3, "0");

          return (
            <article
              className={`log-entry ${entry.bond ? "bond-entry" : ""}`}
              id={entry.id}
              key={entry.id}
            >
              <div className="log-number">
                {number}
                <span>{entry.bond ? "DOSSIER" : "FIELD NOTE"}</span>
              </div>

              <div className="log-content">
                <p className="eyebrow">{entry.kind}</p>
                <h2>{entry.title}</h2>
                <p>{entry.intro}</p>

                <details className="log-article">
                  <summary>
                    {entry.bond ? "OPEN DOSSIER 007" : "OPEN FIELD NOTE"}
                  </summary>

                  <div className="log-article-body">
                    {entry.body.map((paragraph, paragraphIndex) => (
                      <p key={paragraphIndex}>{paragraph}</p>
                    ))}
                  </div>
                </details>

                <div className="tag-list">
                  {entry.tags.map((tag) => (
                    <span className="tag" key={tag}>
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          );
        })}
      </div>

      <div className="next-entry">END OF FILE / for now_</div>

      <style>{`
        .log-index {
          display: grid;
          gap: 0;
          margin: 2rem 0 3rem;
          border-top: 1px solid currentColor;
        }

        .log-index a {
          display: grid;
          grid-template-columns: 4rem 1fr;
          gap: 1rem;
          padding: 0.85rem 0;
          border-bottom: 1px solid currentColor;
          color: inherit;
          text-decoration: none;
          transition: padding-left 140ms ease, opacity 140ms ease;
        }

        .log-index a:hover {
          padding-left: 0.45rem;
        }

        .log-index a span {
          font-family: monospace;
          opacity: 0.65;
        }

        .log-article {
          margin-top: 1.25rem;
        }

        .log-article summary {
          width: fit-content;
          cursor: pointer;
          font-family: monospace;
          font-size: 0.78rem;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          user-select: none;
        }

        .log-article summary:hover {
          text-decoration: underline;
        }

        .log-article-body {
          margin-top: 1rem;
          max-width: 72ch;
        }

        .log-article-body p + p {
          margin-top: 0.9rem;
        }

        .bond-entry {
          position: relative;
          overflow: hidden;
        }

        .bond-entry::before {
          content: "007";
          position: absolute;
          right: 1.2rem;
          top: -0.45rem;
          font-family: Georgia, "Times New Roman", serif;
          font-size: clamp(4rem, 12vw, 9rem);
          font-weight: 700;
          letter-spacing: -0.08em;
          opacity: 0.045;
          pointer-events: none;
        }

        .bond-entry .log-number {
          font-family: Georgia, "Times New Roman", serif;
        }

        .bond-entry .eyebrow {
          letter-spacing: 0.14em;
        }

        .bond-entry .log-article summary {
          border: 1px solid currentColor;
          padding: 0.45rem 0.7rem;
          text-decoration: none;
        }

        .bond-entry .log-article summary:hover {
          text-decoration: none;
          opacity: 0.7;
        }

        .bond-index-link {
  grid-template-columns: 4rem minmax(0, 1fr) auto !important;
  font-weight: 700;
}

.bond-index-link::after {
  content: "CLASSIFIED";
  justify-self: end;
  align-self: center;
  font-family: monospace;
  font-size: 0.68rem;
  letter-spacing: 0.12em;
  white-space: nowrap;
  opacity: 0.55;
}

        @media (max-width: 700px) {
          .log-index a {
            grid-template-columns: 3rem 1fr;
          }

          .bond-index-link::after {
            display: none;
          }
        }
      `}</style>
    </Desktop>
  );
}