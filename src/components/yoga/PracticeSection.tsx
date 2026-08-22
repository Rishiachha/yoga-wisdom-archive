import { Reveal } from "./Reveal";
import { SplitContentSection, type SplitContentSectionProps } from "./SplitContentSection";

import asana from "@/assets/practice-asana.jpg";
import pranayama from "@/assets/practice-pranayama.jpg";
import nidra from "@/assets/practice-nidra.jpg";
import mantra from "@/assets/practice-mantra.jpg";

const practices: SplitContentSectionProps[] = [
  {
    id: "asanas",
    eyebrow: "Practice · One",
    title: "Asanas",
    sanskrit: "आसन",
    imageSide: "left",
    image: asana,
    imageAlt: "A woman holding a steady warrior posture on a wooden studio floor in daylight",
    imageWidth: 1280,
    imageHeight: 1600,
    paragraphs: [
      "In the classical texts asana means a steady, comfortable seat. Over centuries the term widened to include the large family of postures practised today, but the original criterion never changed: steadiness with ease.",
      "Posture is approached as preparation rather than performance. The shape matters less than whether the breath stays even and the attention stays present inside it.",
    ],
    bullets: [
      { term: "Meaning", detail: "A seat; a stable position of the body held with attention." },
      {
        term: "Purpose",
        detail: "To settle the body so it no longer interrupts breath or concentration.",
      },
      {
        term: "Benefits",
        detail:
          "Strength, mobility and postural steadiness, alongside a quieter and more familiar relationship with physical sensation.",
      },
    ],
    quote: "Sthira sukham asanam — the posture is steady and at ease.",
  },
  {
    id: "pranayama",
    eyebrow: "Practice · Two",
    title: "Pranayama",
    sanskrit: "प्राणायाम",
    imageSide: "right",
    image: pranayama,
    imageAlt: "A person seated cross-legged practising alternate-nostril breathing with eyes closed",
    imageWidth: 1280,
    imageHeight: 1600,
    paragraphs: [
      "Breath is the one physiological rhythm we can both observe and shape. Pranayama works in that narrow opening: by lengthening, evening and occasionally suspending the breath, the nervous system is invited to settle.",
      "The traditions treat it as a serious practice, taught gradually. Slow, unforced breathing precedes any work with retention.",
    ],
    supporting: [
      {
        label: "Breath and mind",
        value:
          "An agitated mind breathes quickly and unevenly. Working from the other direction — steadying the breath — the texts describe attention becoming correspondingly quiet.",
      },
      {
        label: "Approach",
        value:
          "Comfortable seat, closed eyes, exhalation gently longer than inhalation, no strain and no held tension in the face or shoulders.",
      },
    ],
    quote: "When the breath is steady, the mind is steady.",
  },
  {
    id: "yoga-nidra",
    eyebrow: "Practice · Three",
    title: "Yoga Nidra",
    sanskrit: "योगनिद्रा",
    imageSide: "left",
    image: nidra,
    imageAlt: "A person lying still in savasana on a mat with a bolster under the knees in a dim room",
    imageWidth: 1280,
    imageHeight: 1600,
    paragraphs: [
      "Yoga Nidra is practised lying down, completely still, while remaining awake. Attention is guided systematically through the body, the breath and inner sensation.",
      "It occupies the threshold between waking and sleep — deep rest without unconsciousness. For many people it is the most accessible entry into sustained inward attention.",
    ],
    supporting: [
      {
        label: "Awareness",
        value:
          "The aim is not to fall asleep but to stay lightly aware as the body releases, holding a thread of attention through deepening rest.",
      },
      {
        label: "Practice",
        value:
          "Twenty to forty minutes of supported stillness, usually led by voice, with a rotation of attention through the body.",
      },
    ],
    quote: "Sleep restores the body. Stillness with awareness restores attention.",
  },
  {
    id: "mantra",
    eyebrow: "Practice · Four",
    title: "Mantra",
    sanskrit: "मन्त्र",
    imageSide: "right",
    image: mantra,
    imageAlt: "Hands holding rudraksha mala beads over an open Sanskrit manuscript by candlelight",
    imageWidth: 1280,
    imageHeight: 1600,
    paragraphs: [
      "Mantra practice uses sound as an object of concentration. A syllable, phrase or verse is repeated aloud, whispered, or held silently, often counted on a mala.",
      "In the devotional traditions the meaning of the words matters greatly; in the meditative traditions the repetition itself does the work, giving the mind something steady to return to.",
    ],
    supporting: [
      {
        label: "Sound",
        value:
          "Repetition creates a rhythm the mind can rest on, in the way the breath does during pranayama.",
      },
      {
        label: "Focus",
        value:
          "Wandering is expected. The practice is the unhurried return, without commentary or self-reproach.",
      },
    ],
    quote: "The sound is a doorway; the attention is the practice.",
  },
];

export function PracticeSection() {
  return (
    <div className="bg-secondary/40">
      <div className="mx-auto max-w-[92rem] px-6 pt-28 md:pt-40 lg:px-12">
        <Reveal>
          <p className="label-eyebrow text-gold">Practices</p>
        </Reveal>
        <Reveal delay={0.1}>
          <h2 className="mt-7 max-w-3xl text-4xl leading-[1.12] md:text-6xl">
            The Practices Themselves
          </h2>
        </Reveal>
        <Reveal delay={0.2}>
          <p className="mt-10 max-w-2xl text-base leading-[1.95]">
            Four practices, each with its own history and its own way of working with attention.
          </p>
        </Reveal>
      </div>

      {practices.map((practice) => (
        <SplitContentSection key={practice.id} {...practice} />
      ))}
    </div>
  );
}
