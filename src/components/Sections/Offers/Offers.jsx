import { Box, Container } from "@mui/material";
import { Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import offer1 from '../../../assets/offer1.jpg';
import offer2 from '../../../assets/offer2.jpg';

// Define styles object for the Offers component
const styles = {
  container: {
    py: 6,
  },
  swiperSlide: {
    component: 'img',
  },
};

export default function Offers() {
  return (
    <Box sx={styles.container}>
      <Container maxWidth='xl'>
        {/* Swiper component for displaying offer images */}
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          modules={[Pagination]}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            767: {
              slidesPerView: 3,
            },
          }}
        >
          {/* Swiper slides with offer images */}
          <SwiperSlide>
            <Box sx={{ ...styles.swiperSlide, src: offer1 }} />
          </SwiperSlide>

          <SwiperSlide>
            <Box sx={{ ...styles.swiperSlide, src: offer2 }} />
          </SwiperSlide>

          <SwiperSlide>
            <Box sx={{ ...styles.swiperSlide, src: offer1 }} />
          </SwiperSlide>

          <SwiperSlide>
            <Box sx={{ ...styles.swiperSlide, src: offer2 }} />
          </SwiperSlide>

          <SwiperSlide>
            <Box sx={{ ...styles.swiperSlide, src: offer1 }} />
          </SwiperSlide>

          <SwiperSlide>
            <Box sx={{ ...styles.swiperSlide, src: offer2 }} />
          </SwiperSlide>
        </Swiper>
      </Container>
    </Box>
  );
}
