import React from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import MenuItem from "@material-ui/core/MenuItem";
import { useEffect } from "react";

const status = ["Call Later", "Interested", "Not Interested" , "Want Demo" , "Fake" , "Converted"];
export default function FormDialog({ open, setOpen, func }) {
  const handleClose = () => {
    setOpen(0);
  };
useEffect(() => {
console.log(open)
},[open])
  const handleConfirm = () => {
    func();
    setOpen(0);
  };
  return (
    <div>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">Follow Up</DialogTitle>
        <DialogContent>
          <TextField
            id="outlined-select-currency"
            select
            label="Status"
            //   value={currency}
            //   onChange={handleChange}
            style={{ width: "20vw" }}
            helperText="Please select the status"
            variant="outlined"
          >
            {status.map((value, index) => (
              <MenuItem key={index} value={value}>
                {value}
              </MenuItem>
            ))}
          </TextField>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={() => handleConfirm()} color="primary">
            Confirm
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
