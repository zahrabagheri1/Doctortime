import React, { useState } from "react";
import { assets } from "../assets/assets";

const Myprofile = () => {
  const [userData, setUserData] = useState({
    name: "Amelia Johnson",
    image: assets.profilepic,
    email: "ameliajohnson@gmail.com",
    phone: "+61 412 345 678",
    address: {
      line1: "45 Collins Street",
      line2: "Melbourne, VIC 3000",
    },
    gender: "Female",
    dob: "1995-07-14",
  });

  const [isEdit, setIsEdit] = useState(false);

  return (
    <div className="max-w-lg flex flex-col gap2 text-sm">
      <img className="w-36 rounded" src={userData.image} alt={userData.name} />

      {isEdit ? (
        <input
          type="text"
          name=""
          id=""
          className="bg-gray-100 text-2xl font-medium max-w-60 mt-1 mb-2 border border-primary rounded w-full p-1"
          value={userData.name}
          onChange={(e) =>
            setUserData((prev) => ({ ...prev, name: e.target.value }))
          }
        />
      ) : (
        <p className="font-medium text-2xl text-neutral-800 mt-1 mb-2 p-1">
          {userData.name}
        </p>
      )}

      <hr className="bg-zinc-400 h-[1px] border-none" />

      <div>
        <p className="text-neutral-500 underline mt-3">CONTACT INFORMATION</p>
        <div className="grid grid-cols-[1fr_3fr] gap-y-2.5 mt-3 text-neutral-700">
          <label form="email" className=" font-medium">
            Email id:
          </label>
          <p className="text-blue-500">{userData.email}</p>
          <label for="phonenumber" className="font-medium">
            Phone:
          </label>
          {isEdit ? (
            <input
              type="text"
              name=""
              id="phonenumber"
              className="bg-gray-100 font-medium max-w-52 border border-primary rounded w-full p-1"
              value={userData.phone}
              onChange={(e) =>
                setUserData((prev) => ({ ...prev, phone: e.target.value }))
              }
            />
          ) : (
            <p className="text-blue-400">{userData.phone}</p>
          )}
          <label for="addresses" className="font-medium">
            Address:
          </label>
          {isEdit ? (
            <p>
              <input
                onChange={(e) =>
                  setUserData((prev) => ({
                    ...prev,
                    address: { ...prev.address, line1: e.target.value },
                  }))
                }
                type="text"
                className="bg-gray-100 font-medium max-w-52 border border-primary rounded w-full p-1"
                value={userData.address.line1}
                name=""
                id="addresses"
              />
              <br />
              <input
                onChange={(e) =>
                  setUserData((prev) => ({
                    ...prev,
                    address: { ...prev.address, line2: e.target.value },
                  }))
                }
                type="text"
                className="bg-gray-100 font-medium max-w-52 border border-primary rounded w-full p-1 mt-2"
                value={userData.address.line2}
                name=""
                id="addresses"
              />
            </p>
          ) : (
            <p className="text-gray-500">
              {userData.address.line1}
              <br />
              {userData.address.line2}
            </p>
          )}
        </div>
      </div>
      <div>
        <p className="text-neutral-500 underline mt-3">BASIC INFORNATIPN</p>
        <div className="grid grid-cols-[1fr_3fr] gap-y-2.5 mt-3 text-neutral-700">
          <p className="font-medium">Gender:</p>
          {isEdit ? (
            <select
              name=""
              id=""
              className="bg-gray-100 font-medium max-w-52 border border-primary rounded w-full p-1 mt-2"
              onChange={(e) =>
                setUserData((prev) => ({ ...prev, gender: e.target.value }))
              }
            >
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>
          ) : (
            <p className="text-gray-400">{userData.gender}</p>
          )}

          <p className="font-medium">Birthday</p>
          {isEdit ? (
            <input
              type="date"
              value={userData.dob}
              className="bg-gray-100 font-medium max-w-52 border border-primary rounded w-full p-1 mt-2"
              onChange={(e) =>
                setUserData((prev) => ({ ...prev, dob: e.target.value }))
              }
            />
          ) : (
            <p className="text-gray-400">{userData.dob}</p>
          )}
        </div>
      </div>
      <div className="mt-10">
        {isEdit ? (
          <button
            onClick={() => setIsEdit(false)}
            className="bg-primary text-white px-8 py-2 rounded-md text-base hover:bg-third hover:text-white transition-all"
          >
            Save information
          </button>
        ) : (
          <button
            onClick={() => setIsEdit(true)}
            className="bg-primary text-white px-8  py-2 rounded-md text-base  hover:bg-third hover:text-white transition-all"
          >
            Edit
          </button>
        )}
      </div>
    </div>
  );
};

export default Myprofile;
