import {
    Modal,
    Typography,
    Box,
    TextField,
    Button,
    Stack,
  } from "@mui/material";
  import { useState } from "react";
  import { format } from "date-fns";
  
  // Define styles object
  const styles = {
    modalBox: {
      width: "95%",
      maxWidth: 600,
      position: "absolute",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      boxShadow: 24,
      p: { xs: 3, md: 4 },
      outline: 0,
      bgcolor: "#fff",
      borderRadius: 2,
    },
    bookingTitle: {
      component: "h3",
      variant: "h3",
    },
    bookingInfo: {
      fontSize: 14,
      mb: 3,
    },
    formStack: {
      alignItems: "flex-start",
      spacing: 2,
    },
    buttonStack: {
      direction: "row",
      spacing: 1,
    },
  };

  /**
 * BookingModal component for handling booking confirmations.
 *
 * @param {function} setOpen - Function to set the open state of the modal.
 * @param {boolean} open - Determines if the modal is open.
 * @param {object} bookingDetails - Details of the booking.
 * @param {function} showSuccessMessage - Function to show a success message.
 */

  
  export default function BookingModal({
    setOpen,
    open,
    bookingDetails,
    showSuccessMessage,
  }) {
    const [email, setEmail] = useState(""); // State to store the user's email

    /**
     * Handle the booking confirmation.
     *
     * @param {object} e - The event object.
     */
  
    const handleBooking = (e) => {
      e.preventDefault();
      triggerEvent(); // Trigger an event for analytics

      // Retrieve existing bookings from localStorage or initialize an empty array
  
      const bookings = localStorage.getItem("bookings") || "[]";
      const oldBookings = JSON.parse(bookings);
  
      localStorage.setItem(
        "bookings",
        JSON.stringify([
          ...oldBookings,
          { ...bookingDetails, bookingEmail: email },
        ])
      );
      showSuccessMessage(true);
      setEmail("");
      setOpen(false);
    };

     /**
   * Trigger an event for analytics.
   */
  
    const triggerEvent = () => {
      window.dataLayer = window.dataLayer || [];
      function triggerFirstVisitEvent() {
        window.dataLayer.push({
          event: "first_visit",
          eventDate: new Date().toISOString(),
        });
      }
      triggerFirstVisitEvent();
    };

    
  /**
   * Format the date for display.
   *
   * @param {string} day - The date to format.
   * @returns {string|null} The formatted date or null if the input is invalid.
   */
  
    const formatDate = (day) => {
      if (day) {
        const date = new Date(day);
        return format(date, "E, d LLL");
      } else {
        return null;
      }
    };
  
    return (
      <Modal open={open} onClose={() => setOpen(false)}>
        <Box sx={styles.modalBox}>
          <Typography sx={styles.bookingTitle}>Confirm booking</Typography>
          <Typography sx={styles.bookingInfo}>
            <Box component="span">
              Please enter your email to confirm booking for{" "}
            </Box>
            <Box component="span" fontWeight={600}>
              {`${bookingDetails.bookingTime} on ${formatDate(
                bookingDetails.bookingDate
              )}`}
            </Box>
          </Typography>
          <form onSubmit={handleBooking}>
            <Stack sx={styles.formStack}>
              <TextField
                type="email"
                label="Enter your email"
                variant="outlined"
                fullWidth
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <Stack sx={styles.buttonStack}>
                <Button
                  type="submit"
                  variant="contained"
                  size="large"
                  disableElevation
                >
                  Confirm
                </Button>
                <Button
                  variant="outlined"
                  size="large"
                  disableElevation
                  onClick={() => setOpen(false)}
                >
                  Cancel
                </Button>
              </Stack>
            </Stack>
          </form>
        </Box>
      </Modal>
    );
  }
  