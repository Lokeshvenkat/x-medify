import styled from "@emotion/styled";
import { Chip, Stack, Typography, Divider } from "@mui/material";
import styles from "./TimeSlotPicker.module.css"; 
import React from 'react';

export default function TimeSlotPicker({
  availableSlots,
  details,
  handleBooking,
  selectedDate,
}) {
  // Custom Chip component for each time slot
  const CustomChip = ({ label, onClick }) => (
    <Chip
      label={label}
      color="primary"
      variant="outlined"
      className={styles.customChip}
      onClick={onClick}
    />
  );

  // Called when a time slot is clicked
  const handleClick = (slot) => {
    handleBooking({ ...details, bookingDate: selectedDate, bookingTime: slot });
  };

  return (
    <Stack
      pt={3}
      spacing={{ xs: 2, md: 3 }}
      divider={<Divider orientation="horizontal" flexItem />}
    >
      {/* Morning slots */}
      {availableSlots.morning.length > 0 && (
        <Stack
          direction="row"
          alignItems="center"
          px={{ xs: 0, md: 6 }}
          flexWrap="wrap"
        >
          <Typography width={{ xs: 1, md: "15%" }} fontSize={{ xs: 14, md: 16 }}>
            Morning
          </Typography>
          {availableSlots.morning.map((slot) => (
            <CustomChip key={slot} label={slot} onClick={() => handleClick(slot)} />
          ))}
        </Stack>
      )}

      {/* Afternoon slots */}
      {availableSlots.afternoon.length > 0 && (
        <Stack
          direction="row"
          alignItems="center"
          px={{ xs: 0, md: 6 }}
          flexWrap="wrap"
        >
          <Typography width={{ xs: 1, md: "15%" }} fontSize={{ xs: 14, md: 16 }}>
            Afternoon
          </Typography>
          {availableSlots.afternoon.map((slot) => (
            <CustomChip key={slot} label={slot} onClick={() => handleClick(slot)} />
          ))}
        </Stack>
      )}

      {/* Evening slots */}
      {availableSlots.evening.length > 0 && (
        <Stack
          direction="row"
          alignItems="center"
          px={{ xs: 0, md: 6 }}
          flexWrap="wrap"
        >
          <Typography width={{ xs: 1, md: "15%" }} fontSize={{ xs: 14, md: 16 }}>
            Evening
          </Typography>
          {availableSlots.evening.map((slot) => (
            <CustomChip key={slot} label={slot} onClick={() => handleClick(slot)} />
          ))}
        </Stack>
      )}
    </Stack>
  );
}
