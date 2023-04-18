import React, { useContext, useState, useEffect } from "react";
import classes from "./HeaderCartButton.module.css";
import CartIcon from "../Cart/CartIcon";
import CartContext from "../store/cart-context";

const HeaderCartButton = (props) => {
  const [buttonIsHighlighted, setButtonIsHighlighted] = useState(false);

  const buttonClasses = `${classes.button} ${
    !buttonIsHighlighted ? classes.bump : ""
  }`;

  const cartContext = useContext(CartContext);

  const totalNumberOfCartItems = cartContext.items.reduce(
    (currentnumber, item) => currentnumber + item.amount,
    0
  );

  const items = cartContext.items;

  useEffect(() => {
    if (items.length === 0) {
      return;
    }
    setButtonIsHighlighted(true);
    const timer = setTimeout(() => setButtonIsHighlighted(false), 300);

    return () => {
      clearTimeout(timer);
    };
  }, [items]);

  return (
    <button className={buttonClasses} onClick={props.onClick}>
      <span className={classes.icon}>
        <CartIcon />
      </span>{" "}
      <span>Your Cart</span>{" "}
      <span className={classes.badge}>{totalNumberOfCartItems}</span>
    </button>
  );
};

export default HeaderCartButton;
