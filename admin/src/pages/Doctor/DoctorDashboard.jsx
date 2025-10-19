import React, { useContext, useEffect } from "react";
import { DoctorContext } from "../../context/DoctorContext";
import { assets } from "../../assets/assets";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../../context/AppContext";

const DoctorDashboard = () => {
  const { dToken, getDashData, dashData,completeAppointment, cancelAppointment } =
    useContext(DoctorContext);
  const { slotDateFormat, currency } = useContext(AppContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (dToken) {
      getDashData();
    }
  }, [dToken]);

  return (
    dashData && (
      <div className="w-full max-w-6xl m-5">
        <div className="mb-5">
          <p className="text-lg font-bold">Doctor Dashboard</p>
          <p className="text-sm font-medium">
            Here is your daily overview and a summary of today's key tasks.
          </p>
        </div>
        <div className="flex flex-warap gap-3">
          {/* patients */}
          <div
            onClick={() => navigate("/doctor-dashboard")}
            className="flex items-center gap-2 bg-[#d5e6fc] p-4 min-w-52 border-1 rounded-xl border-gray-100 cursor-pointer hover:scale-105 transition-all"
          >
            <img className="w-14" src={assets.patienticon} alt="" />
            <div>
              <p className="text-xl font-semibold text-gray-700">
                {dashData.patients}
              </p>
              <p className="text-gray-400">Patients</p>
            </div>
          </div>
          {/* appointments */}
          <div
            onClick={() => navigate("/doctor-appointments")}
            className="flex items-center gap-2 bg-[#d5e6fc] p-4 min-w-52 border-1 rounded-xl border-gray-100 cursor-pointer hover:scale-105 transition-all"
          >
            <img className="w-14" src={assets.appointmenticon} alt="" />
            <div>
              <p className="text-xl font-semibold text-gray-700">
                {dashData.appointments}
              </p>
              <p className="text-gray-400">Appointments</p>
            </div>
          </div>
          {/* earnings */}
          <div
            onClick={() => navigate("/doctor-dashboard")}
            className="flex items-center gap-2 bg-[#d5e6fc] p-4 min-w-52 border-1 rounded-xl border-gray-100 cursor-pointer hover:scale-105 transition-all"
          >
            <img className="w-14" src={assets.earningicon} alt="" />
            <div>
              <p className="text-xl font-semibold text-gray-700">
                {currency}
                {dashData.earnings}
              </p>
              <p className="text-gray-400">Earnings</p>
            </div>
          </div>
        </div>

        <div className="bg-white border border-gray-300 rounded text-sm max-h-[60vh] min-h-[45vh] overflow-y-scroll mt-5">
          <div className="hidden text-[16px] items-center justify-start gap-2 sm:grid grid-flow-col py-3 px-6 border-b border-gray-300 sticky top-0 bg-white">
            <img src={assets.listicon} className="w-8" />
            <p>latest Appointments</p>
          </div>
          <div className="p"></div>
          {dashData.latestAppointments?.map((item, index) => (
            <div
              key={index}
              className="flex items-center gap-5 px-6 py-3 border-b border-gray-200 hover:bg-gray-100"
            >
              <img
                src={item.userData?.image}
                className="w-12 h-12 rounded-full"
              />
              <div className="flex-1 text-sm">
                <p className="text-gray-800 font-semibold">
                  {item.userData?.name}
                </p>
                <p className="text-gray-600">{slotDateFormat(item.slotDate)}</p>
              </div>

              {item.cancelled ? (
                <p className="text-red-500 text-xs font-semibold ">Cancelled</p>
              ) : item.isCompleted ? (
                <p className="text-green-500 text-xs font-semibold ">
                  Completed
                </p>
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
    )
  );
};

export default DoctorDashboard;
