import Image from "next/image";
import Navbar from "./component/NavBar";
import HeroSection from "./component/HeroSec";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between">
      <Navbar />
      <HeroSection/>
    </main>
  );
}
