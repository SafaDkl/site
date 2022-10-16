import * as React from "react";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Grid from "@mui/material/Grid";
import logo from "../../../../images/miniature.png";
import emailjs from "@emailjs/browser";
import { useRef } from "react";

const min = {
  width: "45px",
  height: "40px",
  marginRight: "1l0px",
  position: "relative",
  top: "10px",
};
const soon = {
  marginLeft: "30px",
  height: "21px",
  width: "108px",
  borderRadius: "10px",
  background: "#4faa9e38",
  color: "#50a99e",
  fontSize: "14px",
  display: "block",
  textAlign: "center",
  position: "relative",
  top: "-28px",
  left: "27px",
};
const content = {
  position: "relative",
  top: "-28px",
  color: "grey",
};
const textAccess = {
  fontFamily: "Roboto",
  fontWeight: "500",
  marginBottom: "10px",
};
export default function UnionsModal(props) {
  const form = useRef();
  const handleClose = () => {
    props.setOpenJoin(false);
  };
  const handleSend = (e) => {
   e.preventDefault();
   emailjs
     .sendForm(
       "service_1mqhm9d",
       "template_union",
       form.current,
       "BuIAKoD1IfI9fHJzQ"
     )
     .then(
       (result) => {
         console.log(result.text);
       },
       (error) => {
         console.log(error.text);
       }
     );
  };

 
  return (
    <Grid>
      <Dialog
        open={props.openJoin}
        onClose={handleClose}
        keepMounted
        fullWidth="lg"
        maxWidth="lg"
      >
        <DialogTitle>
          <Grid>
            <img src={logo} alt="" style={min}></img>
            <span style={soon}>Coming soon!</span>
          </Grid>
          <h3 style={textAccess}>Join Waitlist</h3>
          <p>
            Be one of the first to create a profile and claim an exclusive
            subscription.
          </p>
        </DialogTitle>
        <DialogContent style={{ padding: "5%" }}>
          <DialogContentText style={content}></DialogContentText>
          <Grid container spacing={2}>
            <Box
              component="form"
              sx={{
                "& > :not(style)": { m: 1, width: "25ch" },
              }}
              noValidate
              autoComplete="off"
            >
              {" "}
              <form ref={form} onSubmit={handleSend}>
                <TextField
                  id="outlined-basic"
                  variant="outlined"
                  autoFocus
                  margin="dense"
                  label="First name"
                  type="text"
                  width="50ch"
                  name="name"
                />
                <TextField
                  id="outlined-basic"
                  variant="outlined"
                  autoFocus
                  margin="dense"
                  label="Last name"
                  type="text"
                  width="50%"
                  name="lastname"
                />
                <TextField
                  id="outlined-basic"
                  variant="outlined"
                  autoFocus
                  margin="dense"
                  label="Email"
                  type="email"
                  width="50%"
                  name="email"
                />
                <TextField
                  id="outlined-basic"
                  variant="outlined"
                  autoFocus
                  margin="dense"
                  label="Union's name"
                  type="text"
                  width="50%"
                  name="unionname"
                />
                <TextField
                  id="outlined-basic"
                  variant="outlined"
                  autoFocus
                  margin="dense"
                  label="Role"
                  type="text"
                  width="50%"
                  name="role"
                />
                <TextField
                  id="outlined-basic"
                  variant="outlined"
                  autoFocus
                  margin="dense"
                  label="Number of members"
                  type="text"
                  width="50%"
                  name="membersnumber"
                />
                <TextField
                  id="outlined-basic"
                  variant="outlined"
                  autoFocus
                  margin="dense"
                  label="Questions"
                  rows={5}
                  type="text"
                  width="100%"
                  length="500ch"
                  name="questions"
                />
              </form>
            </Box>
          </Grid>{" "}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleSend}>Send</Button>
        </DialogActions>
      </Dialog>
    </Grid>
  );
}
