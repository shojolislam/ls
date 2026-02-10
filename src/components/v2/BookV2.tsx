"use client";

import { motion } from "framer-motion";

export default function BookV2() {
  return (
    <section id="book" className="py-20 md:py-40 w-full px-4 md:px-10">
      <div className="flex flex-col items-center gap-10 md:gap-16">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center gap-6 text-center"
        >
          <span className="font-sans-main text-lg font-normal tracking-[-0.36px] leading-none text-[var(--color-dark)]">
            The book
          </span>
          <h2 className="font-sans-main text-[36px] md:text-[72px] font-semibold leading-[1.1] tracking-[-0.72px] md:tracking-[-1.44px] text-[var(--color-body)] max-w-[836px]">
            Slow Burn: why we can&apos;t quit coal
          </h2>
        </motion.div>

        {/* Content */}
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-[60px] max-w-[1024px]">
          {/* Book cover */}
          <motion.img
            src="/images/book-cover.png"
            alt="Slow Burn: Why we can't quit coal by Lucy Shaw"
            width={423}
            height={601}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            whileHover={{ rotate: -2, scale: 1.02 }}
            className="w-full max-w-[320px] md:w-[423px] md:max-w-none h-auto md:h-[601px] object-cover shrink-0"
          />

          {/* Description */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col justify-end"
          >
            <p className="font-sans-main text-lg md:text-[22px] font-normal leading-[1.5] tracking-[-0.24px] text-[var(--color-text-primary)]">
              While some regard coal as a relic of the industrial revolution, it
              has never been more important to powering our modern economy. Coal
              powers 34% of the world&apos;s electricity, more than any other fuel,
              and global demand keeps breaking new records. Despite the
              break-neck pace of renewable energy installations, coal remains the
              bedrock of energy systems from Asia to North America to Africa.
            </p>
            <p className="font-sans-main text-lg md:text-[22px] font-normal leading-[1.5] tracking-[-0.24px] text-[var(--color-text-primary)] mt-4 md:mt-6">
              Coal is also controversial because of its climate and health
              impacts. It has the highest climate impact of any fossil fuel,
              producing 37% of annual global emissions, and is one of the most
              harmful energy sources to human health.
            </p>
            <p className="font-sans-main text-lg md:text-[22px] font-normal leading-[1.5] tracking-[-0.24px] text-[var(--color-text-primary)] mt-4 md:mt-6">
              Please get in touch with my agent, Adrian, if you are interested
              in learning more:{" "}
              <a href="mailto:adrian@krugercowne.com" className="underline">adrian@krugercowne.com</a>
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
