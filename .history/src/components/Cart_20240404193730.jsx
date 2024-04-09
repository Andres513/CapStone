import { useState, useEffect } from "react"
import { Link } from "react-router-dom"


export default function Cart({token}){
    const [ userId, setUserId ] = useState([])

    useEffect(()=>{
    async function getCart(){
        try {
        const response = await fetch('https://fakestoreapi.com/carts')
        const result = await response.json()
        console.log(result)
    } catch(error) { 
        console.error(error) 
}
    getCart()
}
},[])
return (
    <>
    <Link to="/" token={token}>Home</Link>
    </>
)
}