import { Alert } from '@mui/material';
import Snackbar from '@mui/material/Snackbar';
import React from 'react';

export default function AutohideSnackbar({ open, setOpen, message }) {
  // Handles Snackbar close event, ignoring clickaway to prevent premature close
  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false); // Close the Snackbar
  };

  return (
    <Snackbar
      open={open} // Controls visibility of Snackbar
      autoHideDuration={5000} // Automatically hides after 5 seconds
      onClose={handleClose} // Callback on close event
      anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }} // Position on screen
    >
      <Alert 
        onClose={handleClose} // Close button behavior
        icon={false} // Removes default alert icon
        sx={{ bgcolor: 'primary.green', color: '#fff' }} // Custom background and text color
      >
        {message} {/* Displays the passed message */}
      </Alert>
    </Snackbar>
  );
}
