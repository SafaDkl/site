import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import logo from "../../../../images/miniature.png";

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
};
export default function GovernModal(props) {
  const handleClose = () => {
    props.setOpenJoin(false);
  };

  return (
    <grid>
      <Dialog open={props.openJoin} onClose={handleClose} keepMounted>
        <DialogTitle>
          <grid>
            <img src={logo} alt="" style={min}></img>
            <span style={soon}>Coming soon!</span>
          </grid>
          <h3 style={textAccess}>Join Waitlist</h3>
          <p>
            Be one of the first to create a profile and claim an exclusive
            subscription.
          </p>
        </DialogTitle>
        <DialogContent>
          <DialogContentText style={content}></DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Company Name"
            type="text"
            fullWidth
            variant="standard"
          />
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Email Address"
            type="email"
            fullWidth
            variant="standard"
          />
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Phone Number"
            type="tel"
            fullWidth
            variant="standard"
          />
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Company Address"
            type="search"
            fullWidth
            variant="standard"
          />{" "}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleClose}>Subscribe</Button>
        </DialogActions>
      </Dialog>
    </grid>
  );
}
