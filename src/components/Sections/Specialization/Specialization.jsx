import { Box, Button, Container, Grid, Typography } from "@mui/material";
import IconCard from '../../IconCard/IconCard';
import icon1 from '../../../assets/Drugstore.jpg';
import icon2 from '../../../assets/primary-care.jpg';
import icon3 from '../../../assets/cardiology.jpg';
import icon4 from '../../../assets/mri.jpg';
import icon5 from '../../../assets/blood-test.jpg';
import icon6 from '../../../assets/piscologist.jpg';
import icon7 from '../../../assets/X-Ray.jpg';

export default function Specialization() {
  // Data for different medical specializations
  const data = [
    { icon: icon1, title: 'Dental Care' },
    { icon: icon2, title: 'General Practice' },
    { icon: icon3, title: 'Heart Specialist' },
    { icon: icon4, title: 'MRI Imaging' },
    { icon: icon5, title: 'Blood Analysis' },
    { icon: icon6, title: 'Psychologist' },
    { icon: icon1, title: 'Lab Services' },
    { icon: icon7, title: 'Radiology' }
  ];

  return (
    <Box py={6} sx={{ background: 'linear-gradient(#E7F0FF, #E8F1FF)' }}>
      <Container sx={{ textAlign: 'center' }}>
        {/* Main heading for the specialization section */}
        <Typography variant="h2" mb={4}>
          Explore by Specialization
        </Typography>

        {/* Grid layout for displaying specialization cards */}
        <Grid container spacing={{ xs: 1, md: 3 }} mb={5} justifyContent={'center'}>
          {data.map(item => (
            <Grid item xs={4} md={3} key={item.title}>
              <IconCard
                img={item.icon}
                title={item.title}
                bgColor={'#FFFFFF'}
                shadow={true}
              />
            </Grid>
          ))}
        </Grid>

        {/* Button to view all specializations */}
        <Button
          variant="contained"
          size="large"
          disableElevation
        >
          Explore All
        </Button>
      </Container>
    </Box>
  );
}
