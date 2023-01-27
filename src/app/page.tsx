import { Quicksand } from "@next/font/google";
import Banner from "@/components/sections/Banner";
import WhyUs from "@/components/sections/WhyUs";
import Project from "@/components/sections/Project";
import Services from "@/components/sections/Services";
import Professional from "@/components/sections/Professionals";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/sections/Footer";
import Nav from "@/components/sections/Nav";

const quickSand = Quicksand({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
});

export default function Home() {
  return (
    <main className={`${quickSand.className}`}>
      <Nav />
      <Banner />
      <WhyUs />
      <Project />
      <Services />
      <Professional />
      <Contact />
      <Footer />
    </main>
  );
}
