import { Desktop, PageHeading } from "../_components/desktop";

export const metadata = { title: "Testimonials" };
export default function Testimonials() {
  return <Desktop current="Testimonials" title="kind_words.txt">
    <PageHeading label="FILE 02 / OTHER PEOPLE’S WORDS" title="References pending.">This file is reserved for things people actually said.</PageHeading>
    <section className="empty-state testimonial-empty"><span className="big-quote" aria-hidden="true">“</span><p className="eyebrow">STATUS / NO QUOTES ON FILE</p><h2>I could write myself a glowing review.</h2><p>That would rather defeat the point. There aren’t any testimonials here yet. When I have real feedback and permission to share it, it’ll go here.</p><a className="button" href="/projects">The projects can speak for now ↗</a></section>
    <div className="bench-note"><span className="tiny-label">WORKED ON SOMETHING WITH ME?</span><p>I’d like to hear what you thought — including what could have been better. <a href="/contact">Get in touch.</a></p></div>
  </Desktop>;
}
