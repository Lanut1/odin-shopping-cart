import { Box, Button, Typography } from "@mui/material";
import React from "react";
import { ERRORS } from "../assets/constants";
import { useNavigate } from "react-router-dom";

const ErrorPage: React.FC = () => {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate("/");
  }

  return (
    <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center" textAlign="center">
    <Typography variant="h3" color="error" gutterBottom>
      {ERRORS.OOPS}
    </Typography>
    <Typography variant="h5" color="error" gutterBottom>
      {ERRORS.DEFAULT}
    </Typography>
    <Button variant="contained" color="primary" onClick={handleButtonClick}>
      {ERRORS.BACK}
    </Button>
  </Box>
  )
}

export default ErrorPage;