"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import RollText from "./RollText";

const links = [
  { label: "Newsletter", href: "https://esgstuff.substack.com" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/lucyfionashaw" },
  { label: "X.com", href: "http://x.com/lucyfshaw" },
  { label: "Instagram", href: "http://instagram.com/lucyfshaw" },
  { label: "Contact", href: "mailto:lucyfionashaw@gmail.com" },
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
      className="font-plantin text-[96px] sm:text-[140px] md:text-[180px] lg:text-[270px] font-normal leading-[0.85] tracking-[-2px] md:tracking-[-5.4px] text-[var(--color-body)] -mb-[0.1em]"
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
      <div className="flex justify-between items-start px-0 py-4 md:p-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col gap-2 md:gap-6"
        >
          {links.map((link, i) => (
            <motion.a
              key={link.label}
              href={link.href}
              target={link.href.startsWith("mailto:") ? undefined : "_blank"}
              rel={link.href.startsWith("mailto:") ? undefined : "noopener noreferrer"}
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: i * 0.05 }}
              className="group/link font-plantin text-[20px] font-medium tracking-[-0.4px] text-[var(--color-dark)] transition-colors"
            >
              <RollText text={link.label} />{" "}<span className="inline-block opacity-0 -translate-x-2 transition-all duration-200 group-hover/link:opacity-100 group-hover/link:translate-x-0"><svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="inline-block align-middle"><path d="M3.33 8H12.67M12.67 8L8.67 4M12.67 8L8.67 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg></span>
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
      <div className="flex flex-col md:flex-row justify-between md:items-end px-0 py-4 md:p-6 pt-6 md:pt-10">
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
