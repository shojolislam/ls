"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import Link from "next/link";
import RollText from "./RollText";

const navLinks = [
  { label: "About", href: "/#about" },
  { label: "Investing", href: "/#investing" },
  { label: "Writing", href: "/writing" },
  { label: "Speaking", href: "/#speaking" },
  { label: "Book", href: "/#book" },
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

  // Hash links and mailto use regular <a> for reliable cross-page navigation
  if (item.href.startsWith("/#") || item.href.startsWith("mailto:")) {
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

function ContactModal({ onClose }: { onClose: () => void }) {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.25 }}
      className="fixed inset-0 z-[60] flex items-center justify-center p-4 md:p-8"
      onClick={onClose}
    >
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />

      <motion.div
        initial={{ opacity: 0, y: 20, scale: 0.97 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 20, scale: 0.97 }}
        transition={{ duration: 0.3, ease: [0.33, 1, 0.68, 1] }}
        className="relative bg-white rounded-2xl overflow-hidden max-w-[800px] w-full"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-10 h-10 flex items-center justify-center rounded-full bg-black/10 hover:bg-black/20 transition-colors"
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M4 4L12 12M12 4L4 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
        </button>

        <div className="flex flex-col md:flex-row">
          {/* Left: title + subtext + CTA */}
          <div className="flex flex-col justify-between gap-8 flex-1 p-8 md:p-12">
            <div className="flex flex-col gap-4">
              <h3 className="font-sans-main text-[32px] md:text-[48px] font-semibold leading-none tracking-[-0.96px] text-[var(--color-body)]">
                Get in Touch
              </h3>
              <p className="font-sans-main text-base md:text-lg font-normal leading-[1.6] tracking-[-0.36px] text-[var(--color-text-primary)]">
                Interested in working together on energy transition, investment advisory, or speaking engagements? I&apos;d love to hear from you.
              </p>
            </div>
            <a
              href="mailto:lshaw@gordonmgmt.co.uk"
              className="group/link inline-flex items-center gap-2 px-6 py-3 md:px-8 md:py-4 rounded-full border border-[var(--color-dark)]/30 bg-transparent hover:bg-[var(--color-dark)] transition-colors duration-300 w-fit"
            >
              <span className="font-sans-main text-[14px] md:text-[18px] font-medium tracking-[-0.36px] leading-[1.2] text-[var(--color-dark)] group-hover/link:text-[var(--color-card-bg)] transition-colors duration-300">
                <RollText text="Get in Touch" />
              </span>
              <svg width="14" height="14" viewBox="0 0 16 16" fill="none" className="md:w-4 md:h-4 text-[var(--color-dark)] group-hover/link:text-[var(--color-card-bg)] transition-colors duration-300">
                <path d="M3.33 8H12.67M12.67 8L8.67 4M12.67 8L8.67 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
          </div>

          {/* Right: contact portrait */}
          <div className="w-full md:w-[340px] h-[300px] md:h-[480px] shrink-0 relative overflow-hidden">
            <img
              src="/images/contact-portrait.jpg"
              alt="Lucy Shaw"
              className="w-full h-full object-cover object-top"
            />
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function NavbarV2() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [contactOpen, setContactOpen] = useState(false);

  return (
    <>
      <motion.nav
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="sticky top-0 z-50 flex items-center justify-between px-4 pt-4 pb-4 md:px-5 md:pt-5 md:pb-4 w-full bg-[var(--color-card-bg)]/80 backdrop-blur-md"
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
          <button
            onClick={() => setContactOpen(true)}
            className="group/link font-sans-main text-[16px] font-medium leading-none tracking-[-0.4px] text-[var(--color-dark)] transition-colors"
          >
            <RollText text="Contact" />{" "}
            <span className="inline-block opacity-0 -translate-x-2 transition-all duration-200 group-hover/link:opacity-100 group-hover/link:translate-x-0">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="inline-block align-middle">
                <path d="M3.33 8H12.67M12.67 8L8.67 4M12.67 8L8.67 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </span>
          </button>
        </div>

        {/* Mobile hamburger button */}
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
                <button
                  onClick={() => {
                    setMenuOpen(false);
                    setContactOpen(true);
                  }}
                  className="group/link font-sans-main text-[16px] font-medium leading-none tracking-[-0.4px] text-[var(--color-dark)] transition-colors text-left"
                >
                  <RollText text="Contact" />{" "}
                  <span className="inline-block opacity-0 -translate-x-2 transition-all duration-200 group-hover/link:opacity-100 group-hover/link:translate-x-0">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="inline-block align-middle">
                      <path d="M3.33 8H12.67M12.67 8L8.67 4M12.67 8L8.67 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>

      {/* Contact modal */}
      <AnimatePresence>
        {contactOpen && <ContactModal onClose={() => setContactOpen(false)} />}
      </AnimatePresence>
    </>
  );
}
