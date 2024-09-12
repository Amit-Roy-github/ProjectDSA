import { Snackbar, Alert } from "@mui/material";

const MessagePopup = (proops) => {

   const handleClose = (event, reason) => {
      if (reason === 'clickaway') return;

      proops.setOpen(false);
   }
   return (
      <Snackbar open={proops.open} onClose={handleClose} autoHideDuration={5000} >
         <Alert severity={proops.severity} onClose={handleClose} >
            {proops.message}
         </Alert>
      </Snackbar>
   )
}
export default MessagePopup;