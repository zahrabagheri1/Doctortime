import React, { useContext, useEffect, useState } from "react";
import { DoctorContext } from "../../context/DoctorContext";
import { AppContext } from "../../context/AppContext";
import { toast } from "react-toastify";
import axios from "axios";

const DoctorProfile = () => {
  const { dToken, getProfileData, profileData, setProfileData, backendURL } =
    useContext(DoctorContext);
  const { currency } = useContext(AppContext);

  const [isEdite, setIsEdit] = useState(false);

  const updateProfile = async () => {
    try {
      const updateData = {
        address: profileData.address,
        fees: profileData.fees,
        available: profileData.available,
      };

      const { data } = await axios.post(
        backendURL + "/api/doctor/update-profile",
        updateData,
        { headers: { dToken } }
      );

      if (data.success) {
        toast.success(data.message);
        setIsEdit(false);
        getProfileData();
      } else {
        toast.error(data.error);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  useEffect(() => {
    if (dToken) {
      getProfileData();
    }
  }, [dToken]);

  return (
    profileData && (
      <div className="w-full max-w-6xl m-5">
        <div className="mb-5">
          <p className="text-lg font-bold">Doctor Profile</p>
          <p className="text-sm font-medium">
            Here is your daily overview and a summary of today's key tasks.
          </p>
        </div>

        <div className="flex flex-row gap-6">
          <img
            src={profileData.image}
            alt="profile doctor"
            className="bg-primary/80 w-80 h-90 sm:max-w-64 sm:max-h-70 rounded-lg"
          />

          {/* Doc Info: name, degree, experience */}
          <div className="flex  flex-col gap-1.5  border border-stone-100  p-8 rounded-lg bg-white flex-10">
            <p className="flex items-center gap-2 text-3xl font-medium text-gray-700 ">
              {profileData.name}
            </p>
            <div className="flex items-center gap-2 text-gray-600">
              <p>
                {profileData.degree} - {profileData.speciality}
              </p>
              <button className="py-0.5 px-2 text-xs border-2 rounded-full border-secondary">
                {profileData.experience}
              </button>
            </div>

            <p className="text-gray-600 font-medium mt-4">
              Appointment fee: {""}
              <span className="text-gray-800">
                {currency}
                {isEdite ? (
                  <input
                    type="number"
                    name=""
                    id=""
                    className="border border-primary rounded px-1 py-1"
                    onChange={(e) =>
                      setProfileData((prev) => ({
                        ...prev,
                        fees: e.target.value,
                      }))
                    }
                    value={profileData.fees}
                  />
                ) : (
                  profileData.fees
                )}
              </span>
            </p>

            <div className="flex gap-2 py-2">
              <p>Address:</p>
              <p className="text-sm ">
                {isEdite ? (
                  <input
                    type="text"
                    name=""
                    id=""
                    className="border border-primary rounded px-3 py-1 mb-2"
                    onChange={(e) =>
                      setProfileData((prev) => ({
                        ...prev,
                        address: { ...prev, line1: e.target.value },
                      }))
                    }
                    value={profileData.address.line1}
                  />
                ) : (
                  profileData.address.line1
                )}
                <br />
                {isEdite ? (
                  <input
                    type="text"
                    name=""
                    id=""
                    className="border border-primary rounded px-3 py-1"
                    onChange={(e) =>
                      setProfileData((prev) => ({
                        ...prev,
                        address: { ...prev, line2: e.target.value },
                      }))
                    }
                    value={profileData.address.line2}
                  />
                ) : (
                  profileData.address.line2
                )}
              </p>
            </div>

            <div className="flex gap-1 pt-2">
              <input
                onChange={() =>
                  isEdite &&
                  setProfileData((prev) => ({
                    ...prev,
                    available: !prev.available,
                  }))
                }
                checked={profileData.available}
                type="checkbox"
                name=""
                id="available"
              />
              <label htmlFor="available">Available</label>
            </div>
          </div>
        </div>

        <div className="flex-1 border border-stone-100 rounded-lg p-8 py-7 mt-5 bg-white">
          {/* Doc About */}
          <div>
            <p className="flex items-center gap-1 text-sm font-medium text-neutral-800 mt-3">
              About:
            </p>
            {isEdite ? (
              <textarea
                className=" w-full border border-primary  rounded px-4 pt-2 resize-none"
                onChange={(e) =>
                  setProfileData((prev) => ({
                    ...prev,
                    about: e.target.value,
                  }))
                }
                value={profileData.about}
                type="text"
                rows={5}
                id="doc-about"
                placeholder="Write about Doctor"
                required
              />
            ) : (
              <p className="text-sm text-gray-600 max-w-[700px] mt-1">
                {profileData.about}
              </p>
            )}
          </div>

          {isEdite ? (
            <button
              onClick={() => updateProfile()}
              className="px-6 border-2 py-1.5 border-third text-sm rounded-full mt-5 hover:bg-third hover:text-white transition-all"
            >
              Save
            </button>
          ) : (
            <button
              onClick={() => setIsEdit(true)}
              className="px-6 border-2 py-1.5 border-primary text-sm rounded-full mt-5 hover:bg-primary hover:text-white transition-all"
            >
              Edit
            </button>
          )}
        </div>
      </div>
    )
  );
};

export default DoctorProfile;
