import * as React from 'react';
import { styled } from '@mui/material/styles';
import AddIcon from '@mui/icons-material/Add';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';

// Styled Accordion component with no gutters, no elevation, and no bottom border line
const Accordion = styled((props) => (
    <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
    '&::before': {
        display: 'none', // removes default divider line
    },
    '&:not(:last-child)': {
        marginBottom: 24, // spacing between accordions except last one
    },
}));

// Styled AccordionSummary with custom expand icon and adjusted padding
const AccordionSummary = styled((props) => (
    <MuiAccordionSummary
        expandIcon={<AddIcon sx={{ color: 'primary.main' }} />}
        {...props}
    />
))(({ theme }) => ({
    backgroundColor: false, // disables default background
    '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
        transform: 'rotate(45deg)', // rotates icon when expanded
    },
    '& .MuiAccordionSummary-content': {
        marginLeft: 0, // removes default margin
    },
    padding: 0, // removes default padding
}));

// Styled AccordionDetails with no padding
const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
    padding: 0,
}));

// Functional component rendering a list of expandable accordion items from data prop
export default function CustomizedAccordions({ data }) {
    // State to keep track of which panel is currently expanded
    const [expanded, setExpanded] = React.useState('');

    // Handler to toggle accordion expansion
    const handleChange = (panel) => (event, newExpanded) => {
        setExpanded(newExpanded ? panel : false);
    };

    return (
        <div>
            {data.map((item, index) => (
                <Accordion
                    key={index}
                    expanded={expanded === `panel${index}`}
                    onChange={handleChange(`panel${index}`)}
                >
                    <AccordionSummary
                        aria-controls={`panel${index}d-content`}
                        id={`panel${index}d-header`}
                    >
                        <Typography
                            fontSize={18}
                            fontWeight={700}
                            color="#1B3C74"
                            lineHeight={1.2}
                        >
                            {item.question}
                        </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography fontSize={14}>
                            {item.answer}
                        </Typography>
                    </AccordionDetails>
                </Accordion>
            ))}
        </div>
    );
}
