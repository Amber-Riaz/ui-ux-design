import Cts from "./commponents/Cts";
import ExtraHeader from "./commponents/ExtraHeader";
import Faq from "./commponents/Faq";
import Features from "./commponents/Features";
import Footer from "./commponents/Footer";
import { Hero } from "./commponents/Hero";
import { Navbar } from "./commponents/Navbar";
import Pricing from "./commponents/Pricing";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Features />
      <Faq />
      <Pricing />
      <Cts />
      <Footer />
      <ExtraHeader />
      {/* //extra commponent of hero section */}
    </>
  );
}
