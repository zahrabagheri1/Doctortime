import React, { useContext, useEffect } from "react";
import { DoctorContext } from "../../context/DoctorContext";
import { AppContext } from "../../context/AppContext";
import { assets } from "../../assets/assets";

const DoctorAppointments = () => {
  const { dToken, appointmnets, setAppointments, getAppointmnets } =
    useContext(DoctorContext);
  const { calculateAge, slotDateFormat, currency } = useContext(AppContext);

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
          <p>DAte & Time</p>
          <p>Fees</p>
          <p>Action</p>
        </div>
        {appointmnets?.map((item, index) => (
          <div
            key={index}
            className="flex flex-wrap justify-between max-sm:page-5 max-sm:text-base sm:grid grid-cols-[0.5fr_2fr_1fr_1fr_3fr_1fr_1fr] gap-1 items-center text-gray-500 border-b px-6 py-3  hover::bg-gray-500"
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
              <p>{item.payment ? "Online" : "CASH"}</p>
            </div>
            <p className="max-sm:hidden">{calculateAge(item.userData?.dob)}</p>
            <p className="flex flex-row gap-2">
              <span>{slotDateFormat(item.slotDate)}</span>
              <span>|</span>
              <span>{item.slotTime}</span>
            </p>

            <p>
              {currency}
              {item.amount}
            </p>

            <div className="">
              <img src={assets.canceleicon} onClick={} alt="" />
              <img src={assets.tikicon} onClick={} alt="" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DoctorAppointments;
