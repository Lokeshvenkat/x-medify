import { Box, Container, Grid, Typography } from "@mui/material";
import faqBanner from '../../../assets/faqs-banner.jpg';
import CustomizedAccordions from "../../Accordion/Accordion";
import React from 'react';

export default function FAQs() {
  // FAQ data: list of question and answer pairs
  const faqs = [
    {
      question: 'Why choose our medical for your family?',
      answer:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.',
    },
    {
      question: 'Why we are different from others?',
      answer:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.',
    },
    {
      question: 'Trusted & experience senior care & love',
      answer:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.',
    },
    {
      question: 'How to get appointment for emergency cases?',
      answer:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.',
    },
  ];

  return (
    <Box py={4}>
      <Container maxWidth="xl">
        {/* Section header */}
        <Typography color="primary.main" fontWeight={600} textAlign="center">
          Get Your Answer
        </Typography>

        {/* Main title */}
        <Typography textAlign="center" variant="h2" mb={2}>
          Frequently Asked Questions
        </Typography>

        {/* Grid layout with image and accordion */}
        <Grid container alignItems="center" spacing={5}>
          {/* Left side: FAQ banner image */}
          <Grid item xs={12} md={6}>
            <Box src={faqBanner} component="img" width={1} height="auto" />
          </Grid>

          {/* Right side: Accordion with FAQ data */}
          <Grid item xs={12} md={6}>
            <Box maxWidth={450}>
              <CustomizedAccordions data={faqs} />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
