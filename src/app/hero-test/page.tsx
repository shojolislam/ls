import NavbarV2 from "@/components/v2/NavbarV2";
import HeroV3 from "@/components/v2/HeroV3";
import LogoBarV2 from "@/components/v2/LogoBarV2";
import FooterV2 from "@/components/v2/FooterV2";

export default function HeroTestPage() {
  return (
    <div className="w-full bg-[var(--color-card-bg)] min-h-screen">
      <NavbarV2 />
      <HeroV3 />
      <LogoBarV2 />
      <div className="h-[400px]" />
      <FooterV2 />
    </div>
  );
}
