"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function AboutV2() {
  return (
    <section id="about" className="flex flex-col gap-10 md:gap-16 pt-24 md:pt-52 pb-24 md:pb-52 px-4 md:px-6 w-full">
      {/* Heading */}
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="font-sans-main text-[36px] sm:text-[48px] md:text-[64px] lg:text-[80px] font-semibold leading-none tracking-[-0.8px] md:tracking-[-1.6px] text-[var(--color-body)] max-w-[1039px]"
      >
        Advising investors, companies, and governments on the energy transition.
      </motion.h2>

      {/* Mobile: collage layout — two images side by side at staggered heights */}
      <div className="md:hidden flex flex-col gap-8 w-full">
        <div className="grid grid-cols-5 gap-3 items-start">
          {/* Wider landscape image — 3 cols, starts at top */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="col-span-3 relative h-[52vw] overflow-hidden rounded-xl"
          >
            <Image
              src="/images/culture-hbs.jpg"
              alt="Lucy Shaw at Harvard Business School event"
              fill
              className="object-cover object-center"
              sizes="60vw"
            />
          </motion.div>
          {/* Taller portrait — 2 cols, offset down */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="col-span-2 relative h-[64vw] mt-10 overflow-hidden rounded-xl"
          >
            <Image
              src="/images/about-v2.jpg"
              alt="Lucy Shaw at a power plant"
              fill
              className="object-cover object-center"
              sizes="40vw"
            />
          </motion.div>
        </div>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="font-sans-main text-lg font-normal leading-[1.5] tracking-[-0.24px] text-[var(--color-text-primary)] whitespace-pre-line"
        >
          {`Lucy Shaw leads Gordon Management, an investment advisory firm focused on energy transition in the UK and Africa. She advises institutional investors, energy companies, and governments on clean energy investments, infrastructure strategy, and economic development.

Before founding Gordon Management, Lucy spent her career at Blackstone, the IFC (World Bank Group), BCG, and the United Nations.

She holds an MBA from Harvard Business School — graduating as a Baker Scholar — and an MPA/ID from Harvard Kennedy School as a Fulbright Scholar.`}
        </motion.p>
      </div>

      {/* Desktop: asymmetric grid with offset portrait */}
      <div className="hidden md:grid md:grid-cols-12 gap-8 w-full items-end">
        {/* Left column: wide landscape image + bio text */}
        <div className="md:col-span-7 flex flex-col gap-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative w-full h-[400px] overflow-hidden rounded-2xl"
          >
            <Image
              src="/images/culture-hbs.jpg"
              alt="Lucy Shaw at Harvard Business School event"
              fill
              className="object-cover object-center"
              sizes="58vw"
            />
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="font-sans-main text-[22px] font-normal leading-[1.5] tracking-[-0.24px] text-[var(--color-text-primary)] whitespace-pre-line"
          >
            {`Lucy Shaw leads Gordon Management, an investment advisory firm focused on energy transition in the UK and Africa. She advises institutional investors, energy companies, and governments on clean energy investments, infrastructure strategy, and economic development.

Before founding Gordon Management, Lucy spent her career at Blackstone, the IFC (World Bank Group), BCG, and the United Nations.

She holds an MBA from Harvard Business School — graduating as a Baker Scholar — and an MPA/ID from Harvard Kennedy School as a Fulbright Scholar.`}
          </motion.p>
        </div>

        {/* Right column: tall portrait image — aligned to bottom of left column */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="md:col-span-5 relative w-full h-[600px] overflow-hidden rounded-2xl"
        >
          <Image
            src="/images/about-v2.jpg"
            alt="Lucy Shaw at a power plant"
            fill
            className="object-cover object-center"
            sizes="42vw"
          />
        </motion.div>
      </div>
    </section>
  );
}
