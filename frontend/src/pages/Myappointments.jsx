import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import { toast } from "react-toastify";

const Myappointments = () => {
  const { backendURL, token, getDoctorsData } = useContext(AppContext);
  const [appointments, setAppointments] = useState([]);

  // const months = ['Jan', 'Feb', 'Mar','Apr','May','Jun','Jul','Aug', 'Sep','Dec']
  const getUserAppointments = async () => {
    try {
      const { data } = await axios.get(backendURL + "/api/user/appointments", {
        headers: { token },
      });

      if (data.success) {
        setAppointments(data.appointments.reverse());
        console.log(data.appointments);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };

  const cancelAppointment = async (appointmentId) => {
    try {
      const { data } = await axios.post(
        backendURL + "/api/user/cancel-appointment",
        { appointmentId },
        { headers: { token } }
      );

      if (data.success) {
        toast.success(data.message);
        getUserAppointments();
        getDoctorsData();
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };

  const initPay = (paymentIntent) => {
    console.log(paymentIntent);
  };

  const appointmentStripe = async (appointmentId) => {
    try {
      const { data } = await axios.post(
        backendURL + "/api/user/payment-stripe",
        { appointmentId },
        { headers: { token } }
      );

      if (data.success) {
        initPay(data.paymentIntent);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };

  useEffect(() => {
    if (token) {
      getUserAppointments();
    }
  }, [token]);

  return (
    <div>
      <p className="pb-3 mt-12 font-medium text-zinc-700 border-b">
        My Appointments
      </p>
      <div>
        {appointments.map((item, index) => (
          <div
            key={index}
            className="grid grid-cols-[1fr_2fr] gap-4 sm:flex sm:gap-6 py-2 border-b "
          >
            <div>
              <img
                src={item.docData.image}
                alt=""
                className="w-35 h-45 rounded-md"
              />
            </div>
            <div className="flex flex-col flex-1 gap-2 text-sm text-zinc-600">
              <p className="text-neutral-800 font-semibold">
                {item.docData.name}
              </p>
              <p className="">{item.docData.speciality}</p>
              <p className="text-neutral-700 font-medium mt-1 ">Address:</p>
              <p className="text-xs">{item.docData.address.line1}</p>
              <p className="text-xs">{item.docData.address.line2}</p>
              <p className="flex flex-row gap-2 text-sm mt-1 flex-wrap">
                <span className="text-sm text-neutral-700 font-medium">
                  Date & Time:
                </span>
                <span className="flex flex-row gap-2">
                  <span>
                    {new Date(
                      item.slotDate.split("_").reverse().join(" ")
                    ).toLocaleString("en-US", {
                      day: "numeric",
                      month: "long",
                      year: "numeric",
                    })}
                  </span>
                  <span>|</span>
                  <span>{item.slotTime}</span>
                </span>
              </p>
            </div>
            <div></div>
            {!item.cancelled && (
              <div className="flex flex-col gap-2 justify-end">
                <button
                  onClick={() => appointmentStripe(item._id)}
                  className="text-sm text-center text-stone-500 sm:min-w-48 py-2 border rounded-lg hover:bg-primary hover:text-white transition-all duration-300"
                >
                  Pay Online
                </button>
                <button
                  onClick={() => cancelAppointment(item._id)}
                  className="text-sm text-center text-stone-500 sm:min-w-48 py-2 border rounded-lg  hover:bg-red-600 hover:text-white transition-all duration-300"
                >
                  Cancel appointment
                </button>
              </div>
            )}

            <div className="flex flex-col gap-2 justify-end">
              {item.cancelled && (
                <button className="text-sm text-center text-red-600 sm:min-w-48 py-2 border border-red-text-red-600 rounded-lg">
                  Appointment Cancelled
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Myappointments;
