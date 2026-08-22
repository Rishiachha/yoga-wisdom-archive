import { Reveal } from "./Reveal";
import { YogaChapter } from "./YogaChapter";

import hatha from "@/assets/style-hatha.jpg";
import vinyasa from "@/assets/style-vinyasa.jpg";
import ashtanga from "@/assets/style-ashtanga.jpg";
import kundalini from "@/assets/style-kundalini.jpg";
import restorative from "@/assets/style-restorative.jpg";

type Style = {
  name: string;
  image: string;
  imageAlt: string;
  origin: string;
  characteristics: string;
  approach: string;
};

const styles: Style[] = [
  {
    name: "Hatha Yoga",
    image: hatha,
    imageAlt: "A practitioner holding a slow seated forward fold in a bare sunlit hall",
    origin:
      "Rooted in the medieval Hatha traditions and texts such as the Hatha Yoga Pradipika; today the word also names general slow-paced posture classes.",
    characteristics:
      "Postures held for longer, deliberate transitions, breath and attention given as much weight as shape.",
    approach: "Unhurried and instructional — well suited to beginning study.",
  },
  {
    name: "Vinyasa Yoga",
    image: vinyasa,
    imageAlt: "A practitioner mid-flow through a sun salutation, captured with soft motion blur",
    origin:
      "Developed in the twentieth century from Krishnamacharya's teaching lineage and the sequences it produced.",
    characteristics: "Postures linked in continuous sequence, each movement paired with a breath.",
    approach: "Flowing and warming, with sequences that vary from class to class.",
  },
  {
    name: "Ashtanga Yoga",
    image: ashtanga,
    imageAlt: "A group of practitioners in identical postures during an early morning class",
    origin: "Taught by Pattabhi Jois in Mysore, drawn from the same lineage as Vinyasa.",
    characteristics:
      "A fixed series of postures practised in the same order, with counted breath and set gaze points.",
    approach: "Repetitive and demanding by design; progress is measured in years, not sessions.",
  },
  {
    name: "Kundalini Yoga",
    image: kundalini,
    imageAlt: "Practitioners in white clothing seated in a circle chanting by lamplight",
    origin:
      "Popularised in the West from the late 1960s, drawing on tantric and Sikh-influenced teachings.",
    characteristics:
      "Set sequences called kriyas, combining repetitive movement, vigorous breathwork, mantra and meditation.",
    approach: "Ritual in structure, with an emphasis on energy and sound rather than posture range.",
  },
  {
    name: "Restorative Yoga",
    image: restorative,
    imageAlt: "A person resting in a supported restorative pose over bolsters in a candlelit room",
    origin:
      "Grew from Iyengar's therapeutic use of props, developed further by his students into a distinct practice.",
    characteristics:
      "Very few postures, fully supported by bolsters and blankets, held for many minutes.",
    approach: "Passive and quiet; the work is releasing effort rather than producing it.",
  },
];

export function YogaStylesSection() {
  return (
    <YogaChapter id="yoga-styles">
      <div className="mx-auto max-w-[92rem] px-6 lg:px-12">
        <div className="max-w-3xl">
          <Reveal>
            <p className="label-eyebrow text-gold">Styles</p>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="mt-7 text-4xl leading-[1.12] md:text-6xl">Traditions Of Practice</h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-10 text-base leading-[1.95]">
              Most contemporary styles descend from a small number of twentieth-century lineages.
              They differ less in philosophy than in pace, structure and emphasis.
            </p>
          </Reveal>
        </div>

        <div className="mt-24 space-y-24 md:mt-32 md:space-y-32">
          {styles.map((style, index) => (
            <Reveal key={style.name} y={40}>
              <article
                className={`grid gap-10 md:grid-cols-12 md:gap-14 ${
                  index % 2 === 1 ? "md:[&>figure]:order-2" : ""
                }`}
              >
                <figure className="md:col-span-5">
                  <img
                    src={style.image}
                    alt={style.imageAlt}
                    width={1000}
                    height={1300}
                    loading="lazy"
                    className={`w-full object-cover ${
                      index % 3 === 1 ? "h-[26rem] md:h-[34rem]" : "h-[30rem] md:h-[38rem]"
                    }`}
                  />
                </figure>

                <div className="md:col-span-7 md:self-end md:pb-6">
                  <h3 className="text-3xl leading-tight md:text-5xl">{style.name}</h3>
                  <span className="rule-gold mt-7" />
                  <dl className="mt-10 max-w-2xl divide-y divide-border border-t border-border">
                    {(
                      [
                        ["Origin", style.origin],
                        ["Characteristics", style.characteristics],
                        ["Practice approach", style.approach],
                      ] as const
                    ).map(([label, value]) => (
                      <div key={label} className="grid gap-3 py-6 md:grid-cols-[11rem_1fr] md:gap-8">
                        <dt className="label-eyebrow text-muted-foreground">{label}</dt>
                        <dd className="text-sm leading-[1.95]">{value}</dd>
                      </div>
                    ))}
                  </dl>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </YogaChapter>
  );
}
