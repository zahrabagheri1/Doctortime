import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";

const Myappointments = () => {
  const { doctors } = useContext(AppContext);
  return (
    <div>
      <p className="pb-3 mt-12 font-medium text-zinc-700 border-b">
        My Appointments
      </p>
      <div>
        {doctors.slice(0, 2).map((item, index) => (
          <div
            key={index}
            className="grid grid-cols-[1fr_2fr] gap-4 sm:flex sm:gap-6 py-2 border-b "
          >
            <div>
              <img src={item.image} alt="" className="w-35 h-45 rounded-md" />
            </div>
            <div className="flex flex-col flex-1 gap-2 text-sm text-zinc-600">
              <p className="text-neutral-800 font-semibold">{item.name}</p>
              <p className="">{item.speciality}</p>
              <p className="text-neutral-700 font-medium mt-1 ">Address:</p>
              <p className="text-xs">{item.address.line1}</p>
              <p className="text-xs">{item.address.line2}</p>
              <p className="text-sm mt-1">
                <span className="text-sm text-neutral-700 font-medium">
                  Date & Time:
                </span>{" "}
                25, July, 2025 | 8:30 PM
              </p>
            </div>
            <div></div>
            <div className="flex flex-col gap-2 justify-end">
              <button className="text-sm text-center text-stone-500 sm:min-w-48 py-2 border rounded-lg hover:bg-primary hover:text-white transition-all duration-300">
                Pay Online
              </button>
              <button className="text-sm text-center text-stone-500 sm:min-w-48 py-2 border rounded-lg  hover:bg-red-600 hover:text-white transition-all duration-300">
                Cancel appointment
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Myappointments;
