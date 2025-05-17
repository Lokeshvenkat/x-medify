import {
  Box,
  Container,
  Button,
  Stack,
  Typography,
  useMediaQuery,
  IconButton,
} from "@mui/material";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";
import styles from "./NavBar.module.css";
import { useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import MenuIcon from "@mui/icons-material/Menu";
import React from 'react';

export default function NavBar() {
  const isMobile = useMediaQuery("(max-width:900px)");
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header>
      {/* Banner with health message */}
      <Box className={styles.banner}>
        <Typography className={styles.bannerText}>
          The health and well-being of our patients and their health care team
          will always be our priority, so we follow the best practices for
          cleanliness.
        </Typography>
      </Box>

      <Container maxWidth="xl">
        <Stack
          direction="row"
          spacing={2}
          alignItems="center"
          justifyContent="space-between"
          py={2}
        >
          {/* Logo */}
          <Link to="/">
            <img src={logo} alt="Logo" height={27} />
          </Link>

          {/* Navigation Links */}
          <Stack
            direction={{ xs: "column", md: "row" }}
            alignItems={{ xs: "flex-start", md: "center" }}
            className={`${styles.navlinks} ${menuOpen ? styles.active : ""}`}
          >
            <Link to="#">Find Doctors</Link>
            <Link to="/search">Hospitals</Link>
            <Link to="#">Medicines</Link>
            <Link to="#">Surgeries</Link>
            <Link to="#">Software for Provider</Link>
            <Link to="#">Facilities</Link>
            <Link to="/my-bookings">
              <Button variant="contained" disableElevation>
                My Bookings
              </Button>
            </Link>

            {/* Close icon for mobile */}
            {isMobile && (
              <IconButton
                onClick={() => setMenuOpen(false)}
                className={styles.closeIcon}
              >
                <CloseIcon />
              </IconButton>
            )}
          </Stack>

          {/* Hamburger icon for mobile */}
          {isMobile && (
            <IconButton onClick={() => setMenuOpen(true)}>
              <MenuIcon />
            </IconButton>
          )}
        </Stack>
      </Container>
    </header>
  );
}
