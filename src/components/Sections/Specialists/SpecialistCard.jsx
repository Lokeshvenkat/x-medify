import { Box, Typography } from "@mui/material";

// Define styles object for the SpecialistCard component
const styles = {
  container: {
    textAlign: 'center',
  },
  image: {
    component: 'img',
    width: 1,
    boxShadow: '0 15px 55px -10px rgba(0,0,0,0.09)',
    borderRadius: '250px 240px 4px 4px',
    mb: 2,
  },
  title: {
    fontSize: { xs: 16, md: 24 },
    color: '#1B3C74',
  },
  designation: {
    fontSize: { xs: 14, md: 16 },
    fontWeight: 500,
    color: 'primary.main',
  },
};

export default function SpecialistCard({ img, title, designation }) {
  return (
    <Box sx={styles.container}>
      {/* Specialist image with custom styling */}
      <Box sx={{ ...styles.image, src: img }} />

      {/* Specialist title */}
      <Typography sx={styles.title}>
        {title}
      </Typography>

      {/* Specialist designation */}
      <Typography sx={styles.designation}>
        {designation}
      </Typography>
    </Box>
  );
}
