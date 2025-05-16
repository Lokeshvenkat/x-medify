import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import img from '../../assets/home.jpg';
import { Box, Stack, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';

// Define styles object
const styles = {
  stack: {
    direction: { xs: 'column', md: "row" },
    spacing: 6,
    alignItems: "center",
    pt: 2,
  },
  heading: {
    variant: 'h3',
    component: 'h1',
  },
  mainHeading: {
    variant: 'h1',
    component: 'h1',
    mb: 1,
  },
  spanStyle: {
    color: '#2AA7FF',
  },
  description: {
    color: "#5C6169",
    fontSize: { md: 20 },
    mb: 3,
  },
  image: {
    component: 'img',
    width: { xs: 1, md: "50%" },
  },
};

export default function HeroSlider() {
  return (
    <Swiper>
      <SwiperSlide>
        <Stack sx={styles.stack}>
          <Box>
            <Typography sx={styles.heading}>Skip the travel! Find Online</Typography>
            <Typography sx={styles.mainHeading}>
              Medical <span style={styles.spanStyle}>Centers</span>
            </Typography>
            <Typography sx={styles.description}>
              Connect instantly with a 24x7 specialist or choose to video visit a particular doctor.
            </Typography>
            <Link to='/search'>
              <Button variant='contained' size="large" disableElevation>
                Find Centers
              </Button>
            </Link>
          </Box>
          <Box sx={styles.image} src={img} />
        </Stack>
      </SwiperSlide>
    </Swiper>
  );
}
