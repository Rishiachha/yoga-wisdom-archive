import { Reveal } from "./Reveal";
import { YogaChapter } from "./YogaChapter";

export type SplitContentSectionProps = {
  id: string;
  eyebrow: string;
  title: string;
  sanskrit?: string;
  paragraphs: string[];
  bullets?: { term: string; detail: string }[];
  quote?: string;
  supporting?: { label: string; value: string }[];
  image: string;
  imageAlt: string;
  imageWidth: number;
  imageHeight: number;
  imageSide?: "left" | "right";
};

export function SplitContentSection({
  id,
  eyebrow,
  title,
  sanskrit,
  paragraphs,
  bullets,
  quote,
  supporting,
  image,
  imageAlt,
  imageWidth,
  imageHeight,
  imageSide = "left",
}: SplitContentSectionProps) {
  const imageFirst = imageSide === "left";

  return (
    <YogaChapter id={id}>
      <div className="mx-auto grid max-w-[92rem] items-center gap-14 px-6 md:gap-20 lg:grid-cols-12 lg:gap-24 lg:px-12">
        <Reveal
          y={40}
          className={`lg:col-span-6 ${imageFirst ? "lg:order-1" : "lg:order-2"}`}
        >
          <img
            src={image}
            alt={imageAlt}
            width={imageWidth}
            height={imageHeight}
            loading="lazy"
            className="h-[58vh] w-full object-cover md:h-[86vh]"
          />
        </Reveal>

        <div
          className={`lg:col-span-6 ${imageFirst ? "lg:order-2" : "lg:order-1"} ${
            imageFirst ? "lg:pl-6" : "lg:pr-6"
          }`}
        >
          <Reveal>
            <p className="label-eyebrow text-gold">{eyebrow}</p>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="mt-7 text-3xl leading-[1.15] md:text-5xl">{title}</h2>
          </Reveal>
          {sanskrit && (
            <Reveal delay={0.15}>
              <p lang="sa" className="mt-4 font-display text-xl text-accent md:text-2xl">
                {sanskrit}
              </p>
            </Reveal>
          )}
          <Reveal delay={0.2}>
            <span className="rule-gold mt-9" />
          </Reveal>

          {paragraphs.map((paragraph, index) => (
            <Reveal key={paragraph.slice(0, 24)} delay={0.25 + index * 0.05}>
              <p className="mt-8 max-w-xl text-base leading-[1.95]">{paragraph}</p>
            </Reveal>
          ))}

          {bullets && (
            <Reveal delay={0.35}>
              <dl className="mt-12 max-w-xl divide-y divide-border border-t border-border">
                {bullets.map((bullet) => (
                  <div
                    key={bullet.term}
                    className="grid grid-cols-[7rem_1fr] gap-6 py-5 md:grid-cols-[9rem_1fr]"
                  >
                    <dt className="font-display text-xl text-primary">{bullet.term}</dt>
                    <dd className="text-sm leading-[1.9]">{bullet.detail}</dd>
                  </div>
                ))}
              </dl>
            </Reveal>
          )}

          {quote && (
            <Reveal delay={0.4}>
              <blockquote className="mt-14 max-w-xl border-l border-gold pl-7 text-2xl leading-[1.5] italic md:text-3xl">
                &ldquo;{quote}&rdquo;
              </blockquote>
            </Reveal>
          )}

          {supporting && (
            <Reveal delay={0.45}>
              <div className="mt-14 grid max-w-xl gap-8 sm:grid-cols-2">
                {supporting.map((item) => (
                  <div key={item.label}>
                    <p className="label-eyebrow text-muted-foreground">{item.label}</p>
                    <p className="mt-3 text-sm leading-[1.9]">{item.value}</p>
                  </div>
                ))}
              </div>
            </Reveal>
          )}
        </div>
      </div>
    </YogaChapter>
  );
}
