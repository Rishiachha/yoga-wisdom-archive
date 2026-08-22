import { ChapterNavigation } from "./ChapterNavigation";
import { ClosingSection } from "./ClosingSection";
import { DailyLifeSection } from "./DailyLifeSection";
import { EightLimbsSection } from "./EightLimbsSection";
import { HeroSection } from "./HeroSection";
import { HistoryTimeline } from "./HistoryTimeline";
import { IntroductionSection } from "./IntroductionSection";
import { PhilosophySection } from "./PhilosophySection";
import { PracticeSection } from "./PracticeSection";
import { SplitContentSection } from "./SplitContentSection";
import { YogaStylesSection } from "./YogaStylesSection";

import whatIsYoga from "@/assets/what-is-yoga.jpg";

export function YogaLibraryPage() {
  return (
    <main className="bg-background">
      <HeroSection />
      <ChapterNavigation />
      <IntroductionSection />

      <SplitContentSection
        id="what-is-yoga"
        eyebrow="Chapter Two"
        title="What Is Yoga?"
        sanskrit="योग"
        imageSide="left"
        image={whatIsYoga}
        imageAlt="A person seated in meditation on mossy ground in a misty forest clearing at sunrise"
        imageWidth={1280}
        imageHeight={1600}
        paragraphs={[
          "Yoga is not only physical posture. Posture is one part of a much older and wider discipline concerned with how attention behaves.",
          "It is a process of bringing harmony between four things that usually operate independently of one another — and which, when brought into relationship, steady each other.",
        ]}
        bullets={[
          { term: "Body", detail: "Made stable and quiet, so that it stops demanding attention." },
          { term: "Breath", detail: "Regulated, and used as the link between body and mind." },
          { term: "Mind", detail: "Observed patiently, without being fought or indulged." },
          {
            term: "Awareness",
            detail: "The faculty that notices all three — trained rather than assumed.",
          },
        ]}
        quote="Yoga begins with understanding oneself."
        supporting={[
          {
            label: "Not a religion",
            value:
              "Yoga developed within Indian religious and philosophical traditions, and is studied and practised today by people of many beliefs.",
          },
          {
            label: "Not a single method",
            value:
              "Many lineages, texts and teachers, with real disagreements between them. There has never been one authorised way.",
          },
        ]}
      />

      <HistoryTimeline />
      <PhilosophySection />
      <EightLimbsSection />
      <PracticeSection />
      <YogaStylesSection />
      <DailyLifeSection />
      <ClosingSection />
    </main>
  );
}
