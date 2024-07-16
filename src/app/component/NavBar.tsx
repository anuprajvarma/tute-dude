import React, { useState } from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <>
      <div className="w-full h-[80px] bg-white top-0">
        <div className="container w-10/12 mx-auto px-4 h-full">
          <div className="flex justify-between items-center h-full">
            <button className="text-slate">LOGO</button>
            <div className="flex gap-2">
              <button className="text-eminence">Login</button>
              <button className="bg-eminence px-5 py-3 rounded-xl bg-gradient-to-r from-eminence2 to-eminence">
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full h-[40px] justify-center flex gap-2 bg-slate">
        <div className="flex gap-2  items-center justify-center h-[40px]">
          <Link
            href={"/"}
            className="text-white border-b-4 border-oragnge h-[40px] items-center pt-2"
          >
            Overview
          </Link>
          <Link href={"/"} className="text-slate2 h-[40px] items-center pt-2">
            Curriculum
          </Link>
          <Link href={"/"} className="text-slate2 h-[40px] items-center pt-2">
            Refund
          </Link>
          <Link href={"/"} className="text-slate2 h-[40px] items-center pt-2">
            Testimonials
          </Link>
        </div>
      </div>
    </>
  );
};

export default Navbar;
