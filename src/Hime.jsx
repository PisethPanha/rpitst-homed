import React from "react";
import Slider from "./Components/Slider";
import Title from "./Components/Title";
import Feature from "./Feature";
import Carousel2 from "./Components/Carousel2";
import UploadEbook from "./Components/uploadEbook";
import Test_Facebook from "./Components/Test_Facebook";

function Home() {
  return (
    <>
      <Slider />
      <Title title="FEATURES" subtitle="Our Feature" />
      <br />
      <Feature />
      <Title title="EVENTS" subtitle="Newest Event" />
      <br />
      <br />
      <br />
      <Carousel2 />
      <br />
      <br />
      {/* <Test_Facebook /> */}
    </>
  );
}

export default Home;
