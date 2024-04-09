import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import { useCart } from "./CartContext"


export default function Cart({isLoggedIn}){
const { cart, setCart} = useCart()

const removeFromCart = (index) => {
    const updatedCart = [...cart]
    updatedCart.splice(index, 1)
    setCart(updatedCart)
}
    
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
                                </div>
                            ))}
                            <Link to="/checkout">Checkout</Link>
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
    
    
    // <>
    //     <div className="cart">
    //         <h1>Cart</h1>
    //         {cart.map((item, index) => (
    //             <div className='cart-image' key={index}>
    //                 <h3>{item.title}</h3>
    //                 <p>${item.price}</p>
    //                 <button onClick={() => removeFromCart(index)}>Remove</button>
    //             </div>
    //         ))}
    //     </div> 
    // <Link to="/" token={token}>Home</Link>
    // </>
//)
}