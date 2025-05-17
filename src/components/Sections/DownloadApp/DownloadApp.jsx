import mobile from "../../../assets/mobile.jpg";
import playstore from "../../../assets/playstore.png";
import apple from "../../../assets/apple-logo.png";
import arrow from "../../../assets/down-arr.png";
import { Box, Button, Container, Grid, Stack, Typography } from "@mui/material";
import SmsForm from "./SmsForm";
import styles from "./DownloadApp.module.css";
import React from 'react';

/**
 * DownloadApp component renders the download section with
 * an image, heading, SmsForm for phone input, and download buttons.
 */
export default function DownloadApp() {
  return (
    <Box className={styles.downloadSection}>
      <Container>
        <Grid container spacing={3} alignItems="center">
          {/* Mobile phone image */}
          <Grid item xs={12} md={5.5}>
            <Box
              src={mobile}
              component="img"
              className={styles.mobileImage}
              alt="Mobile app preview"
            />
          </Grid>

          {/* Content including heading, arrow, form, and buttons */}
          <Grid item xs={12} md={6.5}>
            <Box className={styles.contentWrapper}>
              <Typography variant="h2" mb={2}>
                Download the
                <br />
                <Box component="span" color="primary.main">
                  Medify{" "}
                </Box>
                App
              </Typography>

              <Box
                src={arrow}
                component="img"
                className={styles.arrowImage}
                alt="Arrow"
              />

              <SmsForm />

              {/* Download buttons for Google Play and App Store */}
              <Stack
                direction={{ xs: "column", md: "row" }}
                spacing={{ xs: 1, md: 2 }}
              >
                <Button
                  size="large"
                  startIcon={<img src={playstore} height={24} alt="Google Play" />}
                  variant="contained"
                  disableElevation
                  className={styles.appButton}
                >
                  Google Play
                </Button>
                <Button
                  size="large"
                  startIcon={<img src={apple} height={24} alt="App Store" />}
                  variant="contained"
                  disableElevation
                  className={styles.appButton}
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
