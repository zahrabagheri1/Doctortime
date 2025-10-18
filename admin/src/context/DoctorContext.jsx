import { useState } from "react";
import { createContext } from "react";
import axios from "axios";
import { toast } from "react-toastify";

export const DoctorContext = createContext();

const DoctorContextPorvider = (props) => {
  const backendURL = import.meta.env.VITE_BACKEND_URL;

  const [dToken, setDToken] = useState(
    localStorage.getItem("dToken") ? localStorage.getItem("dToken") : ""
  );
  const [appointmnets, setAppointments] = useState([]);
  const getAppointmnets = async () => {
    try {
      const { data } = axios.get(backendURL + "api/doctor/appointments", {
        headers: { dToken },
      });

      if (data.success) {
        setAppointments(data.appointmnets.reverse());
        console.log(data.appointmnets.reverse())
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };

  const value = {
    dToken,
    setDToken,
    backendURL,
    appointmnets,
    setAppointments,
    getAppointmnets,
  };

  return (
    <DoctorContext.Provider value={value}>
      {props.children}
    </DoctorContext.Provider>
  );
};

export default DoctorContextPorvider;
