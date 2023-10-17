import Image from "next/image";
import HeroSection from "./components/HeroSection";
import Chat from "./components/Chat";
import Block from "./components/Block";
import Caroussel from "./components/Caroussel";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="bg-[#f5f5f5]">
      <HeroSection />
      <Chat />
      <Block />
      <Caroussel />
      <Footer />
    </div>
  );
}
