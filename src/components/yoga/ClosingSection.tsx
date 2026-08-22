import { Reveal } from "./Reveal";
import closing from "@/assets/closing-lake.jpg";

export function ClosingSection() {
  return (
    <section className="relative overflow-hidden bg-forest text-parchment">
      <img
        src={closing}
        alt=""
        aria-hidden
        width={1920}
        height={1088}
        loading="lazy"
        className="absolute inset-0 h-full w-full object-cover opacity-60"
      />
      <div className="absolute inset-0 bg-forest/65" />

      <div className="relative mx-auto flex max-w-3xl flex-col items-center px-6 py-40 text-center md:py-56">
        <Reveal>
          <span className="rule-gold mx-auto" />
        </Reveal>
        <Reveal delay={0.15}>
          <p className="mt-14 font-display text-3xl leading-[1.35] text-parchment md:text-5xl">
            Yoga is not something we complete.
            <br />
            It is something we continue exploring.
          </p>
        </Reveal>
        <Reveal delay={0.3}>
          <div className="mt-20 flex flex-col items-center gap-5 sm:flex-row sm:gap-8">
            <a
              href="#introduction"
              className="label-eyebrow border border-gold bg-gold px-9 py-4 text-forest transition-colors duration-700 hover:bg-transparent hover:text-gold"
            >
              Explore Courses
            </a>
            <a
              href="#introduction"
              className="label-eyebrow border border-parchment/35 px-9 py-4 text-parchment transition-colors duration-700 hover:border-gold hover:text-gold"
            >
              Join Community
            </a>
          </div>
        </Reveal>
        <Reveal delay={0.45}>
          <p className="label-eyebrow mt-24 text-parchment/45">
            Rishi Sidhasamdhi Yoga Foundation
          </p>
        </Reveal>
      </div>
    </section>
  );
}
