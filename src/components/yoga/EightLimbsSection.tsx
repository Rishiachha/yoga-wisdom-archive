import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";

import { Reveal } from "./Reveal";
import { YogaChapter } from "./YogaChapter";

type Limb = {
  number: string;
  name: string;
  sanskrit: string;
  meaning: string;
  purpose: string;
  practice: string;
};

const limbs: Limb[] = [
  {
    number: "01",
    name: "Yama",
    sanskrit: "यम",
    meaning: "Restraints that shape how we meet other people and the world.",
    purpose:
      "To reduce the harm and agitation created by careless action, so that practice rests on a settled foundation.",
    practice:
      "Non-violence, truthfulness, non-stealing, moderation and non-possessiveness, observed in ordinary situations rather than in theory.",
  },
  {
    number: "02",
    name: "Niyama",
    sanskrit: "नियम",
    meaning: "Observances directed inward — how we keep ourselves.",
    purpose: "To build steadiness of character and a mind that can sustain long attention.",
    practice:
      "Cleanliness, contentment, disciplined effort, self-study and surrender of the results of action.",
  },
  {
    number: "03",
    name: "Asana",
    sanskrit: "आसन",
    meaning: "A steady, comfortable seat — later extended to the wider vocabulary of postures.",
    purpose: "To make the body stable and quiet enough to be forgotten during meditation.",
    practice:
      "Held postures with even breathing, working towards ease rather than achievement of shape.",
  },
  {
    number: "04",
    name: "Pranayama",
    sanskrit: "प्राणायाम",
    meaning: "Regulation and extension of the breath.",
    purpose: "To steady the nervous system and, through it, the movements of the mind.",
    practice:
      "Lengthened exhalation, alternate-nostril breathing and measured retention, learned gradually and under guidance.",
  },
  {
    number: "05",
    name: "Pratyahara",
    sanskrit: "प्रत्याहार",
    meaning: "Withdrawal of the senses from constant outward pull.",
    purpose: "To reclaim attention from stimulation so it can be directed deliberately.",
    practice: "Reducing sensory input, quiet settings, and turning notice inward without strain.",
  },
  {
    number: "06",
    name: "Dharana",
    sanskrit: "धारणा",
    meaning: "Concentration — attention gathered on one thing.",
    purpose: "To train the mind to return, again and again, without frustration.",
    practice: "A single object of focus: the breath, a sound, a point, a phrase.",
  },
  {
    number: "07",
    name: "Dhyana",
    sanskrit: "ध्यान",
    meaning: "Meditation — sustained, unbroken attention.",
    purpose: "Concentration becomes continuous, requiring less effort to maintain.",
    practice: "Longer sittings in which the object of focus is held without repeated re-gathering.",
  },
  {
    number: "08",
    name: "Samadhi",
    sanskrit: "समाधि",
    meaning: "Absorption, in which the sense of separation between observer and object thins.",
    purpose: "The classical culmination described in the Yoga Sutras.",
    practice:
      "Not a technique so much as a result — described in the texts as arising, not manufactured.",
  },
];

export function EightLimbsSection() {
  const [open, setOpen] = useState<string | null>("Yama");

  return (
    <YogaChapter id="eight-limbs">
      <div className="mx-auto max-w-[92rem] px-6 lg:px-12">
        <div className="max-w-3xl">
          <Reveal>
            <p className="label-eyebrow text-gold">Ashtanga · Eight Limbs</p>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="mt-7 text-4xl leading-[1.12] md:text-6xl">The Eight Limbs Of Yoga</h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-10 text-base leading-[1.95]">
              Set out by Patanjali as eight interdependent limbs of a single body of practice — read
              as an unfolding, not a ladder to be climbed and left behind.
            </p>
          </Reveal>
        </div>

        <div className="mt-20 md:mt-28">
          {limbs.map((limb) => {
            const isOpen = open === limb.name;
            return (
              <Reveal key={limb.name}>
                <div className="border-t border-border last:border-b">
                  <button
                    type="button"
                    onClick={() => setOpen(isOpen ? null : limb.name)}
                    aria-expanded={isOpen}
                    className="group grid w-full grid-cols-[3rem_1fr_2rem] items-baseline gap-6 py-8 text-left md:grid-cols-[5rem_1fr_1fr_3rem] md:py-10"
                  >
                    <span className="label-eyebrow text-muted-foreground">{limb.number}</span>
                    <span
                      className={`font-display text-3xl transition-colors duration-500 md:text-5xl ${
                        isOpen ? "text-accent" : "text-primary group-hover:text-accent"
                      }`}
                    >
                      {limb.name}
                    </span>
                    <span
                      lang="sa"
                      className="hidden font-display text-2xl text-muted-foreground md:block"
                    >
                      {limb.sanskrit}
                    </span>
                    <span
                      aria-hidden
                      className={`justify-self-end font-display text-2xl text-accent transition-transform duration-700 ${
                        isOpen ? "rotate-45" : ""
                      }`}
                    >
                      +
                    </span>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        key="content"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
                        className="overflow-hidden"
                      >
                        <div className="grid gap-10 pb-14 md:grid-cols-3 md:gap-14 md:pl-[5rem]">
                          {(
                            [
                              ["Meaning", limb.meaning],
                              ["Purpose", limb.purpose],
                              ["Practice", limb.practice],
                            ] as const
                          ).map(([label, value]) => (
                            <div key={label}>
                              <p className="label-eyebrow text-gold">{label}</p>
                              <p className="mt-4 text-sm leading-[1.95]">{value}</p>
                            </div>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </YogaChapter>
  );
}
