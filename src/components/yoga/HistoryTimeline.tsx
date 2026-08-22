import { Reveal } from "./Reveal";
import { YogaChapter } from "./YogaChapter";

import indus from "@/assets/history-indus.jpg";
import vedic from "@/assets/history-vedic.jpg";
import preclassical from "@/assets/history-preclassical.jpg";
import classical from "@/assets/history-classical.jpg";
import postclassical from "@/assets/history-postclassical.jpg";
import modern from "@/assets/history-modern.jpg";

type Era = {
  index: string;
  era: string;
  period: string;
  description: string;
  note?: string;
  list?: { heading: string; items: string[] }[];
  image: string;
  imageAlt: string;
  caption: string;
};

const eras: Era[] = [
  {
    index: "I",
    era: "Early Indic Traditions",
    period: "Before 1700 BCE",
    description:
      "Archaeological discoveries from the Indus Valley Civilization show early symbols and traditions of contemplation.",
    note: "The relationship between these discoveries and later Yoga traditions remains debated among historians. They are best read as suggestive, not conclusive.",
    image: indus,
    imageAlt: "Ancient Indus Valley steatite seals with carved motifs displayed in a museum case",
    caption: "Indus Valley seals and archaeological artifacts",
  },
  {
    index: "II",
    era: "Vedic Period",
    period: "1700 – 600 BCE",
    description:
      "Early Sanskrit literature contains ideas related to discipline, meditation, spiritual inquiry and the concept of Yoga, often woven into ritual and hymn rather than set out as a separate system.",
    image: vedic,
    imageAlt: "Aged Sanskrit manuscript pages bound with thread, lit by candlelight",
    caption: "Early Sanskrit literature",
  },
  {
    index: "III",
    era: "Pre-Classical Period",
    period: "600 – 200 BCE",
    description:
      "Yoga philosophy develops through important texts, and the vocabulary of practice begins to take recognisable shape.",
    list: [
      { heading: "Texts", items: ["Upanishads", "Bhagavad Gita"] },
      {
        heading: "Ideas",
        items: ["Self-realization", "Meditation", "Karma Yoga", "Bhakti Yoga", "Jnana Yoga"],
      },
    ],
    image: preclassical,
    imageAlt: "Stack of ancient handwritten Sanskrit manuscript folios beside a brass oil lamp",
    caption: "Ancient manuscripts",
  },
  {
    index: "IV",
    era: "Classical Period",
    period: "200 BCE – 500 CE",
    description:
      "Patanjali systematized Yoga philosophy through the Yoga Sutras — a compact, ordered account of mind and practice.",
    note: "Patanjali organized existing traditions; he did not create Yoga.",
    list: [
      {
        heading: "The Eight Limbs",
        items: [
          "Yama",
          "Niyama",
          "Asana",
          "Pranayama",
          "Pratyahara",
          "Dharana",
          "Dhyana",
          "Samadhi",
        ],
      },
    ],
    image: classical,
    imageAlt: "An ancient Sanskrit treatise open on a wooden desk with a reed pen and stone inkpot",
    caption: "Ancient texts",
  },
  {
    index: "V",
    era: "Post-Classical Period",
    period: "500 – 1800 CE",
    description:
      "Yoga traditions expanded with greater emphasis on asanas, pranayama, energy practices and the Hatha Yoga lineages.",
    list: [
      {
        heading: "Key Texts",
        items: ["Hatha Yoga Pradipika", "Gheranda Samhita", "Shiva Samhita"],
      },
    ],
    image: postclassical,
    imageAlt: "Illustrated Hatha Yoga manuscript page with hand-painted figures in seated postures",
    caption: "Hatha Yoga manuscripts",
  },
  {
    index: "VI",
    era: "Modern Period",
    period: "1800 – Present",
    description:
      "Yoga spread globally through teachers and movements that introduced Indian philosophical traditions and practices worldwide.",
    list: [
      {
        heading: "Figures",
        items: [
          "Swami Vivekananda",
          "Tirumalai Krishnamacharya",
          "B.K.S. Iyengar",
          "Pattabhi Jois",
        ],
      },
    ],
    image: modern,
    imageAlt: "Sepia archival photograph of early twentieth century yoga students on a stone terrace",
    caption: "Historical photographs",
  },
];

export function HistoryTimeline() {
  return (
    <YogaChapter id="history" className="bg-secondary/60">
      <div className="mx-auto max-w-[92rem] px-6 lg:px-12">
        <Reveal>
          <p className="label-eyebrow text-gold">History</p>
        </Reveal>
        <Reveal delay={0.1}>
          <h2 className="mt-7 max-w-3xl text-4xl leading-[1.12] md:text-6xl">
            The Journey Of Yoga Through Time
          </h2>
        </Reveal>
        <Reveal delay={0.2}>
          <p className="mt-10 max-w-2xl text-base leading-[1.95]">
            Yoga has no single founding moment. What follows is a broad chronology drawn from
            surviving texts and scholarship, with the uncertain parts left uncertain.
          </p>
        </Reveal>

        <ol className="mt-24 md:mt-32">
          {eras.map((era, index) => (
            <li
              key={era.era}
              className="relative grid gap-12 border-t border-border py-20 md:py-28 lg:grid-cols-12 lg:gap-16"
            >
              <Reveal className="lg:col-span-3">
                <p className="font-display text-5xl text-accent md:text-6xl">{era.index}</p>
                <p className="label-eyebrow mt-6 text-muted-foreground">{era.period}</p>
              </Reveal>

              <div className="lg:col-span-5">
                <Reveal delay={0.05}>
                  <h3 className="text-3xl leading-tight md:text-4xl">{era.era}</h3>
                </Reveal>
                <Reveal delay={0.1}>
                  <p className="mt-7 max-w-xl text-base leading-[1.95]">{era.description}</p>
                </Reveal>
                {era.note && (
                  <Reveal delay={0.15}>
                    <p className="mt-7 max-w-xl border-l border-gold pl-6 text-sm leading-[1.9] italic text-muted-foreground">
                      {era.note}
                    </p>
                  </Reveal>
                )}
                {era.list?.map((group) => (
                  <Reveal key={group.heading} delay={0.2}>
                    <div className="mt-10">
                      <p className="label-eyebrow text-muted-foreground">{group.heading}</p>
                      <ul className="mt-5 flex flex-wrap gap-x-8 gap-y-3">
                        {group.items.map((item) => (
                          <li key={item} className="font-display text-xl text-primary">
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </Reveal>
                ))}
              </div>

              <Reveal delay={0.1} y={40} className="lg:col-span-4">
                <figure>
                  <img
                    src={era.image}
                    alt={era.imageAlt}
                    width={1200}
                    height={900}
                    loading="lazy"
                    className={`w-full object-cover ${index % 2 === 0 ? "h-72 md:h-96" : "h-80 md:h-[28rem]"}`}
                  />
                  <figcaption className="mt-4 text-xs tracking-wide text-muted-foreground">
                    {era.caption}
                  </figcaption>
                </figure>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </YogaChapter>
  );
}
