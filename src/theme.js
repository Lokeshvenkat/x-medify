import { createTheme } from "@mui/material";

const theme = createTheme({
  typography: {
    fontFamily: "Poppins, sans-serif",
  },
  palette: {
    primary: {
      main: "#2AA7FF",
    },
    secondary: {
      main: "#1B3C74",
    },
    success: {
      main: "#00A500",
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: "8px",
          textTransform: "none",
          color: "#fff", // Safe here
        },
      },
    },
    MuiContainer: {
      styleOverrides: {
        root: {
          width: "90%",
        },
      },
    },
    MuiTypography: {
      styleOverrides: {
        h1: {
          color: "#000000",
          fontSize: "56px",
          fontWeight: "700",
        },
        h2: {
          color: "#1B3C74",
          fontWeight: "600",
          fontSize: "48px",
          lineHeight: 1.2,
        },
        h3: {
          color: "#102851",
          fontSize: "30px",
          fontWeight: "500",
        },
      },
    },
    MuiSelect: {
      styleOverrides: {
        root: {
          background: "#FAFBFE",
          borderRadius: "8px",
          color: "#ABB6C7",
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          background: "#FAFBFE",
          borderRadius: "8px",
          color: "#ABB6C7",
        },
      },
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
    },
  },
});

// Responsive typography tweaks
theme.typography.h1 = {
  ...theme.typography.h1,
  [theme.breakpoints.down("sm")]: {
    fontSize: "36px",
  },
};

theme.typography.h2 = {
  ...theme.typography.h2,
  [theme.breakpoints.down("sm")]: {
    fontSize: "32px",
  },
};

theme.typography.h3 = {
  ...theme.typography.h3,
  [theme.breakpoints.down("sm")]: {
    fontSize: "22px",
  },
};

export default theme;
