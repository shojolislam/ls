import NavbarV2 from "@/components/v2/NavbarV2";
import HeroV2 from "@/components/v2/HeroV2";
import AboutV2Scroll from "@/components/v2/AboutV2Scroll";
import GordonManagementV2 from "@/components/v2/GordonManagementV2";
import FooterV2 from "@/components/v2/FooterV2";

export default function AboutVariationPage() {
  return (
    <div className="w-full bg-[var(--color-card-bg)] min-h-screen">
      <NavbarV2 />
      <HeroV2 />

      <div className="flex flex-col items-center w-full max-w-[1440px] mx-auto">
        <AboutV2Scroll />
      </div>

      <div className="flex flex-col items-center w-full max-w-[1440px] mx-auto">
        <GordonManagementV2 />
      </div>

      <FooterV2 />
    </div>
  );
}
