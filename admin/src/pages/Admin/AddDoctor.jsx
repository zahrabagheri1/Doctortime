import React, { useState } from "react";
import { assets, specialityData } from "../../assets/assets";

const AddDoctor = () => {
  const [docImg, setDocImg] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [experience, setExperience] = useState("1 Year");
  const [fees, setFees] = useState("");
  const [about, setAbout] = useState("");
  const [speciality, setSpeciality] = useState("General Practice");
  const [degree, setDegree] = useState("");
  const [address1, setAddress1] = useState("");
  const [address2, setAddress2] = useState("");

  return (
    <form className="m-5 w-full">
      <div className="mb-3">
        <p className="text-lg font-bold">Add New Doctor</p>
        <p className="text-sm font-medium">
          Please fill in the following details to add a new doctor to the
          system.
        </p>
      </div>

      <div className="bg-white px-8 py-8 border w-full max-w-4xl max-h-[80vh] overflow-scroll">
        <div
          className="flex items-center  gap-4 mb-8
        text-gray-500 rounded-full cursor-pointer"
        >
          <label htmlFor="doc-img">
            <img
              src={assets.uploadareaicon}
              className="bg-gray-200 rounded-full w-18"
              alt=""
            />
          </label>
          <input type="file" name="" id="doc-img" hidden />
          <p>
            Upload doctor <br /> picture
          </p>
        </div>

        <div className="flex flex-col lg:flex-row items-start gap-10 text-gray-600">
          {/* Doctor Full Name */}
          <div className="w-full lg:full lg:flex-1 flex flex-col gap-4">
            <div className="flex-1 flex flex-col gap-1">
              <label htmlFor="doc-name">Doctor Name</label>
              <input
                className="border border-primary rounded px-3 py-2"
                type="text"
                name=""
                id="doc-name"
                placeholder="Doctor Name"
                required
              />
            </div>

            {/* Doctor Email */}
            <div className="flex-1 flex flex-col gap-1">
              <label htmlFor="doc-email">Doctor Email</label>
              <input
                className="border border-primary rounded px-3 py-2"
                type="email"
                name=""
                id="doc-email"
                placeholder="doctoremail@doctortime.com"
                required
              />
            </div>

            {/* Doctor Password */}
            <div className="flex-1 flex flex-col gap-1">
              <label htmlFor="doc-password"></label>
              <input
                className="border border-primary rounded px-3 py-2"
                type="password"
                name=""
                id="doc-password"
                placeholder="Doctor Password"
                required
              />
            </div>

            {/* Doctor Experience */}
            <div className="flex-1 flex flex-col gap-1">
              <label htmlFor="doc-experience">Experience</label>
              <select
                name=""
                className="border border-primary rounded px-3 py-2"
                id="doc-experience"
                required
              >
                <option value="1 Year">1 Year</option>
                <option value="2 Year">2 Year</option>
                <option value="3 Year">3 Year</option>
                <option value="4 Year">4 Year</option>
                <option value="5 Year">5 Year</option>
                <option value="6 Year">6 Year</option>
                <option value="7 Year">7 Year</option>
                <option value="8 Year">8 Year</option>
                <option value="9 Year">9 Year</option>
                <option value="10 Year">10 Year</option>
              </select>
            </div>

            {/* Doctor Fees */}
            <div className="flex-1 flex flex-col gap-1">
              <label htmlFor="doc-fees">Fees</label>
              <input
                className="border border-primary rounded px-3 py-2"
                type="number"
                name=""
                id="doc-fees"
                placeholder="Doctor Fees"
                required
              />
            </div>
          </div>

          <div className="w-full lg:flex-1 flex flex-col gap-4">
            {/* Doctor Speciality */}
            <div className="flex-1 flex flex-col gap-1">
              <label htmlFor="doc-speciality">Speciality</label>
              <select
                className="border border-primary rounded px-3 py-2"
                id="doc-speciality"
                required
              >
                {specialityData.map((speciality, index) => (
                  <option value={speciality} key={index}>
                    {speciality}
                  </option>
                ))}
                {/* <option value="General Practice">General Practice</option>
              <option value="Pediatrics">Pediatrics</option>
              <option value="Cardiology">Cardiology</option>
              <option value="Dermatology">Dermatology</option>
              <option value="Gynecology">Gynecology</option>
              <option value="Orthopedics">Orthopedics</option>
              <option value="Dentistry">Dentistry</option>
              <option value="Gastroenterology">Gastroenterology</option>
              <option value="Psychiatry">Psychiatry</option> */}
              </select>
            </div>
            {/* Doctor Eduction */}
            <div className="flex-1 flex flex-col gap-1">
              <label htmlFor="doc-eduction">Eduction</label>
              <input
                className="border border-primary rounded px-3 py-2"
                type="text"
                name=""
                id="doc-eduction"
                placeholder="Doctor Eduction"
                required
              />
            </div>
            {/* Doctor Address */}
            <div className="flex-1 flex flex-col gap-1">
              <label htmlFor="doc-address">Address</label>
              <input
                className="border border-primary rounded px-3 py-2"
                type="text"
                name=""
                id="doc-address"
                placeholder="Address 1"
                required
              />
              <input
                className="border border-primary rounded px-3 py-2"
                type="text"
                name=""
                id="doc-address"
                placeholder="Address 2"
                required
              />
            </div>
          </div>
        </div>
        {/* Doctor About */}
        <div className="flex flex-col pb-2">
          <label className="mt-4 mb-2" htmlFor="doc-about">
            About Doctor
          </label>
          <textarea
            className=" w-full border border-primary  rounded px-4 pt-2 resize-none"
            type="text"
            rows={5}
            id="doc-about"
            placeholder="Write about Doctor"
            required
          />
        </div>

        {/* BTN */}
        <button className="bg-primary text-white text-sm px-10 py-3 mt-4 rounded-full">
          Add Doctor
        </button>
      </div>
    </form>
  );
};

export default AddDoctor;
