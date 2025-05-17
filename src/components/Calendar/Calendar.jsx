import DaySelector from "./DaySelector/DaySelector";
import { Box } from "@mui/material";
import { useState } from "react";
import { startOfDay } from "date-fns";
import TimeSlotPicker from "./TimeSlotPicker/TimeSlotPicker";
import React from 'react';

export default function Calendar({ availableSlots, details, handleBooking }) {
  // State to keep track of the currently selected date, initialized to start of today
  const [selectedDate, setSelectedDate] = useState(startOfDay(new Date()));

  // Calculate total number of available slots across morning, afternoon, and evening
  const totalSlots =
    availableSlots.morning.length +
    availableSlots.afternoon.length +
    availableSlots.evening.length;

  return (
    <Box>
      {/* DaySelector lets user pick a date */}
      <DaySelector
        selectedDate={selectedDate}
        setSelectedDate={setSelectedDate}
        totalSlots={totalSlots}
      />
      {/* TimeSlotPicker shows slots for the selected date and handles booking */}
      <TimeSlotPicker
        availableSlots={availableSlots}
        selectedDate={selectedDate}
        details={details}
        handleBooking={handleBooking}
      />
    </Box>
  );
}
