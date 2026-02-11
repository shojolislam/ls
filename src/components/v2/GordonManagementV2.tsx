"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import RollText from "./RollText";

const clients = [
  { name: "Octopus Energy Generation", src: "/logos/oe-generation.svg", className: "" },
  { name: "Denham Capital", src: "/logos/denham-capital.svg", className: "!h-7 md:!h-11" },
  { name: "CrossBoundary", src: "/logos/crossboundary-dark.svg", className: "" },
  { name: "SALT", src: "/logos/salt-logo.png", className: "!h-7 md:!h-11" },
];

function FundraisingIcon() {
  const t = { repeat: Infinity, repeatType: "loop" as const, repeatDelay: 3, ease: "easeInOut" as const };
  return (
    <svg viewBox="0 0 44 44" fill="none" className="w-10 h-10 md:w-12 md:h-12">
      <motion.path d="M4 36L14 26L24 30L40 10" stroke="var(--color-ellipse)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none"
        initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 1, delay: 0.3, ...t }} />
      <motion.path d="M32 10H40V18" stroke="var(--color-ellipse)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none"
        initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 0.4, delay: 1.2, ...t }} />
    </svg>
  );
}

function DueDiligenceIcon() {
  const t = { repeat: Infinity, repeatType: "loop" as const, repeatDelay: 3, ease: "easeInOut" as const };
  return (
    <svg viewBox="0 0 44 44" fill="none" className="w-10 h-10 md:w-12 md:h-12">
      <motion.circle cx="20" cy="20" r="14" stroke="var(--color-ellipse)" strokeWidth="1.5" fill="none"
        initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 0.8, delay: 0.3, ...t }} />
      <motion.line x1="30" y1="30" x2="40" y2="40" stroke="var(--color-ellipse)" strokeWidth="1.5" strokeLinecap="round"
        initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 0.4, delay: 1, ...t }} />
      <motion.path d="M14 20L18 24L26 16" stroke="var(--color-ellipse)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none"
        initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 0.5, delay: 1.3, ...t }} />
    </svg>
  );
}

function MarketAnalysisIcon() {
  const t = { repeat: Infinity, repeatType: "loop" as const, repeatDelay: 3, ease: "easeInOut" as const };
  return (
    <svg viewBox="0 0 44 44" fill="none" className="w-10 h-10 md:w-12 md:h-12">
      <motion.circle cx="22" cy="22" r="18" stroke="var(--color-ellipse)" strokeWidth="1.5" fill="none"
        initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 0.8, delay: 0.3, ...t }} />
      <motion.path d="M22 8L26 22L22 36L18 22Z" stroke="var(--color-ellipse)" strokeWidth="1" strokeLinejoin="round" fill="none"
        initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 0.8, delay: 0.8, ...t }} />
      <motion.circle cx="22" cy="22" r="2" stroke="var(--color-ellipse)" strokeWidth="1.5" fill="none"
        initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ duration: 0.3, delay: 1.4, ...t }} />
    </svg>
  );
}

function InvestorConveningIcon() {
  const t = { repeat: Infinity, repeatType: "loop" as const, repeatDelay: 3, ease: "easeInOut" as const };
  return (
    <svg viewBox="0 0 44 44" fill="none" className="w-10 h-10 md:w-12 md:h-12">
      <motion.circle cx="22" cy="8" r="4" stroke="var(--color-ellipse)" strokeWidth="1.5" fill="none"
        initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ duration: 0.3, delay: 0.3, ...t }} />
      <motion.circle cx="8" cy="36" r="4" stroke="var(--color-ellipse)" strokeWidth="1.5" fill="none"
        initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ duration: 0.3, delay: 0.5, ...t }} />
      <motion.circle cx="36" cy="36" r="4" stroke="var(--color-ellipse)" strokeWidth="1.5" fill="none"
        initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ duration: 0.3, delay: 0.7, ...t }} />
      <motion.line x1="22" y1="12" x2="8" y2="32" stroke="var(--color-ellipse)" strokeWidth="1"
        initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 0.5, delay: 0.8, ...t }} />
      <motion.line x1="22" y1="12" x2="36" y2="32" stroke="var(--color-ellipse)" strokeWidth="1"
        initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 0.5, delay: 0.9, ...t }} />
      <motion.line x1="12" y1="36" x2="32" y2="36" stroke="var(--color-ellipse)" strokeWidth="1"
        initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 0.5, delay: 1.0, ...t }} />
    </svg>
  );
}

function PolicyAdvisoryIcon() {
  const t = { repeat: Infinity, repeatType: "loop" as const, repeatDelay: 3, ease: "easeInOut" as const };
  return (
    <svg viewBox="0 0 44 44" fill="none" className="w-10 h-10 md:w-12 md:h-12">
      <motion.path d="M22 4L4 12V24C4 33 12 40 22 42C32 40 40 33 40 24V12L22 4Z" stroke="var(--color-ellipse)" strokeWidth="1.5" strokeLinejoin="round" fill="none"
        initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 1, delay: 0.3, ...t }} />
      <motion.path d="M16 22L20 26L28 18" stroke="var(--color-ellipse)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none"
        initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 0.5, delay: 1.2, ...t }} />
    </svg>
  );
}

const serviceIcons = [
  <FundraisingIcon key="fundraising" />,
  <DueDiligenceIcon key="diligence" />,
  <MarketAnalysisIcon key="market" />,
  <InvestorConveningIcon key="convening" />,
  <PolicyAdvisoryIcon key="policy" />,
];

const services = [
  {
    title: "Fundraising\nSupport",
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
    <section id="investing" className="w-full p-4">
      <div className="bg-[var(--color-body)] px-4 md:px-10 pt-16 md:pt-28 pb-12 md:pb-24 w-full rounded-2xl">
        {/* Heading */}
        <div className="px-4 md:px-8 text-left md:text-center">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="font-sans-main text-[48px] sm:text-[56px] md:text-[64px] xl:text-[80px] font-semibold leading-[1.1] tracking-[-0.8px] md:tracking-[-1.6px] text-[var(--color-card-bg)]"
          >
            What I do
          </motion.h2>
        </div>

        {/* Service cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 sm:gap-0 mb-16 mt-10 md:mt-16">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{
                y: -8,
                transition: { duration: 0.3, ease: "easeOut" },
              }}
              className="flex flex-col gap-4 md:gap-6 p-4 md:p-8 cursor-pointer"
            >
              <div className="shrink-0">{serviceIcons[i]}</div>
              <div className="flex flex-col gap-3 md:gap-5">
                <h3 className="font-sans-main text-xl md:text-[28px] font-semibold leading-[1.25] tracking-[-0.56px] text-[var(--color-card-bg)] whitespace-pre-line">
                  {service.title}
                </h3>
                <p className="font-sans-main text-sm md:text-lg font-normal leading-[1.6] tracking-[-0.36px] text-[var(--color-card-bg)]/50">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Learn more button */}
        <div className="flex items-center justify-start md:justify-center pl-4 md:pl-0">
          <a
            href="https://www.gordonmgmt.co.uk/"
            target="_blank"
            rel="noopener noreferrer"
            className="group/link inline-flex items-center gap-2 px-6 py-3 md:px-8 md:py-4 rounded-full border border-[var(--color-card-bg)]/30 bg-transparent hover:bg-[var(--color-card-bg)] transition-colors duration-300"
          >
            <span className="font-sans-main text-[14px] md:text-[18px] font-medium tracking-[-0.36px] leading-none text-[var(--color-card-bg)] group-hover/link:text-[var(--color-body)] transition-colors duration-300">
              <RollText text="Learn more" />
            </span>
            <svg width="14" height="14" viewBox="0 0 16 16" fill="none" className="md:w-4 md:h-4 text-[var(--color-card-bg)] group-hover/link:text-[var(--color-body)] transition-colors duration-300">
              <path d="M3.33 8H12.67M12.67 8L8.67 4M12.67 8L8.67 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
        </div>

        {/* Client logos carousel */}
        <div className="w-full overflow-hidden mt-16 md:mt-24">
          <div className="flex animate-scroll w-max">
            {clients.map((client) => (
              <div
                key={client.name}
                className="flex items-center justify-center h-16 md:h-24 px-8 md:px-16 shrink-0"
              >
                <Image
                  src={client.src}
                  alt={client.name}
                  width={148}
                  height={64}
                  className={`h-8 md:h-12 w-auto object-contain opacity-50 invert ${client.className}`}
                />
              </div>
            ))}
            {clients.map((client) => (
              <div
                key={`dup-${client.name}`}
                className="flex items-center justify-center h-16 md:h-24 px-8 md:px-16 shrink-0"
              >
                <Image
                  src={client.src}
                  alt={client.name}
                  width={148}
                  height={64}
                  className={`h-8 md:h-12 w-auto object-contain opacity-50 invert ${client.className}`}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
