import React from "react";
import { assets, usersFeedbacks } from "../assets/assets";

const Feedbacks = () => {
  return (
    <div className="flex flex-col justify-center gap-5">
      <div className="flex flex-col">
        <p className="font-bold text-2xl ">What People Say About DoctorTime</p>
        <p className="text-sm text-gray-500">Real stories from patients and doctors who trust our platform every day.</p>
      </div>

      <div className="w-full grid grid-cols-auto grid-auto-fill-400 gap-4">
        {usersFeedbacks.slice(0, 6).map((item, index) => (
          <div
            key={index}
            className="p-3 w-3 sm:w-full border border-blue-200 rounded-xl bg-four"
          >
            <div className="flex flex-row items-center ">
              <img
                src={item.image}
                alt={item.name}
                className="w-30 lg:w-25 md:w-20 sm:w-20 rounded-full"
              />
              <div>
                <p className="text-xl text-gray-950 font-bold">{item.name}</p>
                <p className="text-sm text-gray-800">{item.role}</p>

                {/* <div className=" flex flex-row">
                  {[...Array(item.rating)].map((e, index) => (
                    <span key={index}>
                      <img  className="w-3" src={assets.ratingStar} alt="" />
                    </span>
                  ))}
                </div> */}
              </div>
            </div>

            <div className="pl-6 flex flex-col gap-4">
              <p className="text-lg">{item.feedback}</p>

              <div className="flex flex-row gap-3 text-sm">
                <p>{item.location}</p>
                <p>{item.date}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Feedbacks;
