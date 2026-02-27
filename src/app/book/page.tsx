"use client";

import { motion } from "framer-motion";
import NavbarV2 from "@/components/v2/NavbarV2";
import FooterV2 from "@/components/v2/FooterV2";

const bookParagraphs = [
  `How do you break addiction? The first step is admitting you have a problem. The world\u2019s coal addiction costs 2.5 million lives each year from disease, adds billions of dollars to energy bills, and is the single largest contributor to climate change. From the pit worker at the coal face, to the person ordering cheap Chinese products on Amazon, we are all complicit in this health and environmental disaster. Many believe coal is a relic of a bygone era, yet in 2025 the world burned more than ever before. The question is, can we stop?`,
  `In \u201cSlow Burn: why we can\u2019t quit coal\u201d, I take readers on an exhilarating journey to the frontlines of the energy industry, as you\u2019ve never seen it before. What started as a curiosity to explain how coal makes energy cheap and reliable morphed into a political education on what the industry really offers: jobs, taxes, foreign exchange, geopolitical security, political donations, and community. The benefits of coal are ultimately a nationalist story, made all the more important in a world on the brink of conflict.`,
  `This book explains the reality of the energy transition: it cannot be achieved with cheap technology alone. Understanding why we depend on coal is essential for breaking the cycle, and avoiding a long and painful rehab. In my book, I articulate how we can power our modern lives without costing us the earth.`,
];

const contactText = `Please get in touch with my agent, Adrian, if you are interested in learning more: `;

export default function BookPage() {
  return (
    <div className="w-full bg-[var(--color-card-bg)] min-h-screen">
      <NavbarV2 />

      <div className="max-w-[1440px] mx-auto px-4 md:px-8 pt-16 md:pt-24 pb-16 md:pb-32">
        <div className="bg-white rounded-2xl overflow-hidden">
          <div className="flex flex-col lg:flex-row">
            {/* Left column: header + text */}
            <div className="flex flex-col gap-8 lg:gap-10 flex-1 min-w-0 p-6 md:p-10 lg:p-12 xl:p-14">
              {/* Header */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="flex flex-col gap-4"
              >
                <span className="font-sans-main text-lg font-normal tracking-[-0.36px] leading-none text-[var(--color-dark)]">
                  The book
                </span>
                <h1 className="font-sans-main text-[36px] md:text-[48px] lg:text-[64px] xl:text-[72px] font-semibold leading-[1.1] tracking-[-0.72px] md:tracking-[-1.44px] text-[var(--color-body)]">
                  Slow Burn: Why We Can&apos;t Quit Coal
                </h1>
              </motion.div>

              {/* Body text — all paragraphs */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="flex flex-col gap-4"
              >
                {bookParagraphs.map((para, idx) => (
                  <p
                    key={idx}
                    className="font-sans-main text-base md:text-lg lg:text-[20px] xl:text-[22px] font-normal leading-[1.5] tracking-[-0.24px] text-[var(--color-text-primary)]"
                  >
                    {para}
                  </p>
                ))}
                <p className="font-sans-main text-base md:text-lg lg:text-[20px] xl:text-[22px] font-normal leading-[1.5] tracking-[-0.24px] text-[var(--color-text-primary)]">
                  {contactText}
                  <a href="mailto:adrian@krugercowne.com" className="underline">
                    adrian@krugercowne.com
                  </a>
                </p>
              </motion.div>
            </div>

            {/* Right column: book cover */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="w-full max-w-[300px] lg:w-[460px] xl:w-[520px] lg:max-w-none shrink-0 px-6 pb-6 md:px-10 md:pb-10 lg:p-12 xl:p-14"
            >
              <img
                src="/images/book-cover-v2.png"
                alt="Slow Burn: Why We Can't Quit Coal by Lucy Shaw"
                className="w-full h-auto object-contain rounded-2xl"
              />
            </motion.div>
          </div>
        </div>
      </div>

      <FooterV2 />
    </div>
  );
}
