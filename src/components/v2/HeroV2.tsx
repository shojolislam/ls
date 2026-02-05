"use client";

import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

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
    <div ref={ref} className="flex items-center gap-4 md:gap-10 -mb-[0.15em]">
      {words.map((word, wi) => (
        <span
          key={wi}
          className="font-plantin text-[96px] sm:text-[140px] md:text-[180px] lg:text-[230px] font-normal leading-[0.85] tracking-[-2px] md:tracking-[-4px] text-[var(--color-body)]"
        >
          <span className="inline-flex overflow-hidden pt-[0.15em] -mt-[0.15em]">
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

export default function HeroV2() {
  return (
    <section className="flex flex-col pt-10 md:pt-14 px-4 md:px-6 pb-4 md:pb-6 w-full">
      {/* Top row: name + subtitle */}
      <div className="flex flex-col md:flex-row md:items-end justify-between w-full mb-4">
        <AnimatedHeroTitle />
        <motion.p
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="font-plantin text-lg md:text-2xl font-normal tracking-[-0.48px] text-[var(--color-dark)] text-left md:text-right whitespace-pre-line pb-2 mt-4 md:mt-0"
        >
          {"Entrepreneur,\nAdvisor & Investor"}
        </motion.p>
      </div>

      {/* Hero image — full width */}
      <motion.div
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="relative w-full h-[300px] sm:h-[400px] md:h-[550px] lg:h-[696px] overflow-hidden"
      >
        <Image
          src="/images/cover-v2.png"
          alt="Lucy Shaw"
          fill
          className="object-cover object-center"
          priority
        />
      </motion.div>
    </section>
  );
}
