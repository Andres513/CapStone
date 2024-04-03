import { useState, useEffect } from "react"

export default function Login(event){
    event.preventDefault()

    async function loginUser(){    
    try {
        fetch('https://fakestoreapi.com/auth/login',{
            method:'POST',
            body:JSON.stringify({
                username: "mor_2314",
                password: "83r5^_"
            })
        })
            .then(res=>res.json())
            .then(json=>console.log(json))

    } catch(error) {
        console.error(error)
    }
}
return (
    <>
    </>
)
}