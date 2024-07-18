import React from "react";
import { IoMdTime } from "react-icons/io";

function OverviewSec() {
  return (
    <div className="w-full h-auto bg-white flex justify-center">
      <div className="w-10/12 flex flex-col gap-12 py-28">
        <div className="flex justify-center">
          <p className="text-woodsmoke2 w-[60rem] font-bold text-5xl text-center">
            Don't miss out on this{" "}
            <span className="bg-gradient-to-r from-eminence2 to-eminence inline-block text-transparent bg-clip-text">
              limited-time
            </span>
            <span className="bg-gradient-to-r from-eminence2 to-eminence inline-block text-transparent bg-clip-text">
              opportunity
            </span>{" "}
            to learn for{" "}
            <span className="bg-gradient-to-r from-eminence2 to-eminence inline-block text-transparent bg-clip-text">
              Free!
            </span>
          </p>
        </div>
        <div className="flex justify-center">
          <div className="bg-gradient-to-r from-blue to-blue2 w-[30rem] flex flex-col gap-4 rounded-2xl py-8 px-4">
            <p className="text-center font-bold text-2xl">
              100% Refund Offer 😎
            </p>
            <div>
              <p className="text-white/70">20 Seats Left</p>
              <input
                type="range"
                className="w-full h-2 bg-yellow-500 appearance-none rounded-full cursor-pointer"
              />
            </div>
            <div className="flex gap-2 justify-center items-center text-xl">
              <IoMdTime className="text-3xl" />
              <p>Offer ends in 10:00Mins</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center gap-8">
          <p className="text-eminence4 text-4xl text-center font-bold">
            How does it work?
          </p>
          <div className="bg-woodsmoke3/10 rounded-full w-[40rem] h-1">
            <div className="bg-eminence rounded-full w-10 h-1 transition duration-1000 animate-refine-slide relative"></div>
          </div>
          <div className="flex w-full justify-center gap-8">
            <div className="w-[20rem] items-center flex flex-col justify-center gap-4">
              <div className="flex flex-col items-center justify-center gap-8 bg-gradient-to-r from-white w-[20rem] to-eminence5 rounded-2xl p-4">
                <p className="text-eminence6 font-semibold">
                  Step 1:Enroll into your favorite course for only 1,499
                </p>
                <img
                  src="/tutedudecourse.png"
                  className="w-[8rem] h-[5rem]"
                ></img>
                <p className="text-slate font-medium">
                  Start Learning with{" "}
                  <span className="text-woodsmoke4">
                    Lifetime Course Access.
                  </span>
                </p>
              </div>
            </div>
            <div className="w-[20rem] items-center flex flex-col justify-center gap-4">
              <div className="flex flex-col items-center justify-center gap-8 bg-gradient-to-r from-white w-[20rem] to-eminence5 rounded-2xl p-4">
                <p className="text-eminence6 font-semibold">
                  Step 2: Complete Course & Assignments within 2 Years!
                </p>
                <img
                  src="/tutedudecourse.png"
                  className="w-[8rem] h-[5rem]"
                ></img>
                <p className="text-slate font-medium">
                  Finish the course within 2 Years to Qualify for Refund.
                </p>
              </div>
            </div>
            <div className="w-[20rem] items-center flex flex-col justify-center">
              <div className="flex flex-col items-center justify-center gap-8 bg-gradient-to-r from-white w-[20rem] to-eminence5 rounded-2xl p-4">
                <p className="text-eminence6 font-semibold">
                  Step 3: Receive 100% Refund upon completion
                </p>
                <img
                  src="/tutedudecourse.png"
                  className="w-[8rem] h-[5rem]"
                ></img>
                <p className="text-slate font-medium">
                  Upon Course Completion within 2 Years, Get Your ₹1,499 Back.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OverviewSec;
