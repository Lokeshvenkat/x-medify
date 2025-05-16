//import { useState } from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Box, Divider, Stack, Typography } from "@mui/material";
import { SlideNextButton, SlidePrevButton } from "./SliderButtons";
import styles from "./DaySelector.module.css";
import { format, add, isEqual, startOfDay } from "date-fns";

/**
 * DaySelector component for selecting a date from a list of available dates.
 *
 * @param {Date} selectedDate - The currently selected date.
 * @param {function} setSelectedDate - Function to set the selected date.
 * @param {number} totalSlots - Total number of available slots for the selected date.
 */
export default function DaySelector({
  selectedDate,
  setSelectedDate,
  totalSlots,
}) {
  // Get the start of the current day
  const date = startOfDay(new Date());
  const dateItems = [];

  // Generate an array of dates for the next 7 days
  for (let i = 0; i < 7; i++) {
    dateItems.push(add(date, { days: i }));
  }

  /**
   * Format the date for display.
   *
   * @param {Date} day - The date to format.
   * @returns {string} The formatted date string.
   */
  const customDateFormat = (day) => {
    if (isEqual(date, day)) {
      return "Today";
    } else if (isEqual(date, add(day, { days: -1 }))) {
      return "Tomorrow";
    } else {
      return format(day, "E, d LLL"); // Format the date as "Day, Date Month"
    }
  };

  /**
   * Handle the click event for selecting a date.
   *
   * @param {Date} day - The selected date.
   */
  const handleClick = (day) => {
    setSelectedDate(day);
  };

  return (
    <Stack pt={3} position="relative">
      {/* Divider line */}
      <Divider sx={{ mb: 3 }} />

      {/* Swiper component for sliding through dates */}
      <Swiper
        slidesPerView={4} // Number of slides visible at once
        loop={false} // Disable loop mode
        spaceBetween={11} // Space between slides
        className={styles.swiperStyles} // Apply custom styles
        breakpoints={{
          767: {
            spaceBetween: 30, // Space between slides on screens wider than 767px
            slidesPerView: 3, // Number of slides visible on screens wider than 767px
          },
        }}
      >
        {/* Generate SwiperSlides for each date */}
        {dateItems.map((day, index) => (
          <SwiperSlide key={index} className={styles.swiperslide}>
            <Stack onClick={() => handleClick(day)}>
              {/* Display the formatted date */}
              <Typography
                className={`${styles.dateTypography} ${isEqual(day, selectedDate) ? styles.dateTypographySelected : ''}`}
              >
                {customDateFormat(day)}
              </Typography>

              {/* Display the number of available slots */}
              <Typography className={styles.slotsTypography}>
                {`${totalSlots} Slots Available`}
              </Typography>

              {/* Indicator box for the selected date */}
              <Box
                className={`${styles.indicatorBox} ${isEqual(day, selectedDate) ? styles.indicatorBoxSelected : ''}`}
              />
            </Stack>
          </SwiperSlide>
        ))}

        {/* Previous slide button */}
        <span slot="container-start">
          <Box display={{ xs: "none", md: "block" }}>
            <SlidePrevButton />
          </Box>
        </span>

        {/* Next slide button */}
        <span slot="container-end">
          <Box display={{ xs: "none", md: "block" }}>
            <SlideNextButton />
          </Box>
        </span>
      </Swiper>

      {/* Divider box at the bottom */}
      <Box className={styles.dividerBox} />
    </Stack>
  );
}
