import React from "react";
import styles from "./AdvertisingSpan.module.css";
import { ADVERTISING__SPAN } from "../../assets/constants";
import { Box, Typography } from "@mui/material";

const AdvertisingSpan: React.FC = () => {
  return (
    <Box className={styles.animationWrapper}>
      <Typography className={styles.animateMarquee}>{ADVERTISING__SPAN.DELIVERY}</Typography>
    </Box>
  )
}

export default AdvertisingSpan;