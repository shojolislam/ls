"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const articles = [
  {
    publication: "LabourList",
    date: "29 October 2025",
    title:
      "Labour must offer pride, not just employment, to former coal communities",
    image: "/images/writing-2.png",
  },
  {
    publication: "The Fabian Society",
    date: "29 October 2025",
    title:
      "Cut to the quick - the government must invest more in short-term solutions to our energy crisis",
    image: "/images/writing-3.png",
  },
  {
    publication: "The Financial Times",
    date: "29 October 2025",
    title: "Clouded Thinking on Business Class Passengers",
    image: "/images/writing-4.png",
  },
  {
    publication: "The Economist",
    date: "29 October 2025",
    title: "Let Solar Shine",
    image: "/images/writing-5.png",
  },
  {
    publication: "The Economist",
    date: "29 October 2025",
    title: "The Economist Letters: A Strict Immigration Policy",
    image: "/images/writing-6.png",
  },
];

import type { Variants } from "framer-motion";

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.1 },
  }),
};

export default function Writing() {
  const [activeTab, setActiveTab] = useState<"Writing" | "Speaking">("Writing");

  return (
    <section className="py-20 md:py-40 w-full max-w-[1024px] mx-auto px-4 md:px-0">
      {/* Main heading */}
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="text-[36px] md:text-[72px] font-semibold leading-[1.1] tracking-[-0.72px] md:tracking-[-1.44px] text-[var(--color-body)]"
      >
        I write and talk about energy transition, climate investing, ESG,
        infrastructure, and more
      </motion.h2>

      {/* Tabs */}
      <div className="flex gap-2 mt-10 md:mt-16">
        {(["Writing", "Speaking"] as const).map((tab) => (
          <motion.button
            key={tab}
            onClick={() => setActiveTab(tab)}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className={`font-mono-main text-base md:text-xl font-semibold tracking-[-0.4px] leading-none rounded-lg px-4 md:px-5 py-2.5 md:py-3 transition-colors ${
              activeTab === tab
                ? "bg-[var(--color-accent)] text-[#e7e7e7]"
                : "text-[var(--color-dark)] hover:bg-[var(--color-dark)]/5"
            }`}
          >
            {tab}
          </motion.button>
        ))}
      </div>

      {/* Article cards */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.3 }}
          className="flex flex-col gap-0 mt-8"
        >
          {articles.map((article, i) => (
            <motion.article
              key={article.title}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={cardVariants}
              whileHover={{ x: 8, transition: { duration: 0.2 } }}
              className="flex items-center gap-4 md:gap-10 rounded-xl py-6 md:py-9 border-t border-transparent hover:border-[var(--color-accent)]/20 transition-colors cursor-pointer"
            >
              {/* Thumbnail */}
              <div className="w-20 md:w-40 h-[60px] md:h-[100px] rounded-lg overflow-hidden shrink-0">
                <Image
                  src={article.image}
                  alt={article.title}
                  width={160}
                  height={100}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="flex flex-col gap-2 md:gap-4 flex-1">
                <span className="font-mono-main text-sm md:text-lg font-normal tracking-[-0.36px] leading-none text-[var(--color-dark)]">
                  {article.publication} · {article.date}
                </span>
                <h3 className="text-lg md:text-[28px] font-semibold leading-[1.25] tracking-[-0.36px] md:tracking-[-0.56px] text-[var(--color-dark)]">
                  {article.title}
                </h3>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </AnimatePresence>

      {/* View all */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="flex items-center py-2 mt-4"
      >
        <motion.a
          href="#"
          whileHover={{ x: 4 }}
          className="font-mono-main text-xl font-semibold tracking-[-0.4px] text-[var(--color-accent)] hover:underline"
        >
          View all →
        </motion.a>
      </motion.div>
    </section>
  );
}
