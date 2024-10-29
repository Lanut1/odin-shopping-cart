import { Button, Container, Paper, Stack, Typography } from "@mui/material";
import styles from "./MainSection.module.css";
import { ABOUT__PAGE } from "../assets/constants";

const MainSection: React.FC = () => {
  return (
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
            color: 'white'
          }}
        >
          {ABOUT__PAGE.SHOP_NOW}
        </Button>
      </Stack>
    </Paper>
  </Container>
  )
}

export default MainSection;