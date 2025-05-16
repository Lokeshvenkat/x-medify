import { Box, Container, Grid, List, ListItem, ListItemIcon, ListItemText, Typography } from "@mui/material";
import banner from '../../../assets/patientcaring.jpg';
import tick from '../../../assets/tick-blue.jpg';

// Define styles object for the PatientCaring component
const styles = {
  container: {
    py: 6,
    background: 'linear-gradient(#E7F0FF, #E8F1FF)',
  },
  bannerImage: {
    component: 'img',
    src: banner,
    width: 1,
  },
  heading: {
    fontWeight: 600,
    color: "primary.main",
  },
  subHeading: {
    variant: "h2",
    mb: 1,
  },
  description: {
    color: '#77829D',
    lineHeight: 1.8,
  },
  list: {
    fontSize: { xs: 12, md: 18 },
  },
  listItemIcon: {
    minWidth: 32,
  },
  listItemText: {
    primaryTypographyProps: { fontSize: { xs: 14, md: 18 }, fontWeight: 500, color: '#1B3C74' },
  },
};

export default function PatientCaring() {
  return (
    <Box sx={styles.container}>
      <Container>
        <Grid container spacing={6} alignItems='center'>
          <Grid item xs={12} md={6}>
            {/* Banner image */}
            <Box sx={styles.bannerImage} />
          </Grid>

          <Grid item xs={12} md={6}>
            {/* Main heading for the section */}
            <Typography sx={styles.heading}>
              SUPPORTING PATIENTS WORLDWIDE!!
            </Typography>

            {/* Subheading for the section */}
            <Typography sx={styles.subHeading}>
              Patient <Box component='span' color='primary.main'>Care</Box>
            </Typography>

            {/* Description text */}
            <Typography sx={styles.description}>
              Our mission is to provide quality care in a courteous, respectful, and compassionate manner. We hope you will allow us to care for you and strive to be the first and best choice for healthcare.
            </Typography>

            {/* List of features */}
            <List sx={styles.list}>
              <ListItem disableGutters>
                <ListItemIcon sx={styles.listItemIcon}>
                  <Box component='img' src={tick} height={22} width={22} />
                </ListItemIcon>
                <ListItemText
                  primary='Keep Informed About Your Health'
                  sx={styles.listItemText}
                />
              </ListItem>
              <ListItem disableGutters>
                <ListItemIcon sx={styles.listItemIcon}>
                  <Box component='img' src={tick} height={22} width={22} />
                </ListItemIcon>
                <ListItemText
                  primary='View Your Results Online'
                  sx={styles.listItemText}
                />
              </ListItem>
              <ListItem disableGutters>
                <ListItemIcon sx={styles.listItemIcon}>
                  <Box component='img' src={tick} height={22} width={22} />
                </ListItemIcon>
                <ListItemText
                  primary='Handle Your Appointments'
                  sx={styles.listItemText}
                />
              </ListItem>
            </List>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
