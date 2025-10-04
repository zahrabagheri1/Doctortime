import React, { useContext } from "react";
import { AdminContext } from "../context/AdminContext";
import { NavLink } from "react-router-dom";
import { assets } from "../assets/assets";

const Sidebar = () => {
  const { aToken } = useContext(AdminContext);

  return (
    <div className="min-h-screen bg-white border-r  border-gray-400">
      {aToken && (
        <ul className="text-gray-700 mt-5">
          <NavLink
            to={"/admin-dashboard"}
            className={({ isActive }) =>
              `flex items-center gap-3 py-3.5 px-3 md:px-9 md:min-w-72 cursor-pointer ${
                isActive ? "bg-[#d5e6fc] border-r-4 border-primary " : ""
              }`
            }
          >
            <img src={assets.homeicon} alt=""  className="w-8"/>
            <p>Dashboard</p>
          </NavLink>
          <NavLink to={"/all-appointments"}  className={({ isActive }) =>
              `flex items-center gap-3 py-3.5 px-3 md:px-9 md:min-w-72 cursor-pointer ${
                isActive ? "bg-[#d5e6fc] border-r-4 border-primary " : ""
              }`
            }>
            <img src={assets.appointmenticon} alt=""  className="w-8"/>
            <p>Appointments</p>
          </NavLink>
          <NavLink to={"/add-doctor"}  className={({ isActive }) =>
              `flex items-center gap-3 py-3.5 px-3 md:px-9 md:min-w-72 cursor-pointer ${
                isActive ? "bg-[#d5e6fc] border-r-4 border-primary " : ""
              }`
            }>
            <img src={assets.doctoraddicon} alt=""  className="w-8"/>
            <p>Add Doctor</p>
          </NavLink>
          <NavLink to={"/doctor-list"}  className={({ isActive }) =>
              `flex items-center gap-3 py-3.5 px-3 md:px-9 md:min-w-72 cursor-pointer ${
                isActive ? "bg-[#d5e6fc] border-r-4 border-primary " : ""
              }`
            }>
            <img src={assets.listicon} alt=""  className="w-8"/>
            <p>Doctor List</p>
          </NavLink>
        </ul>
      )}
    </div>
  );
};

export default Sidebar;
