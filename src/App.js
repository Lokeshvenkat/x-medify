import { Outlet } from "react-router-dom";
import { CssBaseline } from "@mui/material";
import Footer from "./components/Footer/Footer";
import DownloadApp from "./components/Sections/DownloadApp/DownloadApp";
import styles from './App.module.css';
import React from 'react';

function App() {
  return (
    <div>
      {/* CssBaseline resets default browser styles and applies MUI's baseline styles */}
      <CssBaseline />

      {/* Outlet is where nested route components will be rendered */}
      <Outlet />

      {/* Section to promote app download */}
      <DownloadApp />

      {/* Footer displayed on all pages */}
      <Footer />
    </div>
  );
}

export default App;
