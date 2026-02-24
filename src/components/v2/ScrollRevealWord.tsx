"use client";

import { motion, useTransform, type MotionValue } from "framer-motion";

interface ScrollRevealWordProps {
  word: string;
  index: number;
  totalWords: number;
  scrollYProgress: MotionValue<number>;
  rangeStart: number;
  rangeEnd: number;
  className?: string;
}

export default function ScrollRevealWord({
  word,
  index,
  totalWords,
  scrollYProgress,
  rangeStart,
  rangeEnd,
  className = "",
}: ScrollRevealWordProps) {
  const wordRange = rangeEnd - rangeStart;
  const wordStart = rangeStart + (index / totalWords) * wordRange;
  const wordEnd = wordStart + (1 / totalWords) * wordRange;

  const opacity = useTransform(scrollYProgress, [wordStart, wordEnd], [0, 1]);

  return (
    <motion.span style={{ opacity }} className={className}>
      {word}
    </motion.span>
  );
}
