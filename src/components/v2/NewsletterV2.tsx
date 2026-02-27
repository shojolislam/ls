"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import RollText from "./RollText";

export default function NewsletterV2() {
  return (
    <section className="w-full p-4 pb-12 md:pb-20">
      <div className="bg-[var(--color-body)] overflow-hidden w-full rounded-2xl">
        <div className="flex flex-col md:flex-row min-h-[400px] md:min-h-[464px]">
          {/* Left content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="flex flex-col justify-between flex-1 px-6 md:px-12 pt-8 md:pt-14 pb-8 md:pb-10"
          >
            {/* Title + subtitle at top */}
            <div className="flex flex-col gap-3 md:gap-4">
              <h2 className="font-sans-main text-[32px] sm:text-[48px] md:text-[64px] font-semibold leading-none tracking-[-0.64px] md:tracking-[-1.28px] text-[var(--color-card-bg)]">
                Subscribe to Slow Burn
              </h2>
              <p className="font-sans-main text-base md:text-[18px] font-normal leading-[1.6] tracking-[-0.18px] text-[var(--color-card-bg)]/70 max-w-[540px]">
                Lucy unpacks the progress and pitfalls of the energy transition - investment, politics, and power in the UK and globally. Subscribe to receive weekly long-read analysis direct to your inbox.
              </p>
            </div>

            {/* CTA button */}
            <div className="mt-6 md:mt-16">
              <a
                href="https://esgstuff.substack.com/subscribe"
                target="_blank"
                rel="noopener noreferrer"
                className="group/link inline-flex items-center gap-2 px-6 py-3 md:px-8 md:py-4 rounded-full border border-[var(--color-card-bg)]/30 bg-transparent hover:bg-[var(--color-card-bg)] transition-colors duration-300"
              >
                <span className="font-sans-main text-[14px] md:text-[18px] font-medium tracking-[-0.36px] leading-[1.2] text-[var(--color-card-bg)] group-hover/link:text-[var(--color-body)] transition-colors duration-300">
                  <RollText text="Subscribe" />
                </span>
                <svg width="14" height="14" viewBox="0 0 16 16" fill="none" className="md:w-4 md:h-4 text-[var(--color-card-bg)] group-hover/link:text-[var(--color-body)] transition-colors duration-300">
                  <path d="M3.33 8H12.67M12.67 8L8.67 4M12.67 8L8.67 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
            </div>
          </motion.div>

          {/* Right portrait image with spacing */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="w-full md:w-[320px] h-[300px] md:h-[360px] shrink-0 p-4 pt-0 md:pt-4 md:pl-0"
          >
            <div className="relative w-full h-full overflow-hidden rounded-xl">
              <Image
                src="/images/newsletter-portrait-v2.jpg"
                alt="Lucy Shaw"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 320px"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
