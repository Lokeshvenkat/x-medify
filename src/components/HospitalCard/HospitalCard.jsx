import icon from "../../assets/hospitalicon.jpg";
import { Box, Button, Chip, Divider, Stack, Typography } from "@mui/material";
import thumb from "../../assets/thumbsup.jpg";
import Calendar from "../Calendar/Calendar";
import { useState } from "react";
import React from 'react';
import { format } from "date-fns";

// Define styles object
const styles = {
  cardContainer: {
    borderRadius: 2,
    bgcolor: "#fff",
    p: { xs: 2, md: 4 },
  },
  stackContainer: {
    direction: { xs: "column", md: "row" },
    spacing: { xs: 1, md: 4 },
    flexWrap: "wrap",
  },
  hospitalIcon: {
    component: "img",
    src: icon,
    width: { xs: 64, md: 130 },
    height: "auto",
    flexShrink: 0,
    alignSelf: "start",
  },
  hospitalName: {
    component: "h3",
    color: "primary.main",
    fontWeight: 600,
    fontSize: { xs: 18, md: 20 },
    mb: 1,
    textTransform: "capitalize",
    lineHeight: 1,
  },
  hospitalLocation: {
    textTransform: "capitalize",
    color: "#414146",
    fontSize: 14,
    fontWeight: 700,
  },
  hospitalType: {
    fontSize: 14,
    mb: 1,
  },
  priceContainer: {
    direction: "row",
    flexWrap: "wrap",
    spacing: "4px",
    mb: 2,
  },
  freeText: {
    fontWeight: 800,
    textTransform: "uppercase",
    color: "primary.green",
  },
  crossedPrice: {
    textDecoration: "line-through",
    color: "#787887",
  },
  divider: {
    borderStyle: "dashed",
    mb: 2,
  },
  ratingContainer: {
    direction: "row",
    alignItems: "center",
    bgcolor: "primary.green",
    py: "4px",
    px: 1,
    borderRadius: 1,
    width: "fit-content",
    spacing: "4px",
  },
  thumbIcon: {
    component: "img",
    src: thumb,
    width: { xs: 16, md: 20 },
    height: { xs: 16, md: 20 },
  },
  ratingText: {
    fontWeight: 700,
    fontSize: { xs: 14, md: 16 },
    color: "#fff",
    opacity: 0.5,
  },
 
  availableText: {
    textAlign: "center",
    color: "primary.green",
    fontSize: 14,
    fontWeight: 500,
    mb: 1,
  },
  bookButton: {
    variant: "contained",
    disableElevation: true,
  },
  chipContainer: {
    direction: "row",
    spacing: 1,
    mt: { xs: 2, md: 0 },
  },
  timeChip: {
    borderRadius: 1,
    fontSize: 14,
  },
  dateChip: {
    borderRadius: 1,
    fontSize: 14,
  },
};

 function HospitalCard({
  details,
  availableSlots,
  handleBooking,
  booking = false,
}) {
  const [showCalendar, setShowCalendar] = useState(false);
  console.log("Rendering HospitalCard", details["Hospital Name"]);
  return (
    
    <Box sx={styles.cardContainer}>
      <Stack sx={styles.stackContainer}>
        <Box component="img" src={icon} sx={styles.hospitalIcon} />
        <Box flex={1}>
          <Typography sx={styles.hospitalName}>
            {details["Hospital Name"].toLowerCase()}
          </Typography>
          <Typography sx={styles.hospitalLocation}>
            {`${details["City"].toLowerCase()}, ${details["State"]}`}
          </Typography>
          <Typography sx={styles.hospitalType}>
            {details["Hospital Type"]}
          </Typography>
          <Stack sx={styles.priceContainer}>
            <Typography sx={styles.freeText}>Free</Typography>
            <Typography sx={styles.crossedPrice}>₹500</Typography>
            <Typography>Consultation fee at clinic</Typography>
          </Stack>
          <Divider sx={styles.divider} />
          <Stack sx={styles.ratingContainer}>
            <Box component="img" src={thumb} sx={styles.thumbIcon} />
            <Typography sx={styles.ratingText}>
              {details["Hospital overall rating"] === "Not Available"
                ? 0
                : details["Hospital overall rating"]}
            </Typography>
          </Stack>
        </Box>

        <Stack
  sx={{
    justifyContent: booking ? "flex-start" : "flex-end",
    minWidth: "23%",
  }}
>

          {!booking ? (
            <>
              <Typography sx={styles.availableText}>
                Available Today
              </Typography>
              <Button
                sx={styles.bookButton}
                onClick={() => setShowCalendar((prev) => !prev)}
              >
                {showCalendar ? "Hide Booking Calendar" : "Book FREE Center Visit"}
              </Button>
            </>
          ) : (
            <Stack sx={styles.chipContainer}>
              <Chip
                label={details.bookingTime}
                variant="outlined"
                color="primary"
                sx={styles.timeChip}
              />
              <Chip
                label={format(new Date(details.bookingDate), "dd MMMM yyyy")}
                variant="outlined"
                color="success"
                sx={styles.dateChip}
              />
            </Stack>
          )}
        </Stack>
      </Stack>

      {/* Only show Calendar if booking is not true */}
      {!booking && showCalendar && (
        <Calendar
          details={details}
          availableSlots={availableSlots}
          handleBooking={handleBooking}
        />
      )}
    </Box>
  );
}

export default React.memo(HospitalCard);



