import * as React from "react";
import Button from "@mui/material/Button";
import BusinessesModal from "./contact/BusinessesModal";
import IndividualsModal from "./contact/IndividualsModal";
import { useState } from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import { Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";

const centeredText = {
  textAlign: "center",
  marginBottom: "25px",
};


const Item = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(3),
  textAlign: "center",
  background: "transparent",
  boxShadow:"none"
}));

function Interested() {
  const [openBusinessModal, setOpenBusinessModal] = useState(false);
  const [openIndividualModal, setOpenIndividualModal] = useState(false);

  const handleOpenBusinessModal = () => {
    setOpenBusinessModal(true);
  };
  const handleOpenIndividualModal = () => {
    setOpenIndividualModal(true);
  };
 
  return (
    <>
      <Container style={{ height: "100%" }}>
        <Grid xs={12} sm={12} md={12}>
          <Box style={centeredText}>
            <Typography variant="h4">Interested to join ?</Typography>
          </Box>
        </Grid>
        <Box display="grid" gridTemplateColumns="repeat(12, 1fr)" gap={3}>
          <Box xs={"span 12"} gridColumn="span 6">
            <Grid>
              <Button
                variant="text"
                className="card1"
                onClick={() => handleOpenBusinessModal()}
                color="secondary"
                sx={{ cursor: "pointer" }}
              >
                <Item>
                  <Typography
                    variant="h6"
                    component="div"
                    color={"#3c3c3c"}
                    marginBottom={"10px"}
                  >
                    Organizations
                  </Typography>
                  <Typography
                    variant="body2"
                    color={"GrayText"}
                    component="div"
                  >
                    Whether you are a small business or large corporate, a
                    union, non-govermental or govermental organizations.
                  </Typography>
                </Item>
              </Button>
            </Grid>
          </Box>
          <Box xs={12} gridColumn="span 6">
            <Grid>
              <Button
                variant="text"
                className="card1"
                onClick={() => handleOpenIndividualModal()}
                color="secondary"
                sx={{ cursor: "pointer" }}
              >
                <Item>
                  <Typography
                    color={"#3c3c3c"}
                    variant="h6"
                    component="div"
                    marginBottom={"10px"}
                  >
                    Individuals
                  </Typography>
                  <Typography
                    color={"GrayText"}
                    component="div"
                    variant="body2"
                  >
                    For all individuals who are interested to collaborate with
                    us, donate or want to learn more about VBE.
                  </Typography>
                </Item>
              </Button>
            </Grid>
          </Box>
        </Box>
      </Container>
      {openBusinessModal && (
        <BusinessesModal
          openJoin={openBusinessModal}
          setOpenJoin={setOpenBusinessModal}
        />
      )}
      {openIndividualModal && (
        <IndividualsModal
          openCollab={openIndividualModal}
          setOpenCollab={setOpenIndividualModal}
        />
      )}
    </>
  );
}

export default Interested;
