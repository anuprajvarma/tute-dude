import React from "react";
import { CiStar } from "react-icons/ci";

const InternshipProgram = () => {
  return (
    <div className="w-full h-auto bg-white flex justify-center">
      <div className="w-10/12 flex flex-col gap-12 py-28">
        <div className="flex justify-center">
          <p className="text-woodsmoke2 w-[60rem] font-bold text-4xl flex gap-2 justify-center text-center">
            <span>Unlock</span>
            <span className="bg-gradient-to-r from-eminence2 to-eminence inline-block text-transparent bg-clip-text">
              6 Certificates
            </span>
            <span>&</span>
            <span className="bg-gradient-to-r from-eminence2 to-eminence inline-block text-transparent bg-clip-text">
              Internship Opportunities!
            </span>
          </p>
        </div>
        <div className="w-full flex gap-6 justify-center">
          <div className="bg-gradient-to-r from-eminence2/5 to-eminence/5 w-[35rem] h-[33rem] flex flex-col items-center gap-8 py-10 rounded-3xl">
            <p className="text-eminence4 text-2xl w-[20rem] text-center font-semibold">
              Get 6 Industry Recognized Certificates!
            </p>
            <img src="/cirtificate.png" className="w-[26rem] h-[18rem]" />
            <div className="flex gap-2">
              <div className="text-oragnge2 py-2 px-2 flex gap-1 items-center bg-gradient-to-r from-eminence-200 to-eminence3 rounded-full">
                {" "}
                <CiStar className="text-eminence text-xl" />{" "}
                <p className="text-eminence text-lg pr-1">
                  Official and Verified
                </p>
              </div>
              <div className="text-oragnge2 py-2 px-2 flex gap-1 items-center bg-gradient-to-r from-eminence-200 to-eminence3 rounded-full">
                {" "}
                <CiStar className="text-eminence text-xl" />{" "}
                <p className="text-eminence text-lg pr-1">
                  Enhances Credibility
                </p>
              </div>
            </div>
          </div>
          <div className="bg-gradient-to-r from-eminence2/5 to-eminence/5 w-[35rem] h-[33rem] flex flex-col items-center gap-8 py-10 rounded-3xl">
            <p className="text-eminence4 text-2xl w-[20rem] text-center font-semibold">
              Get 6 Industry Recognized Certificates!
            </p>
            <img src="/cirtificate.png" className="w-[26rem] h-[18rem]" />
            <div className="flex gap-2">
              <div className="text-oragnge2 py-2 px-2 flex gap-1 items-center bg-gradient-to-r from-eminence-200 to-eminence3 rounded-full">
                {" "}
                <CiStar className="text-eminence text-xl" />{" "}
                <p className="text-eminence text-lg pr-1">
                  Official and Verified
                </p>
              </div>
              <div className="text-oragnge2 py-2 px-2 flex gap-1 items-center bg-gradient-to-r from-eminence-200 to-eminence3 rounded-full">
                {" "}
                <CiStar className="text-eminence text-xl" />{" "}
                <p className="text-eminence text-lg pr-1">
                  Enhances Credibility
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InternshipProgram;
