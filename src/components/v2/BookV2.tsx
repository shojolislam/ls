"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import RollText from "./RollText";

const bookFirstParagraph = `How do you break addiction? The first step is admitting you have a problem. The world\u2019s coal addiction costs 2.5 million lives each year from disease, adds billions of dollars to energy bills, and is the single largest contributor to climate change. From the pit worker at the coal face, to the person ordering cheap Chinese products on Amazon, we are all complicit in this health and environmental disaster. Many believe coal is a relic of a bygone era, yet in 2025 the world burned more than ever before. The question is, can we stop?`;

export default function BookV2() {
  return (
    <section id="book" className="pb-16 md:pb-32 px-4 md:px-8 w-full">
      <div className="bg-white rounded-2xl overflow-hidden">
        <div className="flex flex-col lg:flex-row">
          {/* Left column: header + text */}
          <div className="flex flex-col gap-8 lg:gap-10 flex-1 min-w-0 p-6 md:p-10 lg:p-12 xl:p-14">
            {/* Header */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="flex flex-col gap-4"
            >
              <span className="font-sans-main text-lg font-normal tracking-[-0.36px] leading-none text-[var(--color-dark)]">
                The book
              </span>
              <h2 className="font-sans-main text-[36px] md:text-[48px] lg:text-[64px] xl:text-[72px] font-semibold leading-[1.1] tracking-[-0.72px] md:tracking-[-1.44px] text-[var(--color-body)]">
                Slow Burn: Why We Can&apos;t Quit Coal
              </h2>
            </motion.div>

            {/* Mobile book cover — right below title */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="lg:hidden w-full max-w-[300px]"
            >
              <img
                src="/images/book-cover-v2.png"
                alt="Slow Burn: Why We Can't Quit Coal by Lucy Shaw"
                className="w-full h-auto object-contain rounded-2xl"
              />
            </motion.div>

            {/* Body text — first paragraph only */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex flex-col gap-6"
            >
              <p className="font-sans-main text-base md:text-lg lg:text-[20px] xl:text-[22px] font-normal leading-[1.5] tracking-[-0.24px] text-[var(--color-text-primary)]">
                {bookFirstParagraph}
              </p>

              {/* CTAs */}
              <div className="flex flex-col lg:flex-row lg:flex-wrap lg:items-center gap-3 md:gap-4 pt-2">
                <Link
                  href="/book"
                  className="group/link inline-flex items-center justify-center gap-2 px-6 py-3 md:px-8 md:py-4 rounded-full border border-[var(--color-dark)]/30 bg-transparent hover:bg-[var(--color-dark)] transition-colors duration-300"
                >
                  <span className="font-sans-main text-[14px] md:text-[18px] font-medium tracking-[-0.36px] leading-[1.2] text-[var(--color-dark)] group-hover/link:text-[var(--color-card-bg)] transition-colors duration-300">
                    <RollText text="Read more" />
                  </span>
                  <svg width="14" height="14" viewBox="0 0 16 16" fill="none" className="md:w-4 md:h-4 text-[var(--color-dark)] group-hover/link:text-[var(--color-card-bg)] transition-colors duration-300">
                    <path d="M3.33 8H12.67M12.67 8L8.67 4M12.67 8L8.67 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </Link>
                <a
                  href="mailto:adrian@krugercowne.com"
                  className="group/link inline-flex items-center justify-center gap-2 px-6 py-3 md:px-8 md:py-4 rounded-full border border-[var(--color-dark)]/30 bg-transparent hover:bg-[var(--color-dark)] transition-colors duration-300"
                >
                  <span className="font-sans-main text-[14px] md:text-[18px] font-medium tracking-[-0.36px] leading-[1.2] text-[var(--color-dark)] group-hover/link:text-[var(--color-card-bg)] transition-colors duration-300">
                    <RollText text="Contact my agent" />
                  </span>
                  <svg width="14" height="14" viewBox="0 0 16 16" fill="none" className="md:w-4 md:h-4 text-[var(--color-dark)] group-hover/link:text-[var(--color-card-bg)] transition-colors duration-300">
                    <path d="M3.33 8H12.67M12.67 8L8.67 4M12.67 8L8.67 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </a>
              </div>
            </motion.div>
          </div>

          {/* Right column: book cover — desktop only */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="hidden lg:block lg:w-[460px] xl:w-[520px] shrink-0 lg:p-12 xl:p-14"
          >
            <img
              src="/images/book-cover-v2.png"
              alt="Slow Burn: Why We Can't Quit Coal by Lucy Shaw"
              className="w-full h-auto object-contain rounded-2xl"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
