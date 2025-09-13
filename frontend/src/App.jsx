import React from "react";
import {Route, Routes} from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Doctors from "./pages/Doctors";
import Contact from "./pages/Contact";
import Login from "./pages/Longin";
import Myprofile from "./pages/Myprofile";
import Myappointments from "./pages/Myappointments";
import Appointment from "./pages/Appointment";



const App = () => {
  return (
    <div class="mx-4 sm:mx-[10%]">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="doctors" element={<Doctors/>} />
        <Route path="doctors/:speciality" element={<Doctors/>} />
        <Route path="longin" element={<Login/>} />
        <Route path="about" element={<About/>} />
        <Route path="contact" element={<Contact/>} />
        <Route path="my-profile" element={<Myprofile/>} />
        <Route path="my-appointments" element={<Myappointments/>} />
        <Route path="appointment/:docId" element={<Appointment/>} />
      </Routes>
    </div>
  );
};

export default App;
