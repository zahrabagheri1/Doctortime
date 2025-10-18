import React, { useContext } from "react";
import { AdminContext } from "../context/AdminContext";
import { NavLink } from "react-router-dom";
import { assets } from "../assets/assets";
import { DoctorContext } from "../context/DoctorContext";

const Sidebar = () => {
  const { aToken } = useContext(AdminContext);
  const { dToken } = useContext(DoctorContext);

  return (
    <div className="min-h-screen bg-white border-r  border-gray-400">
      {aToken && (
        <ul className="text-gray-700 mt-5">
          <NavLink
            to={"/admin-dashboard"}
            className={({ isActive }) =>
              `flex items-center gap-3 py-3.5 px-3 md:px-9 md:min-w-60 min-w-50 cursor-pointer ${
                isActive ? "bg-[#d5e6fc] border-r-4 border-primary " : ""
              }`
            }
          >
            <img src={assets.homeicon} alt="" className="w-8" />
            <p className="hidden md:block">Dashboard</p>
          </NavLink>
          <NavLink
            to={"/all-appointments"}
            className={({ isActive }) =>
              `flex items-center gap-3 py-3.5 px-3 md:px-9 md:min-w-60 min-w-50 cursor-pointer ${
                isActive ? "bg-[#d5e6fc] border-r-4 border-primary " : ""
              }`
            }
          >
            <img src={assets.appointmenticon} alt="" className="w-8" />
            <p className="hidden md:block">Appointments</p>
          </NavLink>
          <NavLink
            to={"/add-doctor"}
            className={({ isActive }) =>
              `flex items-center gap-3 py-3.5 px-3 md:px-9 md:min-w-60 min-w-50 cursor-pointer ${
                isActive ? "bg-[#d5e6fc] border-r-4 border-primary " : ""
              }`
            }
          >
            <img src={assets.doctoraddicon} alt="" className="w-8" />
            <p className="hidden md:block">Add Doctor</p>
          </NavLink>
          <NavLink
            to={"/doctor-list"}
            className={({ isActive }) =>
              `flex items-center gap-3 py-3.5 px-3 md:px-9 md:min-w-60 min-w-50 cursor-pointer ${
                isActive ? "bg-[#d5e6fc] border-r-4 border-primary " : ""
              }`
            }
          >
            <img src={assets.listicon} alt="" className="w-8" />
            <p className="hidden md:block">Doctor List</p>
          </NavLink>
        </ul>
      )}

      {dToken && (
        <ul className="text-gray-700 mt-5">
          <NavLink
            to={"/doctor-dashboard"}
            className={({ isActive }) =>
              `flex items-center gap-3 py-3.5 px-3 md:px-9 md:min-w-60 min-w-50 cursor-pointer ${
                isActive ? "bg-[#d5e6fc] border-r-4 border-primary " : ""
              }`
            }
          >
            <img src={assets.homeicon} alt="" className="w-8" />
            <p className="hidden md:block">Dashboard</p>
          </NavLink>
          <NavLink
            to={"/docotor-appointments"}
            className={({ isActive }) =>
              `flex items-center gap-3 py-3.5 px-3 md:px-9 md:min-w-60 min-w-50 cursor-pointer ${
                isActive ? "bg-[#d5e6fc] border-r-4 border-primary " : ""
              }`
            }
          >
            <img src={assets.appointmentsicon} alt="" className="w-8" />
            <p className="hidden md:block">Appointments</p>
          </NavLink>
          <NavLink
            to={"/doctor-profile"}
            className={({ isActive }) =>
              `flex items-center gap-3 py-3.5 px-3 md:px-9 md:min-w-60 min-w-50 cursor-pointer ${
                isActive ? "bg-[#d5e6fc] border-r-4 border-primary " : ""
              }`
            }
          >
            <img src={assets.doctoricon} alt="" className="w-8" />
            <p className="hidden md:block">Profile</p>
          </NavLink>
        </ul>
      )}
    </div>
  );
};

export default Sidebar;
