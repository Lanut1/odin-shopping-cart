import React from "react";
import MustacheIcon from "../assets/icons/mustache.svg";
import { HEADER__TEXT } from "../assets/constants";
import { Search, ShoppingCart } from "@mui/icons-material";
// import { Link } from "react-router-dom";
import styles from "./Header.module.css";

const Header: React.FC = () => {
 return (
  <header>
    <div className={styles.logoContainer}>
      <h1>{HEADER__TEXT.TITLE}</h1>
      <div className={styles.imageContainer}>
        <img src={MustacheIcon} alt="Mustache Logo" />
      </div>
    </div>
    <div className={styles.navContainer}>
      <h3>{HEADER__TEXT.ABOUT}</h3>
      <h3>{HEADER__TEXT.SHOP}</h3>
      <h3>{HEADER__TEXT.CONTACTS}</h3>
      <Search/>
      <ShoppingCart/>
    </div>



  </header>
 )
}

export default Header;