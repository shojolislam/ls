"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function NewsletterV2() {
  return (
    <section className="px-4 md:px-6 pb-12 md:pb-20 w-full">
      <div className="bg-[var(--color-body)] overflow-hidden w-full">
        <div className="flex flex-col md:flex-row min-h-[400px] md:min-h-[520px]">
          {/* Left content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="flex flex-col justify-between flex-1 px-6 md:px-12 pt-10 md:pt-14 pb-8 md:pb-10"
          >
            {/* Title + subtitle at top */}
            <div className="flex flex-col gap-3 md:gap-4">
              <h2 className="font-plantin text-[32px] sm:text-[48px] md:text-[64px] font-normal leading-none tracking-[-0.64px] md:tracking-[-1.28px] text-[var(--color-card-bg)]">
                Slow Burn newsletter
              </h2>
              <p className="font-helvetica text-base md:text-[18px] font-normal leading-[1.5] tracking-[-0.18px] text-[var(--color-card-bg)]/70 max-w-[540px]">
                Unpacking the progress and pitfalls of the energy transition -
                investment, politics, and power in the UK and globally.
              </p>
            </div>

            {/* CTA button */}
            <div className="mt-10 md:mt-16">
              <motion.a
                href="https://esgstuff.substack.com/"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ opacity: 0.9 }}
                whileTap={{ scale: 0.97 }}
                className="inline-block bg-[var(--color-card-bg)] font-plantin text-base md:text-lg font-medium tracking-[-0.36px] text-[var(--color-body)] px-6 md:px-8 py-3 md:py-4"
              >
                Read Articles
              </motion.a>
            </div>
          </motion.div>

          {/* Right portrait image with spacing */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="w-full md:w-[300px] h-[300px] md:h-auto shrink-0 p-4 pt-0 md:pt-4 md:pl-0"
          >
            <div className="relative w-full h-full overflow-hidden">
              <Image
                src="/images/newsletter-portrait.jpg"
                alt="Lucy Shaw"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 300px"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
