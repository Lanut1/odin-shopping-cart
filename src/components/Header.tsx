import React from "react";
import MustacheIcon from "../assets/icons/mustache.svg";
import { HEADER__TEXT } from "../assets/constants";
import { Search, ShoppingCart } from "@mui/icons-material";
// import { Link } from "react-router-dom";
import styles from "./Header.module.css";
import { AppBar, Avatar, Box, IconButton, Toolbar, Typography } from "@mui/material";

const Header: React.FC = () => {
 return (
  <header>
  <AppBar position="static" sx={{ backgroundColor: 'blanchedalmond', padding: '1rem', color: 'black' }}>
      <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
  
        <Box className={styles.logoContainer}>
          <Typography variant="h4" component="h1">
            {HEADER__TEXT.TITLE}
          </Typography>
          <Box className={styles.imageContainer}>
            <Avatar src={MustacheIcon} alt="Mustache Logo" sx={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          </Box>
        </Box>

        <Box className={styles.navContainer}>
          <Typography variant="h6" component="h3">{HEADER__TEXT.ABOUT}</Typography>
          <Typography variant="h6" component="h3">{HEADER__TEXT.SHOP}</Typography>
          
          <IconButton color="inherit" aria-label="search">
            <Search />
          </IconButton>
          <IconButton color="inherit" aria-label="shopping cart">
            <ShoppingCart />
          </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
    </header>
 )
}

export default Header;