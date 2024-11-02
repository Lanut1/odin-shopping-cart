import { Box, Button, Typography, useTheme } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import { CART__PAGE } from "../../assets/constants";

const EmptyCart: React.FC = () => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
        textAlign: 'center',
        padding: 3,
        gap: '1rem',
        backgroundColor: theme.palette.customColors.background
      }}
    >
      <Typography variant="h4">
        {CART__PAGE.EMPTY}
      </Typography>
      <Typography variant="body1" color="textSecondary">
        {CART__PAGE.ADD}
      </Typography>
      <Link to={'/shop'}>
      <Button variant="contained">
        {CART__PAGE.SHOP}
      </Button>
      </Link>
    </Box>
  )
}

export default EmptyCart;