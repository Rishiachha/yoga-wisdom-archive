import { createFileRoute } from "@tanstack/react-router";

import { YogaLibraryPage } from "@/components/yoga/YogaLibraryPage";

const title = "Yoga Knowledge Library | Rishi Sidhasamdhi Yoga Foundation";
const description =
  "A cinematic journey through the history, philosophy and practice of Yoga — from early Indic traditions to the eight limbs, asana, pranayama and daily life.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "article" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: YogaLibraryPage,
});
