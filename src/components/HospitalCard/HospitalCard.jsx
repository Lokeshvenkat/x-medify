import icon from "../../assets/hospitalicon.png";
import { Box, Button, Chip, Divider, Stack, Typography } from "@mui/material";
import thumb from "../../assets/thumbsup.png";
import Calendar from "../Calendar/Calendar";
import { useState } from "react";
import { format } from "date-fns";
import styles from "./HospitalCard.module.css"; 
import React from 'react';

export default function HospitalCard({
  details,
  availableSlots,
  handleBooking,
  booking = false,
}) {
  const [showCalendar, setShowCalendar] = useState(false);

  return (
    <Box className={styles.card}>
      {/* Main layout */}
      <Stack
        direction={{ xs: "column", md: "row" }}
        spacing={{ xs: 1, md: 4 }}
        flexWrap="wrap"
      >
        {/* Hospital Icon */}
        <Box
          component="img"
          src={icon}
          width={{ xs: 64, md: 130 }}
          className={styles.icon}
          alt="Hospital Icon"
        />

        {/* Hospital Info */}
        <Box flex={1}>
          <Typography
            component="h3"
            className={styles.name}
          >
            {details["Hospital Name"].toLowerCase()}
          </Typography>

          <Typography className={styles.location}>
            {`${details["City"].toLowerCase()}, ${details["State"]}`}
          </Typography>

          <Typography className={styles.type}>
            {details["Hospital Type"]}
          </Typography>

          <Stack direction="row" flexWrap="wrap" spacing="4px" mb={2}>
            <Typography className={styles.freeText}>Free</Typography>
            <Typography className={styles.strike}>₹500</Typography>
            <Typography>Consultation fee at clinic</Typography>
          </Stack>

          <Divider className={styles.divider} />

          {/* Rating Badge */}
          <Stack className={styles.rating}>
            <Box
              component="img"
              src={thumb}
              className={styles.thumb}
              alt="Rating"
            />
            <Typography className={styles.ratingValue}>
              {details["Hospital overall rating"] === "Not Available"
                ? 0
                : details["Hospital overall rating"]}
            </Typography>
          </Stack>
        </Box>

        {/* Booking Area */}
        <Stack
          justifyContent={booking ? "flex-start" : "flex-end"}
          minWidth="23%"
        >
          {!booking ? (
            <>
              <Typography className={styles.available}>
                Available Today
              </Typography>
              <Button
                variant="contained"
                disableElevation
                onClick={() => setShowCalendar((prev) => !prev)}
              >
                {showCalendar ? "Hide Booking Calendar" : "Book FREE Center Visit"}
              </Button>
            </>
          ) : (
            <Stack direction="row" spacing={1} mt={{ xs: 2, md: 0 }}>
              <Chip
                label={details.bookingTime}
                variant="outlined"
                color="primary"
                className={styles.chip}
              />
              <Chip
                label={format(new Date(details.bookingDate), "dd MMMM yyyy")}
                variant="outlined"
                color="success"
                className={styles.chip}
              />
            </Stack>
          )}
        </Stack>
      </Stack>

      {/* Booking Calendar */}
      {showCalendar && (
        <Calendar
          details={details}
          availableSlots={availableSlots}
          handleBooking={handleBooking}
        />
      )}
    </Box>
  );
}
