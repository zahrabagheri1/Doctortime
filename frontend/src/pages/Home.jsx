import React from "react";
import Header from "../components/Header";
import SpecialityMenu from "../components/SpecialityMenu";
import TopDocters from "../components/TopDocters";
import Banner from "../components/Banner";
import Feedbacks from "../components/Feedbacks";

const Home = () => {
  return (
    <div>
      <Header />
      <SpecialityMenu />
      <TopDocters />
      <Banner />
      {/* <Feedbacks/> */}
    </div>
  );
};

export default Home;
