import { Box, Button, Typography } from "@mui/material";
import React from "react";
import { SHOP__PAGE } from "../assets/constants";
import { ShoppingCart } from "@mui/icons-material";

const ShopIntroSection: React.FC = () => {
  return (
    <>
    <Box textAlign="center" sx={{ pt: 5, pb: 1, display: "flex", gap: "4rem", justifyContent: "center", alignItems: "center"}}>
      <Typography variant="h4">
        {SHOP__PAGE.WELCOME}
      </Typography>
      <Button
        variant="contained"
        sx={{backgroundColor: "red", color: "white"}}
        startIcon={<ShoppingCart />}
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