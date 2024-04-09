import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import { useCart } from "./CartContext"


export default function Cart({token}){
const { cart, setCart} = useCart()
    

return (
    <>
    <Link to="/" token={token}>Home</Link>
    </>
)
}