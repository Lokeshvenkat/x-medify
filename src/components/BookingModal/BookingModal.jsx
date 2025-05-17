import {
  Modal,
  Typography,
  Box,
  TextField,
  Button,
  Stack,
} from "@mui/material";
import { useState } from "react";
import React from 'react';
import { format } from "date-fns";
import styles from "./BookingModal.module.css";

export default function BookingModal({
  setOpen,
  open,
  bookingDetails,
  showSuccessMessage,
}) {
  const [email, setEmail] = useState("");

  // Handles the form submission to save booking details to localStorage
  const handleBooking = (e) => {
    e.preventDefault();
    triggerEvent();

    // Retrieve existing bookings from localStorage or initialize empty array
    const bookings = localStorage.getItem("bookings") || "[]";
    const oldBookings = JSON.parse(bookings);

    // Add new booking with email and booking details, then save back to localStorage
    localStorage.setItem(
      "bookings",
      JSON.stringify([
        ...oldBookings,
        { ...bookingDetails, bookingEmail: email },
      ])
    );

    // Show success message, reset email input, and close modal
    showSuccessMessage(true);
    setEmail("");
    setOpen(false);
  };

  // Pushes a 'first_visit' event to the window.dataLayer for analytics
  const triggerEvent = () => {
    window.dataLayer = window.dataLayer || [];

    function triggerFirstVisitEvent() {
      window.dataLayer.push({
        event: "first_visit",
        eventDate: new Date().toISOString(), // Track exact event time
      });
    }

    triggerFirstVisitEvent();
  };

  // Formats the booking date using date-fns
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
      {/* Modal box container */}
      <Box className={styles.modalBox}>
        <Typography component="h3" variant="h3">
          Confirm booking
        </Typography>
        <Typography fontSize={14} mb={3}>
          <Box component="span">
            Please enter your email to confirm booking for{" "}
          </Box>
          <Box component="span" fontWeight={600}>
            {`${bookingDetails.bookingTime} on ${formatDate(
              bookingDetails.bookingDate
            )}`}
          </Box>
        </Typography>
        {/* Booking confirmation form */}
        <form onSubmit={handleBooking}>
          <Stack alignItems="flex-start" spacing={2}>
            <TextField
              type="email"
              label="Enter your email"
              variant="outlined"
              fullWidth
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <Stack direction="row" spacing={1}>
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
