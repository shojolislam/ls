"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const posts = [
  {
    title: "Imperial War Museum",
    role: "Development Committee",
    description:
      "Lucy serves on the Development Committee of the Imperial War Museum. With family military heritage spanning multiple generations in the Royal Navy, she is dedicated to supporting education regarding conflict history and the British armed forces' historical role.",
    image: "/images/culture-iwm.jpg",
  },
  {
    title: "British Friends of Harvard Business School",
    role: "Trustee",
    description:
      "Lucy serves as a Trustee for the British Friends of Harvard Business School charity, which facilitates British student attendance at Harvard Business School. She organises fundraising events and alumni reunions across the United Kingdom.",
    image: "/images/culture-hbs.jpg",
  },
];

export default function CultureV2() {
  return (
    <section className="w-full px-4 md:px-10 pt-24 md:pt-52 pb-24 md:pb-52">
      {/* Heading */}
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="font-sans-main text-[48px] sm:text-[56px] md:text-[64px] xl:text-[80px] font-semibold leading-[1.1] tracking-[-0.8px] md:tracking-[-1.6px] text-[var(--color-body)] text-center mb-12 md:mb-20"
      >
        Culture
      </motion.h2>

      {/* Staggered card grid */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8">
        {/* Card 1 — taller, left-aligned */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="group md:col-span-7 flex flex-col"
        >
          <div className="relative w-full h-[280px] sm:h-[380px] md:h-[560px] overflow-hidden rounded-2xl">
            <Image
              src={posts[0].image}
              alt={posts[0].title}
              fill
              className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, 58vw"
            />
            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </div>
          <div className="flex flex-col gap-3 md:gap-5 mt-6 md:mt-8">
            <span className="font-sans-main text-xs md:text-sm font-medium tracking-[0.08em] uppercase text-[var(--color-body)]/40">
              {posts[0].role}
            </span>
            <h3 className="font-sans-main text-[24px] md:text-[32px] font-semibold leading-[1.2] tracking-[-0.64px] text-[var(--color-body)]">
              {posts[0].title}
            </h3>
            <p className="font-sans-main text-base md:text-lg font-normal leading-[1.6] tracking-[-0.36px] text-[var(--color-text-primary)] max-w-[540px]">
              {posts[0].description}
            </p>
          </div>
        </motion.div>

        {/* Card 2 — offset down, right-aligned */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="group md:col-span-5 flex flex-col md:mt-40"
        >
          <div className="relative w-full h-[260px] sm:h-[340px] md:h-[440px] overflow-hidden rounded-2xl">
            <Image
              src={posts[1].image}
              alt={posts[1].title}
              fill
              className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, 42vw"
            />
            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </div>
          <div className="flex flex-col gap-3 md:gap-5 mt-6 md:mt-8">
            <span className="font-sans-main text-xs md:text-sm font-medium tracking-[0.08em] uppercase text-[var(--color-body)]/40">
              {posts[1].role}
            </span>
            <h3 className="font-sans-main text-[24px] md:text-[32px] font-semibold leading-[1.2] tracking-[-0.64px] text-[var(--color-body)]">
              {posts[1].title}
            </h3>
            <p className="font-sans-main text-base md:text-lg font-normal leading-[1.6] tracking-[-0.36px] text-[var(--color-text-primary)] max-w-[440px]">
              {posts[1].description}
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
