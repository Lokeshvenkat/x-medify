import { Box, Button, Container, Grid, Typography } from "@mui/material";
import IconCard from '../../IconCard/IconCard';
import icon1 from '../../../assets/Drugstore.png';
import icon2 from '../../../assets/primary-care.png';
import icon3 from '../../../assets/cardiology.png';
import icon4 from '../../../assets/mri.png';
import icon5 from '../../../assets/blood-test.png';
import icon6 from '../../../assets/piscologist.png';
import icon7 from '../../../assets/X-Ray.png';
import styles from './Specialization.module.css';
import React from 'react';

export default function Specialization() {

  const data = [
    { icon: icon1, title: 'Dentistry' },
    { icon: icon2, title: 'Primary Care' },
    { icon: icon3, title: 'Cardiology' },
    { icon: icon4, title: 'MRI Resonance' },
    { icon: icon5, title: 'Blood Test' },
    { icon: icon6, title: 'Piscologist' },
    { icon: icon1, title: 'Laboratory' },
    { icon: icon7, title: 'X-Ray' }
  ];

  return (
    <Box className={styles.root}>
      <Container className={styles.container}>
        <Typography variant="h2" className={styles.title}>
          Find by specialisation
        </Typography>

        <Grid container spacing={{ xs: 1, md: 3 }} className={styles.gridContainer}>
          {data.map(item => (
            <Grid item xs={4} md={3} key={item.title}>
              <IconCard img={item.icon} title={item.title} bgColor={'#FFFFFF'} shadow={true} />
            </Grid>
          ))}
        </Grid>

        <Button variant="contained" size="large" disableElevation>
          View All
        </Button>
      </Container>
    </Box>
  );
}
