import React, { useContext, useState } from "react";
import classes from "./Cart.module.css";
import Modal from "../UI/Modal/Modal";
import CartContext from "../store/cart-context";
import CartItem from "./CartItem";
import Checkout from "./Checkout";

const Cart = (props) => {
  const [isCheckout, setIsCheckout] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [didSubmit, setDidSubmit] = useState(false);
  const crtCxt = useContext(CartContext);
  // const cartItem = (
  //   <ul className={classes["cart-item"]}>
  //     {[{ id: "c1", name: "sushi", amount: 2, price: 12.99 }].map((item,key) => {
  //       return <li key={key}>{item.name}</li>;
  //     })}
  //   </ul>
  // );
  const addItemHandler = (item) => {
    crtCxt.addItem({ ...item, amount: 1 });
  };

  const removeItemHandler = (id) => {
    crtCxt.removeItem(id);
  };

  const orderClickHandler = () => {
    setIsCheckout(true);
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
            onAdd={addItemHandler.bind(null, item)}
            onRemove={removeItemHandler.bind(null, item.id)}
          />
        );
      })}
    </ul>
  );

  const totalAmount = `$${crtCxt.totalAmount.toFixed(2)}`;

  const hasorder = crtCxt.items.length > 0;

  const mealOrderSubmitHandler = async (userInfo) => {
    setIsSubmitting(true);

    try {
      const response = await fetch(
        "https://react-http-97bd2-default-rtdb.europe-west1.firebasedatabase.app/orders.json",
        {
          method: "POST",
          headers: { "content-type": "application/json" },
          body: JSON.stringify({
            user: userInfo,
            meals: { item: crtCxt.items },
          }),
        }
      );
      if (response.ok) {
        // Request was successful
        const data = await response.json();
        console.log(data);
        // Process the response data
        console.log("Order placed successfully!");
        setIsSubmitting(false);
        setDidSubmit(true);
        crtCxt.clearOrder()
      } else {
        // Request failed with an error
        throw new Error("Error sending order. Please try again later.");
      }
    } catch (error) {
      // Handle any exceptions or network errors
      console.log("Error:", error.message);
      
    setIsSubmitting(false);
    setDidSubmit(false);
    }

  };

  // const

  const modalsAction = (
    <div className={classes.actions}>
      <button className={classes["button--alt"]} onClick={props.onClickForHide}>
        Close
      </button>
      {hasorder && (
        <button className={classes.button} onClick={orderClickHandler}>
          Order
        </button>
      )}
    </div>
  );

  const beforeSubmittedDisplay = (
    <React.Fragment>
      {" "}
      {cartItem}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </div>
      {isCheckout && (
        <Checkout
          onConfirm={mealOrderSubmitHandler}
          onCancel={props.onClickForHide}
        />
      )}
      {!isCheckout && modalsAction}{" "}
    </React.Fragment>
  );

  const isBeingSubmittedDisplay = (
    <React.Fragment>
      <p> Order is being submitted...</p>
    </React.Fragment>
  );

  const didSubmittedDisplay = (
    <React.Fragment>
      <p> Order submitted successfully</p>{" "}
      <button className={classes["button"]} onClick={props.onClickForHide}>
        Close
      </button>
    </React.Fragment>
  );
  return (
    <Modal onClickForHide={props.onClickForHide}>
      {!isSubmitting && !didSubmit && beforeSubmittedDisplay}
      {isSubmitting && isBeingSubmittedDisplay}
      {!isSubmitting && didSubmit  && didSubmittedDisplay }
    </Modal>
  );
};

export default Cart;
