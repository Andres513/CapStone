import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import { useCart } from "./CartContext"


export default function Cart({token}){

    

return (
    <>
    <Link to="/" token={token}>Home</Link>
    </>
)
}