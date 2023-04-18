import React from "react";
import classes from "./Header.module.css";
import mealsImage from "../../assets/meals.jpg";
import HeaderCartButton from "./HeaderCartButton";
import CartContext from "../store/cart-context";

const Header = (props) => {


  return (
    <React.Fragment>
      <header className={classes.header}>
        <h1>ReactMeals</h1> <HeaderCartButton  onClick={props.onClickForShow} />
      </header>

      <div className={classes["main-image"]}>
        <img src={mealsImage} alt="meal" />
      </div>
    </React.Fragment>
  );
};
export default Header;
