import React from "react";
import Header from "../components/Header/Header";
import Steps from "../components/Steps/Steps";
import BgImg from "../components/BgImgSider/BgImg";
import Testimonial from "../components/Testimonial/Testimonial";
import Upload from "../components/UploadImg/Upload";

const Home = () => {
  return (
    <div>
      <Header />
      <Steps />
      <BgImg />
      <Testimonial />
      <Upload />
    </div>
  );
};

export default Home;
