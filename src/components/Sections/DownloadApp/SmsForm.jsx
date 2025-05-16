import { Box, Button, InputAdornment, TextField, Typography } from "@mui/material";

// Define styles object for the SmsForm component
const styles = {
  container: {
    mb: 5,
  },
  title: {
    fontWeight: 600,
    mb: 1,
  },
  form: {
    display: 'flex',
    gap: 2,
    flexDirection: { xs: 'column', md: 'row' },
  },
  textField: {
    border: '1px solid #F0F0F0',
    flex: 1,
  },
  button: {
    type: 'submit',
    size: 'large',
    variant: "contained",
    disableElevation: true,
  },
};

export default function SmsForm() {
  return (
    <Box sx={styles.container}>
      {/* Heading for the SMS form section */}
      <Typography sx={styles.title}>
        Obtain the download link for the app
      </Typography>

      {/* Form for capturing phone number and dispatching SMS */}
      <Box component='form' sx={styles.form}>
        <TextField
          sx={styles.textField}
          placeholder="Input your phone number"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                +91
              </InputAdornment>
            ),
          }}
          required
        />
        <Button sx={styles.button}>
          Dispatch SMS
        </Button>
      </Box>
    </Box>
  );
}
