import { Alert } from '@mui/material';
import Snackbar from '@mui/material/Snackbar';

/**
 * AutohideSnackbar component for displaying temporary notification messages.
 *
 * @param {boolean} open - Determines if the snackbar is open.
 * @param {function} setOpen - Function to set the open state of the snackbar.
 * @param {string} message - The message to display in the snackbar.
 */
export default function AutohideSnackbar({ open, setOpen, message }) {

    /**
     * Handle the close event of the snackbar.
     *
     * @param {object} event - The event source of the callback.
     * @param {string} reason - The reason the snackbar was closed.
     */
    const handleClose = (event, reason) => {
        // Ignore the close event if it's due to clicking away
        if (reason === 'clickaway') {
            return;
        }

        // Close the snackbar
        setOpen(false);
    };

    return (
        <Snackbar
            open={open} // Control the visibility of the snackbar
            autoHideDuration={5000} // Automatically hide the snackbar after 5 seconds
            onClose={handleClose} // Handle the close event
            anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }} // Position the snackbar at the bottom center
        >
            <Alert
                onClose={handleClose} // Handle the close event for the alert
                icon={false} // Hide the default icon
                sx={{ bgcolor: 'primary.green', color: '#fff' }} // Custom styling for the alert
            >
                {message} {/* Display the message */}
            </Alert>
        </Snackbar>
    );
}
