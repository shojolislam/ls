"use client";

import Image from "next/image";

const clients = [
  { name: "Octopus Energy Generation", src: "/logos/oe-generation.svg", className: "" },
  { name: "Denham Capital", src: "/logos/denham-capital.svg", className: "!h-7 md:!h-11" },
  { name: "CrossBoundary", src: "/logos/crossboundary-dark.svg", className: "" },
  { name: "SALT", src: "/logos/salt-logo.png", className: "!h-7 md:!h-11" },
];

export default function ClientsV2() {
  return (
    <section className="w-full overflow-hidden pb-24 md:pb-52">
      <div className="flex animate-scroll w-max">
        {clients.map((client) => (
          <div
            key={client.name}
            className="flex items-center justify-center h-24 md:h-40 px-8 md:px-16 shrink-0"
          >
            <Image
              src={client.src}
              alt={client.name}
              width={148}
              height={64}
              className={`h-10 md:h-16 w-auto object-contain opacity-70 brightness-0 ${client.className}`}
            />
          </div>
        ))}
        {clients.map((client) => (
          <div
            key={`dup-${client.name}`}
            className="flex items-center justify-center h-24 md:h-40 px-8 md:px-16 shrink-0"
          >
            <Image
              src={client.src}
              alt={client.name}
              width={148}
              height={64}
              className={`h-10 md:h-16 w-auto object-contain opacity-70 brightness-0 ${client.className}`}
            />
          </div>
        ))}
      </div>
    </section>
  );
}
