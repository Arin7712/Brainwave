import Image from "next/image";
import ButtonGradient from "@/public/assets/svg/ButtonGradient";
import Header from "@/components/Header";
import Button from "@/components/Button";
import Hero from "@/components/Hero";
import Benefits from "@/components/Benefits";
import Collaboration from "@/components/Collaboration";
import Services from "@/components/Services";
import Pricing from "@/components/Pricing";
import Roadmap from "@/components/Roadmap";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
    <h1 className="">Hello</h1>
    <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
      <Header/>
      <Hero/>
      <Benefits/>
      <Collaboration/>
      <Services/>
      <Pricing/>
      <Roadmap/>
      <Footer/>
    </div>
    <ButtonGradient/>
    </>
  );
}
