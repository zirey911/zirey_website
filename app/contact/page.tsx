// // // import { Desktop, PageHeading } from "../_components/desktop";
// // // export const metadata = { title: "Contact" };
// // // export default function Contact() {
// // //   const candidate = process.env.CONTACT_EMAIL?.trim() ?? "";
// // //   const email = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9.-]*[a-zA-Z0-9])?\.[a-zA-Z]{2,}$/.test(candidate) && candidate.length <= 254 ? candidate : null;
// // //   return <Desktop current="Contact" title="inbox"><PageHeading label="FILE 05 / INBOX" title="Open a channel.">An interesting technical problem is a perfectly good introduction.</PageHeading><section className="letter"><div className="letter-top"><span>TO: ZIREY<br />SUBJECT: HELLO FROM THE INTERNET</span><span className="postage" aria-hidden="true">✉<small>AIR MAIL</small></span></div><h2>What are you working on?</h2><p>I’m up for talking about engineering, cybersecurity, projects, or a collaboration. Especially if it involves hardware, space, an investigation, or something that refuses to work the way it should.</p>{email ? <a className="button primary" href={`mailto:${encodeURIComponent(email)}?subject=Hello%20Zirey`}>Write to {email} ↗</a> : <p className="contact-notice">No public email is listed yet. For now, the workbench and logbook are open.</p>}<p className="small">{email ? "Opens your email app. Messages are not collected by this website." : "The inbox is getting ready for its first hello."}</p></section><div className="actions"><a className="button" href="/projects">Browse the projects</a><a className="button" href="/logbook">Read the logbook</a></div></Desktop>;
// // // }
// // import { Desktop, PageHeading } from "../_components/desktop";

// // export const metadata = {
// //   title: "Contact",
// //   description: "Contact Zirey through email, LinkedIn, GitHub, or directly through the site.",
// // };

// // export default function Contact() {
// //   const candidate = process.env.CONTACT_EMAIL?.trim() ?? "";

// //   const email =
// //     /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9.-]*[a-zA-Z0-9])?\.[a-zA-Z]{2,}$/.test(
// //       candidate
// //     ) && candidate.length <= 254
// //       ? candidate
// //       : null;

// //   const githubUrl = "https://github.com/zirey911";

// //   // Paste your LinkedIn profile URL here later.
// //   const linkedinUrl = "";

// //   return (
// //     <Desktop current="Contact" title="inbox">
// //       <PageHeading
// //         label="FILE 05 / INBOX"
// //         title="Open a channel."
// //       >
// //         An interesting technical problem is a perfectly good introduction.
// //       </PageHeading>

// //       <section className="letter">
// //         <div className="letter-top">
// //           <span>
// //             TO: ZIREY
// //             <br />
// //             SUBJECT: HELLO FROM THE INTERNET
// //           </span>

// //           <span className="postage" aria-hidden="true">
// //             ✉
// //             <small>AIR MAIL</small>
// //           </span>
// //         </div>

// //         <h2>What are you working on?</h2>

// //         <p>
// //           I’m up for talking about engineering, cybersecurity, software,
// //           projects, investigations, or collaboration. Especially if it involves
// //           hardware, space, systems, or something that refuses to work the way it
// //           should.
// //         </p>

// //         <div className="contact-grid">
// //           <article className="contact-card">
// //             <span className="tiny-label">EMAIL</span>

// //             <h3>{email ?? "Not public yet"}</h3>

// //             <p>
// //               The direct route. Good for proper messages, project ideas, and
// //               anything that needs more than a comment box.
// //             </p>

// //             {email ? (
// //               <a
// //                 className="button"
// //                 href={`mailto:${encodeURIComponent(
// //                   email
// //                 )}?subject=Hello%20Zirey`}
// //               >
// //                 Send an email ↗
// //               </a>
// //             ) : (
// //               <span className="contact-card-disabled">INBOX OFFLINE</span>
// //             )}
// //           </article>

// //           <article className="contact-card">
// //             <span className="tiny-label">LINKEDIN</span>

// //             <h3>
// //               {linkedinUrl
// //                 ? "Zirey"
// //                 : "Profile incoming"}
// //             </h3>

// //             <p>
// //               The more professional channel. Projects, engineering, technical
// //               work, and whatever eventually becomes the serious part of the
// //               portfolio.
// //             </p>

// //             {linkedinUrl ? (
// //               <a
// //                 className="button"
// //                 href={linkedinUrl}
// //                 target="_blank"
// //                 rel="noreferrer"
// //               >
// //                 Open LinkedIn ↗
// //               </a>
// //             ) : (
// //               <span className="contact-card-disabled">LINK NOT SET</span>
// //             )}
// //           </article>

// //           <article className="contact-card">
// //             <span className="tiny-label">GITHUB</span>

// //             <h3>@zirey911</h3>

// //             <p>
// //               Code, repositories, experiments, half-finished ideas, finished
// //               ideas, and evidence that I do occasionally make the computer
// //               cooperate.
// //             </p>

// //             <a
// //               className="button"
// //               href={githubUrl}
// //               target="_blank"
// //               rel="noreferrer"
// //             >
// //               Open GitHub ↗
// //             </a>
// //           </article>
// //         </div>

// //         <div className="direct-contact">
// //           <p className="eyebrow">DIRECT LINE</p>

// //           <h2>Couldn’t pick your poison?</h2>

// //           <p>
// //             Contact me directly. Leave the useful details and I’ll know who I’m
// //             talking to before the transmission arrives.
// //           </p>

// //           <details className="contact-form-drop">
// //             <summary>OPEN CONTACT FORM</summary>

// //             {email ? (
// //               <form
// //                 className="contact-form"
// //                 action={`mailto:${email}`}
// //                 method="get"
// //               >
// //                 <div className="contact-name-grid">
// //                   <label>
// //                     <span>FIRST NAME</span>
// //                     <input
// //                       type="text"
// //                       name="firstName"
// //                       placeholder="James"
// //                       required
// //                     />
// //                   </label>

// //                   <label>
// //                     <span>LAST NAME</span>
// //                     <input
// //                       type="text"
// //                       name="lastName"
// //                       placeholder="Bond"
// //                       required
// //                     />
// //                   </label>
// //                 </div>

// //                 <label>
// //                   <span>PREFERRED NAME / USERNAME</span>
// //                   <input
// //                     type="text"
// //                     name="preferredName"
// //                     placeholder="What should I call you?"
// //                   />
// //                 </label>

// //                 <label>
// //                   <span>YOUR EMAIL</span>
// //                   <input
// //                     type="email"
// //                     name="replyTo"
// //                     placeholder="you@example.com"
// //                     required
// //                   />
// //                 </label>

// //                 <label>
// //                   <span>MESSAGE</span>
// //                   <textarea
// //                     name="body"
// //                     rows={8}
// //                     placeholder="Tell me what you're working on..."
// //                     required
// //                   />
// //                 </label>

// //                 <input
// //                   type="hidden"
// //                   name="subject"
// //                   value="Portfolio contact — hello Zirey"
// //                 />

// //                 <button className="button primary" type="submit">
// //                   Send transmission ↗
// //                 </button>

// //                 <p className="small">
// //                   Opens your email app. This website does not store the message.
// //                 </p>
// //               </form>
// //             ) : (
// //               <p className="contact-notice">
// //                 The direct line will come online once a public contact email is
// //                 configured.
// //               </p>
// //             )}
// //           </details>
// //         </div>
// //       </section>

// //       <div className="actions">
// //         <a className="button" href="/projects">
// //           Browse the projects
// //         </a>

// //         <a className="button" href="/logbook">
// //           Read the logbook
// //         </a>
// //       </div>

// //       <style>{`
// //         .contact-grid {
// //           display: grid;
// //           grid-template-columns: repeat(3, minmax(0, 1fr));
// //           gap: 1.25rem;
// //           margin: 2.5rem 0 3rem;
// //         }

// //         .contact-card {
// //           border: 1px solid currentColor;
// //           padding: 1.4rem;
// //           min-height: 15rem;
// //           display: flex;
// //           flex-direction: column;
// //           align-items: flex-start;
// //         }

// //         .contact-card h3 {
// //           margin: 0.8rem 0;
// //           overflow-wrap: anywhere;
// //         }

// //         .contact-card p {
// //           margin-bottom: 1.5rem;
// //         }

// //         .contact-card .button,
// //         .contact-card-disabled {
// //           margin-top: auto;
// //         }

// //         .contact-card-disabled {
// //           font-family: monospace;
// //           font-size: 0.72rem;
// //           letter-spacing: 0.1em;
// //           opacity: 0.5;
// //         }

// //         .direct-contact {
// //           border-top: 1px solid currentColor;
// //           margin-top: 2rem;
// //           padding-top: 2rem;
// //         }

// //         .direct-contact > p {
// //           max-width: 60ch;
// //         }

// //         .contact-form-drop {
// //           margin-top: 1.5rem;
// //           border: 1px solid currentColor;
// //         }

// //         .contact-form-drop summary {
// //           cursor: pointer;
// //           padding: 1rem 1.2rem;
// //           font-family: monospace;
// //           font-size: 0.78rem;
// //           letter-spacing: 0.12em;
// //           user-select: none;
// //         }

// //         .contact-form-drop[open] summary {
// //           border-bottom: 1px solid currentColor;
// //         }

// //         .contact-form {
// //           display: grid;
// //           gap: 1.2rem;
// //           padding: 1.4rem;
// //         }

// //         .contact-name-grid {
// //           display: grid;
// //           grid-template-columns: repeat(2, minmax(0, 1fr));
// //           gap: 1rem;
// //         }

// //         .contact-form label {
// //           display: grid;
// //           gap: 0.45rem;
// //         }

// //         .contact-form label > span {
// //           font-family: monospace;
// //           font-size: 0.7rem;
// //           letter-spacing: 0.1em;
// //         }

// //         .contact-form input,
// //         .contact-form textarea {
// //           width: 100%;
// //           box-sizing: border-box;
// //           border: 1px solid currentColor;
// //           background: transparent;
// //           color: inherit;
// //           font: inherit;
// //           padding: 0.8rem 0.9rem;
// //           border-radius: 0;
// //         }

// //         .contact-form textarea {
// //           resize: vertical;
// //           min-height: 10rem;
// //         }

// //         .contact-form input:focus,
// //         .contact-form textarea:focus {
// //           outline: 2px solid currentColor;
// //           outline-offset: 2px;
// //         }

// //         .contact-form .button {
// //           width: fit-content;
// //           cursor: pointer;
// //         }

// //         @media (max-width: 900px) {
// //           .contact-grid {
// //             grid-template-columns: 1fr;
// //           }
// //         }

// //         @media (max-width: 650px) {
// //           .contact-name-grid {
// //             grid-template-columns: 1fr;
// //           }
// //         }
// //       `}</style>
// //     </Desktop>
// //   );
// // }

// // import { Desktop, PageHeading } from "../_components/desktop";
// // export const metadata = { title: "Contact" };
// // export default function Contact() {}
// //   const candidate =
//     process.env.CONTACT_EMAIL?.trim() || "cxzireybusiness@gmail.com";
// //   const email = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9.-]*[a-zA-Z0-9])?\.[a-zA-Z]{2,}$/.test(candidate) && candidate.length <= 254 ? candidate : null;
// //   return <Desktop current="Contact" title="inbox"><PageHeading label="FILE 05 / INBOX" title="Open a channel.">An interesting technical problem is a perfectly good introduction.</PageHeading><section className="letter"><div className="letter-top"><span>TO: ZIREY<br />SUBJECT: HELLO FROM THE INTERNET</span><span className="postage" aria-hidden="true">✉<small>AIR MAIL</small></span></div><h2>What are you working on?</h2><p>I’m up for talking about engineering, cybersecurity, projects, or a collaboration. Especially if it involves hardware, space, an investigation, or something that refuses to work the way it should.</p>{email ? <a className="button primary" href={`mailto:${encodeURIComponent(email)}?subject=Hello%20Zirey`}>Write to {email} ↗</a> : <p className="contact-notice">No public email is listed yet. For now, the workbench and logbook are open.</p>}<p className="small">{email ? "Opens your email app. Messages are not collected by this website." : "The inbox is getting ready for its first hello."}</p></section><div className="actions"><a className="button" href="/projects">Browse the projects</a><a className="button" href="/logbook">Read the logbook</a></div></Desktop>;
// // }
// import { Desktop, PageHeading } from "../_components/desktop";

// export const metadata = {
//   title: "Contact",
//   description: "Contact Zirey through email, LinkedIn, GitHub, or directly through the site.",
// };

// export default function Contact() {
//   const candidate = process.env.CONTACT_EMAIL?.trim() ?? "";

//   const email =
//     /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9.-]*[a-zA-Z0-9])?\.[a-zA-Z]{2,}$/.test(
//       candidate
//     ) && candidate.length <= 254
//       ? candidate
//       : null;

//   const githubUrl = "https://github.com/zirey911";

//   // Paste your LinkedIn profile URL here later.
//   const linkedinUrl = "";

//   return (
//     <Desktop current="Contact" title="inbox">
//       <PageHeading
//         label="FILE 05 / INBOX"
//         title="Open a channel."
//       >
//         An interesting technical problem is a perfectly good introduction.
//       </PageHeading>

//       <section className="letter">
//         <div className="letter-top">
//           <span>
//             TO: ZIREY
//             <br />
//             SUBJECT: HELLO FROM THE INTERNET
//           </span>

//           <span className="postage" aria-hidden="true">
//             ✉
//             <small>AIR MAIL</small>
//           </span>
//         </div>

//         <h2>What are you working on?</h2>

//         <p>
//           I’m up for talking about engineering, cybersecurity, software,
//           projects, investigations, or collaboration. Especially if it involves
//           hardware, space, systems, or something that refuses to work the way it
//           should.
//         </p>

//         <div className="contact-grid">
//           <article className="contact-card">
//             <span className="tiny-label">EMAIL</span>

//             <h3>{email ?? "Not public yet"}</h3>

//             <p>
//               The direct route. Good for proper messages, project ideas, and
//               anything that needs more than a comment box.
//             </p>

//             {email ? (
//               <a
//                 className="button"
//                 href={`mailto:${encodeURIComponent(
//                   email
//                 )}?subject=Hello%20Zirey`}
//               >
//                 Send an email ↗
//               </a>
//             ) : (
//               <span className="contact-card-disabled">INBOX OFFLINE</span>
//             )}
//           </article>

//           <article className="contact-card">
//             <span className="tiny-label">LINKEDIN</span>

//             <h3>
//               {linkedinUrl
//                 ? "Zirey"
//                 : "Profile incoming"}
//             </h3>

//             <p>
//               The more professional channel. Projects, engineering, technical
//               work, and whatever eventually becomes the serious part of the
//               portfolio.
//             </p>

//             {linkedinUrl ? (
//               <a
//                 className="button"
//                 href={linkedinUrl}
//                 target="_blank"
//                 rel="noreferrer"
//               >
//                 Open LinkedIn ↗
//               </a>
//             ) : (
//               <span className="contact-card-disabled">LINK NOT SET</span>
//             )}
//           </article>

//           <article className="contact-card">
//             <span className="tiny-label">GITHUB</span>

//             <h3>@zirey911</h3>

//             <p>
//               Code, repositories, experiments, half-finished ideas, finished
//               ideas, and evidence that I do occasionally make the computer
//               cooperate.
//             </p>

//             <a
//               className="button"
//               href={githubUrl}
//               target="_blank"
//               rel="noreferrer"
//             >
//               Open GitHub ↗
//             </a>
//           </article>
//         </div>

//         <div className="direct-contact">
//           <p className="eyebrow">DIRECT LINE</p>

//           <h2>Couldn’t pick your poison?</h2>

//           <p>
//             Contact me directly. Leave the useful details and I’ll know who I’m
//             talking to before the transmission arrives.
//           </p>

//           <details className="contact-form-drop">
//             <summary>OPEN CONTACT FORM</summary>

//             {email ? (
//               <form
//                 className="contact-form"
//                 action={`mailto:${email}`}
//                 method="get"
//               >
//                 <div className="contact-name-grid">
//                   <label>
//                     <span>FIRST NAME</span>
//                     <input
//                       type="text"
//                       name="firstName"
//                       placeholder="James"
//                       required
//                     />
//                   </label>

//                   <label>
//                     <span>LAST NAME</span>
//                     <input
//                       type="text"
//                       name="lastName"
//                       placeholder="Bond"
//                       required
//                     />
//                   </label>
//                 </div>

//                 <label>
//                   <span>PREFERRED NAME / USERNAME</span>
//                   <input
//                     type="text"
//                     name="preferredName"
//                     placeholder="What should I call you?"
//                   />
//                 </label>

//                 <label>
//                   <span>YOUR EMAIL</span>
//                   <input
//                     type="email"
//                     name="replyTo"
//                     placeholder="you@example.com"
//                     required
//                   />
//                 </label>

//                 <label>
//                   <span>MESSAGE</span>
//                   <textarea
//                     name="body"
//                     rows={8}
//                     placeholder="Tell me what you're working on..."
//                     required
//                   />
//                 </label>

//                 <input
//                   type="hidden"
//                   name="subject"
//                   value="Portfolio contact — hello Zirey"
//                 />

//                 <button className="button primary" type="submit">
//                   Send transmission ↗
//                 </button>

//                 <p className="small">
//                   Opens your email app. This website does not store the message.
//                 </p>
//               </form>
//             ) : (
//               <p className="contact-notice">
//                 The direct line will come online once a public contact email is
//                 configured.
//               </p>
//             )}
//           </details>
//         </div>
//       </section>

//       <div className="actions">
//         <a className="button" href="/projects">
//           Browse the projects
//         </a>

//         <a className="button" href="/logbook">
//           Read the logbook
//         </a>
//       </div>

//       <style>{`
//         .contact-grid {
//           display: grid;
//           grid-template-columns: repeat(3, minmax(0, 1fr));
//           gap: 1.25rem;
//           margin: 2.5rem 0 3rem;
//         }

//         .contact-card {
//           border: 1px solid currentColor;
//           padding: 1.4rem;
//           min-height: 15rem;
//           display: flex;
//           flex-direction: column;
//           align-items: flex-start;
//         }

//         .contact-card h3 {
//           margin: 0.8rem 0;
//           overflow-wrap: anywhere;
//         }

//         .contact-card p {
//           margin-bottom: 1.5rem;
//         }

//         .contact-card .button,
//         .contact-card-disabled {
//           margin-top: auto;
//         }

//         .contact-card-disabled {
//           font-family: monospace;
//           font-size: 0.72rem;
//           letter-spacing: 0.1em;
//           opacity: 0.5;
//         }

//         .direct-contact {
//           border-top: 1px solid currentColor;
//           margin-top: 2rem;
//           padding-top: 2rem;
//         }

//         .direct-contact > p {
//           max-width: 60ch;
//         }

//         .contact-form-drop {
//           margin-top: 1.5rem;
//           border: 1px solid currentColor;
//         }

//         .contact-form-drop summary {
//           cursor: pointer;
//           padding: 1rem 1.2rem;
//           font-family: monospace;
//           font-size: 0.78rem;
//           letter-spacing: 0.12em;
//           user-select: none;
//         }

//         .contact-form-drop[open] summary {
//           border-bottom: 1px solid currentColor;
//         }

//         .contact-form {
//           display: grid;
//           gap: 1.2rem;
//           padding: 1.4rem;
//         }

//         .contact-name-grid {
//           display: grid;
//           grid-template-columns: repeat(2, minmax(0, 1fr));
//           gap: 1rem;
//         }

//         .contact-form label {
//           display: grid;
//           gap: 0.45rem;
//         }

//         .contact-form label > span {
//           font-family: monospace;
//           font-size: 0.7rem;
//           letter-spacing: 0.1em;
//         }

//         .contact-form input,
//         .contact-form textarea {
//           width: 100%;
//           box-sizing: border-box;
//           border: 1px solid currentColor;
//           background: transparent;
//           color: inherit;
//           font: inherit;
//           padding: 0.8rem 0.9rem;
//           border-radius: 0;
//         }

//         .contact-form textarea {
//           resize: vertical;
//           min-height: 10rem;
//         }

//         .contact-form input:focus,
//         .contact-form textarea:focus {
//           outline: 2px solid currentColor;
//           outline-offset: 2px;
//         }

//         .contact-form .button {
//           width: fit-content;
//           cursor: pointer;
//         }

//         @media (max-width: 900px) {
//           .contact-grid {
//             grid-template-columns: 1fr;
//           }
//         }

//         @media (max-width: 650px) {
//           .contact-name-grid {
//             grid-template-columns: 1fr;
//           }
//         }
//       `}</style>
//     </Desktop>
//   );
// }

import { Desktop, PageHeading } from "../_components/desktop";

export const metadata = {
  title: "Contact",
  description:
    "Contact Zirey through email, LinkedIn, GitHub, or directly through the site.",
};

export default function Contact() {
  const candidate =
    process.env.CONTACT_EMAIL?.trim() || "cxzireybusiness@gmail.com";

  const email =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9.-]*[a-zA-Z0-9])?\.[a-zA-Z]{2,}$/.test(
      candidate
    ) && candidate.length <= 254
      ? candidate
      : null;

  const githubUrl = "https://github.com/zirey911";

  // Paste your full LinkedIn profile URL here.
  // Example:
  // const linkedinUrl = "https://www.linkedin.com/in/ronsher-gill/";
  const linkedinUrl = "https://www.linkedin.com/in/ronsher-gill/";

  return (
    <Desktop current="Contact" title="inbox">
      <PageHeading
        label="FILE 05 / INBOX"
        title="Open a channel."
      >
        An interesting technical problem is a perfectly good introduction.
      </PageHeading>

      <section className="letter">
        <div className="letter-top">
          <span>
            TO: ZIREY
            <br />
            SUBJECT: HELLO FROM THE INTERNET
          </span>

          <span className="postage" aria-hidden="true">
            ✉
            <small>AIR MAIL</small>
          </span>
        </div>

        <h2>What are you working on?</h2>

        <p>
          I’m up for talking about engineering, cybersecurity, software,
          projects, investigations, or collaboration. Especially if it involves
          hardware, space, systems, or something that refuses to work the way it
          should.
        </p>

        <div className="contact-grid">
          {/* EMAIL */}
          <article className="contact-card">
            <span className="tiny-label">EMAIL</span>

            <h3>{email ?? "Not public yet"}</h3>

            <p>
              The direct route. Good for proper messages, project ideas, and
              anything that needs more than a comment box.
            </p>

            {email ? (
              <a
                className="button"
                href={`mailto:${email}?subject=${encodeURIComponent(
                  "Hello Zirey"
                )}`}
              >
                Send an email ↗
              </a>
            ) : (
              <span className="contact-card-disabled">
                INBOX OFFLINE
              </span>
            )}
          </article>

          {/* LINKEDIN */}
          <article className="contact-card">
            <span className="tiny-label">LINKEDIN</span>

            <h3>{linkedinUrl ? "Zirey" : "Profile incoming"}</h3>

            <p>
              The more professional channel. Projects, engineering, technical
              work, and whatever eventually becomes the serious part of the
              portfolio.
            </p>

            {linkedinUrl ? (
              <a
                className="button"
                href={linkedinUrl}
                target="_blank"
                rel="noreferrer"
              >
                Open LinkedIn ↗
              </a>
            ) : (
              <span className="contact-card-disabled">
                LINK NOT SET
              </span>
            )}
          </article>

          {/* GITHUB */}
          <article className="contact-card">
            <span className="tiny-label">GITHUB</span>

            <h3>@zirey911</h3>

            <p>
              Code, repositories, experiments, half-finished ideas, finished
              ideas, and evidence that I do occasionally make the computer
              cooperate.
            </p>

            <a
              className="button"
              href={githubUrl}
              target="_blank"
              rel="noreferrer"
            >
              Open GitHub ↗
            </a>
          </article>
        </div>

        {/* DIRECT CONTACT FORM */}
        <div className="direct-contact">
          <p className="eyebrow">DIRECT LINE</p>

          <h2>Couldn’t pick your poison?</h2>

          <p>
            Contact me directly. Leave the useful details and I’ll know who I’m
            talking to before the transmission arrives.
          </p>

          <details className="contact-form-drop">
            <summary>OPEN CONTACT FORM</summary>

            {email ? (
              <form
                className="contact-form"
                action={`mailto:${email}?subject=${encodeURIComponent(
                  "Portfolio contact — hello Zirey"
                )}`}
                method="post"
                encType="text/plain"
              >
                <div className="contact-name-grid">
                  <label>
                    <span>FIRST NAME</span>

                    <input
                      type="text"
                      name="First name"
                      placeholder="James"
                      required
                    />
                  </label>

                  <label>
                    <span>LAST NAME</span>

                    <input
                      type="text"
                      name="Last name"
                      placeholder="Bond"
                      required
                    />
                  </label>
                </div>

                <label>
                  <span>PREFERRED NAME / USERNAME</span>

                  <input
                    type="text"
                    name="Preferred name"
                    placeholder="What should I call you?"
                  />
                </label>

                <label>
                  <span>YOUR EMAIL</span>

                  <input
                    type="email"
                    name="Reply email"
                    placeholder="you@example.com"
                    required
                  />
                </label>

                <label>
                  <span>MESSAGE</span>

                  <textarea
                    name="Message"
                    rows={8}
                    placeholder="Tell me what you're working on..."
                    required
                  />
                </label>

                <button
                  className="button primary"
                  type="submit"
                >
                  Send transmission ↗
                </button>

                <p className="small">
                  Opens your email app with the message prepared. This website
                  does not store the message.
                </p>
              </form>
            ) : (
              <p className="contact-notice">
                The direct line will come online once a public contact email is
                configured.
              </p>
            )}
          </details>
        </div>
      </section>

      <div className="actions">
        <a
          className="button"
          href="/projects"
        >
          Browse the projects
        </a>

        <a
          className="button"
          href="/logbook"
        >
          Read the logbook
        </a>
      </div>

      <style>{`
        .contact-grid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 1.25rem;
          margin: 2.5rem 0 3rem;
        }

        .contact-card {
          border: 1px solid currentColor;
          padding: 1.4rem;
          min-height: 15rem;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
        }

        .contact-card h3 {
          margin: 0.8rem 0;
          overflow-wrap: anywhere;
        }

        .contact-card p {
          margin-bottom: 1.5rem;
        }

        .contact-card .button,
        .contact-card-disabled {
          margin-top: auto;
        }

        .contact-card-disabled {
          font-family: monospace;
          font-size: 0.72rem;
          letter-spacing: 0.1em;
          opacity: 0.5;
        }

        .direct-contact {
          border-top: 1px solid currentColor;
          margin-top: 2rem;
          padding-top: 2rem;
        }

        .direct-contact > p {
          max-width: 60ch;
        }

        .contact-form-drop {
          margin-top: 1.5rem;
          border: 1px solid currentColor;
        }

        .contact-form-drop summary {
          cursor: pointer;
          padding: 1rem 1.2rem;
          font-family: monospace;
          font-size: 0.78rem;
          letter-spacing: 0.12em;
          user-select: none;
        }

        .contact-form-drop[open] summary {
          border-bottom: 1px solid currentColor;
        }

        .contact-form {
          display: grid;
          gap: 1.2rem;
          padding: 1.4rem;
        }

        .contact-name-grid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 1rem;
        }

        .contact-form label {
          display: grid;
          gap: 0.45rem;
        }

        .contact-form label > span {
          font-family: monospace;
          font-size: 0.7rem;
          letter-spacing: 0.1em;
        }

        .contact-form input,
        .contact-form textarea {
          width: 100%;
          box-sizing: border-box;
          border: 1px solid currentColor;
          background: transparent;
          color: inherit;
          font: inherit;
          padding: 0.8rem 0.9rem;
          border-radius: 0;
        }

        .contact-form textarea {
          resize: vertical;
          min-height: 10rem;
        }

        .contact-form input:focus,
        .contact-form textarea:focus {
          outline: 2px solid currentColor;
          outline-offset: 2px;
        }

        .contact-form .button {
          width: fit-content;
          cursor: pointer;
        }

        @media (max-width: 900px) {
          .contact-grid {
            grid-template-columns: 1fr;
          }
        }

        @media (max-width: 650px) {
          .contact-name-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </Desktop>
  );
}