import React,{useContext} from "react";
import classes from "./HeaderCartButton.module.css";
import CartIcon from "../Cart/CartIcon";
const HeaderCartButton = (props) => {

  const cartContext = useContext(CartContext);

  const totalNumberOfCartItems= cartContext.items.reduce(((currentnumber,item)=>currentnumber+item.amount),0)
  return (
    <button className={classes.button} onClick={props.onClick}>
      <span className={classes.icon}>
        <CartIcon />
      </span>{" "}
      <span>Your Cart</span>{" "}
      <span className={classes.badge}>{totalNumberOfCartItems}</span>
    </button>
  );
};

export default HeaderCartButton;
