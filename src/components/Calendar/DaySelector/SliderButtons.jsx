import { useSwiper } from 'swiper/react';
import next from '../../../assets/next.jpg';
import prev from '../../../assets/prev.jpg';
import { Box } from '@mui/material';

/**
 * SlidePrevButton component for navigating to the previous slide.
 */
function SlidePrevButton() {
    const swiper = useSwiper();
    return (
        <Box
            component='img'
            src={prev}
            onClick={() => swiper.slidePrev()}
            sx={{
                height: 48,
                width: 48,
                position: 'absolute',
                left: 0,
                top: 0,
                cursor: 'pointer',
                zIndex: 999,
                bgcolor: '#fff',
            }}
        />
    );
}

/**
 * SlideNextButton component for navigating to the next slide.
 */
function SlideNextButton() {
    const swiper = useSwiper();
    return (
        <Box
            component='img'
            src={next}
            onClick={() => swiper.slideNext()}
            sx={{
                height: 48,
                width: 48,
                position: 'absolute',
                right: 0,
                top: 0,
                cursor: 'pointer',
                zIndex: 999,
                bgcolor: '#fff',
            }}
        />
    );
}

export { SlideNextButton, SlidePrevButton };
