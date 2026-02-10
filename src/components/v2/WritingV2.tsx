"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import RollText from "./RollText";

const articles = [
  {
    title: "Labour must offer pride, not just employment, to former coal communities",
    publication: "LabourList",
    date: "29 October 2025",
    image: "/images/writing-2.png",
    href: "https://labourlist.org/2025/11/coal-culture-green-jobs/",
  },
  {
    title: "Cut to the quick - the government must invest more in short-term solutions to our energy crisis",
    publication: "The Fabian Society",
    date: "29 October 2025",
    image: "/images/writing-3.png",
    href: "https://fabians.org.uk/cut-to-the-quick/",
  },
  {
    title: "Clouded Thinking on Business Class Passengers",
    publication: "The Financial Times",
    date: "29 October 2025",
    image: "/images/writing-4.png",
    href: "https://www.ft.com/content/f7b2eae3-faf6-4a6c-9be1-2b7553934717",
  },
  {
    title: "Let Solar Shine",
    publication: "The Economist",
    date: "29 October 2025",
    image: "/images/writing-5.png",
    href: "https://www.economist.com/letters/2024/07/04/letters-to-the-editor",
  },
  {
    title: "The Economist Letters: A Strict Immigration Policy",
    publication: "The Economist",
    date: "29 October 2025",
    image: "/images/writing-6.png",
    href: "https://www.economist.com/letters/2022/05/07/letters-to-the-editor",
  },
];

export default function WritingV2() {
  return (
    <section className="flex flex-col xl:flex-row xl:justify-center pb-24 md:pb-52 px-4 md:px-8 w-full">
      {/* Left heading — sticky on desktop */}
      <div className="xl:flex-1 pt-8 xl:pt-12 pb-10 md:pb-12 xl:pb-[120px]">
        <div className="xl:sticky xl:top-0 xl:pt-10 xl:pb-10">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="font-sans-main text-[48px] sm:text-[56px] md:text-[64px] xl:text-[80px] font-semibold leading-[1.1] tracking-[-0.8px] md:tracking-[-1.6px] text-[var(--color-body)]"
          >
            Writing
          </motion.h2>
        </div>
      </div>

      {/* Articles list */}
      <div className="flex flex-col w-full xl:w-[900px] xl:shrink-0">
        {articles.map((article, i) => (
          <motion.a
            key={article.title}
            href={article.href}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="group relative flex items-center gap-4 md:gap-10 py-7 md:py-9 cursor-pointer"
          >
            <div className="flex flex-col gap-2 md:gap-4 flex-1">
              <h3 className="font-sans-main text-xl md:text-[28px] font-semibold leading-[1.25] tracking-[-0.56px] text-[var(--color-dark)]">
                {article.title}
              </h3>
              <span className="font-sans-main text-sm md:text-lg font-normal tracking-[-0.36px] leading-none text-[var(--color-dark)]/50">
                {article.publication} · {article.date}
              </span>
            </div>
            <div className="w-24 h-16 md:w-40 md:h-[100px] shrink-0 relative overflow-hidden rounded-lg">
              <Image
                src={article.image}
                alt={article.title}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 96px, 160px"
              />
            </div>
{/* No border lines */}
          </motion.a>
        ))}

        {/* View all */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex items-center justify-start pt-8"
        >
          <Link
            href="/writing"
            className="group/link font-sans-main text-[20px] font-medium tracking-[-0.4px] text-[var(--color-dark)] transition-colors"
          >
            <RollText text="View all" />{" "}<span className="inline-block opacity-0 -translate-x-2 transition-all duration-200 group-hover/link:opacity-100 group-hover/link:translate-x-0"><svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="inline-block align-middle"><path d="M3.33 8H12.67M12.67 8L8.67 4M12.67 8L8.67 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg></span>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
