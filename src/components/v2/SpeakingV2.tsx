"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import RollText from "./RollText";

export type EventItem = {
  title: string;
  venue: string;
  date: string;
  topic: string;
  audience: string;
  description: string;
  image: string;
  href: string;
  category: "speaking" | "convening";
};

export const events: EventItem[] = [
  {
    title: "SALT London 2025",
    venue: "London, UK",
    date: "2025",
    topic: "AI and the energy transition",
    audience: "Institutional investors and fund managers",
    description:
      "Panel discussion at the SALT London conference exploring the intersection of artificial intelligence and clean energy investment.",
    image: "/images/talk-1.png",
    href: "https://www.youtube.com/watch?v=pT4s0NaYjTw",
    category: "speaking",
  },
  {
    title: "FT Sustainable Views Interview",
    venue: "Oxford, UK",
    date: "2025",
    topic: "Energy investment and the transition landscape",
    audience: "Financial Times readership and sustainability professionals",
    description:
      "In-depth interview with the Financial Times Sustainable Views team on the state of energy transition investment.",
    image: "/images/talk-5.png",
    href: "https://www.linkedin.com/posts/sustainable-views_lucy-shaw-founder-of-investment-adviser-activity-7384603019092324352-VVeH",
    category: "speaking",
  },
  {
    title: "AusIMM Australia Mining Week",
    venue: "Australia",
    date: "2025",
    topic: "Coal transition and critical minerals",
    audience: "Mining industry professionals and investors",
    description:
      "Keynote address at Australia's leading mining industry conference on navigating the coal transition.",
    image: "/images/talk-ausimm.jpg",
    href: "#",
    category: "speaking",
  },
  {
    title: "Earth Set 2026 — The Coal Transition",
    venue: "Earth Set",
    date: "2026",
    topic: "Why we can't quit coal and what comes next",
    audience: "Climate and energy policy community",
    description:
      "A deep dive into the complexities of the global coal transition and the path forward for communities and investors.",
    image: "/images/talk-2.png",
    href: "https://www.earthset.co/blog/roger-wzkh5-axc94-a5am6-d5pwd-7es6s-sl274-kdp9y-ftxa5-b84sm-7w2c3-37bb3-dbrak-65zd6-59s4e-6wcgh-fmfd6-ll82z",
    category: "speaking",
  },
  {
    title: "Wales Investment Summit",
    venue: "Wales, UK",
    date: "2025",
    topic: "Infrastructure investment and regional energy development",
    audience: "Government officials and infrastructure investors",
    description:
      "Speaking on how to attract private capital to regional energy infrastructure projects in Wales.",
    image: "/images/talk-wales.jpg",
    href: "#",
    category: "speaking",
  },
  {
    title: "Fabian Women's with Marie Tidball MP",
    venue: "The Fabian Society",
    date: "2025",
    topic: "Women in energy policy and investment",
    audience: "Fabian Society members and policy professionals",
    description:
      "A conversation with Marie Tidball MP on the role of women in shaping energy policy and investment.",
    image: "/images/talk-fabian-women.jpg",
    href: "#",
    category: "speaking",
  },
  {
    title: "Woodmac 2025 Power Investment",
    venue: "Wood Mackenzie",
    date: "2025",
    topic: "European power investment outlook",
    audience: "Energy analysts and institutional investors",
    description:
      "Presenting on the European power investment landscape at Wood Mackenzie's annual energy conference.",
    image: "/images/talk-3.png",
    href: "#",
    category: "speaking",
  },
  {
    title: "Section President Speech, HBS",
    venue: "Harvard Business School",
    date: "2025",
    topic: "Leadership and the energy transition",
    audience: "Harvard Business School community",
    description:
      "Address as Section President to the Harvard Business School community on leadership in the energy transition.",
    image: "/images/talk-hbs-president.jpg",
    href: "#",
    category: "speaking",
  },
  {
    title: "Energy Revolution Podcast",
    venue: "Podcast",
    date: "2025",
    topic: "The global energy transition and coal dependency",
    audience: "Podcast listeners and energy professionals",
    description:
      "Podcast episode discussing global coal dependency and the challenges of transitioning to clean energy.",
    image: "/images/talk-4.png",
    href: "https://open.spotify.com/episode/1dkre9aIGn4f29ue8ESi8O",
    category: "speaking",
  },
  {
    title: "Earth Set — In Conversation: Julia Shaw",
    venue: "Earth Set",
    date: "2026",
    topic: "Dark psychology and its intersection with climate narratives",
    audience: "Earth Set community",
    description:
      "Hosted a conversation with Julia Shaw exploring the psychology behind climate narratives and behaviour change.",
    image: "/images/talk-earthset-julia.jpg",
    href: "#",
    category: "convening",
  },
  {
    title: "Operations Lecture, HBS First Years",
    venue: "Harvard Business School",
    date: "2025",
    topic: "Energy infrastructure operations",
    audience: "Harvard Business School first-year MBA students",
    description:
      "Guest lecture for first-year Harvard Business School MBA students on energy infrastructure operations.",
    image: "/images/talk-hbs-operations.jpg",
    href: "#",
    category: "speaking",
  },
  {
    title: "British Friends of HBS — 2025 Dinner",
    venue: "London, UK",
    date: "2025",
    topic: "Fundraising and alumni community building",
    audience: "HBS alumni and prospective scholars",
    description:
      "Organised and hosted the annual fundraising dinner for the British Friends of Harvard Business School charity.",
    image: "/images/talk-hbs-dinner-2025.jpg",
    href: "#",
    category: "convening",
  },
  {
    title: "In Conversation with Ami Rao",
    venue: "London, UK",
    date: "2025",
    topic: "Literature and storytelling",
    audience: "HBS Women and literary community",
    description:
      "Hosted an intimate conversation with author Ami Rao on literature, storytelling, and creative expression.",
    image: "/images/talk-ami-rao.jpg",
    href: "#",
    category: "convening",
  },
  {
    title: "London Welcome for Mrs Akie Abe",
    venue: "London, UK",
    date: "2024",
    topic: "International relations and cultural diplomacy",
    audience: "Diplomatic and business community",
    description:
      "Organised and hosted a London welcome dinner for Mrs Akie Abe, bringing together diplomatic and business leaders.",
    image: "/images/talk-mrs-abe.jpg",
    href: "#",
    category: "convening",
  },
  {
    title: "British Friends of HBS — 2024 Dinner",
    venue: "London, UK",
    date: "2024",
    topic: "Fundraising and alumni community building",
    audience: "HBS alumni and prospective scholars",
    description:
      "Organised and hosted the 2024 fundraising dinner for the British Friends of Harvard Business School charity.",
    image: "/images/talk-hbs-dinner-2024.jpg",
    href: "#",
    category: "convening",
  },
];

/* ─── Event detail modal ─── */
export function EventModal({
  event,
  onClose,
}: {
  event: EventItem;
  onClose: () => void;
}) {
  // Lock body scroll when modal is open
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
      className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8"
      onClick={onClose}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />

      {/* Modal content */}
      <motion.div
        initial={{ opacity: 0, y: 20, scale: 0.97 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 20, scale: 0.97 }}
        transition={{ duration: 0.3, ease: [0.33, 1, 0.68, 1] }}
        className="relative bg-[var(--color-card-bg)] rounded-2xl overflow-hidden max-w-[640px] w-full max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-10 h-10 flex items-center justify-center rounded-full bg-black/30 backdrop-blur-sm text-white hover:bg-black/50 transition-colors"
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path
              d="M4 4L12 12M12 4L4 12"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
          </svg>
        </button>

        {/* Image */}
        <div className="relative w-full aspect-[4/3] overflow-hidden">
          <Image
            src={event.image}
            alt={event.title}
            fill
            className="object-cover"
            sizes="640px"
          />
        </div>

        {/* Details */}
        <div className="flex flex-col gap-6 p-6 md:p-8">
          {/* Category + date */}
          <div className="flex items-center gap-3">
            <span className="font-sans-main text-sm font-medium tracking-[-0.28px] text-[var(--color-body)]/40 uppercase">
              {event.category === "convening" ? "Convened" : "Speaker"}
            </span>
            <span className="w-1 h-1 rounded-full bg-[var(--color-dark)]/20" />
            <span className="font-sans-main text-sm font-normal tracking-[-0.28px] text-[var(--color-dark)]/60">
              {event.venue} · {event.date}
            </span>
          </div>

          {/* Title */}
          <h3 className="font-sans-main text-[28px] md:text-[36px] font-semibold leading-[1.15] tracking-[-0.72px] text-[var(--color-body)]">
            {event.title}
          </h3>

          {/* Description */}
          <p className="font-sans-main text-lg md:text-xl font-normal leading-[1.5] tracking-[-0.4px] text-[var(--color-text-primary)]">
            {event.description}
          </p>

          {/* Topic + audience */}
          <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-1.5">
              <span className="font-sans-main text-sm font-medium tracking-[-0.28px] text-[var(--color-dark)]/60">
                Topic
              </span>
              <span className="font-sans-main text-base md:text-lg font-normal tracking-[-0.36px] text-[var(--color-dark)]">
                {event.topic}
              </span>
            </div>
            <div className="flex flex-col gap-1.5">
              <span className="font-sans-main text-sm font-medium tracking-[-0.28px] text-[var(--color-dark)]/60">
                Audience
              </span>
              <span className="font-sans-main text-base md:text-lg font-normal tracking-[-0.36px] text-[var(--color-dark)]">
                {event.audience}
              </span>
            </div>
          </div>

          {/* CTA */}
          {event.href !== "#" && (
            <a
              href={event.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group/link font-sans-main text-[20px] font-medium tracking-[-0.4px] text-[var(--color-dark)] transition-colors mt-2"
            >
              <RollText text="View event" />{" "}
              <span className="inline-block opacity-0 -translate-x-2 transition-all duration-200 group-hover/link:opacity-100 group-hover/link:translate-x-0">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  className="inline-block align-middle"
                >
                  <path
                    d="M3.33 8H12.67M12.67 8L8.67 4M12.67 8L8.67 12"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
            </a>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
}

/* ─── Single event card ─── */
export function EventCard({
  event,
  index,
  onClick,
}: {
  event: EventItem;
  index: number;
  onClick: () => void;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.06 }}
      className="group cursor-pointer"
      onClick={onClick}
    >
      {/* 4:3 image */}
      <div className="relative w-full aspect-[4/3] overflow-hidden rounded-xl">
        <Image
          src={event.image}
          alt={event.title}
          fill
          className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
          sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 420px"
        />
      </div>

      {/* Title + venue below image */}
      <div className="flex flex-col gap-2 md:gap-3 mt-5 md:mt-6">
        <h3 className="font-sans-main text-lg md:text-xl font-semibold leading-[1.25] tracking-[-0.4px] text-[var(--color-dark)]">
          {event.title}
        </h3>
        <span className="font-sans-main text-sm md:text-base font-normal tracking-[-0.32px] leading-none text-[var(--color-dark)]/60">
          {event.venue} · {event.date}
        </span>
      </div>
    </motion.div>
  );
}

/* ─── Filter tabs ─── */
type Filter = "all" | "speaking" | "convening";

export default function SpeakingV2() {
  const [filter, setFilter] = useState<Filter>("all");
  const [selectedEvent, setSelectedEvent] = useState<EventItem | null>(null);

  const filtered =
    filter === "all"
      ? events
      : events.filter((e) => e.category === filter);

  const tabs: { label: string; value: Filter }[] = [
    { label: "All", value: "all" },
    { label: "Speaking", value: "speaking" },
    { label: "Convening", value: "convening" },
  ];

  return (
    <>
      <section id="speaking" className="pb-16 md:pb-32 px-4 md:px-8 w-full scroll-mt-16">
        {/* Header row: title + filter tabs */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 md:gap-10 mb-12 md:mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="font-sans-main text-[48px] sm:text-[56px] md:text-[64px] xl:text-[80px] font-semibold leading-[1.1] tracking-[-0.8px] md:tracking-[-1.6px] text-[var(--color-body)]"
          >
            On Stage &<br />On Air
          </motion.h2>

          <div className="flex items-center gap-2">
            {tabs.map((tab) => (
              <button
                key={tab.value}
                onClick={() => setFilter(tab.value)}
                className={`
                  font-sans-main text-[14px] md:text-[16px] font-medium tracking-[-0.32px] leading-none px-5 py-2.5 md:px-6 md:py-3 rounded-full border transition-colors duration-200
                  ${
                    filter === tab.value
                      ? "bg-[var(--color-body)] text-[var(--color-card-bg)] border-[var(--color-body)]"
                      : "text-[var(--color-dark)]/50 border-[var(--color-dark)]/20 hover:text-[var(--color-dark)] hover:border-[var(--color-dark)]/40"
                  }
                `}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Event grid */}
        <motion.div
          layout
          className="grid grid-cols-2 md:grid-cols-3 gap-x-4 gap-y-8 md:gap-x-6 md:gap-y-12"
        >
          <AnimatePresence mode="popLayout">
            {filtered.slice(0, 6).map((event, i) => (
              <motion.div
                key={event.title}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
              >
                <EventCard
                  event={event}
                  index={i}
                  onClick={() => setSelectedEvent(event)}
                />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* View all */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex items-center justify-start pt-10 md:pt-14"
        >
          <Link
            href="/talks"
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

        {/* Get in touch */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 md:gap-8 mt-10 md:mt-14 pt-8 md:pt-10 border-t border-[var(--color-dark)]/10"
        >
          <h3 className="font-sans-main text-xl md:text-[28px] font-semibold leading-[1.25] tracking-[-0.56px] text-[var(--color-dark)]">
            Want me to speak to your organisation? Get in touch
          </h3>
          <a
            href="mailto:lshaw@gordonmgmt.co.uk"
            className="group/link inline-flex items-center gap-2 px-6 py-3 md:px-8 md:py-4 rounded-full border border-[var(--color-dark)]/30 bg-transparent hover:bg-[var(--color-dark)] transition-colors duration-300 shrink-0 self-start md:self-auto"
          >
            <span className="font-sans-main text-[14px] md:text-[18px] font-medium tracking-[-0.36px] leading-[1.2] text-[var(--color-dark)] group-hover/link:text-[var(--color-card-bg)] transition-colors duration-300">
              <RollText text="Get in touch" />
            </span>
            <svg width="14" height="14" viewBox="0 0 16 16" fill="none" className="md:w-4 md:h-4 text-[var(--color-dark)] group-hover/link:text-[var(--color-card-bg)] transition-colors duration-300">
              <path d="M3.33 8H12.67M12.67 8L8.67 4M12.67 8L8.67 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
        </motion.div>
      </section>

      {/* Modal */}
      <AnimatePresence>
        {selectedEvent && (
          <EventModal
            event={selectedEvent}
            onClose={() => setSelectedEvent(null)}
          />
        )}
      </AnimatePresence>
    </>
  );
}
