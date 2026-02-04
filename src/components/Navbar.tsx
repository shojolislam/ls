"use client";

import { motion } from "framer-motion";

export default function Navbar() {
  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="flex items-center justify-between px-4 py-4 mx-2 w-full"
    >
      <span className="text-xl font-bold tracking-[-0.4px] leading-none">
        Lucy Shaw
      </span>
      <div className="flex items-center gap-4 md:gap-6">
        {["About", "Work", "Contact"].map((item) => (
          <motion.a
            key={item}
            href={`#${item.toLowerCase()}`}
            whileHover={{ y: -2 }}
            className="font-mono-main text-base md:text-xl font-medium tracking-[-0.4px] leading-none text-[var(--color-dark)] hover:text-[var(--color-accent)] transition-colors"
          >
            {item}
          </motion.a>
        ))}
      </div>
    </motion.nav>
  );
}
