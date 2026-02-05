"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import NavbarV2 from "@/components/v2/NavbarV2";
import FooterV2 from "@/components/v2/FooterV2";

const events = [
  {
    title: "SALT London 2025 - AI panel",
    venue: "London, UK",
    image: "/images/talk-1.png",
    href: "https://www.youtube.com/watch?v=pT4s0NaYjTw",
  },
  {
    title: "FT Sustainable Views Interview 2025",
    venue: "Oxford, UK",
    image: "/images/talk-5.png",
    href: "https://www.linkedin.com/posts/sustainable-views_lucy-shaw-founder-of-investment-adviser-activity-7384603019092324352-VVeH",
  },
  {
    title: "Earth Set 2026 - the coal transition",
    venue: "Conference",
    image: "/images/talk-2.png",
    href: "https://www.earthset.co/blog/roger-wzkh5-axc94-a5am6-d5pwd-7es6s-sl274-kdp9y-ftxa5-b84sm-7w2c3-37bb3-dbrak-65zd6-59s4e-6wcgh-fmfd6-ll82z",
  },
  {
    title: "Wales Investment Summit 2025",
    venue: "Wales, UK",
    image: "/images/talk-1.png",
    href: "https://www.linkedin.com/posts/lucyfionashaw_we-need-more-events-like-this-thats-what-activity-7368221154597081089-ffYr",
  },
  {
    title: "Energy Revolution Podcast 2025",
    venue: "Podcast",
    image: "/images/talk-4.png",
    href: "https://open.spotify.com/episode/1dkre9aIGn4f29ue8ESi8O",
  },
  {
    title: "Woodmac 2025 Power Investment",
    venue: "Conference",
    image: "/images/talk-3.png",
    href: "#",
  },
  {
    title: "AusIMM Conference",
    venue: "Conference",
    image: "/images/talk-1.png",
    href: "#",
  },
  {
    title: "HBS Speaking Engagement",
    venue: "Harvard Business School",
    image: "/images/talk-2.png",
    href: "#",
  },
  {
    title: "Fabian Women's Network",
    venue: "London, UK",
    image: "/images/talk-3.png",
    href: "#",
  },
];

export default function TalksPage() {
  return (
    <div className="w-full bg-[var(--color-card-bg)] min-h-screen">
      <NavbarV2 />

      <div className="max-w-[1440px] mx-auto px-4 md:px-6 pt-16 md:pt-24 pb-24 md:pb-40">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="font-plantin text-[48px] sm:text-[72px] md:text-[96px] lg:text-[120px] font-normal leading-none tracking-[-2px] md:tracking-[-4px] text-[var(--color-body)] mb-16 md:mb-24"
        >
          On Stage &<br />On Air
        </motion.h1>

        <div className="flex flex-col max-w-[960px]">
          {events.map((event, i) => (
            <motion.a
              key={event.title}
              href={event.href}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.03 }}
              className="group relative flex items-center gap-4 md:gap-10 py-6 md:py-9 cursor-pointer"
            >
              <div className="w-32 h-24 md:w-64 md:h-40 shrink-0 relative overflow-hidden">
                <Image
                  src={event.image}
                  alt={event.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 128px, 256px"
                />
              </div>
              <div className="flex flex-col gap-2 md:gap-3 flex-1">
                <h3 className="font-plantin text-xl md:text-[28px] font-normal leading-[1.25] tracking-[-0.56px] text-[var(--color-dark)]">
                  {event.title}
                </h3>
                <span className="font-helvetica text-sm md:text-lg font-normal tracking-[-0.36px] leading-[1.4] text-[var(--color-dark)]">
                  {event.venue}
                </span>
              </div>
              {/* Border line */}
              <span className="absolute bottom-0 left-0 w-full h-px bg-[var(--color-dark)]" />
              {/* Animated accent line on hover */}
              <span className="absolute bottom-0 left-0 h-[2px] w-0 bg-[var(--color-accent)] transition-all duration-500 ease-out group-hover:w-full" />
            </motion.a>
          ))}
        </div>
      </div>

      <FooterV2 />
    </div>
  );
}
