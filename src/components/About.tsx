"use client";

import { motion } from "framer-motion";
import Image from "next/image";

import type { Variants } from "framer-motion";

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.15 },
  }),
};

export default function About() {
  return (
    <section id="about" className="pt-20 md:pt-40 w-full px-4 md:px-10">
      <div className="flex flex-col gap-10 md:gap-16 max-w-[1024px] mx-auto">
        {/* Headline - left aligned */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
          custom={0}
        >
          <h2 className="text-[36px] md:text-[72px] font-semibold leading-[1.1] tracking-[-0.72px] md:tracking-[-1.44px] text-[var(--color-body)] max-w-[720px]">
            Writer. Investor. Engineer. Economist. Energy specialist.
          </h2>
        </motion.div>

        {/* Image + Text - bottom aligned */}
        <div className="flex flex-col md:flex-row md:items-end gap-8 md:gap-[60px]">
          {/* Photo */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            custom={1}
            className="shrink-0"
          >
            <div className="w-full md:w-[388px] h-[400px] md:h-[517px] rounded-xl overflow-hidden">
              <Image
                src="/images/about.jpg"
                alt="Lucy Shaw at a power plant"
                width={388}
                height={517}
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>

          {/* Bio text */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            custom={2}
            className="flex flex-col justify-end"
          >
            <p className="font-mono-main text-lg md:text-2xl font-normal leading-[1.5] tracking-[-0.24px] text-[var(--color-black)]">
              Lucy Shaw leads Gordon Management, an investment advisory firm
              focused on energy transition in the UK and Africa. She advises
              institutional investors, energy companies, and governments on
              clean energy investments, infrastructure strategy, and economic
              development.
            </p>
            <p className="font-mono-main text-lg md:text-2xl font-normal leading-[1.5] tracking-[-0.24px] text-[var(--color-black)] mt-4 md:mt-6">
              Before founding Gordon Management, Lucy spent her career at
              Blackstone, the IFC (World Bank Group), BCG, and the United
              Nations.
            </p>
            <p className="font-mono-main text-lg md:text-2xl font-normal leading-[1.5] tracking-[-0.24px] text-[var(--color-black)] mt-4 md:mt-6">
              She holds an MBA from Harvard Business School — graduating as a
              Baker Scholar — and an MPA/ID from Harvard Kennedy School as a
              Fulbright Scholar.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
