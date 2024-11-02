import { Box, Button, Typography, useTheme } from "@mui/material";
import React from "react";
import { SALE__SECTION } from "../../assets/constants";
import { Link } from "react-router-dom";

const SaleSection: React.FC = () => {
  const theme = useTheme();

  return (
    <Box sx={{
      backgroundColor: theme.palette.customColors.almond,
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
      <Typography variant="body1" color="textSecondary">
        {SALE__SECTION.SUBTITLE}
      </Typography>
      <Link to={"/shop"}>
        <Button variant="contained" sx={{ px: 4 }}>
          {SALE__SECTION.SHOP}
        </Button>
      </Link>

    </Box>
  )
}

export default SaleSection;