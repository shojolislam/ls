"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import NavbarV2 from "@/components/v2/NavbarV2";
import FooterV2 from "@/components/v2/FooterV2";
import {
  events,
  EventCard,
  EventModal,
  type EventItem,
} from "@/components/v2/SpeakingV2";

type Filter = "all" | "speaking" | "convening";

const tabs: { label: string; value: Filter }[] = [
  { label: "All", value: "all" },
  { label: "Speaking", value: "speaking" },
  { label: "Convening", value: "convening" },
];

export default function TalksPage() {
  const [filter, setFilter] = useState<Filter>("all");
  const [selectedEvent, setSelectedEvent] = useState<EventItem | null>(null);

  const filtered =
    filter === "all"
      ? events
      : events.filter((e) => e.category === filter);

  return (
    <div className="w-full bg-[var(--color-card-bg)] min-h-screen">
      <NavbarV2 />

      <div className="max-w-[1440px] mx-auto px-4 md:px-8 pt-16 md:pt-24 pb-24 md:pb-40">
        {/* Header row: title + filter tabs */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 md:gap-10 mb-12 md:mb-20">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="font-sans-main text-[48px] sm:text-[72px] md:text-[96px] lg:text-[120px] font-semibold leading-none tracking-[-2px] md:tracking-[-4px] text-[var(--color-body)]"
          >
            On Stage &<br />On Air
          </motion.h1>

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

        {/* Event grid — all events */}
        <motion.div
          layout
          className="grid grid-cols-2 md:grid-cols-3 gap-x-4 gap-y-8 md:gap-x-6 md:gap-y-12"
        >
          <AnimatePresence mode="popLayout">
            {filtered.map((event, i) => (
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
      </div>

      <FooterV2 />

      {/* Modal */}
      <AnimatePresence>
        {selectedEvent && (
          <EventModal
            event={selectedEvent}
            onClose={() => setSelectedEvent(null)}
          />
        )}
      </AnimatePresence>
    </div>
  );
}
