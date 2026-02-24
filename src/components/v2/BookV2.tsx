"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import ScrollRevealWord from "./ScrollRevealWord";

const bookParagraphs = [
  `How do you break addiction? The first step is admitting you have a problem. The world\u2019s coal addiction costs 2.5 million lives each year from disease, adds billions of dollars to energy bills, and is the single largest contributor to climate change. From the pit worker at the coal face, to the person ordering cheap Chinese products on Amazon, we are all complicit in this health and environmental disaster. Many believe coal is a relic of a bygone era, yet in 2025 the world burned more than ever before. The question is, can we stop?`,
  `In \u201cSlow Burn: why we can\u2019t quit coal\u201d, I take readers on an exhilarating journey to the frontlines of the energy industry, as you\u2019ve never seen it before. What started as a curiosity to explain how coal makes energy cheap and reliable morphed into a political education on what the industry really offers: jobs, taxes, foreign exchange, geopolitical security, political donations, and community. The benefits of coal are ultimately a nationalist story, made all the more important in a world on the brink of conflict.`,
  `This book explains the reality of the energy transition: it cannot be achieved with cheap technology alone. Understanding why we depend on coal is essential for breaking the cycle, and avoiding a long and painful rehab. In my book, I articulate how we can power our modern lives without costing us the earth.`,
];

const contactText = `Please get in touch with my agent, Adrian, if you are interested in learning more: `;

/* Desktop scroll-driven version */
function BookDesktop() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Book cover: scroll 0–0.08
  const coverOpacity = useTransform(scrollYProgress, [0, 0.08], [0, 1]);
  const coverX = useTransform(scrollYProgress, [0, 0.08], [30, 0]);

  // Email link: appears at end of scroll
  const emailOpacity = useTransform(scrollYProgress, [0.85, 0.95], [0, 1]);

  // Build all words across paragraphs
  const allWords: string[] = [];
  const paragraphBreakIndices: Set<number> = new Set();

  bookParagraphs.forEach((para, pIdx) => {
    if (pIdx > 0) {
      paragraphBreakIndices.add(allWords.length);
    }
    para.split(/\s+/).forEach((w) => allWords.push(w));
  });

  const contactBreakIndex = allWords.length;
  contactText.split(/\s+/).filter(Boolean).forEach((w) => allWords.push(w));

  const totalWords = allWords.length;

  return (
    <div ref={containerRef} className="relative h-[300vh] w-full hidden lg:block px-4 lg:px-8">
      <div className="sticky top-0 h-screen flex items-start overflow-hidden pt-28">
        <div className="w-full bg-white rounded-2xl overflow-hidden flex flex-row">
          {/* Left column: header + scroll text */}
          <div className="flex flex-col gap-10 flex-1 min-w-0 p-8 lg:p-12 xl:p-14">
            {/* Header */}
            <div className="flex flex-col gap-4">
              <span className="font-sans-main text-lg font-normal tracking-[-0.36px] leading-none text-[var(--color-dark)]">
                The book
              </span>
              <h2 className="font-sans-main text-[48px] lg:text-[64px] xl:text-[72px] font-semibold leading-[1.1] tracking-[-1.44px] text-[var(--color-body)]">
                Slow Burn: why we can&apos;t quit coal
              </h2>
            </div>

            {/* Description — word-by-word reveal */}
            <div className="font-sans-main text-[18px] lg:text-[20px] xl:text-[22px] font-normal leading-[1.5] tracking-[-0.24px] text-[var(--color-text-primary)]">
              {allWords.map((word, i) => {
                if (i === contactBreakIndex) {
                  return (
                    <span key={i}>
                      <span className="block h-6" />
                      <ScrollRevealWord
                        word={word}
                        index={i}
                        totalWords={totalWords}
                        scrollYProgress={scrollYProgress}
                        rangeStart={0.08}
                        rangeEnd={0.85}
                      />
                      {" "}
                    </span>
                  );
                }
                return (
                  <span key={i}>
                    {paragraphBreakIndices.has(i) && (
                      <span className="block h-6" />
                    )}
                    <ScrollRevealWord
                      word={word}
                      index={i}
                      totalWords={totalWords}
                      scrollYProgress={scrollYProgress}
                      rangeStart={0.08}
                      rangeEnd={0.85}
                    />
                    {i < totalWords - 1 ? " " : ""}
                  </span>
                );
              })}
              <motion.a
                href="mailto:adrian@krugercowne.com"
                className="underline"
                style={{ opacity: emailOpacity }}
              >
                adrian@krugercowne.com
              </motion.a>
            </div>
          </div>

          {/* Right column: book cover with matching padding */}
          <motion.div
            style={{ opacity: coverOpacity, x: coverX }}
            className="w-[420px] xl:w-[480px] shrink-0 p-8 lg:p-12 xl:p-14"
          >
            <img
              src="/images/book-cover.png"
              alt="Slow Burn: Why we can't quit coal by Lucy Shaw"
              className="w-full h-auto object-contain rounded-2xl"
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
}

/* Mobile/tablet static version — no scroll effect */
function BookMobile() {
  return (
    <div className="lg:hidden py-20 w-full px-4">
      <div className="bg-white rounded-2xl p-6 md:p-10">
        <div className="flex flex-col gap-8">
          {/* Header — left-aligned */}
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
            <h2 className="font-sans-main text-[36px] font-semibold leading-[1.1] tracking-[-0.72px] text-[var(--color-body)]">
              Slow Burn: why we can&apos;t quit coal
            </h2>
          </motion.div>

          {/* Book cover — above text, smaller */}
          <motion.img
            src="/images/book-cover.png"
            alt="Slow Burn: Why we can't quit coal by Lucy Shaw"
            width={423}
            height={601}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="w-full max-w-[240px] h-auto object-cover shrink-0 rounded-xl"
          />

          {/* Body text */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col justify-start"
          >
            {bookParagraphs.map((para, idx) => (
              <p
                key={idx}
                className="font-sans-main text-lg font-normal leading-[1.5] tracking-[-0.24px] text-[var(--color-text-primary)] mt-4 first:mt-0"
              >
                {para}
              </p>
            ))}
            <p className="font-sans-main text-lg font-normal leading-[1.5] tracking-[-0.24px] text-[var(--color-text-primary)] mt-4">
              {contactText}
              <a href="mailto:adrian@krugercowne.com" className="underline">
                adrian@krugercowne.com
              </a>
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default function BookV2() {
  return (
    <section id="book">
      <BookDesktop />
      <BookMobile />
    </section>
  );
}
