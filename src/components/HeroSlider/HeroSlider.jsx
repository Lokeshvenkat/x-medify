import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import img from '../../assets/home.webp';
import { Box, Stack, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import styles from './HeroSlider.module.css'; 

export default function HeroSlider() {
  return (
    <Swiper>
      <SwiperSlide>
        {/* Responsive layout using Stack for text + image */}
        <Stack className={styles.heroContainer}>
          {/* Text Content */}
          <Box className={styles.textContainer}>
            <Typography variant="h3" component="h1">
              Skip the travel! Find Online
            </Typography>
            <Typography variant="h1" component="h1" className={styles.headingHighlight}>
              Medical <span className={styles.highlight}>Centers</span>
            </Typography>
            <Typography className={styles.subText}>
              Connect instantly with a 24x7 specialist or choose to video visit a particular doctor.
            </Typography>

            {/* CTA Button */}
            <Link to="/search">
              <Button variant="contained" size="large" disableElevation>
                Find Centers
              </Button>
            </Link>
          </Box>

          {/* Hero Image */}
          <Box
            component="img"
            src={img}
            className={styles.heroImage}
            alt="Hero Banner"
          />
        </Stack>
      </SwiperSlide>
    </Swiper>
  );
}
