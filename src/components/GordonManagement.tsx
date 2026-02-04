"use client";

import { motion } from "framer-motion";
import Image from "next/image";

function FundraisingIcon() {
  return (
    <svg width="120" height="120" viewBox="0 0 120 120" fill="none">
      <motion.path
        d="M20 100 L20 75 L40 75 L40 60 L60 60 L60 42 L80 42 L80 28 L100 28 L100 20"
        stroke="var(--color-ellipse)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"
        initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} viewport={{ once: false }}
        transition={{ duration: 1.2, delay: 0.3, repeat: Infinity, repeatType: "loop", repeatDelay: 2 }}
      />
      <motion.path
        d="M100 20 L94 28 M100 20 L106 28"
        stroke="var(--color-ellipse)" strokeWidth="1.5" strokeLinecap="round"
        initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: false }}
        transition={{ duration: 0.4, delay: 1.4, repeat: Infinity, repeatType: "loop", repeatDelay: 2 }}
      />
      <motion.line x1="28" y1="88" x2="48" y2="88" stroke="var(--color-ellipse)" strokeWidth="1" strokeLinecap="round"
        initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} viewport={{ once: false }} transition={{ duration: 0.5, delay: 0.5, repeat: Infinity, repeatType: "loop", repeatDelay: 2 }} />
      <motion.line x1="42" y1="70" x2="68" y2="70" stroke="var(--color-ellipse)" strokeWidth="1" strokeLinecap="round"
        initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} viewport={{ once: false }} transition={{ duration: 0.5, delay: 0.7, repeat: Infinity, repeatType: "loop", repeatDelay: 2 }} />
      <motion.line x1="58" y1="52" x2="82" y2="52" stroke="var(--color-ellipse)" strokeWidth="1" strokeLinecap="round"
        initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} viewport={{ once: false }} transition={{ duration: 0.5, delay: 0.9, repeat: Infinity, repeatType: "loop", repeatDelay: 2 }} />
      <motion.circle cx="40" cy="75" r="2.5" stroke="var(--color-ellipse)" strokeWidth="1" fill="none"
        initial={{ scale: 0 }} whileInView={{ scale: 1 }} viewport={{ once: false }} transition={{ duration: 0.3, delay: 0.6, repeat: Infinity, repeatType: "loop", repeatDelay: 2 }} />
      <motion.circle cx="60" cy="60" r="2.5" stroke="var(--color-ellipse)" strokeWidth="1" fill="none"
        initial={{ scale: 0 }} whileInView={{ scale: 1 }} viewport={{ once: false }} transition={{ duration: 0.3, delay: 0.8, repeat: Infinity, repeatType: "loop", repeatDelay: 2 }} />
      <motion.circle cx="80" cy="42" r="2.5" stroke="var(--color-ellipse)" strokeWidth="1" fill="none"
        initial={{ scale: 0 }} whileInView={{ scale: 1 }} viewport={{ once: false }} transition={{ duration: 0.3, delay: 1.0, repeat: Infinity, repeatType: "loop", repeatDelay: 2 }} />
    </svg>
  );
}

function DueDiligenceIcon() {
  return (
    <svg width="120" height="120" viewBox="0 0 120 120" fill="none">
      <motion.circle cx="50" cy="50" r="28" stroke="var(--color-ellipse)" strokeWidth="1.5"
        initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} viewport={{ once: false }} transition={{ duration: 1, delay: 0.3, repeat: Infinity, repeatType: "loop", repeatDelay: 2 }} />
      <motion.line x1="70" y1="70" x2="100" y2="100" stroke="var(--color-ellipse)" strokeWidth="1.5" strokeLinecap="round"
        initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} viewport={{ once: false }} transition={{ duration: 0.6, delay: 1.2, repeat: Infinity, repeatType: "loop", repeatDelay: 2 }} />
      <motion.line x1="35" y1="40" x2="55" y2="40" stroke="var(--color-ellipse)" strokeWidth="1" strokeLinecap="round"
        initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} viewport={{ once: false }} transition={{ duration: 0.4, delay: 0.8, repeat: Infinity, repeatType: "loop", repeatDelay: 2 }} />
      <motion.line x1="35" y1="48" x2="65" y2="48" stroke="var(--color-ellipse)" strokeWidth="1" strokeLinecap="round"
        initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} viewport={{ once: false }} transition={{ duration: 0.4, delay: 0.9, repeat: Infinity, repeatType: "loop", repeatDelay: 2 }} />
      <motion.line x1="35" y1="56" x2="50" y2="56" stroke="var(--color-ellipse)" strokeWidth="1" strokeLinecap="round"
        initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} viewport={{ once: false }} transition={{ duration: 0.4, delay: 1.0, repeat: Infinity, repeatType: "loop", repeatDelay: 2 }} />
      <motion.path d="M56 54 L60 58 L68 46" stroke="var(--color-ellipse)" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"
        initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} viewport={{ once: false }} transition={{ duration: 0.5, delay: 1.3, repeat: Infinity, repeatType: "loop", repeatDelay: 2 }} />
    </svg>
  );
}

function MarketAnalysisIcon() {
  return (
    <svg width="120" height="120" viewBox="0 0 120 120" fill="none">
      <motion.polygon
        points="60,15 95,32 95,68 60,85 25,68 25,32"
        stroke="var(--color-ellipse)" strokeWidth="1.5" strokeLinejoin="round"
        initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} viewport={{ once: false }} transition={{ duration: 1, delay: 0.3, repeat: Infinity, repeatType: "loop", repeatDelay: 2 }}
      />
      <motion.polygon
        points="60,28 82,40 82,62 60,74 38,62 38,40"
        stroke="var(--color-ellipse)" strokeWidth="1" strokeLinejoin="round"
        initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} viewport={{ once: false }} transition={{ duration: 0.8, delay: 0.6, repeat: Infinity, repeatType: "loop", repeatDelay: 2 }}
      />
      <motion.polygon
        points="60,40 70,46 70,58 60,64 50,58 50,46"
        stroke="var(--color-ellipse)" strokeWidth="1" strokeLinejoin="round"
        initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} viewport={{ once: false }} transition={{ duration: 0.6, delay: 0.9, repeat: Infinity, repeatType: "loop", repeatDelay: 2 }}
      />
      <motion.line x1="60" y1="15" x2="60" y2="40" stroke="var(--color-ellipse)" strokeWidth="0.75" strokeDasharray="3 3"
        initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: false }} transition={{ duration: 0.4, delay: 1.1, repeat: Infinity, repeatType: "loop", repeatDelay: 2 }} />
      <motion.line x1="95" y1="68" x2="70" y2="58" stroke="var(--color-ellipse)" strokeWidth="0.75" strokeDasharray="3 3"
        initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: false }} transition={{ duration: 0.4, delay: 1.2, repeat: Infinity, repeatType: "loop", repeatDelay: 2 }} />
      <motion.line x1="25" y1="68" x2="50" y2="58" stroke="var(--color-ellipse)" strokeWidth="0.75" strokeDasharray="3 3"
        initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: false }} transition={{ duration: 0.4, delay: 1.3, repeat: Infinity, repeatType: "loop", repeatDelay: 2 }} />
      {[
        [60, 15], [95, 32], [95, 68], [60, 85], [25, 68], [25, 32],
      ].map(([cx, cy], i) => (
        <motion.circle key={i} cx={cx} cy={cy} r="2" stroke="var(--color-ellipse)" strokeWidth="1" fill="none"
          initial={{ scale: 0 }} whileInView={{ scale: 1 }} viewport={{ once: false }} transition={{ duration: 0.3, delay: 0.4 + i * 0.1, repeat: Infinity, repeatType: "loop", repeatDelay: 2 }} />
      ))}
    </svg>
  );
}

function InvestorConveningIcon() {
  return (
    <svg width="120" height="120" viewBox="0 0 120 120" fill="none">
      <motion.circle cx="60" cy="60" r="8" stroke="var(--color-ellipse)" strokeWidth="1.5"
        initial={{ scale: 0 }} whileInView={{ scale: 1 }} viewport={{ once: false }} transition={{ duration: 0.5, delay: 0.3, repeat: Infinity, repeatType: "loop", repeatDelay: 2 }} />
      {[
        [60, 20], [95, 38], [95, 82], [60, 100], [25, 82], [25, 38],
      ].map(([cx, cy], i) => (
        <motion.circle key={i} cx={cx} cy={cy} r="5" stroke="var(--color-ellipse)" strokeWidth="1" fill="none"
          initial={{ scale: 0 }} whileInView={{ scale: 1 }} viewport={{ once: false }} transition={{ duration: 0.4, delay: 0.5 + i * 0.1, repeat: Infinity, repeatType: "loop", repeatDelay: 2 }} />
      ))}
      {[
        [60, 20], [95, 38], [95, 82], [60, 100], [25, 82], [25, 38],
      ].map(([x2, y2], i) => (
        <motion.line key={i} x1="60" y1="60" x2={x2} y2={y2} stroke="var(--color-ellipse)" strokeWidth="0.75"
          initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} viewport={{ once: false }} transition={{ duration: 0.5, delay: 0.6 + i * 0.08, repeat: Infinity, repeatType: "loop", repeatDelay: 2 }} />
      ))}
      <motion.circle cx="60" cy="60" r="40" stroke="var(--color-ellipse)" strokeWidth="0.75" strokeDasharray="4 4"
        initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} viewport={{ once: false }} transition={{ duration: 1.5, delay: 1, repeat: Infinity, repeatType: "loop", repeatDelay: 2 }} />
    </svg>
  );
}

const serviceIcons = [
  <FundraisingIcon key="fundraising" />,
  <DueDiligenceIcon key="diligence" />,
  <MarketAnalysisIcon key="market" />,
  <InvestorConveningIcon key="convening" />,
];

const services = [
  {
    title: "Fundraising Support",
    description:
      "Strategic fundraising advisory for energy and infrastructure companies seeking institutional capital.",
  },
  {
    title: "Investment Due Diligence",
    description:
      "Deep-dive analysis for investors evaluating energy transition assets across UK and African markets.",
  },
  {
    title: "Strategic Market Analysis",
    description:
      "Bespoke research on energy policy, regulatory shifts, and market dynamics for investment committees.",
  },
  {
    title: "Investor Convening",
    description:
      "Curated introductions connecting capital allocators with best-in-class energy transition opportunities.",
  },
];

const clients = [
  { name: "Client 1", src: "/images/logos/client-1.svg" },
  { name: "Client 2", src: "/images/logos/client-2.svg" },
  { name: "Client 3", src: "/images/logos/client-3.svg" },
  { name: "Client 4", src: "/images/logos/client-4.svg" },
];

function ClientLogoSet({ keyPrefix }: { keyPrefix: string }) {
  return (
    <>
      {clients.map((client) => (
        <div
          key={`${keyPrefix}-${client.name}`}
          className="flex items-center justify-center h-12 shrink-0"
          style={{ paddingLeft: 48, paddingRight: 48 }}
        >
          <Image
            src={client.src}
            alt={client.name}
            width={200}
            height={48}
            className="object-contain h-10 w-auto"
          />
        </div>
      ))}
    </>
  );
}

export default function GordonManagement() {
  return (
    <section className="p-2 w-full">
      <div className="rounded-2xl px-4 md:px-10 py-10 md:py-16 w-full">
        {/* Header - center aligned */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center text-center gap-4 md:gap-6 mb-10 md:mb-16"
        >
          <span className="font-mono-main text-lg font-normal tracking-[-0.36px] leading-none text-[var(--color-dark)]">
            Investment Advisory
          </span>
          <h2 className="text-[36px] md:text-[72px] font-semibold leading-[1.1] tracking-[-0.72px] md:tracking-[-1.44px] text-[var(--color-body)]">
            Gordon Management
          </h2>
          <p className="font-mono-main text-base md:text-xl font-normal leading-[1.4] tracking-[-0.2px] text-[var(--color-black)] max-w-[680px]">
            Through Gordon Management, I advise investors, companies, and
            governments on investments in energy and infrastructure. With over a
            decade of experience across six continents, I bring unique
            perspective to complex transactions.
          </p>
          <motion.a
            href="#"
            whileHover={{ x: 4 }}
            className="font-mono-main text-lg md:text-xl font-semibold tracking-[-0.4px] text-[var(--color-accent)] py-1.5"
          >
            Learn more →
          </motion.a>
        </motion.div>

        {/* Service cards - center aligned */}
        <div className="flex gap-3 justify-center overflow-x-auto pb-4 scrollbar-hide">
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
              className="flex flex-col justify-between bg-white rounded-lg p-6 md:p-7 min-w-[280px] md:min-w-[330px] h-[380px] md:h-[440px] cursor-pointer"
            >
              <div className="flex flex-col gap-4 md:gap-6">
                <h3 className="text-[22px] md:text-[28px] font-semibold leading-[1.25] tracking-[-0.56px] text-[var(--color-dark)]">
                  {service.title}
                </h3>
                <p className="font-mono-main text-base md:text-lg font-normal leading-[1.25] tracking-[-0.18px] text-[var(--color-dark)] max-w-[324px]">
                  {service.description}
                </p>
              </div>
              {serviceIcons[i]}
            </motion.div>
          ))}
        </div>

        {/* Clients */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-10 md:mt-16"
        >
          <div className="overflow-hidden">
            <div className="flex animate-scroll" style={{ width: "fit-content" }}>
              <ClientLogoSet keyPrefix="a" />
              <ClientLogoSet keyPrefix="b" />
              <ClientLogoSet keyPrefix="c" />
              <ClientLogoSet keyPrefix="d" />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
