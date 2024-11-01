import { Box, Button, Typography } from "@mui/material";
import React from "react";
import { SHOP__PAGE } from "../../assets/constants";
import { ShoppingCart } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

const ShopIntroSection: React.FC = () => {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate("/cart");
  }

  return (
    <>
    <Box textAlign="center" sx={{ pt: 5, pb: 1, display: "flex", gap: "4rem", justifyContent: "center", alignItems: "center"}}>
      <Typography variant="h4">
        {SHOP__PAGE.WELCOME}
      </Typography>
      <Button
        variant="contained"
        startIcon={<ShoppingCart />}
        onClick={handleButtonClick}
      >
        {SHOP__PAGE.CHECK_OUT}
      </Button>
    </Box>
    <Box textAlign="center">
      <Typography variant="body1" color="textSecondary" pb={2}>
       {SHOP__PAGE.ENJOY}
      </Typography>
      <Typography variant="body1" color="textSecondary" pb={2}>
        {SHOP__PAGE.START}
      </Typography>
    </Box>

    </>
  )
}

export default ShopIntroSection;