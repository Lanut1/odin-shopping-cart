import { CircularProgress, Container, Typography } from "@mui/material";
import React from "react";
import { SHOP__PAGE } from "../assets/constants";

const LoadingPage: React.FC = () => {
  return (
    <Container sx={{display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '3rem', minHeight: '50vh'}}>
      <CircularProgress/>
      <Typography variant="h4">
        {SHOP__PAGE.LOADING}
      </Typography>
    </Container>
  )
}

export default LoadingPage;