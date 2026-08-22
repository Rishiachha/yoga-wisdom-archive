import { Reveal } from "./Reveal";
import { YogaChapter } from "./YogaChapter";
import dailyLife from "@/assets/daily-life.jpg";

const threads = [
  {
    title: "Stress management",
    text: "Slow breathing and brief deliberate pauses give the nervous system a way to settle before pressure accumulates.",
  },
  {
    title: "Awareness",
    text: "Noticing tension, posture, tone of voice and reaction — the same attention trained on the mat, carried into ordinary hours.",
  },
  {
    title: "Emotional balance",
    text: "A short gap between feeling and response. Not suppression, but enough space to choose what happens next.",
  },
  {
    title: "Lifestyle",
    text: "Sleep, food, work and rest treated as part of practice rather than as separate from it.",
  },
];

export function DailyLifeSection() {
  return (
    <YogaChapter id="daily-life" className="bg-secondary/60">
      <Reveal y={40}>
        <img
          src={dailyLife}
          alt="A person pausing quietly by a window with a cup of tea in a calm apartment"
          width={1920}
          height={1088}
          loading="lazy"
          className="h-[52vh] w-full object-cover md:h-[78vh]"
        />
      </Reveal>

      <div className="mx-auto mt-20 grid max-w-[92rem] gap-14 px-6 md:mt-28 lg:grid-cols-12 lg:gap-24 lg:px-12">
        <div className="lg:col-span-5">
          <Reveal>
            <p className="label-eyebrow text-gold">Daily Life</p>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="mt-7 text-4xl leading-[1.12] md:text-6xl">Yoga Beyond The Mat</h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-10 max-w-lg text-base leading-[1.95]">
              The classical texts spend comparatively little time on posture. Most of their attention
              goes to conduct, attention and the ordinary hours between practices.
            </p>
          </Reveal>
        </div>

        <div className="lg:col-span-7">
          {threads.map((thread, index) => (
            <Reveal key={thread.title} delay={index * 0.06}>
              <div className="grid gap-4 border-t border-border py-9 md:grid-cols-[16rem_1fr] md:gap-10">
                <h3 className="text-2xl leading-tight md:text-3xl">{thread.title}</h3>
                <p className="max-w-xl text-sm leading-[1.95]">{thread.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </YogaChapter>
  );
}
