import { Box, Button, Typography } from "@mui/material";
import React from "react";
import { SHOP__PAGE } from "../../assets/constants";
import { ShoppingCart } from "@mui/icons-material";
import { Link } from "react-router-dom";

const ShopIntroSection: React.FC = () => {
  return (
    <>
    <Box
      textAlign="center"
      sx={{
        pt: 5,
        pb: 1,
        display: "flex",
        flexDirection: {xs: "column", md: "row"},
        gap: {xs: "1rem", md: "4rem"},
        justifyContent: "center",
        alignItems: "center"
      }}
    >
      <Typography variant="h4">
        {SHOP__PAGE.WELCOME}
      </Typography>
      <Link to={"/cart"}>
        <Button
          variant="contained"
          startIcon={<ShoppingCart />}
        >
          {SHOP__PAGE.CHECK_OUT}
        </Button>
      </Link>
    </Box>
    <Box textAlign="center" sx={{p: 3}}>
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