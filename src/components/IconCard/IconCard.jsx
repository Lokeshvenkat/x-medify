import { Box, Stack, Typography } from "@mui/material";

// Define styles object
const styles = {
  stackContainer: (active, shadow) => ({
    spacing: 2,
    alignItems: "center",
    bgcolor: active ? "rgba(42,167,255,0.08)" : "transparent", // Background color based on active state
    p: 3, // Padding
    borderRadius: 2, // Border radius
    border: active ? "1px solid #2AA7FF" : "0", // Border based on active state
    boxShadow: shadow ? "0 0 24px rgba(0,0,0,0.09)" : "none", // Box shadow based on shadow state
  }),
  icon: {
    component: "img",
    height: 60, // Height of the icon
    width: 60, // Width of the icon
  },
  title: (active) => ({
    color: active ? "primary.main" : "#ABB6C7", // Text color based on active state
    fontSize: 18, // Font size
    fontWeight: active ? 600 : 400, // Font weight based on active state
  }),
};

export default function IconCard({
  img,
  title,
  bgColor,
  active = false,
  shadow = false,
}) {
  return (
    <Stack sx={styles.stackContainer(active, shadow)}>
      <Box sx={styles.icon} src={img} />
      <Typography sx={styles.title(active)}>
        {title}
      </Typography>
    </Stack>
  );
}
