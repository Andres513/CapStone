import { useState } from "react"

export default function Register(){
const [ email, setEmail ] = useState('')
const [ username, setUsername ] = useState('')
const [ password, setPassword ] = useState('')
const [ firstName, setFirstName ] = use('')
const [ lastName, setLastName ] = use('')


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