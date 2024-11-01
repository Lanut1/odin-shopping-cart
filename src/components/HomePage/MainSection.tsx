import { Button, Container, Paper, Stack, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { ABOUT__PAGE } from "../../assets/constants";
import butcher from "../../assets/photos/butcherShop.jpg";

const MainSection: React.FC = () => {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate("/shop");
  }

  return (
    <Container maxWidth={false} disableGutters sx={{
      display: 'flex',
      justifyContent: 'flex-end',
      alignItems: 'center',
      p: 10,
      backgroundImage: `url(${butcher})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center 100%',
      height: '100vh'
    }}>
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
          onClick={handleButtonClick}
        >
          {ABOUT__PAGE.SHOP_NOW}
        </Button>
      </Stack>
    </Paper>
  </Container>
  )
}

export default MainSection;