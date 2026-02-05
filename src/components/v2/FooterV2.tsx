"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const links = [
  { label: "Newsletter", href: "#newsletter" },
  { label: "LinkedIn", href: "#" },
  { label: "X.com", href: "#" },
  { label: "Instagram", href: "#" },
];

const letterVariants = {
  hidden: { y: "100%", opacity: 0 },
  visible: (i: number) => ({
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
      delay: i * 0.04,
    },
  }),
};

function AnimatedFooterTitle() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: "-100px" });
  const words = ["Lucy", " ", "Shaw"];

  let charIndex = 0;

  return (
    <span
      ref={ref}
      className="font-plantin text-[80px] sm:text-[140px] md:text-[180px] lg:text-[270px] font-normal leading-[0.85] tracking-[-2px] md:tracking-[-5.4px] text-[var(--color-body)] -mb-[0.1em]"
    >
      {words.map((word, wi) => {
        if (word === " ") {
          return <span key={`space-${wi}`}>&nbsp;</span>;
        }
        return (
          <span key={wi} className="inline-flex overflow-hidden pt-[0.15em] -mt-[0.15em]">
            {word.split("").map((char) => {
              const idx = charIndex++;
              return (
                <motion.span
                  key={idx}
                  custom={idx}
                  variants={letterVariants}
                  initial="hidden"
                  animate={isInView ? "visible" : "hidden"}
                  className="inline-block"
                >
                  {char}
                </motion.span>
              );
            })}
          </span>
        );
      })}
    </span>
  );
}

export default function FooterV2() {
  return (
    <section className="w-full px-4 md:px-6">
      {/* Top section: links + name */}
      <div className="flex justify-between items-start p-4 md:p-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col gap-4 md:gap-6"
        >
          {links.map((link, i) => (
            <motion.a
              key={link.label}
              href={link.href}
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: i * 0.05 }}
              whileHover={{ x: 4 }}
              className="font-plantin text-base md:text-xl font-normal tracking-[-0.4px] text-[var(--color-dark)] hover:text-[var(--color-accent)] transition-colors"
            >
              {link.label}
            </motion.a>
          ))}
        </motion.div>

        <motion.span
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="font-meritocracy text-[36px] sm:text-[48px] md:text-[72px] font-normal leading-none tracking-[-1.44px] text-right text-[var(--color-dark)]"
        >
          Lucy Shaw
        </motion.span>
      </div>

      {/* Bottom section: large name + subtitle */}
      <div className="flex flex-col md:flex-row justify-between md:items-end p-4 md:p-6 pt-6 md:pt-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between w-full gap-4">
          <AnimatedFooterTitle />
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="font-plantin text-lg md:text-2xl font-normal tracking-[-0.48px] text-[var(--color-dark)] md:text-right whitespace-pre-line shrink-0"
          >
            {"Entrepreneur,\nAdvisor & Investor"}
          </motion.p>
        </div>
      </div>
    </section>
  );
}
