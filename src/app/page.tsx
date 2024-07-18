import Image from "next/image";
import Navbar from "./component/NavBar";
import HeroSection from "./component/HeroSec";
import CoursesSec from "./component/CoursesSec";
import OverviewSec from "./component/OverviewSec";
import CompaniesSec from "./component/CompaniesSec";
import InternshipProgram from "./component/InternProgramSex";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between bg-white">
      <Navbar />
      <HeroSection />
      <CoursesSec />
      <OverviewSec />
      <CompaniesSec />
      <InternshipProgram />
    </main>
  );
}
