import mobile from "../../../assets/mobile.jpg";
import playstore from "../../../assets/playstore.jpg";
import apple from "../../../assets/apple-logo.jpg";
import arrow from "../../../assets/down-arr.jpg";
import { Box, Button, Container, Grid, Stack, Typography } from "@mui/material";
import SmsForm from "./SmsForm";

// Styles for the DownloadApp component
const styles = {
  container: {
    background: "linear-gradient(#E7F0FF 100%, #E8F1FF 47%)",
    pt: 5,
  },
  mobileImage: {
    component: "img",
    src: mobile,
    width: 1,
    height: "auto",
  },
  contentBox: {
    position: "relative",
    pl: { xs: "36px", md: "50px" },
    mb: { xs: 4, md: 0 },
  },
  title: {
    variant: "h2",
    mb: 2,
  },
  arrowImage: {
    component: "img",
    src: arrow,
    width: { xs: 24, md: 40 },
    position: "absolute",
    left: 0,
    top: 50,
  },
  buttonStack: {
    direction: { xs: "column", md: "row" },
    spacing: { xs: 1, md: 2 },
  },
  button: {
    bgcolor: "#333",
    color: "#fff",
    py: 1.5,
    borderRadius: 1.5,
    size: "large",
    variant: "contained",
    disableElevation: true,
  },
};

export default function DownloadApp() {
  return (
    // Main container with gradient background
    <Box sx={styles.container}>
      <Container>
        <Grid container spacing={3} alignItems="center">
          {/* Mobile image section */}
          <Grid item xs={12} md={5.5}>
            <Box sx={styles.mobileImage} />
          </Grid>

          {/* Content section */}
          <Grid item xs={12} md={6.5}>
            <Box sx={styles.contentBox}>
              {/* Title with highlighted app name */}
              <Typography sx={styles.title}>
                Download the
                <br />
                <Box component="span" color="primary.main">
                  Medify{" "}
                </Box>
                App
              </Typography>

              {/* Arrow image */}
              <Box sx={styles.arrowImage} />

              {/* SMS form component */}
              <SmsForm />

              {/* Download buttons for Google Play and App Store */}
              <Stack sx={styles.buttonStack}>
                <Button
                  sx={styles.button}
                  startIcon={<img src={playstore} height={24} alt="" />}
                >
                  Google Play
                </Button>
                <Button
                  sx={styles.button}
                  startIcon={<img src={apple} height={24} alt="" />}
                >
                  App Store
                </Button>
              </Stack>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
