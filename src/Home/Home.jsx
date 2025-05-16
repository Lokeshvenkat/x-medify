// Import necessary components from Material-UI and custom components
import { Container, Box, Stack } from "@mui/material";
import HeroSlider from "../components/HeroSlider/HeroSlider";
import SearchHospital from "../components/SearchHospital/SearchHospital";
import FAQs from "../components/Sections/FAQs/FAQs";
import OurFamilies from "../components/Sections/OurFamilies/OurFamilies";
import Blogs from "../components/Sections/Blogs/Blogs";
import PatientCaring from "../components/Sections/PatientCaring/PatientCaring";
import Specialists from "../components/Sections/Specialists/Specialists";
import Specialization from "../components/Sections/Specialization/Specialization";
import Offers from "../components/Sections/Offers/Offers";
import NavBar from "../components/NavBar/NavBar";
import HeroServices from "../components/IconLayout/HeroServices";

// Define the styles object
const styles = {
  mainContainer: {
    background: "linear-gradient(#E7F0FF , rgba(232, 241, 255, 0.47) 90%, #fff 10%)",
    mb: 4,
  },
  heroStack: {
    p: { xs: 2.5, md: 8 },
    mt: { xs: -2, md: 0, lg: -6, xl: -10 },
    position: "relative",
    zIndex: 99,
    bgcolor: "#fff",
    borderRadius: "15px",
    spacing: 10,
    boxShadow: "0 0 12px rgba(0,0,0,0.1)",
  },
};

// Define the Home component
export default function Home() {
  return (
    // Main container box
    <Box>
      {/* Background styled box */}
      <Box sx={styles.mainContainer}>
        {/* Navigation bar component */}
        <NavBar />
        {/* Container with max width */}
        <Container maxWidth="xl">
          {/* Hero slider component */}
          <HeroSlider />
          {/* Stack layout for search and hero services */}
          <Stack sx={styles.heroStack}>
            {/* Search hospital component */}
            <SearchHospital />
            {/* Hero services component */}
            <HeroServices />
          </Stack>
        </Container>
      </Box>

      {/* Offers section component */}
      <Offers />

      {/* Specialization section component */}
      <Specialization />

      {/* Specialists section component */}
      <Specialists />

      {/* Patient caring section component */}
      <PatientCaring />

      {/* Blogs section component */}
      <Blogs />

      {/* Our families section component */}
      <OurFamilies />

      {/* FAQs section component */}
      <FAQs />
    </Box>
  );
}
