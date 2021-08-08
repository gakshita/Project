import React from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import MenuItem from "@material-ui/core/MenuItem";

const status = ["User 1", "User 2", "User 31" , "User 4" , "User 6" , "User 12"];
export default function UserDialog({ open, setOpen, func }) {
  const handleClose = () => {
    setOpen(0);
  };

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
        <DialogTitle id="form-dialog-title">Assign Customer</DialogTitle>
        <DialogContent>
          <TextField
            id="outlined-select-currency"
            select
            label="Users"
            //   value={currency}
            //   onChange={handleChange}
            style={{ width: "20vw" }}
            helperText="Please select the user"
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
