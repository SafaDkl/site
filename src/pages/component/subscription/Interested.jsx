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
  marginBottom: "20px",
};

const centereAll = {
  textAlign: "center",
  display: "block",
  marginTop: "20px",
};

const Item = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(3),
  textAlign: "center",
  background: "transparent",
  boxShadow:"none",
  border: "1px solid #eee",
  margin: "8px"
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
      <Container style={centereAll}>
        <Grid xs={12}>
          <Box style={centeredText}>
            <Typography variant="h4" style={{ margin: "55px" }}>
              Interested to join ?
            </Typography>
          </Box>
        </Grid>
        <Box>
          <Grid xs={12} container rowSpacing={1}>
            <Grid xs={6}>
              <Item>
                <Button
                  variant="text"
                  className="card1"
                  onClick={() => handleOpenBusinessModal()}
                  color="secondary"
                >
                  <Typography variant="h6">Businesses</Typography>
                  <Typography color={"GrayText"}>
                    Whether you are a small business or large corporate, a
                    union, non-govermental organization or govermental
                    organizations.
                  </Typography>
                </Button>
              </Item>
            </Grid>
            <Grid xs={6}>
              <Item>
                <Button
                  variant="text"
                  className="card1"
                  onClick={() => handleOpenIndividualModal()}
                  color="secondary"
                >
                  <Typography variant="h6">Individuals</Typography>
                  <Typography color={"GrayText"}>
                    For all individuals who are interested to collaborate with
                    us, donate or want to learn more about VBE.
                  </Typography>                 
                </Button>
              </Item>
            </Grid>
          </Grid>
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
