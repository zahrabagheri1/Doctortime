import React from "react";
import { assets } from "../assets/assets";

const Header = () => {
  return (
    <div className="flex flex-col md:flex-row bg-primary rounded-lg px-6 mt-2 md:px-10 lg:px-20">
      {/* {Left Side} */}
      <div className="md:w-1/2 flex flex-col items-start justify-center gap-4 py-10 m-auto md:py-[6vw] md:mb-[-30px]">
        <p className="text-2xl md:text-4xl lg:text-6xl text-white font-semibold leading-tight md:leading-tight lg:leading-tight">
          Book Appointment
          <br /> With Top Doctors
        </p>
        <div className="flex flex-col md:flex-row items-center gap-3 text-white text-sm font-light">
          <img className="w-28" src={assets.groupprofile} alt="" />
          <p>
            Take the stress out of healthcare by scheduling your{" "}
            <br className="hidden sm:block" /> next doctor's appointment from
            home.
          </p>
        </div>
        <a
          href="#speciality"
          className="flex items-center justify-center gap-2 bg-secondary px-8 py-3 rounded-full text-black text-sm m-auto md:m-0 hover:scale-105 transition-all duration-300"
        >
          Book apponitment <img src={assets.arrowIcon} className="w-3" alt="" />
        </a>
      </div>

      {/* {Right Side} */}
      <div className="md:w-1/2 relative">
        <img
          className="w-full md:absolute bottom-0 h-auto rounded-lg"
          src={assets.headerpic}
          alt=""
        />
      </div>
    </div>
  );
};

export default Header;
