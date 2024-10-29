import { Box, Card, CardMedia, Container, Paper, Typography } from "@mui/material";
import React from "react";
import { ABOUT__PAGE } from "../assets/constants";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const AboutSection: React.FC = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  const images = [
    "/src/assets/photos/beef.jpg",
    "/src/assets/photos/chicken.jpg",
    "/src/assets/photos/mincedMeat.jpg"
  ];

  return (
    <Container sx={{p: 10}} disableGutters maxWidth={false}>
    <Typography variant="h4" component="h1" color="black" textAlign="left" sx={{pb: 5}}>
      {ABOUT__PAGE.ABOUT}
    </Typography>

    <Box sx={{display: "flex", justifyContent: "space-between", alignItems: "center", gap: 7}}>
      <Paper elevation={5} sx={{backgroundColor: 'rgba(255, 255, 255, 0.8)', p: 5, maxWidth: 600, minWidth: 200, flex: 1}}>
        <Typography variant="h6" component="p" color="black" textAlign="left" sx={{ pb: 2 }}>
          {ABOUT__PAGE.HISTORY}
        </Typography>
        <Typography variant="h6" component="p" color="black" textAlign="left" sx={{ pb: 2 }}>
          {ABOUT__PAGE.PRODUCTS}
        </Typography>
        <Typography variant="h6" component="p" color="black" textAlign="left" sx={{ pb: 2 }}>
          {ABOUT__PAGE.BUTCHERS}
        </Typography>
        <Typography variant="h6" component="p" color="black" textAlign="left">
          {ABOUT__PAGE.VISIT}
        </Typography>
      </Paper>
    <Box sx={{ maxWidth: 600, minWidth: 200, flex: 1}}>
      <Slider {...settings}>
        {images.map((image) => (
          <Card key={image}>
            <CardMedia
              component="img"
              image={image}
              sx={{ width: "100%", objectFit: "cover" }}
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