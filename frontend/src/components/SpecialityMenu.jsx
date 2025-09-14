import React from "react";
import { specialityData } from "../assets/assets";
import { Link } from "react-router-dom";

const SpecialityMenu = () => {
  return (
    <div
      id="speciality"
      className="flex flex-col items-center gap-4 py-16 text-gray-800"
    >
      <h1 className="text-3xl font-medium">Find by Speciality</h1>
      <p className="sm:w-1/2 text-center text-sm">
        Easily explore our wide network of trusted doctors and quickly find the
        right specialist for you.
      </p>

      <div className="flex sm:justify-center gap-4 pt-5 w-full overflow-scroll">
        {specialityData.map((item, index) => (
          <Link
          onClick={()=>scrollTo(0,0)}
            className="flex flex-col items-center justufy-center cursor-pointer flex-shrink-0 text-xs hover:translate-y-[-10px] transition-all duration-500"
            key={index}
            to={`/doctors/${item.speciality}`}
          >
            <div className="w-25 bg-four  flex  items-center justify-center p-3 rounded-full">
              <img
                src={item.image}
                className="w-16 sm:w-24  md-2"
                alt={item.speciality}
              />
            </div>
            <p>{item.speciality}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default SpecialityMenu;
