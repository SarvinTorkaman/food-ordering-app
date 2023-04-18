import React from 'react';


const CartContext= React.createContext(
    {items: [],
    totalAmount: 2,
    removeItem: (id)=>{},
    addItem: (item)=>{} 


    }
);


export default CartContext;