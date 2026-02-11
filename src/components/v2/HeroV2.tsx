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
    <div ref={ref} className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-4 md:gap-10">
      {words.map((word, wi) => (
        <span
          key={wi}
          className="font-sans-main text-[96px] sm:text-[140px] md:text-[180px] lg:text-[230px] font-semibold leading-[0.85] tracking-[-2px] md:tracking-[-4px] text-white"
        >
          <span className="inline-flex overflow-hidden py-[0.2em] -my-[0.2em]">
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
    <section className="relative w-full px-4 pb-4 pt-0 overflow-hidden">
      {/* Hero image — with padding and border radius */}
      <motion.div
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="relative w-full h-[600px] sm:h-[650px] md:h-[700px] lg:h-[800px] rounded-2xl overflow-hidden"
      >
        <Image
          src="/images/newsletter-portrait.jpg"
          alt="Lucy Shaw"
          fill
          className="object-cover object-top"
          priority
        />
        {/* Gradient overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-black/10 rounded-2xl" />

        {/* Text overlay — positioned on top of the image */}
        <div className="absolute inset-0 flex flex-col justify-end px-6 md:px-10 pb-8 md:pb-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between w-full">
            <AnimatedHeroTitle />
            <motion.p
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="font-sans-main text-lg md:text-2xl font-normal tracking-[-0.48px] text-white/90 text-left md:text-right whitespace-pre-line pb-2 mt-8 md:mt-0"
            >
              {"Energy expert: investor,\nwriter, convenor, speaker"}
            </motion.p>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
