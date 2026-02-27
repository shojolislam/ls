"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function AboutV2() {
  return (
    <section id="about" className="flex flex-col gap-10 md:gap-16 pb-6 md:pb-32 pt-16 md:pt-32 px-4 md:px-6 w-full">
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

      {/* Mobile layout */}
      <div className="md:hidden flex flex-col gap-8 w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
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
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col gap-4"
        >
          <p className="font-sans-main text-lg font-normal leading-[1.5] tracking-[-0.24px] text-[var(--color-text-primary)]">
            Lucy Shaw leads Gordon Management, an investment advisory firm focused on energy transition in the UK and Africa. She advises institutional investors, energy companies, and governments on clean energy investments, infrastructure strategy, and economic development.
          </p>
          <p className="font-sans-main text-lg font-normal leading-[1.5] tracking-[-0.24px] text-[var(--color-text-primary)]">
            Before founding Gordon Management, Lucy spent her career at Blackstone, the IFC (World Bank Group), BCG, and the United Nations.
          </p>
          <p className="font-sans-main text-lg font-normal leading-[1.5] tracking-[-0.24px] text-[var(--color-text-primary)]">
            She holds an MBA from Harvard Business School &mdash; graduating as a Baker Scholar &mdash; and an MPA/ID from Harvard Kennedy School as a Fulbright Scholar.
          </p>
        </motion.div>
      </div>

      {/* Desktop: portrait left, all text right */}
      <div className="hidden md:grid md:grid-cols-12 gap-6 lg:gap-8 w-full">
        {/* Left: portrait image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="md:col-span-5 relative w-full h-[640px] overflow-hidden rounded-2xl"
        >
          <Image
            src="/images/about-headshot.png"
            alt="Lucy Shaw"
            fill
            className="object-cover object-top"
            sizes="42vw"
          />
        </motion.div>

        {/* Right: all bio text */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="md:col-span-7 flex flex-col justify-center gap-6"
        >
          <p className="font-sans-main text-[22px] font-normal leading-[1.5] tracking-[-0.24px] text-[var(--color-text-primary)]">
            Lucy Shaw leads Gordon Management, an investment advisory firm focused on energy transition in the UK and Africa. She advises institutional investors, energy companies, and governments on clean energy investments, infrastructure strategy, and economic development.
          </p>
          <p className="font-sans-main text-[22px] font-normal leading-[1.5] tracking-[-0.24px] text-[var(--color-text-primary)]">
            Before founding Gordon Management, Lucy spent her career at Blackstone, the IFC (World Bank Group), BCG, and the United Nations.
          </p>
          <p className="font-sans-main text-[22px] font-normal leading-[1.5] tracking-[-0.24px] text-[var(--color-text-primary)]">
            She holds an MBA from Harvard Business School &mdash; graduating as a Baker Scholar &mdash; and an MPA/ID from Harvard Kennedy School as a Fulbright Scholar.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
