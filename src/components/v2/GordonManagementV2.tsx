"use client";

import { motion } from "framer-motion";
import RollText from "./RollText";

const services = [
  {
    title: "Fundraising Support",
    description:
      "Helping energy and infrastructure companies find the right institutional investors and close capital raises.",
  },
  {
    title: "Investment Due Diligence",
    description:
      "Research and analysis for investors looking at energy transition assets in the UK and Africa.",
  },
  {
    title: "Strategic Market Analysis",
    description:
      "Making sense of energy policy, regulation, and market shifts so investors can act with confidence.",
  },
  {
    title: "Convening",
    description:
      "Bringing the right people together — connecting capital, companies and policymakers to unlock energy transition opportunities.",
  },
  {
    title: "Policy Advisory",
    description:
      "Working with governments on how to attract private capital to infrastructure investments.",
  },
];

export default function GordonManagementV2() {
  return (
    <section id="investing" className="w-full px-4 md:px-8 pb-8 md:pb-12">
      {/* Heading row: title left, Learn more button right (desktop only) */}
      <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 md:gap-10 mb-12 md:mb-20">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="font-sans-main text-[48px] sm:text-[56px] md:text-[64px] xl:text-[80px] font-semibold leading-[1.1] tracking-[-0.8px] md:tracking-[-1.6px] text-[var(--color-body)]"
        >
          What I do
        </motion.h2>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="shrink-0 hidden md:block"
        >
          <a
            href="https://www.gordonmgmt.co.uk/"
            target="_blank"
            rel="noopener noreferrer"
            className="group/link inline-flex items-center gap-2 px-8 py-4 rounded-full border border-[var(--color-dark)]/30 bg-transparent hover:bg-[var(--color-dark)] transition-colors duration-300"
          >
            <span className="font-sans-main text-[18px] font-medium tracking-[-0.36px] leading-[1.2] text-[var(--color-dark)] group-hover/link:text-[var(--color-card-bg)] transition-colors duration-300">
              <RollText text="Learn more" />
            </span>
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="text-[var(--color-dark)] group-hover/link:text-[var(--color-card-bg)] transition-colors duration-300">
              <path d="M3.33 8H12.67M12.67 8L8.67 4M12.67 8L8.67 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
        </motion.div>
      </div>

      {/* Service items */}
      <div className="flex flex-col">
        {services.map((service, i) => (
          <motion.div
            key={service.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            whileHover={{ scale: 1.01, transition: { duration: 0.2 } }}
            className="group grid grid-cols-1 md:grid-cols-[80px_1fr_1fr] gap-4 md:gap-8 py-8 md:py-10 px-4 md:px-6 -mx-4 md:-mx-6 rounded-xl border-t border-[var(--color-dark)]/10 last:border-b cursor-default transition-colors duration-300 hover:bg-[var(--color-dark)]/[0.04]"
          >
            {/* Number + Title — stacked vertically */}
            <div className="flex flex-col gap-2 md:contents">
              <span className="font-sans-main text-[32px] md:text-[48px] font-semibold leading-none tracking-[-1px] text-[var(--color-dark)]/15 tabular-nums">
                {String(i + 1).padStart(2, "0")}
              </span>

              <h3 className="font-sans-main text-xl md:text-[28px] font-semibold leading-[1.25] tracking-[-0.56px] text-[var(--color-dark)] md:self-center">
                {service.title}
              </h3>
            </div>

            {/* Description */}
            <p className="font-sans-main text-base md:text-lg font-normal leading-[1.6] tracking-[-0.36px] text-[var(--color-text-primary)] md:self-center">
              {service.description}
            </p>
          </motion.div>
        ))}
      </div>

      {/* Mobile: Learn more button below list */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="md:hidden pt-8"
      >
        <a
          href="https://www.gordonmgmt.co.uk/"
          target="_blank"
          rel="noopener noreferrer"
          className="group/link inline-flex items-center gap-2 px-6 py-3 rounded-full border border-[var(--color-dark)]/30 bg-transparent hover:bg-[var(--color-dark)] transition-colors duration-300"
        >
          <span className="font-sans-main text-[14px] font-medium tracking-[-0.36px] leading-[1.2] text-[var(--color-dark)] group-hover/link:text-[var(--color-card-bg)] transition-colors duration-300">
            <RollText text="Learn more" />
          </span>
          <svg width="14" height="14" viewBox="0 0 16 16" fill="none" className="text-[var(--color-dark)] group-hover/link:text-[var(--color-card-bg)] transition-colors duration-300">
            <path d="M3.33 8H12.67M12.67 8L8.67 4M12.67 8L8.67 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </a>
      </motion.div>
    </section>
  );
}
