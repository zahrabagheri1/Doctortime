import { useState } from "react";
import { createContext } from "react";

export const DoctorContext = createContext();

const DoctorContextPorvider = (props) => {
  const backendURL = import.meta.env.VITE_BACKEND_URL;

  const [dToken, setDToken] = useState(
    localStorage.getItem("dToken") ? localStorage.getItem("dToken") : ""
  );

  
  const value = {
    dToken,
    setDToken,
    backendURL,
  };

  return (
    <DoctorContext.Provider value={value}>
      {props.children}
    </DoctorContext.Provider>
  );
};

export default DoctorContextPorvider;
