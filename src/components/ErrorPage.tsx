import { Box, Button, Typography, useTheme } from "@mui/material";
import React from "react";
import { ERRORS } from "../assets/constants";
import { Link } from "react-router-dom";

const ErrorPage: React.FC = () => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '1.5rem',
        backgroundColor: theme.palette.customColors.background,
        height: '100vh'
      }}
    >
      <Typography variant="h3">
        {ERRORS.OOPS}
      </Typography>
      <Typography variant="h5">
        {ERRORS.DEFAULT}
      </Typography>
      <Link to={"/"}>
      <Button variant="contained">
        {ERRORS.BACK}
      </Button>
      </Link>
    </Box>
  )
}

export default ErrorPage;