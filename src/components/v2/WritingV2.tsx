"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import RollText from "./RollText";

const articles = [
  {
    title: "Labour must offer pride, not just employment, to former coal communities",
    publication: "LabourList",
    date: "1 November 2025",
    image: "/images/writing-2.png",
    href: "https://labourlist.org/2025/11/coal-culture-green-jobs/",
  },
  {
    title: "Cut to the quick - the government must invest more in short-term solutions to our energy crisis",
    publication: "The Fabian Society",
    date: "29 October 2025",
    image: "/images/writing-fabian.jpg",
    href: "https://fabians.org.uk/cut-to-the-quick/",
  },
  {
    title: "Clouded Thinking on Business Class Passengers",
    publication: "The Financial Times",
    date: "2 May 2025",
    image: "/images/writing-ft-general.jpeg",
    href: "https://www.ft.com/content/f7b2eae3-faf6-4a6c-9be1-2b7553934717",
  },
  {
    title: "Let Solar Shine",
    publication: "The Economist",
    date: "4 July 2024",
    image: "/images/writing-5.png",
    href: "https://www.economist.com/letters/2024/07/04/letters-to-the-editor",
  },
  {
    title: "The Economist Letters: A Strict Immigration Policy",
    publication: "The Economist",
    date: "7 May 2022",
    image: "/images/writing-6.png",
    href: "https://www.economist.com/letters/2022/05/07/letters-to-the-editor",
  },
];

export default function WritingV2() {
  return (
    <section id="writing" className="scroll-mt-16 py-16 md:py-32 px-4 md:px-8 w-full">
      <div className="bg-white rounded-2xl overflow-hidden">
        {/* Title + articles row with image */}
        <div className="flex flex-col xl:flex-row xl:gap-6 p-4 xl:p-6">
          {/* Mobile image — shown above title on small screens */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="xl:hidden w-full mb-4"
          >
            <div className="relative w-full h-[300px] overflow-hidden rounded-xl">
              <Image
                src="/images/writing-header-new.jpg"
                alt="Writing"
                fill
                className="object-cover object-top"
                sizes="100vw"
              />
            </div>
          </motion.div>

          {/* Left column: title + articles */}
          <div className="flex flex-col flex-1 min-w-0">
            {/* Header */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="flex flex-col gap-3 md:gap-4 px-2 md:px-8 pt-4 md:pt-8 pb-6 md:pb-8"
            >
              <h2 className="font-sans-main text-[32px] sm:text-[48px] md:text-[64px] font-semibold leading-none tracking-[-0.64px] md:tracking-[-1.28px] text-[var(--color-body)]">
                Writing
              </h2>
              <p className="font-sans-main text-base md:text-[18px] font-normal leading-[1.6] tracking-[-0.18px] text-[var(--color-dark)]/70 max-w-[540px]">
                Published articles and opinion pieces on energy, investment, and the transition.
              </p>
            </motion.div>

            {/* Articles list */}
            <div className="flex flex-col">
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
                  className="group relative flex flex-row-reverse md:flex-row items-center gap-4 md:gap-10 py-6 px-2 md:px-8 rounded-xl cursor-pointer transition-colors duration-300 ease-in-out hover:bg-gray-100"
                >
                  <div className="w-24 h-16 md:w-40 md:h-[100px] shrink-0 relative overflow-hidden rounded-lg">
                    <Image
                      src={article.image}
                      alt={article.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 96px, 160px"
                    />
                  </div>
                  <div className="flex flex-col gap-3 md:gap-4 flex-1">
                    <span className="font-sans-main text-base md:text-lg font-semibold tracking-[-0.36px] leading-none text-[var(--color-body)]">
                      {article.publication}
                    </span>
                    <h3 className="font-sans-main text-xl md:text-[28px] font-semibold leading-[1.25] tracking-[-0.56px] text-[var(--color-dark)]">
                      {article.title}
                    </h3>
                    <span className="font-sans-main text-sm md:text-base font-normal tracking-[-0.32px] leading-none text-[var(--color-dark)]/60">
                      {article.date}
                    </span>
                  </div>
                </motion.a>
              ))}
            </div>
          </div>

          {/* Right column: image — desktop only */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="hidden xl:block w-[420px] shrink-0"
          >
            <div className="relative w-full h-full overflow-hidden rounded-xl">
              <Image
                src="/images/writing-header-new.jpg"
                alt="Writing"
                fill
                className="object-cover"
                sizes="420px"
              />
            </div>
          </motion.div>
        </div>

        {/* View all */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex items-center justify-start px-6 md:px-14 pb-8 md:pb-10"
        >
          <Link
            href="/writing"
            className="group/link inline-flex items-center gap-2 px-6 py-3 md:px-8 md:py-4 rounded-full border border-[var(--color-dark)]/30 bg-transparent hover:bg-[var(--color-dark)] transition-colors duration-300"
          >
            <span className="font-sans-main text-[14px] md:text-[18px] font-medium tracking-[-0.36px] leading-[1.2] text-[var(--color-dark)] group-hover/link:text-[var(--color-card-bg)] transition-colors duration-300">
              <RollText text="View all" />
            </span>
            <svg width="14" height="14" viewBox="0 0 16 16" fill="none" className="md:w-4 md:h-4 text-[var(--color-dark)] group-hover/link:text-[var(--color-card-bg)] transition-colors duration-300">
              <path d="M3.33 8H12.67M12.67 8L8.67 4M12.67 8L8.67 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
        </motion.div>

        {/* Subscribe subsection */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 md:gap-8 px-2 md:px-14 pb-8 md:pb-14 pt-8 md:pt-10 mx-4 md:mx-0 border-t border-[var(--color-dark)]/10"
        >
          <h3 className="font-sans-main text-xl md:text-[28px] font-semibold leading-[1.25] tracking-[-0.56px] text-[var(--color-dark)]">
            Subscribe to Slow Burn for regular updates
          </h3>
          <a
            href="https://esgstuff.substack.com/subscribe"
            target="_blank"
            rel="noopener noreferrer"
            className="group/link inline-flex items-center gap-2 px-6 py-3 md:px-8 md:py-4 rounded-full border border-[var(--color-dark)]/30 bg-transparent hover:bg-[var(--color-dark)] transition-colors duration-300 shrink-0 self-start md:self-auto"
          >
            <span className="font-sans-main text-[14px] md:text-[18px] font-medium tracking-[-0.36px] leading-[1.2] text-[var(--color-dark)] group-hover/link:text-[var(--color-card-bg)] transition-colors duration-300">
              <RollText text="Subscribe" />
            </span>
            <svg width="14" height="14" viewBox="0 0 16 16" fill="none" className="md:w-4 md:h-4 text-[var(--color-dark)] group-hover/link:text-[var(--color-card-bg)] transition-colors duration-300">
              <path d="M3.33 8H12.67M12.67 8L8.67 4M12.67 8L8.67 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
