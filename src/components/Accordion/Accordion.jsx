import * as React from 'react';
import { styled } from '@mui/material/styles';
import AddIcon from '@mui/icons-material/Add';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';

// Define styles for the Accordion component
const Accordion = styled((props) => (
    <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
    '&::before': {
        display: 'none', // Remove the default separator line
    },
    '&:not(:last-child)': {
        marginBottom: 24, // Add margin between accordion items
    },
}));

// Define styles for the AccordionSummary component
const AccordionSummary = styled((props) => (
    <MuiAccordionSummary
        expandIcon={<AddIcon sx={{ color: 'primary.main' }} />}
        {...props}
    />
))(({ theme }) => ({
    backgroundColor: 'transparent', // Set background color to transparent
    '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
        transform: 'rotate(45deg)', // Rotate the expand icon when expanded
    },
    '& .MuiAccordionSummary-content': {
        marginLeft: 0, // Remove left margin for content
    },
    padding: 0, // Remove padding
}));

// Define styles for the AccordionDetails component
const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
    padding: 0, // Remove padding
}));

// Define the CustomizedAccordions component
export default function CustomizedAccordions({ data }) {
    const [expanded, setExpanded] = React.useState('');

    // Handle accordion expansion
    const handleChange = (panel) => (event, newExpanded) => {
        setExpanded(newExpanded ? panel : false);
    };

    return (
        <div>
            {data.map((item, index) => (
                <Accordion key={index} expanded={expanded === `panel${index}`} onChange={handleChange(`panel${index}`)}>
                    <AccordionSummary aria-controls={`panel${index}d-content`} id={`panel${index}d-header`}>
                        <Typography
                            fontSize={18}
                            fontWeight={700}
                            color='#1B3C74'
                            lineHeight={1.2}
                        >
                            {item.question}
                        </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography
                            fontSize={14}
                        >
                            {item.answer}
                        </Typography>
                    </AccordionDetails>
                </Accordion>
            ))}
        </div>
    );
}
