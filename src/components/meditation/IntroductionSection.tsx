import { Reveal } from "./Reveal";

import introImage from "@/assets/med-intro-river.jpg";

export function IntroductionSection() {
  return (
    <section id="introduction" className="scroll-mt-32 pt-28 md:pt-40 lg:pt-52">
      <div className="mx-auto max-w-3xl px-6 text-center">
        <Reveal>
          <p className="label-eyebrow text-gold">Chapter One</p>
        </Reveal>
        <Reveal delay={0.1}>
          <h2 className="mt-8 text-4xl leading-[1.15] md:text-5xl lg:text-6xl">
            The Inner Journey Of Meditation
          </h2>
        </Reveal>
        <Reveal delay={0.2}>
          <span className="rule-gold mx-auto mt-12" />
        </Reveal>
        <Reveal delay={0.3}>
          <p className="mx-auto mt-12 max-w-2xl text-base leading-[2] md:text-lg">
            Meditation is a practice of training attention, cultivating awareness and exploring the
            relationship between thoughts, emotions and consciousness.
          </p>
        </Reveal>
        <Reveal delay={0.4}>
          <p className="mx-auto mt-8 max-w-2xl text-base leading-[2] md:text-lg">
            It developed across many traditions, each with its own vocabulary and aims. What follows
            is a slow reading of that long conversation — its history, its methods, and what
            research can and cannot yet say about it.
          </p>
        </Reveal>
      </div>

      <Reveal delay={0.2} className="mt-24 md:mt-36">
        <figure>
          <img
            src={introImage}
            alt="Mist over a still river at dawn with forested hills reflected in the water"
            width={1920}
            height={912}
            loading="lazy"
            className="h-[52vh] w-full object-cover object-center md:h-[76vh]"
          />
          <figcaption className="mx-auto mt-5 max-w-[92rem] px-6 text-xs tracking-wide text-muted-foreground lg:px-12">
            First light on still water — the traditional hour for sitting practice.
          </figcaption>
        </figure>
      </Reveal>
    </section>
  );
}
