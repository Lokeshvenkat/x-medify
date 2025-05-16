import { Box, Grid, Typography } from "@mui/material";
import doctorIcon from "../../assets/Doctor.jpg";
import pharmacyIcon from "../../assets/Drugstore.jpg";
import hospitalIcon from "../../assets/Hospital.jpg";
import capsuleIcon from "../../assets/Capsule.jpg";
import ambulanceIcon from "../../assets/Ambulance.jpg";
import IconCard from "../IconCard/IconCard";
import { useMemo } from "react";

// Define styles object
const styles = {
  container: {
    // Container styles can be added here if needed
  },
  heading: {
    component: "h4",
    fontSize: 20,
    color: "#102851",
    fontWeight: 500,
    textAlign: "center",
    mb: 2,
  },
  gridContainer: {
    columnSpacing: { xs: 1, md: 2 },
    justifyContent: "center",
  },
};

export default function HeroServices() {
  // Memoize the services array to prevent unnecessary recalculations
  const Services = useMemo(
    () => [
      { img: doctorIcon, title: "Doctors" },
      { img: pharmacyIcon, title: "Labs" },
      { img: hospitalIcon, title: "Hospitals", active: true },
      { img: capsuleIcon, title: "Medical Store" },
      { img: ambulanceIcon, title: "Ambulance" },
    ],
    []
  );

  return (
    <Box sx={styles.container}>
      <Typography sx={styles.heading}>
        You may be looking for
      </Typography>
      <Grid container sx={styles.gridContainer}>
        {Services.map((service) => (
          <Grid item key={service.title} xs={4} md={2.4}>
            <IconCard
              img={service.img}
              title={service.title}
              active={service.active || false}
              bgColor="#FAFBFE"
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
