import React from "react";
import { Typography } from "@mui/material";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";

const videoEx = {
  width: "62vW",
  height: "50vh",
  position: "relative",
};
const videoContainer = {
  display: "block",
  textAlign: "center",
};

function Business() {
  return (
    <CssBaseline>
      <Container
        maxWidth="xl"
        style={{ textAlign: "center", display: "block", height: "60vh"}}
      >
        <Box xs={9}>
          <Typography variant="h4" style={{ margin: "35px" }}>
            Explanatory video
          </Typography>
        </Box>
        <Grid item xs={12} style={videoContainer}>
          <iframe
            style={videoEx}
            src="https://www.youtube.com/embed/k0OmnkE6f4E"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </Grid>
      </Container>
    </CssBaseline>
  );
}
export default Business;
