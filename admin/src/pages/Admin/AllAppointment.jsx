import React from "react";
import { useContext } from "react";
import { AdminContext } from "../../context/AdminContext";
import { useEffect } from "react";
import { AppContext } from "../../context/AppContext";
import { assets } from "../../assets/assets";

const AllAppointment = () => {
  const { aToken, appointments, getAllAppointments, cancelAppointment } =
    useContext(AdminContext);
  const { calculateAge, slotDateFormat, currency } = useContext(AppContext);

  useEffect(() => {
    if (aToken) {
      getAllAppointments();
    }
  }, [aToken]);

  console.log(appointments);
  return (
    <div className="w-full max-w-6xl m-5">
      <div className="mb-5">
        <p className="text-lg font-bold">All Appointments</p>
        <p className="text-sm font-medium">
          Manage all patient appointments in one place. View details, monitor
          status, and take quick actions when needed.
        </p>
      </div>
      <div className="bg-white border border-gray-300 rounded  text-sm max-h-[75vh] min-h-[60vh] overflow-y-scroll">
        <div className="hidden text-[16px] sm:grid grid-cols-[0.5fr_3fr_1fr_3fr_3fr_1fr_1fr] grid-flow-col py-3 px-6 border-b border-gray-300 sticky top-0 bg-white">
          <p>#</p>
          <p>Patient</p>
          <p>Age</p>
          <p>Date & time</p>
          <p>Doctor</p>
          <p>Fees</p>
          <p>Actions</p>
        </div>

        {appointments?.map((item, index) => (
          <div
            key={index}
            className="flex flex-wrap justify-between max-sm:gap-2 sm:grid grid-cols-[0.5fr_3fr_1fr_3fr_3fr_1fr_1fr] items-center text-gray-500 py-3 px-6 border-b border-gray-200 hover:bg-gray-100"
          >
            <p className="max-sm:hidden">{index + 1}</p>
            <div className="flex justify-start items-center gap-2">
              <img src={item.userData?.image} className="w-12 h-12 rounded-full" />
              <p>{item.userData?.name}</p>
            </div>
            <p className="max-sm:hidden">{calculateAge(item.userData?.dob)}</p>
            <p className="flex flex-row gap-2">
              <span>{slotDateFormat(item.slotDate)}</span>
              <span>|</span>
              <span>{item.slotTime}</span>
            </p>

            <div className="flex justify-start items-center gap-2">
              <img src={item.docData?.image} className="w-10 h-10 rounded-full" />
              <p>{item.docData?.name}</p>
            </div>

            <p>
              {currency}
              {item.amount}
            </p>
            {item.cancelled ? (
              <p className="text-red-400 text-xs font-semibold ">Cancelled</p>
            ) : (
              <img
                onClick={() => cancelAppointment(item._id)}
                src={assets.canceleicon}
                className="w-8 cursor-pointer"
                alt=""
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllAppointment;
