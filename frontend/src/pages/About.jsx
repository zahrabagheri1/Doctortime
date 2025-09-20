import React from "react";
import { assets } from "../assets/assets";

const About = () => {
  return (
    <div>
      <div className="text-center text-2xl pt-10 text-gray-600">
        <p>
          About <span className="text-gray-700 font-medium">US</span>{" "}
        </p>
      </div>

      <div className="my-10 flex flex-col md:flex-row gap-12">
        <img className="w-full md:max-w-[360px]" src={assets.aboutus} alt="" />
        <div className="flex flex-col justify-center gap-3 md:w-2/4 text-sm text-gray-600">
          <b className="text-gray-800">Welcome to DoctorTime</b>
          <p>
            Welcome to DoctorTime, your reliable companion in managing your
            healthcare appointments and needs with ease and efficiency. At
            DoctorTime, we understand that finding the right doctor and
            scheduling appointments can sometimes be challenging, and we are
            here to simplify that process for you.
          </p>
          {/* <b className="text-gray-800">Our Commitment</b> */}
          <p>
            At DoctorTime, we are dedicated to providing a seamless healthcare
            experience through innovative technology. We continually enhance our
            platform to make it easier for users to book appointments, access
            medical information, and stay on top of their health. Whether it’s
            your first visit or ongoing care, DoctorTime is designed to support
            you every step of the way.
          </p>
          <b className="text-gray-800">Our Vision</b>
          <p>
            Our vision at DoctorTime is to connect patients with healthcare
            providers effortlessly, ensuring that everyone can access the care
            they need, when they need it. We strive to make healthcare simple,
            convenient, and efficient for all our users.
          </p>
        </div>
      </div>

      <div className="text-xl my-4 ">
        <p>
          WHY <span className="text-gray-700 font-semibold">CHOOSE US</span>{" "}
        </p>
      </div>

      <div className="flex flex-col md:flex-row md-20">
        <div className="border px-8 md:px-10 py-6 sm:py-10 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer ">
          <b>Efficiency:</b>
          <p>
            Streamlined appointment scheduling that fits seamlessly into your
            busy lifestyle. Save time and manage your healthcare effortlessly.
          </p>
        </div>
        <div className="border px-8 md:px-10 py-6 sm:py-10 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer ">
          <b>Convenience:</b>
          <p>
            Access a trusted network of healthcare professionals in your area,
            all from one easy-to-use platform.
          </p>
        </div>
        <div className="border px-8 md:px-10 py-6 sm:py-10 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer ">
          <b>Personalization:</b>
          <p>
            Receive tailored recommendations and reminders to help you stay on
            top of your health, ensuring care that’s designed just for you.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
