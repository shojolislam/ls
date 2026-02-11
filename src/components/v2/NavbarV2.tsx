"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import Link from "next/link";
import RollText from "./RollText";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Investing", href: "#investing" },
  { label: "Writing", href: "/writing" },
  { label: "Speaking", href: "/talks" },
  { label: "Book", href: "#book" },
  { label: "Contact", href: "mailto:lucyfionashaw@gmail.com" },
];

function NavLink({
  item,
  onClick,
}: {
  item: { label: string; href: string };
  onClick?: () => void;
}) {
  const className =
    "group/link font-sans-main text-[16px] font-medium leading-none tracking-[-0.4px] text-[var(--color-dark)] transition-colors";

  const content = (
    <>
      <RollText text={item.label} />{" "}
      <span className="inline-block opacity-0 -translate-x-2 transition-all duration-200 group-hover/link:opacity-100 group-hover/link:translate-x-0">
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="inline-block align-middle">
          <path d="M3.33 8H12.67M12.67 8L8.67 4M12.67 8L8.67 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </span>
    </>
  );

  if (item.href.startsWith("#")) {
    return (
      <a href={item.href} className={className} onClick={onClick}>
        {content}
      </a>
    );
  }
  if (item.href.startsWith("mailto:")) {
    return (
      <a href={item.href} className={className} onClick={onClick}>
        {content}
      </a>
    );
  }
  return (
    <Link href={item.href} className={className} onClick={onClick}>
      {content}
    </Link>
  );
}

export default function NavbarV2() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="relative flex items-center justify-between px-4 pt-4 pb-4 md:px-5 md:pt-5 md:pb-4 w-full"
    >
      <Link
        href="/"
        className="font-sans-main text-[24px] font-bold leading-none tracking-[-0.4px] text-[var(--color-dark)]"
      >
        Lucy Shaw
      </Link>

      {/* Desktop nav */}
      <div className="hidden md:flex items-center gap-6">
        {navLinks.map((item) => (
          <NavLink key={item.label} item={item} />
        ))}
      </div>

      {/* Mobile hamburger button (2 lines) */}
      <button
        onClick={() => setMenuOpen(!menuOpen)}
        className="md:hidden flex flex-col justify-center items-center gap-[6px] w-8 h-8"
        aria-label="Toggle menu"
      >
        <motion.span
          animate={menuOpen ? { rotate: 45, y: 4 } : { rotate: 0, y: 0 }}
          transition={{ duration: 0.2 }}
          className="block w-5 h-[1.5px] bg-[var(--color-dark)] origin-center"
        />
        <motion.span
          animate={menuOpen ? { rotate: -45, y: -4 } : { rotate: 0, y: 0 }}
          transition={{ duration: 0.2 }}
          className="block w-5 h-[1.5px] bg-[var(--color-dark)] origin-center"
        />
      </button>

      {/* Mobile menu dropdown */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="absolute top-full left-0 right-0 bg-[var(--color-card-bg)] z-50 overflow-hidden"
          >
            <div className="flex flex-col px-4 py-4 gap-4">
              {navLinks.map((item) => (
                <NavLink
                  key={item.label}
                  item={item}
                  onClick={() => setMenuOpen(false)}
                />
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
