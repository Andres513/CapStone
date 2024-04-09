import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import { useCart } from "./CartContext"


export default function Cart({token}){
const { cart, setCart} = useCart()

const removeFromCart = (id) => {
    setCart(cart.filter((item) => item.id !== id))
}
    

return (
    <>
        <div>
            <h1>Cart</h1>
            {cart.map((item) => (
                <div key={item.id}>
                    <h3>{item.title}</h3>
                    <img src={item.image}/>
                    <p>${item.price}</p>
                    <button onClick={() => removeFromCart(item.id)}>Remove</button>
                </div>
            ))}
        </div>
    <Link to="/" token={token}>Home</Link>
    </>
)
}