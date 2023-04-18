import React, { useReducer } from "react";
import CartContext from "./cart-context";

const defaultCartState = {
  items: [],
  totalAmount: 0,
};

const cartReducer = (state, action) => {
  if (action.type === "ADD") {
    const updatedTotalAmount =
      state.totalAmount + action.item.price * action.item.amount;
    // const updatedItem = state.items.concat(action.item);

    const existingIndex = state.items.findIndex(
      (item) => item.id === action.item.id
    );
    const existingItem = state.items[existingIndex];

    let updatedItems;

    if (existingItem) {
      const updatedItem = {
        ...existingItem,
        amount: existingItem.amount + action.item.amount,
      };

      updatedItems = [...state.items];
      updatedItems[existingIndex] = updatedItem;
    } else {
      updatedItems = state.items.concat(action.item);
    }
    return { items: updatedItems, totalAmount: updatedTotalAmount };
  }
  if (action.type==="Remove"){
    const existingItemIndex = state.items.findIndex(item=> item.id=== action.id)
    const existingItem = state.items[existingItemIndex]
    const updatedTotalAmount= state.totalAmount - existingItem.price 
    let updatedItems 
    if (existingItem.amount === 1){
       updatedItems= state.items.filter(item=> item!== action.id)
    }
    else {
        const updatedItem = {...existingItem,
        amount: existingItem.amount - 1}
        updatedItems = [...state.items]
        updatedItems[existingItemIndex]= updatedItem

    }
    return{items:updatedItems,totalAmount:updatedTotalAmount}
  }
  return defaultCartState;
};

const CartProvider = (props) => {
  const [cartState, dispatchCartAction] = useReducer(
    cartReducer,
    defaultCartState
  );

  const addItemToCartHandler = (item) => {
    dispatchCartAction({ type: "ADD", item: item });
  };
  const removeItemHandler = (id) => {
    dispatchCartAction({ type: "Remove", id: id });
  };

  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    removeItem: removeItemHandler,
    addItem: addItemToCartHandler,
  };



  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
