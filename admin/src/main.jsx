import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import AdminContextPorvider from "./context/AdminContext.jsx";
import DoctorContextPorvider from "./context/DoctorContext.jsx";
import AppContextPorvider from "./context/AppContext.jsx";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <AdminContextPorvider>
      <DoctorContextPorvider>
        <AppContextPorvider>
          <App />
        </AppContextPorvider>
      </DoctorContextPorvider>
    </AdminContextPorvider>
  </BrowserRouter>
);
