import NavbarV2 from "@/components/v2/NavbarV2";
import HeroV2 from "@/components/v2/HeroV2";
import LogoBarV2 from "@/components/v2/LogoBarV2";
import AboutV2 from "@/components/v2/AboutV2";
import WritingV2 from "@/components/v2/WritingV2";
import GordonManagementV2 from "@/components/v2/GordonManagementV2";
import ClientsV2 from "@/components/v2/ClientsV2";
import SpeakingV2 from "@/components/v2/SpeakingV2";
import BookV2 from "@/components/v2/BookV2";
import CultureV2 from "@/components/v2/CultureV2";
import NewsletterV2 from "@/components/v2/NewsletterV2";
import FooterV2 from "@/components/v2/FooterV2";

export default function Home() {
  return (
    <div className="w-full bg-[var(--color-card-bg)] min-h-screen">
      {/* Full-width sections: Navbar, Hero, LogoBar */}
      <NavbarV2 />
      <HeroV2 />
      <LogoBarV2 />

      {/* Max-width constrained content */}
      <div className="flex flex-col items-center w-full max-w-[1440px] mx-auto">
        <AboutV2 />
      </div>

      {/* What I Do (Gordon Management) — max-width constrained */}
      <div className="flex flex-col items-center w-full max-w-[1440px] mx-auto pt-8 md:pt-16">
        <GordonManagementV2 />
      </div>

      {/* Client logos carousel */}
      <ClientsV2 />

      {/* Max-width constrained content */}
      <div className="flex flex-col items-center w-full max-w-[1440px] mx-auto">
        <WritingV2 />
      </div>

      {/* Speaking — grid layout, max-width constrained */}
      <div className="flex flex-col items-center w-full max-w-[1440px] mx-auto">
        <SpeakingV2 />
      </div>

      {/* Book */}
      <main className="flex flex-col items-center w-full max-w-[1440px] mx-auto">
        <BookV2 />
      </main>

      {/* Culture — hidden for now, uncomment to restore
      <div className="flex flex-col items-center w-full max-w-[1440px] mx-auto">
        <CultureV2 />
      </div>
      */}

      {/* Newsletter — full width */}
      <NewsletterV2 />

      {/* Full-width Footer */}
      <FooterV2 />
    </div>
  );
}
