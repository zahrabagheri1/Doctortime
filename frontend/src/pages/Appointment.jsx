import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { AppContext } from "../context/AppContext";
import { assets } from "../assets/assets";
import RelatedDoctors from "../components/RelatedDoctors";

const Appointment = () => {
  const { docId } = useParams();
  const { doctors, currencySymbol } = useContext(AppContext);
  const daysofWeek = ["SUN", "MON", "TUE", "WEN", "THU", "FRI", "SAT"];

  const [docInfo, setDocInfo] = useState(null);
  const [docSlots, setDocSlots] = useState([]);
  const [slotIndex, setSlotIndex] = useState(0);
  const [slotTime, setSlotTime] = useState("");

  const fetchDocInfo = async () => {
    const docInfo = doctors.find((doc) => doc.id === docId);
    setDocInfo(docInfo);
  };

  const getAvailableSlots = async () => {
    setDocSlots([]);

    // getting current date
    let today = new Date();
    for (let i = 0; i < 7; i++) {
      // getting date with index
      let currentDate = new Date(today);
      currentDate.setDate(today.getDate() + i);

      // setting end time of the date with index
      let endTime = new Date();
      endTime.setDate(today.getDate() + i);
      endTime.setHours(21, 0, 0);

      // setting hours
      if (today.getDate() === currentDate.getDate()) {
        currentDate.setHours(
          currentDate.getHours() > 17 ? currentDate.getHours() + 1 : 17
        );
        currentDate.setMinutes(currentDate.getMinutes() > 30 ? 30 : 0);
      } else {
        currentDate.setHours(17);
        currentDate.setMinutes(0);
      }

      let timeSlots = [];
      while ( currentDate < endTime) {
        let formatTime = currentDate.toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        });

        // add slot to array
        timeSlots.push({
          datetime: new Date(currentDate),
          time: formatTime,
        });
        // Increment current timme by 30 minutes
        currentDate.setMinutes(currentDate.getMinutes() + 30);
      }

      setDocSlots((prev) => [...prev, timeSlots]);
    }
  };

  useEffect(() => {
    fetchDocInfo();
  }, [doctors, docId]);

  useEffect(() => {
    getAvailableSlots();
  }, [docInfo]);

  useEffect(() => {
    console.log(docSlots);
  }, [docSlots]);

  return (
    docInfo && (
      <div className="mt-5">
        {/* Doctor Details */}
        <div className="flex flex-col sm:flex-row gap-4 lg:max-h-60">
          <div>
            <img
              className="bg-primary relative w-full h-full sm:max-w-72 rounded-lg"
              src={docInfo.image}
              alt={docInfo.name}
            />
          </div>
          {/* DocInfo: name, degree, experience */}
          <div className="flex-1 border border-gray-400 rounded-lg p-8 py-7 bg-white mx-2 sm:mx-0 mt-[-80px] sm:mt-0">
            <p className="flex items-center gap-2 text-2xl font-medium text-gray-900">
              {docInfo.name}
              <img
                className="w-5"
                src={assets.verifiedIcon}
                alt={`verified ${docInfo.name}`}
              />
            </p>

            <div className="flex items-center gap-2 text-sm mt-1 to-gray-600 ">
              <p>
                {docInfo.degree} - {docInfo.speciality}
              </p>
              <div className="py-0.5 px-2 border text-xs rounded-full">
                {docInfo.experience} years
              </div>
            </div>

            {/* Doctor About */}
            <div>
              <p className="flex items-center gap-1 text-sm font-medium text-gray-900 mt-3">
                About{" "}
                <img
                  className="w-5"
                  src={assets.infoIcon}
                  alt={`info ${docInfo.name}`}
                />
              </p>
              <p className="text-sm text-gray-500 max-w-full mt-1">
                {docInfo.about}
              </p>
            </div>
            {/* Appointment Fee */}
            <p className="text-gray-500 font-medium mt-4">
              Appointment fee:{" "}
              <span className="text-gray-600">
                {currencySymbol} {docInfo.fees}
              </span>
            </p>
          </div>
        </div>

        {/* Booking Slots */}
        <div className="sm:ml-72 sm:pl-4 mt-4 font-medium text-gray-700">
          <p>Booking Slots</p>
          <div className="flex gap-3 items-center w-full overflow-x-scroll mt-4">
            {docSlots.length &&
              docSlots.map((item, index) => (
                <div
                  onClick={() => setSlotIndex(index)}
                  className={`text-center py-6 min-w-16 rounded-full cursor-pointer ${
                    slotIndex === index
                      ? "bg-primary text-white"
                      : "border border-gray-200"
                  }`}
                  key={index}
                >
                  <p>{item[0] && daysofWeek[item[0].datetime.getDay()]}</p>
                  <p>{item[0] && item[0].datetime.getDate()}</p>
                </div>
              ))}
          </div>

          <div className="flex items-center gap-3 w-full overflow-x-scroll mt-4 ">
            {docSlots.length &&
              docSlots[slotIndex].map((item, index) => (
                <p
                  key={index}
                  onClick={() => setSlotTime(item.time)}
                  className={`text-sm font-light flex-shrink-0 px-5 py-2 rounded-full cursor-pointer ${
                    item.time === slotTime
                      ? "bg-primary text-white"
                      : "text-gray-400 border border-gray-300"
                  }`}
                >
                  {item.time.toLowerCase()}
                </p>
              ))}
          </div>
          <button className="bg-primary text-white text-sm font-light rounded-full px-14 py-3 my-6 cursor-pointer">
            Book an sppointment
          </button>
        </div>
        {/* Listting Related Doctors */}
        <RelatedDoctors docId={docId} speciality={docInfo.speciality} />
      </div>
    )
  );
};

export default Appointment;
