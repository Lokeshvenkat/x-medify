import { Box, Container, Grid, Typography } from "@mui/material";
import BlogCard from "./BlogCard";
import styles from "./Blogs.module.css";
import React from 'react';

/**
 * Blogs component renders a section showcasing blog cards with a header.
 */
export default function Blogs() {
  return (
    <Box className={styles.blogsSection}>
      <Container>
        {/* Section main title */}
        <Typography className={styles.titlePrimary} component="h4">
          Blog & News
        </Typography>

        {/* Section subtitle */}
        <Typography className={styles.titleSecondary} variant="h2">
          Read Our Latest News
        </Typography>

        {/* Grid layout for blog cards */}
        <Grid container spacing={4}>
          <Grid item xs={12} md={4}>
            <BlogCard />
          </Grid>
          <Grid item xs={12} md={4}>
            <BlogCard />
          </Grid>
          <Grid item xs={12} md={4}>
            <BlogCard />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
