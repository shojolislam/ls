"use client";

import Image from "next/image";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import ScrollRevealWord from "./ScrollRevealWord";

const bioText = `Lucy Shaw leads Gordon Management, an investment advisory firm focused on energy transition in the UK and Africa. She advises institutional investors, energy companies, and governments on clean energy investments, infrastructure strategy, and economic development.

Before founding Gordon Management, Lucy spent her career at Blackstone, the IFC (World Bank Group), BCG, and the United Nations.

She holds an MBA from Harvard Business School — graduating as a Baker Scholar — and an MPA/ID from Harvard Kennedy School as a Fulbright Scholar.`;

export default function AboutV2Scroll() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Title fade in: scroll 0–0.1
  const titleOpacity = useTransform(scrollYProgress, [0, 0.1], [0, 1]);
  const titleY = useTransform(scrollYProgress, [0, 0.1], [30, 0]);

  // Image 1: appears scroll 0–0.12
  const img1Opacity = useTransform(scrollYProgress, [0, 0.12], [0, 1]);
  const img1Scale = useTransform(scrollYProgress, [0, 0.12], [0.95, 1]);

  // Image 2: appears scroll 0.5–0.65 on top with rotation
  const img2Opacity = useTransform(scrollYProgress, [0.5, 0.65], [0, 1]);
  const img2Scale = useTransform(scrollYProgress, [0.5, 0.65], [0.9, 1]);
  const img2Rotate = useTransform(scrollYProgress, [0.5, 0.65], [6, 3]);

  // Split bio text into paragraphs, then words (preserving paragraph breaks)
  const paragraphs = bioText.split("\n\n");
  const allWords: string[] = [];
  const paragraphBreakIndices: Set<number> = new Set();

  paragraphs.forEach((para, pIdx) => {
    if (pIdx > 0) {
      paragraphBreakIndices.add(allWords.length);
    }
    const words = para.split(/\s+/);
    words.forEach((w) => allWords.push(w));
  });

  const totalWords = allWords.length;

  return (
    <section ref={containerRef} className="relative h-[300vh] w-full">
      <div className="sticky top-0 h-screen flex items-center overflow-hidden">
        <div className="w-full max-w-[1440px] mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-start">
            {/* Left column: title + text */}
            <div className="md:col-span-7 flex flex-col gap-8 md:gap-10 pt-8 md:pt-0">
              <motion.h2
                style={{ opacity: titleOpacity, y: titleY }}
                className="font-sans-main text-[36px] sm:text-[48px] md:text-[64px] lg:text-[80px] font-semibold leading-none tracking-[-0.8px] md:tracking-[-1.6px] text-[var(--color-body)] max-w-[1039px]"
              >
                Advising investors, companies, and governments on the energy transition.
              </motion.h2>

              <div className="font-sans-main text-lg md:text-[22px] font-normal leading-[1.5] tracking-[-0.24px] text-[var(--color-text-primary)]">
                {allWords.map((word, i) => (
                  <span key={i}>
                    {paragraphBreakIndices.has(i) && (
                      <span className="block h-6 md:h-8" />
                    )}
                    <ScrollRevealWord
                      word={word}
                      index={i}
                      totalWords={totalWords}
                      scrollYProgress={scrollYProgress}
                      rangeStart={0.1}
                      rangeEnd={0.75}
                    />
                    {i < totalWords - 1 ? " " : ""}
                  </span>
                ))}
              </div>
            </div>

            {/* Right column: stacked photo pile */}
            <div className="hidden md:flex md:col-span-5 relative h-[640px] items-center justify-center">
              {/* Image 1: headshot */}
              <motion.div
                style={{ opacity: img1Opacity, scale: img1Scale }}
                className="absolute inset-0 overflow-hidden rounded-2xl"
              >
                <Image
                  src="/images/about-headshot.png"
                  alt="Lucy Shaw"
                  fill
                  className="object-cover object-top"
                  sizes="42vw"
                />
              </motion.div>

              {/* Image 2: library — stacked on top with rotation */}
              <motion.div
                style={{
                  opacity: img2Opacity,
                  scale: img2Scale,
                  rotate: img2Rotate,
                }}
                className="absolute inset-x-4 inset-y-8 overflow-hidden rounded-2xl shadow-2xl"
              >
                <Image
                  src="/images/about-library.png"
                  alt="Lucy Shaw in library"
                  fill
                  className="object-cover object-center"
                  sizes="38vw"
                />
              </motion.div>
            </div>

            {/* Mobile: single image */}
            <div className="md:hidden flex flex-col gap-6">
              <motion.div
                style={{ opacity: img1Opacity, scale: img1Scale }}
                className="relative w-full aspect-[3/4] overflow-hidden rounded-xl"
              >
                <Image
                  src="/images/about-headshot.png"
                  alt="Lucy Shaw"
                  fill
                  className="object-cover object-top"
                  sizes="100vw"
                />
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
