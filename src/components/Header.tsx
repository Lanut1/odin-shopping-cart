import React from "react";
import MustacheIcon from "../assets/icons/mustache.svg";
import { HEADER__TEXT } from "../assets/constants";
import { Search, ShoppingCart } from "@mui/icons-material";
import { AppBar, Avatar, Box, IconButton, Toolbar, Typography } from "@mui/material";
import { Link } from "react-router-dom";

const Header: React.FC = () => {
 return (
  <header>
  <AppBar position="static" sx={{ backgroundColor: 'blanchedalmond', padding: '1rem', color: 'black' }}>
      <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <Link to={"/"}>
          <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <Typography variant="h4" component="h1">
              {HEADER__TEXT.TITLE}
            </Typography>
            <Box sx={{ width: '6rem', height: '3rem' }}>
              <Avatar src={MustacheIcon} alt="Mustache Logo" sx={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </Box>
          </Box>
        </Link>


        <Box sx={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
          <Link to={"/"}>
            <Typography variant="h6" component="h3">{HEADER__TEXT.ABOUT}</Typography>
          </Link>
          <Link to={"/shop"}>
            <Typography variant="h6" component="h3">{HEADER__TEXT.SHOP}</Typography>
          </Link>
        
          <IconButton color="inherit" aria-label="search">
            <Search />
          </IconButton>

          <Link to={"/cart"}>
            <IconButton color="inherit" aria-label="shopping cart">
              <ShoppingCart />
            </IconButton>
          </Link>

        </Box>
      </Toolbar>
    </AppBar>
    </header>
 )
}

export default Header;