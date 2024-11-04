import { Button, Container, Paper, Stack, Typography, useTheme } from "@mui/material";
import { Link } from "react-router-dom";
import { ABOUT__PAGE } from "../../assets/constants";
import butcher from "../../assets/photos/butcherShop.jpg";
import { useEffect } from "react";
import { preloadBackgroundImage } from "../../utils/preloadImage";

const MainSection: React.FC = () => {
  const theme = useTheme();

  useEffect(() => {
    preloadBackgroundImage(butcher);
  }, [])

  return (
    <Container maxWidth={false} disableGutters sx={{
      display: 'flex',
      justifyContent: 'flex-end',
      alignItems: 'center',
      p: {xs: 2, md: 10},
      backgroundImage: `url(${butcher})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center 100%',
      height: '100vh'
    }}>
    <Paper
      elevation={20}
      sx={{backgroundColor: theme.palette.customColors.paper, p: 5}}
    >
      <Stack spacing={1} alignItems="center" sx={{ maxWidth: 600 }}>
        <Typography variant="h5" component="h3" textAlign="center">
          {ABOUT__PAGE.FAMILY}
        </Typography>
        <Typography variant="h3" component="h1" textAlign="center">
          {ABOUT__PAGE.LOCAL_MEAT}
        </Typography>
        <Link to={"/shop"}>
          <Button variant="contained" size="large">
            {ABOUT__PAGE.SHOP_NOW}
          </Button>
        </Link>
      </Stack>
    </Paper>
  </Container>
  )
}

export default MainSection;