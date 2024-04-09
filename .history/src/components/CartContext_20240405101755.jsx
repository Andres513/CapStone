

import { createContext, useState, useContext } from "react";

const createContext = createContext()

export const useCart = () => useContext(CartContext)

export const CartContext = ({ children }) => {
    const [ cart, setCart ] = useState([])

    return (
        <CartContext.Provider value={{ cart, setCart}}>
            {children}
        </CartContext.Provider>
    )
}