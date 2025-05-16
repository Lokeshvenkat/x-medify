import DaySelector from "./DaySelector/DaySelector";
import { Box } from "@mui/material";
import { useState } from "react";
import { startOfDay } from "date-fns";
import TimeSlotPicker from "./TimeSlotPicker/TimeSlotPicker";

// Define styles object
const styles = {
  container: {
    // You can add specific styles for the container if needed
  },
};

export default function Calendar({ availableSlots, details, handleBooking }) {
  // State to store the selected date
  const [selectedDate, setSelectedDate] = useState(startOfDay(new Date()));

  // Calculate the total number of available slots
  const totalSlots =
    availableSlots.morning.length +
    availableSlots.afternoon.length +
    availableSlots.evening.length;

  return (
    <Box sx={styles.container}>
      {/* DaySelector component for selecting a date */}
      <DaySelector
        selectedDate={selectedDate}
        setSelectedDate={setSelectedDate}
        totalSlots={totalSlots}
      />
      {/* TimeSlotPicker component for selecting a time slot */}
      <TimeSlotPicker
        availableSlots={availableSlots}
        selectedDate={selectedDate}
        details={details}
        handleBooking={handleBooking}
      />
    </Box>
  );
}
