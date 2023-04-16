import React from "react";
import classes from "./Cart.module.css";
import Modal from "../UI/Modal/Modal";

const Cart = (props) => {
  const cartItem = (
    <ul className={classes["cart-item"]}>
      {[{ id: "c1", name: "sushi", amount: 2, price: 12.99 }].map((item,key) => {
        return <li key={key}>{item.name}</li>;
      })}
    </ul>
  );
  return (
    <Modal onClickForHide={props.onClickForHide}>
      {cartItem}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>3.99</span>
      </div>
      <div className={classes.actions}>
        <button className={classes["button--alt"]}  onClick={props.onClickForHide}>Close</button>
        <button className={classes.button}>Order</button>
      </div>
    </Modal>
  );
};

export default Cart;
