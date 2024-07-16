import Image from "next/image";
import { CiStar } from "react-icons/ci";
import { LuFolderCheck } from "react-icons/lu";
import { FaUserGraduate } from "react-icons/fa6";
import { MdComputer } from "react-icons/md";
import { BsPatchQuestion } from "react-icons/bs";
import React from "react";

const HeroSection = () => {
  return (
    <div className="h-full w-full flex flex-col items-center justify-center bg-white">
      <div className="w-10/12 pt-16 flex flex-col">
        <div className="flex flex-col gap-4">
          <div className="flex gap-4 px-6 py-4 border border-oragnge items-center text-xl w-[23rem] rounded-2xl">
            <Image
              src={"/graduation-cap.jpg"}
              width={30}
              height={30}
              alt="graduation-cap"
            />
            <p className="text-woodsmoke">
              An <span className="font-bold">IIT Delhi</span> Alumni Initiative
            </p>
          </div>
          <div className="pl-2 flex flex-col gap-2">
            <div className="text-woodsmoke2 flex flex-col py-6 gap-4 text-6xl font-bold">
              <p>Become an Expert in the</p>
              <p>
                field of <span className="text-eminence">Data Science</span>
              </p>
              <p className="text-eminence">with 6 Courses</p>
            </div>
            <p className="text-woodsmoke2 text-2xl pl-2">
              A specially crafted Tech Kickstarter, with{" "}
              <span className="text-slate">5+ extensive online courses.</span>
            </p>
          </div>
          <div className="flex gap-4 pl-2 items-center">
            <div className="text-oragnge2 py-2 px-2 flex gap-1 items-center bg-orannge3 rounded-full">
              {" "}
              <CiStar className="text-4xl pb-1" />{" "}
              <p className="text-lg pr-2">Personal Mentorship</p>
            </div>
            <div className="text-oragnge2 py-2 px-2 flex gap-1 items-center bg-orannge3 rounded-full">
              {" "}
              <CiStar className="text-4xl pb-1" />{" "}
              <p className="text-lg pr-2">Internship Assistant</p>
            </div>
            <div className="text-oragnge2 py-2 px-2 flex gap-1 items-center bg-orannge3 rounded-full">
              {" "}
              <CiStar className="text-4xl pb-1" />{" "}
              <p className="text-lg pr-2">Industry Certified Courses</p>
            </div>
          </div>
          <div className="pl-2 py-2 flex gap-6">
            <button className="bg-eminence px-12 py-5 rounded-3xl bg-gradient-to-r from-eminence2 to-eminence">
              <p className="text-xl">Enroll Now</p>
            </button>
            <div className="py-2 flex items-center">
              <p className="text-eminence text-xl font-medium">Know More</p>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full flex justify-center pl-2 py-12 my-24 items-center bg-gradient-to-r from-eminence2/5 to-eminence/5">
        <div className="w-10/12 flex justify-between">
          <div className="flex gap-2 items-center">
            <MdComputer className="text-6xl text-eminence" />{" "}
            <div>
              <p className="text-eminence text-2xl">24</p>
              <p className="text-woodsmoke3 text-2xl">Courses</p>
            </div>
          </div>
          <div className="flex gap-2 items-center">
            <FaUserGraduate className="text-6xl text-eminence" />{" "}
            <div>
              <p className="text-eminence text-2xl">30K+</p>
              <p className="text-woodsmoke3 text-2xl">Learners</p>
            </div>
          </div>
          <div className="flex gap-2 items-center">
            <BsPatchQuestion className="text-6xl text-eminence" />{" "}
            <div>
              <p className="text-eminence text-2xl">100K+</p>
              <p className="text-woodsmoke3 text-2xl">Doubts Solved</p>
            </div>
          </div>
          <div className="flex gap-2 items-center">
            <LuFolderCheck className="text-6xl text-eminence" />{" "}
            <div>
              <p className="text-eminence text-2xl">10K+</p>
              <p className="text-woodsmoke3 text-2xl">Student Projects</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
