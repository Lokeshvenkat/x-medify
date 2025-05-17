import { useSwiper } from 'swiper/react';
import next from '../../../assets/next.png';
import prev from '../../../assets/prev.png';
import { Box } from '@mui/material';
import styles from './SliderButtons.module.css';
import React from 'react';

function SlidePrevButton() {
    const swiper = useSwiper();
    return (
        <Box
            component="img"
            src={prev}
            onClick={() => swiper.slidePrev()}
            className={`${styles.buttonImg} ${styles.prevButton}`}
            alt="Previous"
        />
    );
}

function SlideNextButton() {
    const swiper = useSwiper();
    return (
        <Box
            component="img"
            src={next}
            onClick={() => swiper.slideNext()}
            className={`${styles.buttonImg} ${styles.nextButton}`}
            alt="Next"
        />
    );
}

export { SlideNextButton, SlidePrevButton };
