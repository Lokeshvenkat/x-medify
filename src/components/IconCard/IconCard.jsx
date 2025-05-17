import { Box, Stack, Typography } from "@mui/material";
import classNames from "classnames";
import styles from "./IconCard.module.css"; 
import React from 'react';

export default function IconCard({
  img,
  title,
  bgColor,
  active = false,
  shadow = false,
}) {
  return (
    <Stack
      // Combine static and dynamic styles using `classNames`
      className={classNames(styles.card, {
        [styles.active]: active,
        [styles.shadow]: shadow,
      })}
      alignItems="center"
      spacing={2}
      // Pass dynamic background color if not active
      sx={{
        bgcolor: active ? "rgba(42,167,255,0.08)" : bgColor,
        border: active ? "1px solid #2AA7FF" : 0,
      }}
    >
      {/* Icon Image */}
      <Box component="img" src={img} height={60} width={60} alt={title} />

      {/* Card Title */}
      <Typography
        className={styles.title}
        color={active ? "primary.main" : "#ABB6C7"}
        fontWeight={active ? 600 : 400}
      >
        {title}
      </Typography>
    </Stack>
  );
}
