"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function BookV2() {
  return (
    <section className="flex flex-col items-center gap-10 md:gap-16 pb-24 md:pb-52 px-4 md:px-6 w-full">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="flex flex-col items-center gap-6 md:gap-10"
      >
        <span className="font-helvetica text-base md:text-lg font-normal tracking-[-0.36px] leading-none text-[var(--color-dark)]">
          The book
        </span>
        <h2 className="font-plantin text-[48px] sm:text-[56px] md:text-[64px] lg:text-[80px] font-normal leading-none tracking-[-0.8px] md:tracking-[-1.6px] text-[var(--color-body)] text-center">
          Slow Burn: how to quit coal
        </h2>
      </motion.div>

      {/* Book content: image + text */}
      <div className="flex flex-col md:flex-row gap-8 md:gap-[60px] max-w-[1024px]">
        {/* Book cover */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="w-full md:w-[465px] h-[500px] sm:h-[580px] md:h-[661px] shrink-0 relative mx-auto md:mx-0 max-w-[465px] drop-shadow-[0_8px_30px_rgba(0,0,0,0.25)]"
        >
          <Image
            src="/images/book-cover.png"
            alt="Slow Burn: How to quit coal by Lucy Shaw"
            fill
            className="object-contain rounded-sm"
            sizes="(max-width: 768px) 100vw, 465px"
          />
        </motion.div>

        {/* Book description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="font-helvetica text-lg md:text-2xl font-normal leading-[1.4] tracking-[-0.24px] text-[var(--color-text-primary)] flex-1 whitespace-pre-line"
        >
          While some regard coal as a relic of the industrial revolution, it has never been more important to powering our modern economy. Coal powers 34% of the world&apos;s electricity, more than any other fuel, and global demand keeps breaking new records. Despite the break-neck pace of renewable energy installations, coal remains the bedrock of energy systems from Asia to North America to Africa.
          {"\n\n"}
          Coal is also controversial because of its climate and health impacts. It has the highest climate impact of any fossil fuel, producing 37% of annual global emissions, and is one of the most harmful energy sources to human health.
          {"\n\n"}
          Please get in touch with my agent, Adrian, if you are interested in learning more:{" "}
          <a href="mailto:adrian@krugercowne.com" className="underline">adrian@krugercowne.com</a>
        </motion.p>
      </div>
    </section>
  );
}
