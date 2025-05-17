import { Link, Stack } from "@mui/material";
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import styles from './FooterLink.module.css';
import React from 'react';

export default function FooterLink({ children }) {
  return (
    <Link className={styles.link}>
      <Stack className={styles.stack}>
        <KeyboardArrowRightIcon />
        {children}
      </Stack>
    </Link>
  );
}
