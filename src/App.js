import React, { useState } from "react";
import "./App.css";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";

function App() {
  const[cartIsShown,setCartIsShown]= useState(false)

  const showCartHandler = () => {
    setCartIsShown(true)
  }

  const hideCartHandler = () => {
    setCartIsShown(false)
  }


  return (
    <React.Fragment>
      {cartIsShown && <Cart onClickForHide={hideCartHandler}/>}
      <Header onClickForShow={showCartHandler} />

      <Meals />

    </React.Fragment>
  );
}

export default App;
