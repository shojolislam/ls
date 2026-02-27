"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import NavbarV2 from "@/components/v2/NavbarV2";
import FooterV2 from "@/components/v2/FooterV2";

const articles = [
  {
    title: "Labour must offer pride, not just employment, to former coal communities",
    publication: "LabourList",
    date: "1 November 2025",
    image: "/images/writing-2.png",
    href: "https://labourlist.org/2025/11/coal-culture-green-jobs/",
  },
  {
    title: "Cut to the quick - the government must invest more in short-term solutions to our energy crisis",
    publication: "The Fabian Society",
    date: "29 October 2025",
    image: "/images/writing-fabian.jpg",
    href: "https://fabians.org.uk/cut-to-the-quick/",
  },
  {
    title: "Clouded Thinking on Business Class Passengers",
    publication: "The Financial Times",
    date: "2 May 2025",
    image: "/images/writing-ft-general.jpeg",
    href: "https://www.ft.com/content/f7b2eae3-faf6-4a6c-9be1-2b7553934717",
  },
  {
    title: "Market Reform is Energy Transition's Forgotten Pillar",
    publication: "The Financial Times",
    date: "18 October 2024",
    image: "/images/writing-ft-general.jpeg",
    href: "https://www.ft.com/content/5c6844da-d0e1-473f-88d5-dee8e492e78d",
  },
  {
    title: "Pet Food Carbon Pawprint",
    publication: "The Financial Times",
    date: "2 August 2024",
    image: "/images/writing-ft-general.jpeg",
    href: "https://www.ft.com/content/77280354-2648-4e44-bc2e-e90919024e4c",
  },
  {
    title: "Let Solar Shine",
    publication: "The Economist",
    date: "4 July 2024",
    image: "/images/writing-5.png",
    href: "https://www.economist.com/letters/2024/07/04/letters-to-the-editor",
  },
  {
    title: "Labour's energy policy will not solve the real problems with the grid",
    publication: "Infrastructure Investor",
    date: "25 June 2024",
    image: "/images/writing-infra-investor.jpg",
    href: "https://infrastructureinvestor.com/labours-energy-policy-will-not-solve-the-real-problems-with-the-grid/",
  },
  {
    title: "Critique of Great British Energy",
    publication: "The Financial Times",
    date: "7 June 2024",
    image: "/images/writing-ft-general.jpeg",
    href: "https://www.ft.com/content/94a6077e-9904-4302-b778-71d03070868a",
  },
  {
    title: "Who's to blame for carbon credits manipulation?",
    publication: "The Financial Times",
    date: "17 May 2024",
    image: "/images/writing-ft-carbon.jpg",
    href: "https://www.ft.com/content/d0b2e052-a01a-4ab6-9b12-d73948fe3c38",
  },
  {
    title: "A look inside Itaipú Dam",
    publication: "Hydro Review",
    date: "15 October 2024",
    image: "/images/writing-hydro-review.jpg",
    href: "https://www.hydroreview.com/hydro-power/dams-civil-structures/a-look-inside-itaipu-dam-the-1-tourism-attraction-for-infrastructure-nerds/",
  },
  {
    title: "When missing an emissions target makes your sustainability bonds more valuable",
    publication: "Substack",
    date: "24 May 2024",
    image: "/images/writing-esg-finance.jpg",
    href: "https://esgstuff.substack.com/p/esg-finance-when-missing-an-emissions",
  },
  {
    title: "Biomass power: when burning trees is 'net zero'",
    publication: "Substack",
    date: "28 May 2024",
    image: "/images/writing-biomass.jpg",
    href: "https://esgstuff.substack.com/p/when-trees-dont-release-carbon-dioxide",
  },
  {
    title: "The proliferation of voluntary carbon market intermediaries",
    publication: "Substack",
    date: "13 June 2024",
    image: "/images/writing-carbon-markets.jpg",
    href: "https://esgstuff.substack.com/p/the-proliferation-of-voluntary-carbon",
  },
  {
    title: "A Strict Immigration Policy",
    publication: "The Economist",
    date: "7 May 2022",
    image: "/images/writing-6.png",
    href: "https://www.economist.com/letters/2022/05/07/letters-to-the-editor",
  },
  {
    title: "A Roadmap for Scaling Up Renewable Energy in Island Nations",
    publication: "Next Billion",
    date: "2020",
    image: "/images/writing-nextbillion.jpg",
    href: "https://nextbillion.net/roadmap-scaling-up-renewable-energy-island-nations-eastern-caribbean-transition-from-fossil-fuels/",
  },
  {
    title: "More people than ever now have electricity in Africa, but 600 million people are still in the dark",
    publication: "Quartz",
    date: "20 July 2022",
    image: "/images/writing-quartz-africa.jpg",
    href: "https://qz.com/africa/1265780/how-many-people-have-electricity-in-africa",
  },
  {
    title: "Can blended finance solutions fund distributed infrastructure in conflict zones?",
    publication: "Essays from the Leaders of Tomorrow",
    date: "29 May 2019",
    image: "/images/writing-blended-finance.webp",
    href: "https://medium.com/essays-from-the-leaders-of-tomorrow/can-blended-finance-approaches-fund-distributed-infrastructure-in-conflict-zones-a18ce1bfa6c6",
  },
  {
    title: "After all these headline grabbing reforms, is Ethiopia really open for business?",
    publication: "Harvard Africa Policy Journal",
    date: "8 March 2019",
    image: "/images/writing-harvard.jpg",
    href: "https://studentreview.hks.harvard.edu/after-all-these-headline-grabbing-reforms-is-ethiopia-really-open-for-business/",
  },
];

export default function WritingPage() {
  return (
    <div className="w-full bg-[var(--color-card-bg)] min-h-screen">
      <NavbarV2 />

      <div className="max-w-[1440px] mx-auto px-4 md:px-8 pt-16 md:pt-24 pb-24 md:pb-40">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="font-sans-main text-[48px] sm:text-[72px] md:text-[96px] lg:text-[120px] font-semibold leading-none tracking-[-2px] md:tracking-[-4px] text-[var(--color-body)] mb-16 md:mb-24"
        >
          Writing
        </motion.h1>

        <div className="flex flex-col max-w-[900px]">
          {articles.map((article, i) => (
            <motion.a
              key={article.title}
              href={article.href}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.03 }}
              className="group relative flex flex-row-reverse md:flex-row items-center gap-4 md:gap-10 py-6 px-2 md:px-8 rounded-xl cursor-pointer transition-colors duration-300 ease-in-out hover:bg-white"
            >
              <div className="w-24 h-16 md:w-40 md:h-[100px] shrink-0 relative overflow-hidden rounded-lg">
                <Image
                  src={article.image}
                  alt={article.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 96px, 160px"
                />
              </div>
              <div className="flex flex-col gap-3 md:gap-4 flex-1">
                <span className="font-sans-main text-base md:text-lg font-semibold tracking-[-0.36px] leading-none text-[var(--color-body)]">
                  {article.publication}
                </span>
                <h3 className="font-sans-main text-xl md:text-[28px] font-semibold leading-[1.25] tracking-[-0.56px] text-[var(--color-dark)]">
                  {article.title}
                </h3>
                <span className="font-sans-main text-sm md:text-base font-normal tracking-[-0.32px] leading-none text-[var(--color-dark)]/60">
                  {article.date}
                </span>
              </div>
            </motion.a>
          ))}
        </div>
      </div>

      <FooterV2 />
    </div>
  );
}
