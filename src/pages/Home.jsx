
import React from "react";
import Business from "./component/Business";
import NavBar from "./component/NavBar";
import VidBanner from "./component/VidBanner";
import Interested from "./component/subscription/Interested";
import Footer from "./component/Footer";
import "../designs/breeze/css/main.css";

function Home() {
  return (
    <>
      <grid id="wrap" style={{ display: "block" }}>
        <NavBar />
        <VidBanner />
        <Business />
        <Interested />
      </grid>
      {/* <Footer /> */}
    </>
  );
}
export default Home;
