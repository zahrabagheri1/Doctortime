import React, { useContext, useState } from "react";
import { assets } from "../assets/assets";
import { NavLink, useNavigate } from "react-router-dom";
import { AppContext } from "../context/AppContext";

const Navbar = () => {
  const navigate = useNavigate();

  const { token, setToken } = useContext(AppContext);
  const [showMenu, setShowMenu] = useState(false);

  const logout = () => {
    setToken(false);
    localStorage.removeItem("token");
  };

  return (
    <div className="flex items-center justify-between text-sm py-4 border-b border-b-gray-400">
      <img
        onClick={() => navigate("/")}
        className=" w-39 cursor-pointer"
        src={assets.doctimelogotype}
        alte=""
      />
      <ul className="hidden md:flex items-start gap-5 font-medium">
        <NavLink to={"/"}>
          <li className="py-1 ">Home</li>
          <hr className="border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden" />
        </NavLink>
        <NavLink to={"doctors"}>
          <li className="py-1 ">All Doctors</li>
          <hr className="border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden" />
        </NavLink>
        <NavLink to={"about"}>
          <li className="py-1 ">About</li>
          <hr className="border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden" />
        </NavLink>
        <NavLink to={"contact"}>
          <li className="py-1 ">Contact</li>
          <hr className="border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden" />
        </NavLink>
      </ul>

      <div className="flex items-center gap-4">
        {token ? (
          <div className="flex items-center gap-2 cursor-pointer group relative">
            <img src={assets.profilepic} className="w-16 rounded-full" alt="" />
            <img src={assets.dropdownIcon} className="w-2.5" alt="" />

            <div className="absolute top-0 right-0 pt-18 text-base font-medium text-gray-600 z-20 hidden group-hover:block">
              <div className="min-w-40 bg-stone-100 rounded flex flex-col gap-4 p-4">
                <p
                  onClick={() => navigate("my-profile")}
                  className="hover:text-black cursor-pointer"
                >
                  My Profile
                </p>
                <p
                  onClick={() => navigate("my-appointments")}
                  className="hover:text-black cursor-pointer"
                >
                  My Appointment
                </p>
                <p onClick={logout} className="hover:text-black cursor-pointer">
                  Logout
                </p>
              </div>
            </div>
          </div>
        ) : (
          <button
            onClick={() => navigate("login")}
            className="bg-primary text-white px-8 py-3 rounded-full font-light hidden md:block"
          >
            Create account
          </button>
        )}

        <img
          src={assets.menuIcon}
          onClick={() => setShowMenu(true)}
          alt="menuIcon"
          className="w-6 md:hidden"
        />

        {/* Mobile Menu */}
        <div
          className={`${
            showMenu ? "fixed w-full" : "h-0 w-0 hidden"
          } md:hidden right-0 top-0 bottom-0 z-20 bg-white transition-all`}
        >
          <div className="flex items-center justify-between px-5 py-6">
            <img className="w-36" src={assets.doctimelogotype} alt="" />
            <img
              className="w-7"
              onClick={() => setShowMenu(false)}
              src={assets.crossIcon}
              alt=""
            />
          </div>
          <ul className="flex flex-col items-center font-medium gap2 mt-5 text-lg">
            <NavLink onClick={() => setShowMenu(false)} to="/">
              <p className="px-4 py-2 rounded inline-block hover:text-primary hover:font-bold hover:text-2xl transition-all duration-100">
                Home
              </p>
            </NavLink>
            <NavLink onClick={() => setShowMenu(false)} to="doctors">
              <p className="px-4 py-2 rounded inline-block hover:text-primary hover:font-bold hover:text-2xl transition-all duration-100">
                All Doctors
              </p>
            </NavLink>
            <NavLink onClick={() => setShowMenu(false)} to="about">
              <p className="px-4 py-2 rounded inline-block hover:text-primary hover:font-bold hover:text-2xl transition-all duration-100">
                About
              </p>
            </NavLink>
            <NavLink onClick={() => setShowMenu(false)} to="contact">
              <p className="px-4 py-2 rounded inline-block hover:text-primary hover:font-bold hover:text-2xl transition-all duration-100">
                Contact
              </p>
            </NavLink>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
