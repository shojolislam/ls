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
        className="font-plantin text-[36px] sm:text-[48px] md:text-[64px] lg:text-[80px] font-normal leading-none tracking-[-0.8px] md:tracking-[-1.6px] text-[var(--color-body)] max-w-[1039px]"
      >
        Advising investors, companies, and governments on the energy transition.
      </motion.h2>

      {/* Photo + Bio */}
      <div className="flex flex-col md:flex-row gap-8 md:gap-[60px] w-full">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative w-full md:w-[560px] h-[400px] sm:h-[500px] md:h-[747px] shrink-0 overflow-hidden"
        >
          <Image
            src="/images/about-v2.jpg"
            alt="Lucy Shaw at a power plant"
            fill
            className="object-cover object-center"
          />
        </motion.div>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="font-helvetica text-lg md:text-2xl font-normal leading-[1.4] tracking-[-0.24px] text-[var(--color-text-primary)] whitespace-pre-line"
        >
          {`Lucy Shaw leads Gordon Management, an investment advisory firm focused on energy transition in the UK and Africa. She advises institutional investors, energy companies, and governments on clean energy investments, infrastructure strategy, and economic development.

Before founding Gordon Management, Lucy spent her career at Blackstone, the IFC (World Bank Group), BCG, and the United Nations.

She holds an MBA from Harvard Business School — graduating as a Baker Scholar — and an MPA/ID from Harvard Kennedy School as a Fulbright Scholar.`}
        </motion.p>
      </div>
    </section>
  );
}
