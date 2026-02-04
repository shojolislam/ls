"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Newsletter() {
  return (
    <section className="p-2 w-full">
      <div className="rounded-2xl p-4 md:p-10 w-full relative overflow-hidden">
        <div className="flex flex-col md:flex-row gap-8 md:gap-16">
          {/* Left content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="flex flex-col justify-between flex-1"
          >
            <div className="flex flex-col gap-4 md:gap-6">
              <span className="font-mono-main text-lg font-normal tracking-[-0.36px] leading-none text-[var(--color-dark)]">
                Slow Burn
              </span>
              <h2 className="text-[32px] md:text-[56px] font-semibold leading-[1.1] tracking-[-0.64px] md:tracking-[-1.12px] text-[var(--color-body)]">
                Subscribe to my newsletter
              </h2>
              <p className="font-mono-main text-base md:text-xl font-normal leading-[1.4] tracking-[-0.2px] text-[var(--color-black)]">
                Unpacking the progress and pitfalls of the energy transition -
                investment, politics, and power in the UK and globally.
              </p>
            </div>

            {/* Subscription form */}
            <div className="flex flex-col gap-6 md:gap-8 mt-8 md:mt-12 max-w-[680px]">
              <div className="flex flex-col md:flex-row gap-2">
                <motion.input
                  whileFocus={{ scale: 1.01 }}
                  type="email"
                  placeholder="Your email"
                  className="flex-1 bg-white rounded-lg px-4 md:px-6 py-3.5 border border-[var(--color-border)] font-mono-main text-base outline-none focus:border-[var(--color-accent)] transition-colors"
                />
                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className="bg-[var(--color-accent)] text-white font-mono-main text-lg md:text-xl font-semibold tracking-[-0.4px] rounded-lg px-5 py-3"
                >
                  Subscribe
                </motion.button>
              </div>
              <p className="text-sm md:text-base font-normal leading-[1.25] tracking-[-0.16px] text-[var(--color-black)]/50">
                By subscribing you agree to Substack&apos;s Terms of Use, our
                Privacy Policy and our Information collection notice
              </p>
            </div>
          </motion.div>

          {/* Right image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="w-full md:w-[300px] shrink-0 md:-mt-10 md:-mr-2"
          >
            <Image
              src="/images/newsletter.jpg"
              alt="Lucy Shaw"
              width={300}
              height={420}
              className="w-full h-[300px] md:h-[420px] object-cover object-top rounded-xl"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
