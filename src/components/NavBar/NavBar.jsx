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
  import logo from "../../assets/logo.jpg";
  import { useState } from "react";
  import CloseIcon from "@mui/icons-material/Close";
  import MenuIcon from "@mui/icons-material/Menu";
  
  // Define styles object for the NavBar component
  const styles = {
    headerBanner: {
      p: 1,
      bgcolor: "primary.main",
    },
    bannerText: {
      fontSize: 14,
      textAlign: "center",
      color: "#fff",
    },
    navContainer: {
      direction: "row",
      spacing: 2,
      alignItems: "center",
      justifyContent: "space-between",
      py: 2,
    },
    navLinks: {
      direction: { xs: "column", md: "row" },
      spacing: 4,
      alignItems: { xs: "flex-start", md: "center" },
      pt: { xs: 12, md: 1 },
      pb: { xs: 4, md: 1 },
      px: { xs: 4, md: 0 },
    },
    closeIconButton: {
      position: "absolute",
      top: 0,
      right: 32,
      color: "#fff",
    },
  };
  
  export default function NavBar() {
    // Check if the screen size is mobile
    const isMobile = useMediaQuery("(max-width:900px)");
    // State to manage the mobile menu open/close
    const [menuOpen, setMenuOpen] = useState(false);
  
    return (
      <header>
        {/* Header banner with a message */}
        <Box sx={styles.headerBanner}>
          <Typography sx={styles.bannerText}>
            The health and well-being of our patients and their health care team
            will always be our priority, so we follow the best practices for
            cleanliness.
          </Typography>
        </Box>
  
        {/* Main navigation container */}
        <Container maxWidth="xl">
          <Stack sx={styles.navContainer}>
            {/* Logo linking to the home page */}
            <Link to="/">
              <img src={logo} alt="Logo" height={27} />
            </Link>
  
            {/* Navigation links and buttons */}
            <Stack
              sx={{
                ...styles.navLinks,
                ...(menuOpen && { display: "flex" }), // Apply active styles conditionally
              }}
            >
              <Link>Find Doctors</Link>
              <Link to="/search">Hospitals</Link>
              <Link>Medicines</Link>
              <Link>Surgeries</Link>
              <Link>Software for Provider</Link>
              <Link>Facilities</Link>
              <Link to="/my-bookings">
                <Button variant="contained" disableElevation>
                  My Bookings
                </Button>
              </Link>
  
              {/* Close button for mobile menu */}
              {isMobile && (
                <IconButton
                  onClick={() => setMenuOpen(false)}
                  sx={styles.closeIconButton}
                >
                  <CloseIcon />
                </IconButton>
              )}
            </Stack>
  
            {/* Mobile menu toggle button */}
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
  