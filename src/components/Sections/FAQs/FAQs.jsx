import { Box, Container, Grid, Typography } from "@mui/material";
import faqBanner from '../../../assets/faqs-banner.jpg';
import CustomizedAccordions from "../../Accordion/Accordion";

// Define styles object for the FAQs component
const styles = {
  container: {
    py: 4,
  },
  heading: {
    color: 'primary.main',
    fontWeight: 600,
    textAlign: 'center',
  },
  subHeading: {
    textAlign: 'center',
    variant: 'h2',
    mb: 2,
  },
  gridContainer: {
    alignItems: 'center',
    spacing: 5,
  },
  bannerImage: {
    component: 'img',
    src: faqBanner,
    width: 1,
    height: 'auto',
  },
  accordionContainer: {
    maxWidth: 450,
  },
};

export default function FAQs() {
  // FAQ data
  const faqs = [
    {
      question: 'Why select our healthcare services for your family?',
      answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.'
    },
    {
      question: 'What sets us apart from other healthcare providers?',
      answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.'
    },
    {
      question: 'Reliable and experienced senior care and compassion',
      answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.'
    },
    {
      question: 'How can you schedule an appointment for urgent cases?',
      answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.'
    }
  ];

  return (
    <Box sx={styles.container}>
      <Container maxWidth='xl'>
        {/* Main heading for the FAQs section */}
        <Typography sx={styles.heading}>
          Find Your Solutions
        </Typography>

        {/* Subheading for the FAQs section */}
        <Typography sx={styles.subHeading}>
          Commonly Asked Questions
        </Typography>

        {/* Grid layout for FAQ banner and accordion */}
        <Grid container sx={styles.gridContainer}>
          <Grid item xs={12} md={6}>
            <Box sx={styles.bannerImage} />
          </Grid>

          <Grid item xs={12} md={6}>
            <Box sx={styles.accordionContainer}>
              <CustomizedAccordions data={faqs} />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
