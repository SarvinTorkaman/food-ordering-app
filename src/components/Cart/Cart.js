import React, { useContext } from "react";
import classes from "./Cart.module.css";
import Modal from "../UI/Modal/Modal";
import CartContext from "../store/cart-context";
import CartItem from "./CartItem";

const Cart = (props) => {
  const crtCxt = useContext(CartContext);
  // const cartItem = (
  //   <ul className={classes["cart-item"]}>
  //     {[{ id: "c1", name: "sushi", amount: 2, price: 12.99 }].map((item,key) => {
  //       return <li key={key}>{item.name}</li>;
  //     })}
  //   </ul>
  // );
  const addItemHandler = (item) => {
    crtCxt.addItem({...item,amount:1});
  
  };

  const removeItemHandler = (id) => {
    crtCxt.removeItem(id);
  };


  const cartItem = (
    <ul className={classes["cart-item"]}>
      {crtCxt.items.map((item) => {
        return (
          <CartItem
            key={item.id}
            name={item.name}
            price={item.price}
            amount={item.amount}
            onAdd={addItemHandler.bind(null,item)}
            onRemove={removeItemHandler.bind(null,item.id)}
          />
        );
      })}
    </ul>
  );

  const totalAmount = `$${crtCxt.totalAmount.toFixed(2)}`;

  const hasorder = crtCxt.items.length > 0;
  return (
    <Modal onClickForHide={props.onClickForHide}>
      {cartItem}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </div>
      <div className={classes.actions}>
        <button
          className={classes["button--alt"]}
          onClick={props.onClickForHide}
        >
          Close
        </button>
        {hasorder && <button className={classes.button}>Order</button>}
      </div>
    </Modal>
  );
};

export default Cart;
