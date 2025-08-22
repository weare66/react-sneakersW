import AppContext from "../context";
import React from 'react';

export const useCart = () => {
    const {setCartItems, cartItems} = React.useContext(AppContext);
    const sumPrice = cartItems.reduce((sum, obj) => sum + obj.price , 0);

    return {setCartItems, cartItems, sumPrice};
};

 