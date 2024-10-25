import { Button, Card, CardMedia, Container, Grid2, Paper, Stack, Typography } from "@mui/material";
import styles from "./HomePage.module.css";
import { ABOUT__PAGE } from "../assets/constants";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const HomePage: React.FC = () => {
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
    <main>
      <Container maxWidth={false} disableGutters className={styles.imageContainer} sx={{display: 'flex', justifyContent: 'flex-end', alignItems: 'center', p: 10}}>
        <Paper elevation={20} sx={{backgroundColor: 'rgba(255, 255, 255, 0.8)', p: 5}}>
          <Stack spacing={1} alignItems="center" sx={{ maxWidth: 600 }}>
            <Typography variant="h5" component="h3" color="black">
              {ABOUT__PAGE.FAMILY}
            </Typography>
            <Typography variant="h3" component="h1" color="black" textAlign="center">
              {ABOUT__PAGE.LOCAL_MEAT}
            </Typography>
            <Button
              variant="contained"
              size="large"
              sx={{
                backgroundColor: 'red',
                color: 'black',
                '&:hover': {
                  backgroundColor: 'gray'
                }
              }}
            >
              {ABOUT__PAGE.SHOP_NOW}
            </Button>
          </Stack>
        </Paper>
      </Container>
        <Container sx={{p: 10}} disableGutters maxWidth={false}>
          <Typography variant="h4" component="h1" color="black" textAlign="left" sx={{pb: 5}}>
            {ABOUT__PAGE.ABOUT}
          </Typography>
          <Grid2 container sx={{justifyContent: "space-between", alignItems: "center"}}>
            <Grid2>
              <Paper elevation={10} sx={{backgroundColor: 'rgba(255, 255, 255, 0.8)', p: 5, maxWidth: 600, minWidth: 200}}>
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
            </Grid2>
            <Grid2>
            <Slider {...settings}>
              {images.map((image) => (
                <Card key={image} sx={{ width: "100%", height: 400 }}>
                  <CardMedia
                    component="img"
                    image={image}
                    sx={{ width: "100%", height: "100%", objectFit: "cover" }}
                  />
                </Card>
              ))}
            </Slider>
            </Grid2>
          </Grid2>
        </Container>

    </main>
  )
}

export default HomePage;