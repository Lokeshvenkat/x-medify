import React from "react";
import ReactDOM from "react-dom/client";
import "./index.module.css";
import App from "./App";
import Search from "./Search/Search";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Home/Home";
import { ThemeProvider } from "@mui/material";
import MyBookings from "./MyBookings/MyBookings";
import { theme } from "./themes"; // Importing the theme from separate file

// Defining app routes using react-router-dom's createBrowserRouter
const router = createBrowserRouter([
  {
    path: "/", // Base path
    element: <App />, // Root-level component (likely includes an <Outlet />)
    children: [
      {
        path: "search", // /search route
        element: <Search />,
      },
      {
        path: "my-bookings", // /my-bookings route
        element: <MyBookings />,
      },
      {
        path: "/", // Default path, renders Home inside App
        element: <Home />,
      },
    ],
  },
]);

// Creating React root and rendering the app
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* Wrapping the entire app with the MUI ThemeProvider to apply custom theme */}
    <ThemeProvider theme={theme}>
      {/* RouterProvider provides the routing context for the application */}
      <RouterProvider router={router} />
    </ThemeProvider>
  </React.StrictMode>
);
