import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import { useCart } from "./CartContext"


export default function Cart({token}){
const { cart, setCart} = useCart()

const removeFromCart = (index) => {
    const updatedCart = [...cart]
    updatedCart.splice(index, 1)
    setCart(updatedCart)
}
    
return (
    <>
        <div className="cart">
            <h1>Cart</h1>
            {cart.map((item, index) => (
                <div className='cart-image' key={index}>
                    <h3>{item.title}</h3>
                    <p>${item.price}</p>
                    <button onClick={() => removeFromCart(index)}>Remove</button>
                </div>
            ))}
        </div> 
    <Link to="/" token={token}>Home</Link>
    </>
)
}