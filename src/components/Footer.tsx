"use client";

import { motion } from "framer-motion";

const links = [
  { label: "Get in touch", href: "#contact" },
  { label: "Newsletter", href: "#newsletter" },
  { label: "LinkedIn", href: "#" },
  { label: "X.com", href: "#" },
  { label: "Instagram", href: "#" },
];

export default function Footer() {
  return (
    <section className="p-2 w-full">
      <div className="bg-[var(--color-gray-bg)] rounded-xl w-full">
        {/* Top section */}
        <div className="flex flex-col md:flex-row justify-between items-start p-6 md:p-8 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex flex-col gap-6"
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
                className="font-mono-main text-lg md:text-xl font-semibold tracking-[-0.4px] text-[var(--color-dark)] hover:text-[var(--color-accent)] transition-colors"
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
            className="font-meritocracy text-[48px] md:text-[72px] font-normal leading-[1.25] tracking-[-0.96px] md:tracking-[-1.44px] text-right text-[var(--color-dark)]"
          >
            Lucy Shaw
          </motion.span>
        </div>

        {/* Bottom section */}
        <div className="flex justify-between items-end p-4 md:p-6">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="flex flex-col md:flex-row md:items-end gap-4 md:gap-[189px] justify-between w-full"
          >
            <span className="text-[80px] md:text-[200px] font-semibold leading-none tracking-[-2px] md:tracking-[-4px] text-[var(--color-dark)]">
              Lucy Shaw
            </span>
            <div className="flex items-center gap-2 pb-2 md:pb-6">
              <span className="text-lg md:text-2xl font-normal tracking-[-0.48px] text-[var(--color-dark)] md:text-right whitespace-pre-line">
                {"Entrepreneur,\nAdvisor & Investor"}
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
