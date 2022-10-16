import * as React from "react";
import Button from "@mui/material/Button";
import BusinessesModal from "./contact/BusinessesModal";
import IndividualsModal from "./contact/IndividualsModal";
import UnionsModal from "./contact/UnionsModal";
import GovernModal from "./contact/GovernModal";
import NgosModal from "./contact/NgosModal";
import { useState } from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
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
  border: "none",
  textAlign: "center",
  background: "transparent",
  boxShadow:"none",
}));

function Interested() {
  const [openBusinessModal, setOpenBusinessModal] = useState(false);
  const [openIndividualModal, setOpenIndividualModal] = useState(false);
  const [openGovernModal, setOpenGovernModal] = useState(false);
  const [openNgoModal, setOpenNgoModal] = useState(false);
  const [openUnionsModal, setOpenUnionModal] = useState(false);

  const handleOpenBusinessModal = () => {
    setOpenBusinessModal(true);
  };
  const handleOpenIndividualModal = () => {
    setOpenIndividualModal(true);
  };
  const handleOpenUnionModal = () => {
    setOpenUnionModal(true);
  };
  const handleOpenNgoModal = () => {
    setOpenNgoModal(true);
  };
  const handleOpenGovernModal = () => {
    setOpenGovernModal(true);
  };

  return (
    <>
      <Grid style={centereAll}>
        <Grid xs={12}>
          <Box style={centeredText}>
            <Typography variant="h4" style={{ margin: "35px" }}>
              Interested to join ?
            </Typography>
          </Box>
        </Grid>
        <Box sx={{ flexGrow: 1 }}>
          <Grid sx={{ flexGrow: 4 }} xs={12} container rowSpacing={1}>
            <Grid xs={1.5} spacing={2}>
              <Item></Item>
            </Grid>
            <Grid xs={3}>
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
                  <Box className="go-corner">
                    <Box className="go-arrow">
                      <span>+</span>
                    </Box>
                  </Box>
                </Button>
              </Item>
            </Grid>
            <Grid xs={3}>
              <Item>
                <Button
                  variant="text"
                  className="card1"
                  onClick={() => handleOpenUnionModal()}
                  color="secondary"
                >
                  <Typography variant="h6">Unions</Typography>
                  <Typography color={"GrayText"}>
                    For all individuals who are interested to collaborate with
                    us, donate or want to learn more about VBE. Feel free to
                    contact us.
                  </Typography>
                  <Box className="go-corner">
                    <Box className="go-arrow">
                      <span>+</span>
                    </Box>
                  </Box>
                </Button>
              </Item>
            </Grid>
            <Grid xs={3}>
              <Item>
                <Button
                  variant="text"
                  className="card1"
                  onClick={() => handleOpenNgoModal()}
                  color="secondary"
                >
                  <Typography variant="h6">NGO</Typography>
                  <Typography color={"GrayText"}>
                    For all individuals who are interested to collaborate with
                    us, donate or want to learn more about VBE. Feel free to
                    contact us.
                  </Typography>
                  <Box className="go-corner">
                    <Box className="go-arrow">
                      <span>+</span>
                    </Box>
                  </Box>
                </Button>
              </Item>
            </Grid>
          </Grid>
          <Grid sx={{ flexGrow: 4 }} xs={12} container rowSpacing={1}>
            <Grid xs={3} spacing={2}>
              <Item></Item>
            </Grid>
            <Grid xs={3} spacing={2}>
              <Item>
                <Button
                  variant="text"
                  className="card1"
                  onClick={() => handleOpenGovernModal()}
                  color="secondary"
                >
                  <Typography variant="h6">
                    Govermental organizations
                  </Typography>
                  <Typography color={"GrayText"}>
                    Whether you are a small business or large corporate, a
                    union, non-govermental organization or govermental
                    organizations.
                  </Typography>
                  <Box className="go-corner">
                    <Box className="go-arrow">
                      <span>+</span>
                    </Box>
                  </Box>
                </Button>
              </Item>
            </Grid>
            <Grid xs={3} spacing={2}>
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
                    us, donate or want to learn more about VBE. Feel free to
                    contact us.
                  </Typography>
                  <Box className="go-corner">
                    <Box className="go-arrow">
                      <span>+</span>
                    </Box>
                  </Box>
                </Button>
              </Item>
            </Grid>
          </Grid>
        </Box>
      </Grid>
      {openBusinessModal && <BusinessesModal openJoin={openBusinessModal} setOpenJoin={setOpenBusinessModal} />}
      {openIndividualModal && (<IndividualsModal openCollab={openIndividualModal} setOpenCollab={setOpenIndividualModal} />)}
      {openUnionsModal && (<UnionsModal openCollab={openUnionsModal} setOpenCollab={setOpenUnionModal} />)}
      {openGovernModal && (<GovernModal openCollab={openGovernModal} setOpenCollab={setOpenGovernModal} />)}
      {openNgoModal && (<NgosModal openCollab={openNgoModal} setOpenCollab={setOpenNgoModal} />)}
    </>
  );
}

export default Interested;
