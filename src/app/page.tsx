import Image from "next/image";
import Navbar from "./component/NavBar";
import HeroSection from "./component/HeroSec";
import CoursesSec from "./component/CoursesSec";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between bg-white">
      <Navbar />
      <HeroSection />
      <CoursesSec />
    </main>
  );
}
