import { useState } from "react"

export default function Register(){



    async function handleRegister(event){
        event.preventDefault()
        try {
            fetch('https://fakestoreapi.com/users',{
                method: "POST",
                body: JSON.stringify({
                    email:
                    })
            })
        } catch(error) {
            console.error(error)
        }

    }
}