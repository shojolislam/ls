"use client";

import Image from "next/image";

const clients: { name: string; src: string; className: string; style?: React.CSSProperties }[] = [
  { name: "Octopus Energy Generation", src: "/logos/oe-generation.svg", className: "" },
  { name: "Denham Capital", src: "/logos/denham-capital.svg", className: "!h-6 md:!h-8" },
  { name: "CrossBoundary", src: "/logos/crossboundary-dark.svg", className: "" },
  { name: "SALT", src: "/logos/salt-logo.png", className: "!h-6 md:!h-8", style: { filter: "brightness(0) saturate(100%) invert(72%) sepia(25%) saturate(746%) hue-rotate(167deg) brightness(95%) contrast(87%)" } },
  { name: "BasiGo", src: "/logos/basigo-logo.webp", className: "" },
  { name: "Globeleq", src: "/logos/globeleq.svg", className: "" },
];

export default function ClientsV2() {
  return (
    <section className="w-full overflow-hidden pt-4 md:pt-6 pb-6">
      <h3 className="font-sans-main text-base md:text-lg font-medium tracking-[-0.36px] text-[var(--color-dark)]/60 text-center mb-6 md:mb-10">
        Client list includes
      </h3>
      <div className="flex animate-scroll w-max">
        {clients.map((client) => (
          <div
            key={client.name}
            className="flex items-center justify-center h-16 md:h-24 px-8 md:px-16 shrink-0"
          >
            <Image
              src={client.src}
              alt={client.name}
              width={120}
              height={48}
              className={`h-9 md:h-12 w-auto object-contain ${client.className}`}
              {...(client.style ? { style: client.style } : {})}
            />
          </div>
        ))}
        {clients.map((client) => (
          <div
            key={`dup-${client.name}`}
            className="flex items-center justify-center h-16 md:h-24 px-8 md:px-16 shrink-0"
          >
            <Image
              src={client.src}
              alt={client.name}
              width={120}
              height={48}
              className={`h-9 md:h-12 w-auto object-contain ${client.className}`}
              {...(client.style ? { style: client.style } : {})}
            />
          </div>
        ))}
      </div>
    </section>
  );
}
