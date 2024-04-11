import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import { useCart } from "./CartContext"


export default function Cart({ isLoggedIn }) {
    const { cart, setCart } = useCart()

    const removeFromCart = (index) => {
        const updatedCart = [...cart]
        updatedCart.splice(index, 1)
        setCart(updatedCart)
    }

    const totalPrice = cart.reduce((acc, item) => acc + item.price, 0)

    return (
        <div>
            <h1>Cart</h1>
            {isLoggedIn ? (
                <>
                    {cart.length > 0 ? (
                        <>
                            {cart.map((item, index) => (
                                <div key={index}>
                                    <p>{item.title} - ${item.price}</p>
                                    <button onClick={() => removeFromCart(index)}>Remove</button>
                                </div>
                            ))}
                            <button>Checkout</button><br />
                            <p>Total Price: ${totalPrice.toFixed(2)}</p>
                        </>
                    ) : (
                        <p>Your cart is empty</p>
                    )}
                </>
            ) : (
                <p>Please log in to view your cart</p>

            )}
            <Link to="/">Home</Link>
        </div>
    );

}