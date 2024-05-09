import Faq from "./commponents/Faq";
import Features from "./commponents/Features";
import { Hero } from "./commponents/Hero";
import { Navbar } from "./commponents/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Features />
      <Faq />
    </>
  );
}
