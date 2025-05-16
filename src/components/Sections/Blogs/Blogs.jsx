import { Box, Container, Grid, Typography } from "@mui/material";
import BlogCard from "./BlogCard";

// Styles for the Blogs component
const styles = {
  container: {
     py: 6 
    },
  heading: { 
    color: 'primary.main', 
  fontWeight: 600, 
  textAlign: 
  'center' 
},
  subHeading: { 
    textAlign: 'center',
     variant: 'h2',
      mb: 2 
    },
  gridContainer: { 
    spacing: 4 
},
  gridItem: { 
    xs: 12, 
    md: 4 
},
};

export default function Blogs() {
  return (
    <Box sx={styles.container}>
      <Container>
        {/* Main heading for the blogs section */}
        <Typography sx={styles.heading}>
          Blog & News
        </Typography>

        {/* Subheading for the blogs section */}
        <Typography sx={styles.subHeading}>
          Read Our Latest News
        </Typography>

        {/* Grid layout for blog cards */}
        <Grid container sx={styles.gridContainer}>
          <Grid item sx={styles.gridItem}>
            <BlogCard />
          </Grid>
          <Grid item sx={styles.gridItem}>
            <BlogCard />
          </Grid>
          <Grid item sx={styles.gridItem}>
            <BlogCard />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
