import React from 'react';


const CartContext= React.createContext(
    {item: [],
    totalAmount: 2,
    removeItem: (id)=>{},
    addItem: (item)=>{} 


    }
);


export default CartContext;