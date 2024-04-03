import { useState } from "react"

export default function Register(){
const [ email, setEmail ] = useState('')
const [ username, setUsername ] = useState('')
const [ password, setPassword ] = useState('')
const [ firstName, setFirstName ] = useState('')
const [ lastName, setLastName ] = useState('')
const [ address, setAddress ] = useState('')
const [ phone, setPhone ] = useState('')


    async function handleRegister(event){
        event.preventDefault()
        try {
            fetch('https://fakestoreapi.com/users',{
                method: "POST",
                body: JSON.stringify({
                    email: email,
                    username: username,
                    password: password,
                    name: {
                        firstname: firstName,
                        lastname: lastName
                    }
                    })
            })
        } catch(error) {
            console.error(error)
        }

    }
}