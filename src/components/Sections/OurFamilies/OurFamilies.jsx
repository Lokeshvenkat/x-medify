import { Box, Container, Grid, Typography } from "@mui/material";
import banner from '../../../assets/our-families-banner.jpg';

// Define styles object for the OurFamilies component
const styles = {
  container: {
    pt: 3,
    background: 'linear-gradient(#E7F0FF, #E8F1FF)',
  },
  heading: {
    fontWeight: 600,
    color: "primary.main",
  },
  subHeading: {
    variant: "h2",
  },
  description: {
    color: '#77829D',
    lineHeight: 1.8,
  },
  bannerImage: {
    component: 'img',
    src: banner,
    width: 1,
    height: 'auto',
  },
};

export default function OurFamilies() {
  return (
    <Box sx={styles.container}>
      <Container>
        <Grid container alignItems='center' spacing={{ xs: 2, md: 10 }}>
          <Grid item xs={12} md={6}>
            {/* Main heading for the section */}
            <Typography sx={styles.heading}>
              COMMITTED TO THE WELL-BEING OF YOU AND YOUR LOVED ONES.
            </Typography>

            {/* Subheading for the section */}
            <Typography sx={styles.subHeading}>
              Our Community
            </Typography>

            {/* Description text */}
            <Typography sx={styles.description}>
              We collaborate with you to create personalized care plans, including chronic disease management. If we cannot assist, we can provide referrals or advice about the type of practitioner you require. We handle all inquiries with sensitivity and in the strictest confidence.
            </Typography>
          </Grid>

          <Grid item xs={12} md={6}>
            {/* Banner image */}
            <Box sx={styles.bannerImage} />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
