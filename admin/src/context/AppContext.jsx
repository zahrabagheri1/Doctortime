import axios from "axios";
import { createContext } from "react";
import { toast } from "react-toastify";

export const AppContext = createContext();

const AppContextPorvider = (props) => {
  const currency = "$";

  const calculateAge = (dob) => {
    const today = new Date();
    const birthDate = new Date(dob);

    let age = today.getFullYear() - birthDate.getFullYear();
    return age;
  };

  const slotDateFormat = (slotDate) => {
    return new Date(slotDate.split("_").reverse().join(" ")).toLocaleString(
      "en-US",
      {
        day: "numeric",
        month: "long",
        year: "numeric",
      }
    );
  };

  const value = {
    calculateAge,
    slotDateFormat,
    currency,
  };

  return (
    <AppContext.Provider value={value}>{props.children}</AppContext.Provider>
  );
};

export default AppContextPorvider;
