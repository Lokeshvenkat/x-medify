// Import necessary components from Material-UI and custom components
import { Box, Typography, Container, Stack } from "@mui/material";
import HospitalCard from "../components/HospitalCard/HospitalCard";
import { useEffect, useState } from "react";
import cta from "../assets/cta.jpg";
import SearchBar from "../components/SearchBar/SearchBar";
import NavBar from "../components/NavBar/NavBar";

// Define the styles object
const styles = {
  mainContainer: {
    background: "linear-gradient(#EFF5FE, rgba(241,247,255,0.47))",
  },
  headerSection: {
    mb: "50px",
    pt: { xs: 3, md: 1 },
    position: "relative",
    background: "linear-gradient(90deg, #2AA7FF, #0C8CE5)",
    borderBottomLeftRadius: "1rem",
    borderBottomRightRadius: "1rem",
  },
  headerContentContainer: {
    px: { xs: 0, md: 5 },
  },
  title: {
    component: "h1",
    pb: 1,
    fontSize: { xs: 32, md: 40 },
    fontWeight: 700,
    color: "#fff",
  },
  searchBarContainer: {
    bgcolor: "#fff",
    p: 3,
    flexGrow: 1,
    borderRadius: 2,
    boxShadow: "0 0 10px rgba(0,0,0,0.1)",
    translate: "0 50px",
    width: { xs: 1, md: "auto" },
  },
  bookingsContentContainer: {
    pt: 8,
    pb: 10,
    px: { xs: 0, md: 4 },
  },
  hospitalCardsStack: {
    mb: { xs: 4, md: 0 },
    spacing: 3,
    width: { xs: 1, md: "calc(100% - 384px)" },
    mr: "24px",
  },
  noBookingsMessage: {
    variant: "h3",
    bgcolor: "#fff",
    p: 3,
    borderRadius: 2,
  },
};

// Define the MyBookings component
export default function MyBookings() {
  // State to store bookings and filtered bookings
  const [bookings, setBookings] = useState([]);
  const [filteredBookings, setFilteredBookings] = useState([]);

  // Effect to load bookings from local storage
  useEffect(() => {
    try {
      const localBookings = JSON.parse(localStorage.getItem("bookings") || "[]");
      if (Array.isArray(localBookings)) {
        setBookings(localBookings);
      }
    } catch (e) {
      console.error("Invalid bookings in localStorage", e);
      setBookings([]);
    }
  }, []);
  // Effect to update filtered bookings when bookings change
  useEffect(() => {
    setFilteredBookings(bookings);
  }, [bookings]);

  // Render the component
  return (
    <>
      {/* Navigation bar component */}
      <NavBar />
      {/* Main container with gradient background */}
      <Box sx={styles.mainContainer}>
        {/* Header section with gradient background */}
        <Box sx={styles.headerSection}>
          {/* Container for header content */}
          <Container maxWidth="xl" sx={styles.headerContentContainer}>
            {/* Stack layout for title and search bar */}
            <Stack
              direction={{ xs: "column", md: "row" }}
              spacing={{ xs: 0, md: 12 }}
              alignItems={{ xs: "center", md: "flex-end" }}
            >
              {/* Title */}
              <Typography sx={styles.title}>My Bookings</Typography>
              {/* Search bar container */}
              <Box sx={styles.searchBarContainer}>
                {/* Search bar component */}
                <SearchBar list={bookings} filterList={setFilteredBookings} />
              </Box>
            </Stack>
          </Container>
        </Box>

        {/* Container for bookings content */}
        <Container maxWidth="xl" sx={styles.bookingsContentContainer}>
          {/* Stack layout for bookings and CTA image */}
          <Stack alignItems="flex-start" direction={{ md: "row" }}>
            {/* Stack layout for hospital cards */}
            <Stack sx={styles.hospitalCardsStack}>
              {/* Render hospital cards for each booking */}
              {filteredBookings.length > 0 &&
                filteredBookings.map((hospital) => (
                  <HospitalCard
                    key={hospital["Hospital Name"]}
                    details={hospital}
                    booking={true}
                  />
                ))}

              {/* Message when no bookings are found */}
              {filteredBookings.length === 0 && (
                <Typography sx={styles.noBookingsMessage}>
                  No Bookings Found!
                </Typography>
              )}
            </Stack>

            {/* CTA image */}
            <img src={cta} width={360} height="auto" alt="" />
          </Stack>
        </Container>
      </Box>
    </>
  );
}
