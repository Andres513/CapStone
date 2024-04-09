

import { createContext, useContext, useState, useContext } from "react";

const CartContext = createContext()

export const useCart = () => useContext(CartContext)

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState(() => {
        const storedCart = localStorage.getItem('cart');
        return storedCart ? JSON.parse(storedCart) : [];

    return (
        <CartContext.Provider value={{ cart, setCart}}>
            {children}
        </CartContext.Provider>
    )
}