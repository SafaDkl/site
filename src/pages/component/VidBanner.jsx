import React from "react";
import video from "../../images/intro.mp4";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import { Typography } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme({
  components: {
    MuiTypography: {
      defaultProps: {
        variantMapping: {
          h1: "h2",
          h2: "h2",
          h3: "h2",
          h4: "h2",
          h5: "h2",
          h6: "h2",
          subtitle1: "h2",
          subtitle2: "h2",
          body1: "span",
          body2: "span",
        },
      },
    },
  },
});

const header = {
  position: "relative",
  top: "25vh",
  textAlign: "center",
  display: "block",
  margin: "0",
};

function VidBanner() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline>
        <Container style={{height:"60vh"}}>
          <Grid container justifyContent="center">
            <Container>
              <Box
                sx={{
                  position: "absolute",
                  top: "60px",
                  left: "0px",
                  right: "0px",
                  bottom: "0px",
                  width: "100%",
                  height: "60vh",
                  zIndex: "0",
                  backgroundColor: "primary.dark",
                }}
              >
                <video id="myVideo" loop src={video} muted autoPlay></video>
                <Grid style={header}>
                  <Typography variant="h3" alignCenter>
                    Elevate the economy; spark evolution.
                  </Typography>
                </Grid>
              </Box>
            </Container>
          </Grid>
        </Container>
      </CssBaseline>
    </ThemeProvider>
  );
}
export default VidBanner;
