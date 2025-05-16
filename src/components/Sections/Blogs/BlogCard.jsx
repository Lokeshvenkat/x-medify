import { Box, Stack, Typography } from "@mui/material";
import featured from '../../../assets/blog.jpg';
import person from '../../../assets/person.jpg';

// Define styles object for the BlogCard component
const styles = {
  cardContainer: {
    border: '1px solid rgba(0,0,0,0.1)',
    borderRadius: 2,
  },
  featuredImage: {
    component: 'img',
    src: featured,
    width: 1,
  },
  contentContainer: {
    p: 2,
  },
  dateText: {
    color: '#77829D',
    fontWeight: 500,
    mb: 1,
    fontSize: { xs: 12, md: 16 },
  },
  titleText: {
    component: 'h3',
    color: '#1B3C74',
    fontSize: { xs: 14, md: 18 },
    fontWeight: 500,
    lineHeight: 1.2,
    mb: 2,
  },
  authorStack: {
    direction: 'row',
    spacing: 1,
    alignItems: 'center',
  },
  authorImage: {
    component: 'img',
    src: person,
    height: 32,
    width: 32,
  },
  authorText: {
    color: '#1B3C74',
    fontSize: { xs: 12, md: 16 },
  },
};

export default function BlogCard() {
  return (
    <Box sx={styles.cardContainer}>
      <Box sx={styles.featuredImage} />
      <Box sx={styles.contentContainer}>
        <Typography sx={styles.dateText}>
          Medical | March 31, 2022
        </Typography>
        <Typography sx={styles.titleText}>
          6 Tips To Protect Your Mental Health When You're Sick
        </Typography>
        <Stack sx={styles.authorStack}>
          <Box sx={styles.authorImage} />
          <Typography sx={styles.authorText}>
            Rebecca Lee
          </Typography>
        </Stack>
      </Box>
    </Box>
  );
}
