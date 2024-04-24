import { CheckBox, Close } from '@mui/icons-material';
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, FormControlLabel, IconButton, Stack, TextField } from '@mui/material'
import CloseIcon from "@mui/icons-material/Close";
import React, { useState } from 'react'

const Personalinfo = () => {
    const [open,openchange]= useState(false);
    const functionopenpopup = () =>{
        openchange(true)
    }
    const closepopup = () =>{
        openchange(false)
    }
  return (
    <div>
        <Button onClick={functionopenpopup}color="primary" variant="contained">Edit</Button>
        <Dialog open={open} onClose={closepopup} fullWidth maxWidth="md">
        <DialogTitle>Personal Information <IconButton onClick={closepopup} style={{float:'right'}}><CloseIcon color='error'></CloseIcon></IconButton></DialogTitle>
        <DialogContent>
            {/* <DialogContentText>Do You Want To Close</DialogContentText> */}
            <Stack spacing={2}margin={2}>
                <TextField variant="outlined" label="Name"></TextField>
                <TextField variant="outlined" label="Relationship"></TextField>
                <TextField variant="outlined" label="Date of birth"></TextField>
                <TextField variant="outlined" label="Nationality"></TextField>
                <TextField variant="outlined" label="Phone"></TextField>
                
                <Button color="primary" variant="contained">Submit</Button>

            </Stack>
        </DialogContent>
        <DialogActions>
            {/* <Button onClick={closepopup} color="error" variant="contained">Close</Button> */}
        </DialogActions>
        </Dialog>
    </div>
  )
}

export default Personalinfo