import React from 'react';


const CartContext= React.createContext(
    {items: [],
    totalAmount: 2,
    removeItem: (id)=>{},
    addItem: (item)=>{},
    clearOrder:()=>{}



    }
);


export default CartContext;