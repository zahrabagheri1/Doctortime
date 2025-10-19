import React, { useContext, useEffect } from "react";
import { DoctorContext } from "../../context/DoctorContext";
import { AppContext } from "../../context/AppContext";
import { assets } from "../../assets/assets";

const DoctorAppointments = () => {
  const {
    dToken,
    appointmnets,
    getAppointmnets,
    cancelAppointment,
    completeAppointment,
  } = useContext(DoctorContext);
  const { calculateAge, slotDateFormat, currency } = useContext(AppContext);

  console.log(appointmnets)
  useEffect(() => {
    if (dToken) getAppointmnets();
  }, [dToken]);

  return (
    <div className="w-full max-w-6xl m-5">
      <div className="mb-5">
        <p className="text-lg font-bold">Doctor Appointments</p>
        <p className="text-sm font-medium"></p>
      </div>

      <div className="bg-white border border-gray-300 rounded  text-sm max-h-[75vh] min-h-[60vh] overflow-y-scroll">
        <div className="max-sm:hidden text-[16px] sm:grid grid-cols-[0.5fr_2fr_1fr_1fr_3fr_1fr_1fr] grid-flow-col py-3 px-6 border-b border-gray-300 sticky top-0 bg-white">
          <p>#</p>
          <p>Patient</p>
          <p>Payment</p>
          <p>Age</p>
          <p>Date & Time</p>
          <p>Fees</p>
          <p>Action</p>
        </div>
        {appointmnets?.map((item, index) => (
          <div
            key={index}
            className="flex flex-wrap justify-between max-sm:page-5 max-sm:text-base sm:grid grid-cols-[0.5fr_2fr_1fr_1fr_3fr_1fr_1fr] gap-1 items-center text-gray-500 border-b px-6 py-3  hover:bg-gray-100"
          >
            <p className="max-sm:hidden">{index + 1}</p>
            <div className="flex justify-start items-center gap-2">
              <img
                src={item.userData?.image}
                className="w-12 h-12 rounded-full"
              />
              <p>{item.userData?.name}</p>
            </div>
            <div>
              <p className="text-xs inline border-2 bg-secondary text-white border-primary px-2 rounded-full">
                {item?.payment ? "Online" : "CASH"}
              </p>
            </div>
            <p className="max-sm:hidden">{calculateAge(item.userData?.dob)}</p>
            <p className="flex flex-row gap-2">
              <span>{slotDateFormat(item?.slotDate)}</span>
              <span>|</span>
              <span>{item?.slotTime}</span>
            </p>

            <p>
              {currency}
              {item?.amount}
            </p>

            {item.cancelled ? (
              <p className="text-red-500 text-xs font-semibold ">Cancelled</p>
            ) : item.isCompleted ? (
              <p className="text-green-500 text-xs font-semibold ">Completed</p>
            ) : (
              <div className="flex flex-row gap-3">
                <img
                  className="w-8 h-8 cursor-pointer"
                  src={assets.canceleicon}
                  onClick={() => cancelAppointment(item._id)}
                  alt=""
                />
                <img
                  className="w-8 h-8 cursor-pointer"
                  src={assets.tikicon}
                  onClick={() => completeAppointment(item._id)}
                  alt=""
                />
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default DoctorAppointments;
