import React from "react";
import styles from "./AdvertisingSpan.module.css";
import { ADVERTISING__SPAN } from "../../assets/constants";
import { Box, Typography } from "@mui/material";

const AdvertisingSpan: React.FC = () => {
  return (
    <Box className={styles.animationWrapper} sx={{backgroundColor: 'primary.main', color: 'primary.contrastText'}}>
      <Box className={styles.animateMarquee}>
        <Typography>{ADVERTISING__SPAN.DELIVERY}</Typography>
        <Typography>{ADVERTISING__SPAN.FIRST}</Typography>
        <Typography>{ADVERTISING__SPAN.SPECIAL}</Typography>
      </Box>
    </Box>
  )
}

export default AdvertisingSpan;