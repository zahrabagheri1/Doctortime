import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../context/AppContext";

const TopDocters = () => {
  const navigate = useNavigate();
  const { doctors } = useContext(AppContext);

  return (
    <div className="flex flex-col items-center gap-4 my-16 text-gray-900 md:mx-0">
      <h1 className="text-3xl font-medium">Meet Our Top Doctors</h1>
      <p className="sm:w-1/3 text-center text-sm">
        Our top doctors combine expertise and compassion for the best patient
        care.
      </p>
      <div className="w-full grid grid-cols-auto grid-auto-fill-200 gap-4 pt-5 gap-y-6 px-3 sm:px-0">
        {doctors.slice(0, 14).map((item, index) => (
          <div
            key={index}
            onClick={() => {navigate(`/appointment/${item.id}`); scrollTo(0,0)}}
            className="flex flex-col h-auto border border-blue-200 rounded-xl overflow-hidden cursor-pointer hover:translate-y-[-10px] transition-all duration-500 "
          >
            <img
              src={item.image}
              alt={item.name}
              className="bg-white w-full h-8/12"
            />

            <div className="p-4">
              <div className=" flex items-center gap-2 text-sm text-center text-green-500">
                <p className="w-2 h-2 bg-green-500 rounded-full"></p>
                <p>Available</p>
              </div>
              <p className="text-gray-900 text-lg font-medium">{item.name}</p>
              <p className="text-gray-600 text-sm">{item.speciality}</p>
            </div>
          </div>
        ))}
      </div>
      <button
        onClick={() => {
          navigate("doctors");
          scrollTo(0, 0);
        }}
        className="bg-secondary text-gray-800 px-12 py-3 rounded-full mt-5 cursor-pointer"
      >
        More
      </button>
    </div>
  );
};

export default TopDocters;
