import { CircularProgress, Container, Typography, useTheme } from "@mui/material";
import React from "react";
import { SHOP__PAGE } from "../assets/constants";

const LoadingPage: React.FC = () => {
  const theme = useTheme();

  return (
    <Container sx={{display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '3rem', height: '100vh', backgroundColor: theme.palette.customColors.background}}>
      <CircularProgress/>
      <Typography variant="h4">
        {SHOP__PAGE.LOADING}
      </Typography>
    </Container>
  )
}

export default LoadingPage;