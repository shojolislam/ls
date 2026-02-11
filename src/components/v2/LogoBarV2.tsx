"use client";

import Image from "next/image";

const logos = [
  { name: "Blackstone", src: "/logos/blackstone.svg", className: "" },
  { name: "IFC", src: "/logos/ifc.svg", className: "!h-7 md:!h-11" },
  { name: "Actis", src: "/images/logos/actis.png", className: "" },
  { name: "Harvard Business School", src: "/logos/edu-1.svg", className: "" },
  { name: "BCG", src: "/logos/bcg.svg", className: "!h-7 md:!h-11" },
  { name: "Harvard Kennedy School", src: "/logos/hks-logo.svg", className: "!h-7 md:!h-11" },
  { name: "CrossBoundary", src: "/logos/crossboundary-logo.svg", className: "" },
  { name: "Agricultural Transformation Agency", src: "/logos/ata-logo.png", className: "" },
  { name: "UN WFP", src: "/logos/unwfp-logo.svg", className: "" },
  { name: "Vena Energy", src: "/logos/vena-group.png", className: "" },
  { name: "Harvard Center for International Development", src: "/logos/harvard-cid-logo.svg", className: "" },
];

export default function LogoBarV2() {
  return (
    <section className="w-full overflow-hidden">
      <div className="flex animate-scroll w-max">
        {logos.map((logo) => (
          <div
            key={logo.name}
            className="flex items-center justify-center h-24 md:h-40 px-8 md:px-16 shrink-0"
          >
            <Image
              src={logo.src}
              alt={logo.name}
              width={148}
              height={64}
              className={`h-10 md:h-16 w-auto object-contain opacity-100 ${logo.className}`}
            />
          </div>
        ))}
        {logos.map((logo) => (
          <div
            key={`dup-${logo.name}`}
            className="flex items-center justify-center h-24 md:h-40 px-8 md:px-16 shrink-0"
          >
            <Image
              src={logo.src}
              alt={logo.name}
              width={148}
              height={64}
              className={`h-10 md:h-16 w-auto object-contain opacity-100 ${logo.className}`}
            />
          </div>
        ))}
      </div>
    </section>
  );
}
