import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import LogoBar from "@/components/LogoBar";
import About from "@/components/About";
import Writing from "@/components/Writing";
import GordonManagement from "@/components/GordonManagement";
import Book from "@/components/Book";
import Newsletter from "@/components/Newsletter";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="flex flex-col items-center w-full overflow-x-hidden">
      <Navbar />
      <Hero />
      <div className="flex flex-col items-center w-full gap-12">
        <LogoBar />
        <About />
        <Writing />
        <GordonManagement />
        <Book />
        <Newsletter />
        <Footer />
      </div>
    </main>
  );
}
