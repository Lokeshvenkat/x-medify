import { Box, Container, Grid, Stack, Typography } from "@mui/material";
import logo from "../../assets/logo.jpg";
import fb from "../../assets/fb.jpg";
import pinterest from "../../assets/pinterest.jpg";
import twitter from "../../assets/twitter.jpg";
import yt from "../../assets/yt.jpg";
import FooterLink from "./FooterLink";

// Define styles object
const styles = {
  footerContainer: {
    bgcolor: "primary.secondary",
    pb: 3,
    pt: 6,
  },
  logo: {
    height: 36,
    mb: 2,
  },
  socialIcon: {
    height: 36,
  },
  copyrightText: {
    fontWeight: 300,
    color: "#fff",
    fontSize: 14,
    pt: 3,
    mt: 5,
    borderTop: "1px solid rgba(255,255,255,0.1)",
  },
};

export default function Footer() {
  return (
    <Box sx={styles.footerContainer}>
      <Container maxWidth="xl">
        <Grid container spacing={4}>
          {/* Logo and social media icons */}
          <Grid item xs={12} md={4.5}>
            <Stack
              alignItems="flex-start"
              justifyContent="space-between"
              height={1}
            >
              <Box
                src={logo}
                alt="Medify"
                component="img"
                sx={styles.logo}
              />
              <Stack direction="row" spacing={1.5}>
                <Box component="img" src={fb} sx={styles.socialIcon} />
                <Box component="img" src={twitter} sx={styles.socialIcon} />
                <Box component="img" src={yt} sx={styles.socialIcon} />
                <Box component="img" src={pinterest} sx={styles.socialIcon} />
              </Stack>
            </Stack>
          </Grid>

          {/* First column of footer links */}
          <Grid item xs={12} md={2.5}>
            <Stack spacing={2}>
              <FooterLink>About Us</FooterLink>
              <FooterLink>Our Pricing</FooterLink>
              <FooterLink>Our Gallery</FooterLink>
              <FooterLink>Appointment</FooterLink>
              <FooterLink>Privacy Policy</FooterLink>
            </Stack>
          </Grid>

          {/* Second column of footer links */}
          <Grid item xs={12} md={2.5}>
            <Stack spacing={2}>
              <FooterLink>Orthology</FooterLink>
              <FooterLink>Neurology</FooterLink>
              <FooterLink>Dental Care</FooterLink>
              <FooterLink>Opthalmology</FooterLink>
              <FooterLink>Cardiology</FooterLink>
            </Stack>
          </Grid>

          {/* Third column of footer links */}
          <Grid item xs={12} md={2.5}>
            <Stack spacing={2}>
              <FooterLink>About Us</FooterLink>
              <FooterLink>Our Pricing</FooterLink>
              <FooterLink>Our Gallery</FooterLink>
              <FooterLink>Appointment</FooterLink>
              <FooterLink>Privacy Policy</FooterLink>
            </Stack>
          </Grid>
        </Grid>

        {/* Copyright text */}
        <Typography sx={styles.copyrightText}>
          Copyright ©2023 Surya Nursing Home.com. All Rights Reserved
        </Typography>
      </Container>
    </Box>
  );
}
