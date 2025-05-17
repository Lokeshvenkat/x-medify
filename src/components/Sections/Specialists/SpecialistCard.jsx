import { Box, Typography } from "@mui/material";
import styles from './SpecialistCard.module.css';
import React from 'react';

export default function SpecialistCard({ img, title, designation }) {
  return (
    <Box className={styles.container}>
      <Box
        component="img"
        src={img}
        className={styles.image}
        alt={title}
      />
      <Typography className={styles.title}>
        {title}
      </Typography>
      <Typography className={styles.designation}>
        {designation}
      </Typography>
    </Box>
  );
}
