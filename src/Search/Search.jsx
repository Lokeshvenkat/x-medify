import { Container, Stack, Box, Typography } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import HospitalCard from "../components/HospitalCard/HospitalCard";
import icon from "../assets/tick.jpg";
import cta from "../assets/cta.jpg";
import SearchHospital from "../components/SearchHospital/SearchHospital";
import BookingModal from "../components/BookingModal/BookingModal";
import AutohideSnackbar from "../components/AutohideSnackbar/AutohideSnackbar";
import NavBar from "../components/NavBar/NavBar";

// Define the styles object
const styles = {
  mainContainer: {
    background: "linear-gradient(#EFF5FE, rgba(241,247,255,0.47))",
    width: "100%",
    pl: 0,
  },
  headerSection: {
    position: "relative",
    background: "linear-gradient(90deg, #2AA7FF, #0C8CE5)",
    borderBottomLeftRadius: "1rem",
    borderBottomRightRadius: "1rem",
  },
  searchContainer: {
    background: "#fff",
    p: 3,
    borderRadius: 2,
    transform: "translatey(50px)",
    mb: "50px",
    boxShadow: "0 0 10px rgba(0,0,0,0.1)",
  },
  contentContainer: {
    pt: 8,
    pb: 10,
    px: { xs: 0, md: 4 },
  },
  hospitalsInfo: {
    mb: 3,
  },
  hospitalsTitle: {
    component: "h1",
    fontSize: 24,
    lineHeight: 1.1,
    mb: 2,
    fontWeight: 500,
  },
  infoStack: {
    direction: "row",
    spacing: 2,
  },
  infoText: {
    color: "#787887",
    lineHeight: 1.4,
  },
  hospitalCardsStack: {
    mb: { xs: 4, md: 0 },
    spacing: 3,
    width: { xs: 1, md: "calc(100% - 384px)" },
    mr: "24px",
  },
  loadingMessage: {
    variant: "h3",
    bgcolor: "#fff",
    p: 3,
    borderRadius: 2,
  },
  selectionMessage: {
    variant: "h3",
    bgcolor: "#fff",
    p: 3,
    borderRadius: 2,
  },
};

// Define the Search component
export default function Search() {
  // State management
  const [searchParams] = useSearchParams();
  const [hospitals, setHospitals] = useState([]);
  const [state, setState] = useState(searchParams.get("state"));
  const [city, setCity] = useState(searchParams.get("city"));
  const availableSlots = {
    morning: ["11:30 AM"],
    afternoon: ["12:00 PM", "12:30 PM", "01:30 PM", "02:00 PM", "02:30 PM"],
    evening: ["06:00 PM", "06:30 PM", "07:00 PM", "07:30 PM"],
  };
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [bookingDetails, setBookingDetails] = useState({});
  const [showBookingSuccess, setShowBookingSuccess] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  // Fetch hospitals based on state and city selection
  useEffect(() => {
    const fetchHospitals = async () => {
      setHospitals([]);
      setIsLoading(true);
      try {
        const response = await axios.get(
          `https://meddata-backend.onrender.com/data?state=${state}&city=${city}`
        );
        setHospitals(response.data);
        setIsLoading(false);
      } catch (error) {
        console.error(error);
        setIsLoading(false);
      }
    };

    if (state && city) {
      fetchHospitals();
    }
  }, [state, city]);

  useEffect(() => {
    setState(searchParams.get("state"));
    setCity(searchParams.get("city"));
  }, [searchParams]);

  // Show booking modal
  const handleBookingModal = (details) => {
    setBookingDetails(details);
    setIsModalOpen(true);
  };

  return (
    <>
      {/* Navigation bar component */}
      <NavBar />
      {/* Main container with gradient background */}
      <Box sx={styles.mainContainer}>
        {/* Header section with gradient background */}
        <Box sx={styles.headerSection}>
          {/* Container for search component */}
          <Container maxWidth="xl" sx={styles.searchContainer}>
            <SearchHospital />
          </Container>
        </Box>

        {/* Container for content */}
        <Container maxWidth="xl" sx={styles.contentContainer}>
          {/* Display hospitals info if available */}
          {hospitals.length > 0 && (
            <Box sx={styles.hospitalsInfo}>
              <Typography sx={styles.hospitalsTitle}>
                {`${hospitals.length} medical centers available in `}
                <span style={{ textTransform: "capitalize" }}>
                  {city.toLocaleLowerCase()}
                </span>
              </Typography>
              <Stack sx={styles.infoStack}>
                <img src={icon} height={24} width={24} alt="icon" />
                <Typography sx={styles.infoText}>
                  Book appointments with minimum wait-time & verified doctor
                  details
                </Typography>
              </Stack>
            </Box>
          )}

          {/* Stack layout for hospital cards and CTA image */}
          <Stack alignItems="flex-start" direction={{ md: "row" }}>
            <Stack sx={styles.hospitalCardsStack}>
              {/* Render hospital cards for each hospital */}
              {hospitals.length > 0 &&
                hospitals.map((hospital) => (
                  <HospitalCard
                    key={hospital["Hospital Name"]}
                    details={hospital}
                    availableSlots={availableSlots}
                    handleBooking={handleBookingModal}
                  />
                ))}

              {/* Loading message */}
              {isLoading && (
                <Typography sx={styles.loadingMessage}>Loading...</Typography>
              )}

              {/* Message when no state is selected */}
              {!state && (
                <Typography sx={styles.selectionMessage}>
                  Please select a state and city
                </Typography>
              )}
            </Stack>

            {/* CTA image */}
            <img src={cta} width={360} height="auto" alt="banner" />
          </Stack>
        </Container>

        {/* Booking modal component */}
        <BookingModal
          open={isModalOpen}
          setOpen={setIsModalOpen}
          bookingDetails={bookingDetails}
          showSuccessMessage={setShowBookingSuccess}
        />

        {/* Autohide snackbar component */}
        <AutohideSnackbar
          open={showBookingSuccess}
          setOpen={setShowBookingSuccess}
          message="Booking Successful"
        />
      </Box>
    </>
  );
}
