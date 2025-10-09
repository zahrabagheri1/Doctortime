import { createContext } from "react";

export const DoctorContext = createContext();

const DoctorContextPorvider = (props) => {
  const value = {};

  return (
    <DoctorContext.Provider value={value}>
      {props.children}
    </DoctorContext.Provider>
  );
};

export default DoctorContextPorvider;
