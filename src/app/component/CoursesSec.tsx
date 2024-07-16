import React from "react";
import { FaEye } from "react-icons/fa";

const CoursesSec = () => {
  return (
    <div className="w-full h-screen bg-gradient-to-r from-eminence2/5 to-eminence/5 flex justify-center">
      <div className="w-10/12 flex flex-col gap-12 py-20">
        <div className="flex flex-col items-center justify-center gap-4">
          <div className="px-6 py-4 bg-gradient-to-r from-eminence-200 to-eminence3 rounded-full border border-eminence3">
            <p className="text-eminence text-xl">
              DATASCIENCE COURSE LEARNING PATH
            </p>
          </div>
          <p className="text-5xl font-bold text-woodsmoke">
            <span className="bg-gradient-to-r from-eminence to-oragnge inline-block text-transparent bg-clip-text">
              Data Science
            </span>{" "}
            Course Curriculum
          </p>
        </div>
        <div className="w-full bg-white rounded-2xl">
          <div className="p-6 flex justify-between">
            <div className="flex flex-col">
              <p className="text-woodsmoke text-xl font-bold">C++</p>
              <p className="text-woodsmoke3">
                Learn C++ for strong programming fundamentals.
              </p>
            </div>
            <div className="px-6 py-4 flex gap-2 items-center bg-gradient-to-r from-eminence-200 to-eminence3 rounded-full border border-eminence3">
              <FaEye className="text-eminence text-xl" />
              <p className="text-eminence text-xl">View Curriculum</p>
            </div>
          </div>
          <div className="p-6 flex justify-between">
            <div className="flex flex-col">
              <p className="text-woodsmoke text-xl font-bold">MERN Stack</p>
              <p className="text-woodsmoke3">
                Master the MERN stack for high-demand projects.
              </p>
            </div>
            <div className="px-6 py-4 flex gap-2 items-center bg-gradient-to-r from-eminence-200 to-eminence3 rounded-full border border-eminence3">
              <FaEye className="text-eminence text-xl" />
              <p className="text-eminence text-xl">View Curriculum</p>
            </div>
          </div>
          <div className="p-6 flex justify-between">
            <div className="flex flex-col">
              <p className="text-woodsmoke text-xl font-bold">
                Data Structure & Algorithm
              </p>
              <p className="text-woodsmoke3">
                Excel in Data Structure and Algorithms for interview success.
              </p>
            </div>
            <div className="px-6 py-4 flex gap-2 items-center bg-gradient-to-r from-eminence-200 to-eminence3 rounded-full border border-eminence3">
              <FaEye className="text-eminence text-xl" />
              <p className="text-eminence text-xl">View Curriculum</p>
            </div>
          </div>
          <div className="p-6 flex justify-between">
            <div className="flex flex-col">
              <p className="text-woodsmoke text-xl font-bold">
                Competitve Programming
              </p>
              <p className="text-woodsmoke3">
                Excel in Data Structure and Algorithms for interview success.
              </p>
            </div>
            <div className="px-6 py-4 flex gap-2 items-center bg-gradient-to-r from-eminence-200 to-eminence3 rounded-full border border-eminence3">
              <FaEye className="text-eminence text-xl" />
              <p className="text-eminence text-xl">View Curriculum</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoursesSec;
