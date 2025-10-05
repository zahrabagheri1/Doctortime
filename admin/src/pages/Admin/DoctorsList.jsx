import React, { useContext, useEffect } from "react";
import { AdminContext } from "../../context/AdminContext";

const DoctorsList = () => {
  const { doctors, aToken, getAllDoctors, chageavailability } =
    useContext(AdminContext);

  useEffect(() => {
    aToken && getAllDoctors();
  }, [aToken]);

  return (
    <div className="m-5 w-full max-h-[90vh] overflow-y-scroll">
      <div className="mb-3">
        <p className="text-lg font-bold">All Doctors</p>
        <p className="text-sm font-medium">
          Browse all available doctors and view their specialities, experience,
          fees, and availability.
        </p>
      </div>
      <div className="w-full flex flex-wrap gap-4 pt-5 gap-y-6">
        {doctors.map((item, index) => (
          <div
            key={index}
            className=" flex flex-col border-2 border-blue-200 max-w-56 rounded-xl overflow-hidden cursor-pointer group hover:border-primary transition-all duration-500  "
          >
            <img src={item.image} alt="" className="bg-white w-45 h-50 " />
            <div className="p-4 bg-white ">
              <p className="text-neutral-800 text-lg font-medium">
                {item.name}
              </p>
              <p className="text-zinc-600 text-sm">{item.speciality}</p>
              <div className="mt-2 flex items-center gap-1 text-sm">
                <input
                  onChange={() => chageavailability(item._id)}
                  type="checkbox"
                  checked={item.available}
                />
                <p>Available</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DoctorsList;
