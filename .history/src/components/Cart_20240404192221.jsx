import { useState } from "react-router-dom"


export default function Cart({token}){
    const [ userId, setUserId ] = 

    async function getCart(){
        const response = await fetch('https://fakestoreapi.com/carts', {
            method: "GET",
            headers: {
                "Content-Type":"application/json",
                "Authorization": `Bearer ${token}`
            },
            body: JSON.stringify({
                userId: 
            }),
        })
    }
    
    return (
        <></>
    )
}