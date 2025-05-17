import { Box, Button, InputAdornment, TextField, Typography } from "@mui/material";
import styles from "./SmsForm.module.css";
import React from 'react';

/**
 * SmsForm component renders a form to input phone number and send an SMS link.
 */
export default function SmsForm() {
  return (
    <Box mb={5}>
      {/* Heading above the form */}
      <Typography fontWeight={600} mb={1}>
        Get the link to download the app
      </Typography>

      {/* Form container with responsive layout */}
      <Box component="form" className={styles.formContainer}>
        <TextField
          placeholder="Enter phone number"
          InputProps={{
            startAdornment: <InputAdornment position="start">+91</InputAdornment>,
          }}
          required
          className={styles.phoneInput}
        />
        <Button type="submit" size="large" variant="contained" disableElevation>
          Send SMS
        </Button>
      </Box>
    </Box>
  );
}
