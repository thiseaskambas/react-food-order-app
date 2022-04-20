import React from "react";
import classes from "./Header.module.css";
import headerImg from "../../assets/header.jpg";
import HeaderCartButton from "./HeaderCartButton";

const Header = (props) => {
  return (
    <>
      <header className={classes.header}>
        <h1>React Practice</h1>
        <HeaderCartButton onClick={props.onShowCart} />
      </header>
      <div className={classes["main-image"]}>
        <img src={headerImg} alt="table full of food"></img>
      </div>
    </>
  );
};

export default Header;
