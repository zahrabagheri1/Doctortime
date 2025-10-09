import React, { useContext, useState } from "react";
import { AppContext } from "../context/AppContext";
import { assets } from "../assets/assets";
import axios from "axios";
import { toast } from "react-toastify";

const Myprofile = () => {
  const { userData, setUserData, token, backendURL, loadUserProfileData } =
    useContext(AppContext);

  const [isEdit, setIsEdit] = useState(false);
  const [image, setImage] = useState(false);

  const updateUserProfleData = async () => {
    try {
      const formData = new FormData();
      formData.append("name", userData.name);
      formData.append("phone", userData.phone);
      formData.append("address", JSON.stringify(userData.address));
      formData.append("gender", userData.gender);
      formData.append("dob", userData.dob);

      image && formData.append("image", image);

      const { data } = await axios.post(
        backendURL + "/api/user/update-profile",
        formData,
        { headers: { token } }
      );
      if (data.success) {
        toast.success(data.message);
        await loadUserProfileData();

        setIsEdit(false);
        setImage(false);
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };

  console.log(userData);
  return (
    userData && (
      <div className="max-w-lg flex flex-col gap2 text-sm">
        <div className="flex gap-4 items-center py-4">
          {isEdit ? (
            <label htmlFor="image">
              <div className="inline-block relative cursor-pointer">
                <img
                  className="w-45 rounded-full opacity-75"
                  src={image ? URL.createObjectURL(image) : userData.image}
                  alt=""
                />
                <img
                  className="w-15 absolute bottom-10 right-15 opacity-20"
                  src={image ? "" : assets.uploadIcon}
                  alt=""
                />
              </div>
              <input
                onChange={(e) => setImage(e.target.files[0])}
                type="file"
                id="image"
                hidden
              />
            </label>
          ) : (
            <img
              className="w-45 rounded-full"
              src={userData.image}
              alt={userData.name}
            />
          )}

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
            <div>
              <p className="font-medium text-2xl text-neutral-800">
                {userData.name}
              </p>
              <p className=" font-medium text-sm text-neutral-300 ml-2">
                {userData.email}
              </p>
            </div>
          )}
        </div>
        <hr className="bg-zinc-400 h-[1px] border-none" />

        <div>
          <p className="text-neutral-500 underline mt-3">CONTACT INFORMATION</p>
          <div className="grid grid-cols-[1fr_3fr] gap-y-2.5 mt-3 text-neutral-700">
            <label form="email" className=" font-medium">
              Email :
            </label>
            <p className="text-blue-500">{userData.email}</p>
            <label htmlFor="phonenumber" className="font-medium">
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
            <label htmlFor="addresses" className="font-medium">
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
              onClick={updateUserProfleData}
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
    )
  );
};

export default Myprofile;
