import { React, Box, Container } from "@mui/material";
import { Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import offer1 from '../../../assets/offer1.png';
import offer2 from '../../../assets/offer2.png';


export default function Offers() {
  return (
    <Box py={6}>
      <Container maxWidth='xl'>
        {/* Swiper slider with pagination */}
        <Swiper
          slidesPerView={1}           // Show 1 slide per view by default (mobile)
          spaceBetween={30}           // 30px space between slides
          modules={[Pagination]}      // Include pagination module
          pagination={{
            clickable: true           // Pagination bullets are clickable
          }}
          breakpoints={{
            767: {                   // For viewport width >= 767px, show 3 slides at once
              slidesPerView: 3
            }
          }}
        >
          {/* Slides with offer images */}
          <SwiperSlide>
            <Box component={'img'} src={offer1} />
          </SwiperSlide>

          <SwiperSlide>
            <Box component={'img'} src={offer2} />
          </SwiperSlide>

          <SwiperSlide>
            <Box component={'img'} src={offer1} />
          </SwiperSlide>

          <SwiperSlide>
            <Box component={'img'} src={offer2} />
          </SwiperSlide>

          <SwiperSlide>
            <Box component={'img'} src={offer1} />
          </SwiperSlide>

          <SwiperSlide>
            <Box component={'img'} src={offer2} />
          </SwiperSlide>
        </Swiper>
      </Container>
    </Box>
  );
}
