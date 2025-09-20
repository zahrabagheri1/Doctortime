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
import Navbar from './components/Navbar'
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="mx-4 sm:mx-[5%]">
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="doctors" element={<Doctors/>} />
        <Route path="doctors/:speciality" element={<Doctors/>} />
        <Route path="appointment/:docId" element={<Appointment/>} />
        <Route path="longin" element={<Login/>} />
        <Route path="about" element={<About/>} />
        <Route path="contact" element={<Contact/>} />
        <Route path="my-profile" element={<Myprofile/>} />
        <Route path="my-appointments" element={<Myappointments/>} />
      </Routes>
      <Footer/>
    </div>
  );
};

export default App;
