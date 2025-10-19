import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { loadStripe } from "@stripe/stripe-js";
import {
  EmbeddedCheckoutProvider,
  EmbeddedCheckout,
} from "@stripe/react-stripe-js";

const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY);

const Myappointments = () => {
  const { backendURL, token, getDoctorsData } = useContext(AppContext);
  const [appointments, setAppointments] = useState([]);
  const [clientSecret, setClientSecret] = useState(null);
  const [sessionId, setSessionId] = useState(null);

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

  const handlePayOnline = async (appointmentId) => {
    try {
      const { data } = await axios.post(
        backendURL + "/api/user/payment-stripe",
        { appointmentId },
        { headers: { token } }
      );
      if (data.success) {
        // Get and store both values
        setClientSecret(data.clientSecret);
        setSessionId(data.sessionId);
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };

  const handlePaymentComplete = async () => {
    if (!sessionId) {
      toast.error("Session ID not found. Cannot verify payment.");
      return;
    }

    try {
      const { data } = await axios.get(
        `${backendURL}/api/user/payment-stripe-status?session_id=${sessionId}`,
        { headers: { token } }
      );

      if (data.payment_intent_status === "succeeded") {
        toast.success("Payment successful 🎉");
        getUserAppointments();
        getDoctorsData();
      } else {
        toast.error("Payment failed or is still processing.");
      }
    } catch (error) {
      console.error("Error verifying payment status:", error);
      toast.error("Could not verify payment status.");
    } finally {
      setClientSecret(null);
      setSessionId(null);
    }
  };

  useEffect(() => {
    if (token) {
      getUserAppointments();
    }
  }, [token]);

  if (clientSecret) {
    return (
      <div id="checkout">
        <EmbeddedCheckoutProvider
          stripe={stripePromise}
          options={{
            clientSecret,
            onComplete: handlePaymentComplete,
          }}
        >
          <EmbeddedCheckout />
        </EmbeddedCheckoutProvider>
      </div>
    );
  }

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

            {!item.cancelled && item.isCompleted && (
              <div className="flex flex-col gap-2 justify-end">
                {item.payment ? (
                  <button
                    className="text-sm text-center text-green-500 sm:min-w-48 py-2 border rounded-lg transition-all duration-300"
                    disabled
                  >
                    Appointment Paid
                  </button>
                ) : (
                  <button
                    onClick={() => handlePayOnline(item._id)}
                    className="text-sm text-center text-stone-500 sm:min-w-48 py-2 border rounded-lg hover:bg-primary hover:text-white transition-all duration-300"
                  >
                    Pay Online
                  </button>
                )}
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
            
            {item.isCompleted && 
                  <button className="text-sm text-center text-green-600 sm:min-w-48 py-2 border border-red-text-red-600 rounded-lg">
                  Appointment Completed
                </button>}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Myappointments;
