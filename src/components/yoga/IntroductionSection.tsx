import { Reveal } from "./Reveal";
import introImage from "@/assets/intro-river.jpg";

export function IntroductionSection() {
  return (
    <section id="introduction" className="scroll-mt-32 pt-28 md:pt-40 lg:pt-52">
      <div className="mx-auto max-w-3xl px-6 text-center">
        <Reveal>
          <p className="label-eyebrow text-gold">Chapter One</p>
        </Reveal>
        <Reveal delay={0.1}>
          <h2 className="mt-8 text-4xl leading-[1.15] md:text-5xl lg:text-6xl">
            Yoga: The Complete Journey
          </h2>
        </Reveal>
        <Reveal delay={0.2}>
          <span className="rule-gold mx-auto mt-12" />
        </Reveal>
        <Reveal delay={0.3}>
          <p className="mx-auto mt-12 max-w-2xl text-base leading-[2] md:text-lg">
            Yoga is an ancient discipline exploring the relationship between body, breath, mind and
            awareness. It grew over thousands of years across many lineages, texts and teachers —
            less a single method than a long conversation about attention.
          </p>
        </Reveal>
        <Reveal delay={0.4}>
          <p className="mx-auto mt-8 max-w-2xl text-base leading-[2] md:text-lg">
            What follows is a slow reading of that conversation: where it came from, what it asks of
            us, and how it is practised today.
          </p>
        </Reveal>
      </div>

      <Reveal delay={0.2} className="mt-24 md:mt-36">
        <figure>
          <img
            src={introImage}
            alt="Mist rising from a Himalayan river beside ancient stone ghat steps at sunrise"
            width={1920}
            height={912}
            loading="lazy"
            className="h-[52vh] w-full object-cover md:h-[76vh]"
          />
          <figcaption className="mx-auto mt-5 max-w-[92rem] px-6 text-xs tracking-wide text-muted-foreground lg:px-12">
            River ghats at first light — for centuries, a place of study and stillness.
          </figcaption>
        </figure>
      </Reveal>
    </section>
  );
}
