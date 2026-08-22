import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";

import heroImage from "@/assets/hero-himalaya.jpg";

export function HeroSection() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "18%"]);
  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  const ease = [0.16, 1, 0.3, 1] as const;

  return (
    <section ref={ref} className="relative h-svh min-h-[36rem] overflow-hidden bg-forest">
      <motion.div className="absolute inset-0" style={{ y: imageY }}>
        <img
          src={heroImage}
          alt="Mist over Himalayan valleys at dawn with a solitary figure seated in meditation"
          width={1920}
          height={1088}
          className="h-[118%] w-full object-cover"
        />
        <div className="absolute inset-0 bg-forest/55" />
        <div className="absolute inset-0 bg-gradient-to-b from-forest/70 via-transparent to-forest/85" />
      </motion.div>

      <motion.header
        initial={{ opacity: 0, y: -12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.6, ease }}
        className="absolute inset-x-0 top-0 z-20 flex justify-center px-6 py-7"
      >
        <span className="label-eyebrow text-parchment/85">Rishi Sidhasamdhi</span>
      </motion.header>

      <motion.div
        style={{ y: contentY, opacity: contentOpacity }}
        className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center"
      >
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.6, delay: 0.3, ease }}
          className="label-eyebrow text-gold"
        >
          Yoga
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.8, delay: 0.5, ease }}
          className="mt-8 max-w-4xl text-4xl leading-[1.12] text-parchment sm:text-5xl md:text-6xl lg:text-7xl"
        >
          The classical body of knowledge,
          <br className="hidden sm:block" /> told simply and without hurry.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.8, delay: 0.75, ease }}
          className="mt-8 max-w-xl text-sm leading-relaxed text-parchment/75 sm:text-base"
        >
          A journey through the history, philosophy and practice of Yoga.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2, delay: 1, ease }}
          className="mt-14 flex flex-col items-center"
        >
          <span className="rule-gold" />
          <p
            lang="sa"
            className="mt-10 font-display text-2xl text-parchment sm:text-3xl md:text-4xl"
          >
            योगश्चित्तवृत्तिनिरोधः
          </p>
          <p className="mt-4 max-w-md text-xs italic leading-relaxed text-parchment/65 sm:text-sm">
            &ldquo;Yoga is the stilling of the movements of the mind.&rdquo;
          </p>
        </motion.div>

        <motion.a
          href="#introduction"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2, delay: 1.3, ease }}
          className="group label-eyebrow mt-16 inline-flex items-center gap-3 border-b border-gold/40 pb-2 text-parchment/90 transition-colors duration-700 hover:border-gold hover:text-gold"
        >
          Begin Journey
          <motion.span
            aria-hidden
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 2.6, repeat: Infinity, ease: "easeInOut" }}
          >
            ↓
          </motion.span>
        </motion.a>
      </motion.div>
    </section>
  );
}
