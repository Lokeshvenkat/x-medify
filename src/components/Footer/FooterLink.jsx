import { Link, Stack } from "@mui/material";
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

// Define styles object
const styles = {
  link: {
    underline: "none",
    color: "#fff",
    fontWeight: 300,
    fontSize: 14,
  },
  stack: {
    direction: "row",
    gap: 0.5,
  },
};

export default function FooterLink({ children }) {
  return (
    <Link sx={styles.link}>
      <Stack sx={styles.stack}>
        <KeyboardArrowRightIcon />
        {children}
      </Stack>
    </Link>
  );
}
