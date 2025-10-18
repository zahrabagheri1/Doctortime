import React, { useContext, useEffect } from "react";
import { assets } from "../../assets/assets";
import { AdminContext } from "../../context/AdminContext";
import { AppContext } from "../../context/AppContext";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const { aToken, getDashData, cancelAppointment, dashData } =
    useContext(AdminContext);
  const { slotDateFormat } = useContext(AppContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (aToken) getDashData();
  }, [aToken]);

  return (
    dashData && (
      <div className="w-full max-w-7xl m-5">
        <div className="mb-5">
          <p className="text-lg font-bold">Dashboard</p>
          <p className="text-sm font-medium">
            All appointments at a glance. Manage bookings, cancellations, and
            updates efficiently.
          </p>
        </div>
        <div className="flex flex-warap gap-3">
          {/* doctors */}
          <div
            onClick={() => navigate('/doctor-list')}
            className="flex items-center gap-2 bg-[#d5e6fc] p-4 min-w-52 border-1 rounded-xl border-gray-100 cursor-pointer hover:scale-105 transition-all"
          >
            <img className="w-14" src={assets.doctoricon} alt="" />
            <div>
              <p className="text-xl font-semibold text-gray-700">
                {dashData.doctors}
              </p>
              <p className="text-gray-400">Doctors</p>
            </div>
          </div>
          {/* appointments */}
          <div
            onClick={() => navigate('/all-appointments')}
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
          {/* users */}
          <div
            onClick={() => navigate('')}
            className="flex items-center gap-2 bg-[#d5e6fc] p-4 min-w-52 border-1 rounded-xl border-gray-100 cursor-pointer hover:scale-105 transition-all"
          >
            <img className="w-14" src={assets.patienticon} alt="" />
            <div>
              <p className="text-xl font-semibold text-gray-700">
                {dashData.patients}
              </p>
              <p className="text-gray-400">Users</p>
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
                src={item.docData?.image}
                className="w-12 h-12 rounded-full"
              />
              <div className="flex-1 text-sm">
                <p className="text-gray-800 font-semibold">
                  {item.docData?.name}
                </p>
                <p className="text-gray-600">{slotDateFormat(item.slotDate)}</p>
              </div>

              {item.cancelled ? (
                <p className="text-red-400 text-xs font-semibold ">Cancelled</p>
              ) : (
                <img
                  onClick={() => cancelAppointment(item._id)}
                  src={assets.canceleicon}
                  className="w-8 cursor-pointer"
                />
              )}
            </div>
          ))}
        </div>
      </div>
    )
  );
};

export default Dashboard;
