import { Reveal } from "./Reveal";
import { YogaChapter } from "./YogaChapter";
import forest from "@/assets/philosophy-forest.jpg";

const pillars = [
  {
    name: "Awareness",
    sanskrit: "विवेक",
    text: "Practice begins with noticing — the breath, the body, the habits of thought that usually pass unobserved.",
  },
  {
    name: "Discipline",
    sanskrit: "तपस्",
    text: "Steady, unhurried repetition over long periods. Nothing here is achieved by force or by hurry.",
  },
  {
    name: "Balance",
    sanskrit: "समत्व",
    text: "Effort held together with ease, so the body is stable and the mind neither strained nor slack.",
  },
  {
    name: "Liberation",
    sanskrit: "मोक्ष",
    text: "The classical aim: freedom from the compulsions that keep attention restless and divided.",
  },
];

export function PhilosophySection() {
  return (
    <YogaChapter id="philosophy" className="relative overflow-hidden bg-forest text-parchment">
      <img
        src={forest}
        alt=""
        aria-hidden
        width={1920}
        height={1088}
        loading="lazy"
        className="absolute inset-0 h-full w-full object-cover opacity-45"
      />
      <div className="absolute inset-0 bg-forest/70" />

      <div className="relative mx-auto max-w-[92rem] px-6 lg:px-12">
        <Reveal>
          <p className="label-eyebrow text-gold">Philosophy</p>
        </Reveal>
        <Reveal delay={0.1}>
          <h2 className="mt-7 max-w-3xl text-4xl leading-[1.1] text-parchment md:text-6xl">
            Core Philosophy
          </h2>
        </Reveal>
        <Reveal delay={0.2}>
          <p className="mt-10 max-w-2xl text-base leading-[1.95] text-parchment/70">
            Across lineages and centuries, four commitments recur. They are not stages to complete
            but qualities cultivated together.
          </p>
        </Reveal>

        <div className="mt-24 md:mt-32">
          {pillars.map((pillar, index) => (
            <Reveal key={pillar.name} delay={index * 0.06}>
              <div className="grid gap-8 border-t border-parchment/15 py-14 md:grid-cols-12 md:py-20">
                <p
                  lang="sa"
                  className="font-display text-2xl text-gold md:col-span-2 md:text-3xl"
                >
                  {pillar.sanskrit}
                </p>
                <h3 className="text-4xl leading-none text-parchment md:col-span-5 md:text-6xl lg:text-7xl">
                  {pillar.name}
                </h3>
                <p className="max-w-md text-base leading-[1.95] text-parchment/70 md:col-span-5">
                  {pillar.text}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </YogaChapter>
  );
}
