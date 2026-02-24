"use client";

import Image from "next/image";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState, useEffect, useCallback } from "react";

/* ─── Animated title ─── */
const letterVariants = {
  hidden: { y: "100%", opacity: 0 },
  visible: (i: number) => ({
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
      delay: i * 0.04,
    },
  }),
};

function AnimatedHeroTitle() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: "-100px" });

  let charIndex = 0;
  const words = [
    { text: "Lucy", gap: true },
    { text: "Shaw", gap: false },
  ];

  return (
    <div ref={ref} className="flex flex-col gap-0">
      {words.map((word, wi) => (
        <span
          key={wi}
          className="font-sans-main text-[72px] sm:text-[88px] md:text-[100px] lg:text-[120px] font-semibold leading-[0.9] tracking-[-2px] md:tracking-[-3px] text-white"
        >
          <span className="inline-flex overflow-hidden py-[0.15em] -my-[0.15em]">
            {word.text.split("").map((char) => {
              const idx = charIndex++;
              return (
                <motion.span
                  key={idx}
                  custom={idx}
                  variants={letterVariants}
                  initial="hidden"
                  animate={isInView ? "visible" : "hidden"}
                  className="inline-block"
                >
                  {char}
                </motion.span>
              );
            })}
          </span>
        </span>
      ))}
    </div>
  );
}

/* ─── Latest posts data ─── */
const latestPosts = [
  {
    type: "Writing",
    title: "Labour must offer pride, not just employment, to former coal communities",
    source: "LabourList",
    image: "/images/writing-2.png",
    href: "https://labourlist.org/2025/11/coal-culture-green-jobs/",
  },
  {
    type: "Speaking",
    title: "SALT London 2025 — AI panel",
    source: "London, UK",
    image: "/images/talk-1.png",
    href: "https://www.youtube.com/watch?v=pT4s0NaYjTw",
  },
  {
    type: "Writing",
    title: "Cut to the quick — the government must invest more in short-term solutions",
    source: "The Fabian Society",
    image: "/images/writing-3.png",
    href: "https://fabians.org.uk/cut-to-the-quick/",
  },
  {
    type: "Speaking",
    title: "Earth Set 2026 — the coal transition",
    source: "The Fabian Society",
    image: "/images/talk-2.png",
    href: "https://www.earthset.co/blog/roger-wzkh5-axc94-a5am6-d5pwd-7es6s-sl274-kdp9y-ftxa5-b84sm-7w2c3-37bb3-dbrak-65zd6-59s4e-6wcgh-fmfd6-ll82z",
  },
  {
    type: "Writing",
    title: "Clouded Thinking on Business Class Passengers",
    source: "The Financial Times",
    image: "/images/writing-4.png",
    href: "https://www.ft.com/content/f7b2eae3-faf6-4a6c-9be1-2b7553934717",
  },
  {
    type: "Speaking",
    title: "Woodmac 2025 Power Investment",
    source: "The Financial Times",
    image: "/images/talk-3.png",
    href: "#",
  },
];

const CARD_WIDTH = 280;
const CARD_GAP = 24;
const CARD_STEP = CARD_WIDTH + CARD_GAP;

/* ─── Carousel ─── */
function LatestCarousel() {
  const total = latestPosts.length;
  const [active, setActive] = useState(0);

  const getIndex = (offset: number) =>
    ((active + offset) % total + total) % total;

  const next = useCallback(() => {
    setActive((prev) => (prev + 1) % total);
  }, [total]);

  const prev = useCallback(() => {
    setActive((prev) => (prev - 1 + total) % total);
  }, [total]);

  // Auto-scroll every 5 seconds
  useEffect(() => {
    const interval = setInterval(next, 5000);
    return () => clearInterval(interval);
  }, [next]);

  // Active on the left, two faded cards to its right
  const slots = [0, 1, 2];

  return (
    <div className="flex flex-col gap-8 md:gap-10 h-full justify-center">
      <motion.span
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        className="font-sans-main text-base md:text-xl font-medium tracking-[-0.4px] text-white/50"
      >
        Latest News
      </motion.span>

      {/* Cards track — fixed height container */}
      <div
        className="relative overflow-hidden"
        style={{ height: 340 }}
      >
        <AnimatePresence initial={false} mode="popLayout">
          {slots.map((slot) => {
            const idx = getIndex(slot);
            const isActive = slot === 0;

            const delay = slot * 0.06;

            return (
              <motion.div
                key={idx}
                initial={{ x: 3 * CARD_STEP }}
                animate={{
                  x: slot * CARD_STEP,
                  transition: {
                    duration: 0.5,
                    delay,
                    ease: [0.33, 1, 0.68, 1],
                  },
                }}
                exit={{
                  x: -CARD_STEP,
                  transition: {
                    duration: 0.5,
                    delay,
                    ease: [0.33, 1, 0.68, 1],
                  },
                }}
                className="absolute top-0 left-0"
                style={{ width: CARD_WIDTH }}
              >
                <a
                  href={latestPosts[idx].href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col"
                >
                  <div
                    className={`
                      relative w-full h-[180px] md:h-[200px] overflow-hidden rounded-xl
                      ${isActive ? "opacity-100" : "opacity-50"}
                    `}
                  >
                    <Image
                      src={latestPosts[idx].image}
                      alt={latestPosts[idx].title}
                      fill
                      className="object-cover"
                      sizes="280px"
                    />
                  </div>
                  <div
                    className={`
                      flex flex-col gap-2 md:gap-3 pt-4 md:pt-5
                      ${isActive ? "opacity-100" : "opacity-40"}
                    `}
                  >
                    <span className="font-sans-main text-sm font-normal tracking-[-0.36px] leading-none text-white/50">
                      {latestPosts[idx].type}
                    </span>
                    <h3 className="font-sans-main text-lg md:text-xl font-semibold leading-[1.25] tracking-[-0.4px] text-white">
                      {latestPosts[idx].title}
                    </h3>
                    <span className="font-sans-main text-sm font-normal tracking-[-0.36px] leading-none text-white/40">
                      {latestPosts[idx].source}
                    </span>
                  </div>
                </a>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </div>

      {/* Navigation arrows */}
      <div className="flex items-center gap-3">
        <button
          onClick={prev}
          className="w-10 h-10 flex items-center justify-center rounded-full border border-white/30 text-white/60 hover:text-white hover:border-white/60 transition-colors duration-200"
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M12.67 8H3.33M3.33 8L7.33 4M3.33 8L7.33 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
        <button
          onClick={next}
          className="w-10 h-10 flex items-center justify-center rounded-full border border-white/30 text-white/60 hover:text-white hover:border-white/60 transition-colors duration-200"
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M3.33 8H12.67M12.67 8L8.67 4M12.67 8L8.67 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
      </div>
    </div>
  );
}

/* ─── Hero V3 ─── */
export default function HeroV3() {
  return (
    <section className="relative w-full px-4 pb-4 pt-0 overflow-hidden">
      <motion.div
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="relative w-full rounded-2xl overflow-hidden bg-[var(--color-body)]"
      >
        <div className="flex flex-col md:flex-row min-h-[600px] sm:min-h-[650px] md:min-h-[700px] lg:min-h-[800px]">
          {/* Left: Portrait */}
          <div className="relative w-full md:w-1/2 h-[420px] sm:h-[500px] md:h-auto">
            <Image
              src="/images/newsletter-portrait.jpg"
              alt="Lucy Shaw"
              fill
              className="object-cover object-top"
              priority
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            {/* Gradient for text readability */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent md:bg-gradient-to-t md:from-black/60 md:via-transparent md:to-transparent" />

            {/* Name overlay — bottom of portrait */}
            <div className="absolute bottom-0 left-0 right-0 px-6 md:px-10 pb-8 md:pb-12">
              <AnimatedHeroTitle />
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="font-sans-main text-lg md:text-2xl font-normal tracking-[-0.48px] text-white/70 mt-4"
              >
                Energy expert: investor, writer, convenor, speaker
              </motion.p>
            </div>
          </div>

          {/* Right: Carousel */}
          <div className="w-full md:w-1/2 px-6 md:px-10 py-10 md:py-16 flex flex-col justify-center">
            <LatestCarousel />
          </div>
        </div>
      </motion.div>
    </section>
  );
}
