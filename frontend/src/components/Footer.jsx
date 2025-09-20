import React from "react";
import { assets } from "../assets/assets";

const Footer = () => {
  return (
    <div className="md:mx-0 mt-30">
       <hr/>
      <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 text-sm">
        {/* {Left section} */}
        <div>
          <img src={assets.doctimelogotype} className="mb-5 w-40" alt="" />
          <p className="w-full md:w-4/5 text-gray-600 leading-6 ">
            DoctorTime is a secure and reliable platform designed to simplify
            the way patients connect with doctors. Our goal is to make
            healthcare more accessible by offering a seamless booking
            experience, flexible scheduling options, and trusted communication
            between patients, doctors, and clinics.
          </p>
        </div>

        {/* {Center section} */}
        <div>
          <p className="text-xl font-medium mb-5">Company</p>
          <ul className="flex flex-col gap-2 text-gray-600">
            <li>Home</li>
            <li>About us</li>
            <li>Contant us</li>
            <li>Privacy Policy</li>
          </ul>
        </div>

        {/* {Right section} */}
        <div>
          <p className="text-xl font-medium mb-5">Get in touch</p>
          <ul className="flex flex-col gap-2 text-gray-600">
            <li>+9365172977</li>
            <li>zahrabagheribb@gmail.com</li>
          </ul>
        </div>
      </div>

      {/* COPY Right Section */}
      <hr/>
      <div className="py-5 text-sm text-center" >Copyright © 2025 zahrabagheri - All Right Reserved.</div>
    </div>
  );
};

export default Footer;
