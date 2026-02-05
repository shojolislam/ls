"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const events = [
  {
    title: "SALT London 2025 - AI panel",
    venue: "London, UK",
    image: "/images/talk-1.png",
    href: "https://www.youtube.com/watch?v=pT4s0NaYjTw",
  },
  {
    title: "Earth Set 2026 - the coal transition",
    venue: "The Fabian Society · 29 October 2025",
    image: "/images/talk-2.png",
    href: "https://www.earthset.co/blog/roger-wzkh5-axc94-a5am6-d5pwd-7es6s-sl274-kdp9y-ftxa5-b84sm-7w2c3-37bb3-dbrak-65zd6-59s4e-6wcgh-fmfd6-ll82z",
  },
  {
    title: "Woodmac 2025 Power Investment",
    venue: "The Financial Times · 29 October 2025",
    image: "/images/talk-3.png",
    href: "#",
  },
  {
    title: "The Energy Revolution",
    venue: "Podcast · 2025",
    image: "/images/talk-4.png",
    href: "https://open.spotify.com/episode/1dkre9aIGn4f29ue8ESi8O",
  },
  {
    title: "FT Sustainable Views Interview 2025",
    venue: "Oxford, UK",
    image: "/images/talk-5.png",
    href: "https://www.linkedin.com/posts/sustainable-views_lucy-shaw-founder-of-investment-adviser-activity-7384603019092324352-VVeH",
  },
];

export default function SpeakingV2() {
  return (
    <section className="flex flex-col xl:flex-row xl:justify-center pb-24 md:pb-52 px-4 md:px-8 w-full overflow-hidden">
      {/* Left heading — sticky on desktop */}
      <div className="xl:flex-1 pt-8 xl:pt-12 pb-10 md:pb-12 xl:pb-[120px]">
        <div className="xl:sticky xl:top-0 xl:pt-10 xl:pb-10">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="font-plantin text-[48px] sm:text-[56px] md:text-[64px] xl:text-[80px] font-normal leading-[1.1] tracking-[-0.8px] md:tracking-[-1.6px] text-[var(--color-body)]"
          >
            On Stage &<br />On Air
          </motion.h2>
        </div>
      </div>

      {/* Events list */}
      <div className="flex flex-col w-full xl:w-[900px] xl:shrink-0">
        {events.map((event, i) => (
          <motion.a
            key={event.title}
            href={event.href}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="group relative flex items-center gap-4 md:gap-10 py-7 md:py-9 cursor-pointer"
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

        {/* View all */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex items-center justify-end pt-8"
        >
          <Link
            href="/talks"
            className="font-plantin text-xl md:text-2xl font-medium tracking-[-0.48px] text-[var(--color-accent)] hover:opacity-70 transition-opacity"
          >
            View all →
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
