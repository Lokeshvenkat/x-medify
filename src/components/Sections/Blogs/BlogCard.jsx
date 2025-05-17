import { Box, Stack, Typography } from "@mui/material";
import featured from "../../../assets/blog.png";
import person from "../../../assets/person.png";
import styles from "./BlogCard.module.css";
import React from 'react';

/**
 * BlogCard component displays a featured blog image, 
 * category and date, blog title, and author info with picture.
 */
export default function BlogCard() {
  return (
    <Box className={styles.card}>
      {/* Featured blog image */}
      <Box
        component="img"
        src={featured}
        alt="Featured blog"
        className={styles.featuredImage}
      />
      <Box className={styles.content}>
        {/* Blog category and publication date */}
        <Typography className={styles.categoryDate}>
          Medical | March 31, 2022
        </Typography>
        {/* Blog title */}
        <Typography component="h3" className={styles.title}>
          6 Tips To Protect Your Mental Health When You're Sick
        </Typography>
        {/* Author info: image and name */}
        <Stack className={styles.authorStack}>
          <Box
            component="img"
            src={person}
            alt="Author Rebecca Lee"
            className={styles.authorImage}
          />
          <Typography className={styles.authorName}>Rebecca Lee</Typography>
        </Stack>
      </Box>
    </Box>
  );
}
