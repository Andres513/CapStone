import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import { useCart } from "./CartContext"


export default function Cart({ isLoggedIn }) {
    const { cart, setCart } = useCart()
    const [creditCard, setCreditCard] = useState('')
    const [quantities, setQuantities] = useState(
        cart.reduce((acc, item) => {
            acc[item.id] = 1;
            return acc;
        }, {})
    );

    const removeFromCart = (index) => {
        const updatedCart = [...cart]
        updatedCart.splice(index, 1)
        setCart(updatedCart)
    }

    const quantityUpdater = (itemId, quantity) => {
        setQuantities((prevQuantities) => ({
            ...prevQuantities, [itemId]: quantity
        }))
    }

    const totalPrice = cart.reduce((acc, item) => acc + item.price * quantities[item.id], 0)

    const clearCart = () => {
        setCart([])

    }

    const handleCreditCard = (e) => {
        setCreditCard(e.target.value)
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
                                    <input type="number" min="1" value={quantities[item.id]} onChange={(e) =>
                                        quantityUpdater(item.id, parseInt(e.target.value))} />
                                    <button onClick={() => removeFromCart(index)}>Remove</button>
                                </div>
                            ))}
                            <form>
                                <label>Credit Card:</label>
                                <input id="ccn" type="tel" inputMode="numeric" pattern="[0-9\s]{13,19}" autoComplete="cc-number" maxLength="19"
                                    placeholder="xxxx-xxxx-xxxx-xxxx" required
                                    value={creditCard}
                                    onChange={handleCreditCard}/>
                            </form>
                            {creditCard.length === 19 && (
                                <Link to="/checkout">
                                    <button onClick={() => clearCart()}>Checkout</button>
                                </Link>
                            )}
                            <p>Total Price: ${totalPrice.toFixed(2)}</p>
                        </>
                    ) : (
                        <h2>Your cart is empty</h2>
                    )}
                </>
            ) : (
                <h1 className="login-prompt">Please log in to view your cart</h1>
            )}
            <Link to="/">
                <button>Home</button>
            </Link>
        </div>
    );

}