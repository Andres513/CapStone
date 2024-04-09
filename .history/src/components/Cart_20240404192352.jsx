import { useState } from "react-router-dom"


export default function Cart({token}){
    const [ userId, setUserId ] = useState([])

    async function getCart(){
        const response = await fetch('https://fakestoreapi.com/carts')
        const result = await response.json()
        console.log(result)
    return (
        <></>
    )
}
}