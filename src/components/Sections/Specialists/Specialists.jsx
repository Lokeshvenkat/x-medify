import { Box, Typography } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import img1 from '../../../assets/lesley.jpg';
import img2 from '../../../assets/ahmad.jpg';
import img3 from '../../../assets/heena.jpg';
import img4 from '../../../assets/ankur.jpg';
import img5 from '../../../assets/ahmad-stevens.jpg';
import SpecialistCard from './SpecialistCard';
import { Autoplay, Pagination } from 'swiper/modules';

// Define styles object for the Specialists component
const styles = {
  container: {
    py: 4,
  },
  heading: {
    variant: "h2",
    textAlign: 'center',
    mb: 3,
    px: 2,
  },
};

export default function Specialists() {
  // Specialist data
  const specialist_data = [
    { img: img1, title: 'Dr. Lesley Hull', designation: 'Medicine' },
    { img: img2, title: 'Dr. Ahmad Khan', designation: 'Neurologist' },
    { img: img3, title: 'Dr. Heena Sachdeva', designation: 'Orthopedics' },
    { img: img4, title: 'Dr. Ankur Sharma', designation: 'Medicine' },
    { img: img5, title: 'Dr. Ahmad Stevens', designation: 'Neurologist' },
    { img: img1, title: 'Dr. Lesley Hull', designation: 'Medicine' },
    { img: img2, title: 'Dr. Ahmad Khan', designation: 'Neurologist' },
    { img: img3, title: 'Dr. Heena Sachdeva', designation: 'Orthopedics' },
    { img: img4, title: 'Dr. Ankur Sharma', designation: 'Medicine' },
    { img: img5, title: 'Dr. Ahmad Stevens', designation: 'Neurologist' }
  ];

  return (
    <Box sx={styles.container} id="find-doctors">
      {/* Main heading for the specialists section */}
      <Typography sx={styles.heading}>
        Our Medical Specialists
      </Typography>

      {/* Swiper component for displaying specialist cards */}
      <Swiper
        slidesPerView={2}
        spaceBetween={20}
        loop={true}
        centeredSlides={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        modules={[Autoplay, Pagination]}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          767: {
            slidesPerView: 4,
          },
        }}
      >
        {specialist_data.map((doc, index) => (
          <SwiperSlide key={index}>
            <SpecialistCard
              img={doc.img}
              title={doc.title}
              designation={doc.designation}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
}
