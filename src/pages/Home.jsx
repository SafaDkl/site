
import React from "react";
import Business from "./component/Business";
import NavBar from "./component/NavBar";
import VidBanner from "./component/VidBanner";
import Interested from "./component/subscription/Interested";
import Footer from "./component/Footer";
import "../designs/breeze/css/main.css";
import { Grid } from "@mui/material";

function Home() {
  return (
    <>
      <Grid id="wrap" style={{ display: "block" }}>
        <NavBar />
        <VidBanner />
        <Business />
        <Interested />
      </Grid>
     <Footer />
    </>
  );
}
export default Home;
