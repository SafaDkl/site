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
        <Box xm={12} md={12}>
          <Typography variant="h4" style={{ marginTop: "35px" }}>
            Our framework
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
