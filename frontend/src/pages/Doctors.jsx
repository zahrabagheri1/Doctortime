import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { AppContext } from "../context/AppContext";
import { specialityData } from "../assets/assets";
import { toast } from "react-toastify";

const Doctors = () => {
  const { speciality } = useParams();
  const { doctors } = useContext(AppContext);
  const [filterDoc, setFilterDoc] = useState([]);
  const [showFilter, setShowFilter] = useState(false);
  const navigate = useNavigate();
  const applyFilter = () => {
    speciality
      ? setFilterDoc(doctors.filter((doc) => doc.speciality === speciality))
      : setFilterDoc(doctors);
  };

  const docAvailable = (doc) => {
    doc.available
      ?  navigate(`/appointment/${doc._id}`)
      : toast.error("Doctor is not available")
  };

  useEffect(() => {
    applyFilter();
  }, [doctors, speciality]);

  console.log(filterDoc);
  return (
    <div>
      {/* <p className="text-black">All Doctors</p> */}
      <p className="text-gray-600">Browse through the doctors specialist.</p>
      <div className="flex flex-col sm:flex-row items-start gap-5 mt-5">
        <button
          onClick={() => setShowFilter((prev) => !prev)}
          className={`py-1 px-3 border rounded text-sm transition-all sm:hidden ${
            showFilter ? "bg-primary text-white" : ""
          }`}
        >
          Filters
        </button>
        <div
          className={`flex-col gap-2 text-sm text-gray-600 ${
            showFilter ? "flex" : "hidden sm:flex"
          }`}
        >
          {specialityData.map((sep, index) => (
            <p
              key={index}
              onClick={() =>
                speciality === sep.speciality
                  ? navigate("/doctors")
                  : navigate(`/doctors/${sep.speciality}`)
              }
              className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${
                speciality === sep.speciality ? "bg-blue-100 text-black" : ""
              }`}
            >
              {sep.speciality}
            </p>
          ))}
        </div>

        <div className="w-full grid grid-cols-auto grid-auto-fill-200 gap-4">
          {filterDoc.filter(doctor => doctor.available).map((item, index) => (
            <div
              key={index}
              onClick={() => docAvailable(item)}
              className="h-80 pb-4 flex flex-col border border-blue-200 rounded-xl overflow-hidden cursor-pointer hover:translate-y-[-10px] transition-all duration-500 "
            >
              <img
                src={item.image}
                alt={item.name}
                className="bg-white w-full h-3/4"
              />

              <div className="p-4">
                <div
                  className={`flex items-center gap-2 text-sm text-center  ${
                    item.available ? "text-green-500" : "text-red-500"
                  }`}
                >
                  <p
                    className={`w-2 h-2  rounded-full ${
                      item.available ? "bg-green-500" : "bg-red-500"
                    }`}
                  ></p>
                  {item.available ? <p>Available</p> : <p>Not Available</p>}
                </div>
                <p className="text-gray-900 text-lg font-medium">{item.name}</p>
                <p className="text-gray-600 text-sm">{item.speciality}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Doctors;
