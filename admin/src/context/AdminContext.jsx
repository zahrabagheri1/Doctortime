import { createContext, useState } from "react";

export const AdminContext = createContext();

const AdminContextPorvider = (props) => {
  const backendURL = import.meta.env.VITE_BACKEND_URL;
  const [aToken, setAToken] = useState("");
  const value = {
    aToken,
    setAToken,
    backendURL,
  };

  return (
    <AdminContext.Provider value={value}>
      {props.children}
    </AdminContext.Provider>
  );
};

export default AdminContextPorvider;
