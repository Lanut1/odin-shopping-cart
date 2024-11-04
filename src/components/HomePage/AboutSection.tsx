import { Box, Card, CardMedia, Container, Paper, Typography, useTheme } from "@mui/material";
import React from "react";
import { ABOUT__PAGE } from "../../assets/constants";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const AboutSection: React.FC = () => {
  const theme = useTheme();

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  const images = [
    "/src/assets/photos/beef.jpg",
    "/src/assets/photos/chicken.jpg",
    "/src/assets/photos/mincedMeat.jpg"
  ];

  return (
    <Container
      sx={{
        p: {xs: 1, md: 10},
        backgroundColor: theme.palette.customColors.background
      }}
      disableGutters
      maxWidth={false}
    >
      <Typography variant="h4" component="h1" sx={{pb: 5, textAlign: {xs: "center", md: "left"}}}>
        {ABOUT__PAGE.ABOUT}
      </Typography>

      <Box sx={{
        display: "flex",
        flexDirection: {xs: "column", md: "row"},
        justifyContent: "space-between",
        alignItems: "center",
        gap: 7
        }}
      >
        <Paper
          elevation={5}
          sx={{
            backgroundColor: 'rgba(255, 255, 255, 0.8)',
            p: 5,
            width: {xs: "90vw", md: "50vw"},
            textAlign: {xs: "center", md: "left"}
          }}
        >
          <Typography variant="h6" component="p" sx={{ pb: 2 }}>
            {ABOUT__PAGE.HISTORY}
          </Typography>
          <Typography variant="h6" component="p" sx={{ pb: 2 }}>
            {ABOUT__PAGE.PRODUCTS}
          </Typography>
          <Typography variant="h6" component="p" sx={{ pb: 2 }}>
            {ABOUT__PAGE.LOOKING}
          </Typography>
          <Typography variant="h6" component="p" sx={{ pb: 2 }}>
            {ABOUT__PAGE.BUTCHERS}
          </Typography>
          <Typography variant="h6" component="p">
            {ABOUT__PAGE.VISIT}
          </Typography>
        </Paper>
        
      <Box sx={{ width: {xs: "70vw", md: "40vw" }}}>
        <Slider {...settings} >
          {images.map((image) => (
            <Card key={image}>
              <CardMedia
                component="img"
                image={image}
                sx={{ width: "100%", objectFit: "cover" }}
                loading="lazy"
              />
            </Card>
          ))}
        </Slider>
      </Box>
    </Box>
  </Container>
  )
}

export default AboutSection;