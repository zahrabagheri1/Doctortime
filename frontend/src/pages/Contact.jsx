import React from "react";
import { assets } from "../assets/assets";

const Contact = () => {
  return (
    <div>
      <div className="text-center text-2xl pt-10 text-gray-600">
        <p>
          CONTACT <span className="text-gray-700 font-semibold">US</span>{" "}
        </p>
      </div>

      <div className="my-10 flex flex-col justify-center md:flex-row gap-10 mb-28 text-sm">
        <img
          className="w-full md:max-w-[360px]"
          src={assets.contactus}
          alt="contactus doctor time"
        />
        <div className="flex flex-col justify-center itmes-start gap-4 md:w-2/4 text-sm text-gray-600">
          <p className="font-semibold text-lg text-gray-600">OUR OFFICE</p>
          <p className="text-gray-500">54709 Willms Station, Suite 350 <br />Melbourne, Australia</p>
          <p className="text-gray-500">Phone: (415) 555‑0132<br />Email: support@doctortime.com</p>
          <p className="text-lg font-semibold text-gray-600">Careers at DoctorTime</p>
          <p className="text-gray-500">
            Join our team and be part of transforming healthcare. Explore our
            open positions and learn more about our work culture.
          </p>
          <button className="w-50 border border-secondary bg-secondary py-4 text-sm hover:bg-primary hover:text-white transition-all duration-500 rounded-full text-black cursor-pointer">
            Explore Jobs
          </button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
