import React from "react";
import { Typography } from "@mui/material";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import Media from "./business/Media";
import { grey } from "@mui/material/colors";

const videoEx = {
  width: "82vW",
  height: "50vh",
  position: "relative",
  display: "block",
};
const videoContainer = {
  display: "block",
  textAlign: "center",
};

function Business() {
  return (
    <CssBaseline>
      <Container
        maxWidth="lg"
        style={{ textAlign: "center", display: "block", height: "80vh" }}
      >
        <Box xs={12} md={8}>
          <Typography variant="h4" style={{ marginTop: "35px" }}>
            Our framework
          </Typography>
          <Typography variant="body2" color={"GrayText"} mt={"25px"}>
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed to using 'Content here, content
            here', making it look like readable English.{" "}
          </Typography>
        </Box>
        <Container xs={12} style={videoContainer}>
          <Media loading={true} style={videoEx} />
        </Container>
      </Container>
    </CssBaseline>
  );
}
export default Business;
