import { Box, Button, Typography } from "@mui/material";
import React from "react";
import { SALE__SECTION } from "../../assets/constants";
import { useNavigate } from "react-router-dom";

const SaleSection: React.FC = () => {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate("/shop");
  }

  return (
    <Box sx={{
      backgroundColor: 'blanchedalmond',
      padding: '2rem',
      alignItems: 'center',
      boxShadow: '0px 4px 10px rgba(0,0,0,0.1)',
      display: 'flex',
      flexDirection: 'column',
      gap: '0.5rem'
    }}>
      <Typography variant="h4">
        {SALE__SECTION.TITLE}
      </Typography>
      <Typography variant="body1" sx={{ color: 'darkslategray' }}>
        {SALE__SECTION.SUBTITLE}
      </Typography>
      <Button variant="contained" sx={{ px: 4 }} onClick={handleButtonClick}>
        {SALE__SECTION.SHOP}
      </Button>
    </Box>
  )
}

export default SaleSection;