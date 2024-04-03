import { useState, useEffect } from "react"

export default function Login({token, setToken}){
    

    const [ username, setUsername ] = useState('')
    const [ password, setPassword ] = useState('')
    const [ successMessage, setSuccessMessage ] = useState('')

    async function loginUser(event){  
        event.preventDefault()  
    try {
        fetch('https://fakestoreapi.com/auth/login',{
            method:'POST',
            body:JSON.stringify({
                username: username,
                password: password
            })
        })
            .then(res=>res.json())
            .then(result=>{
                console.log(result)
                setToken(result.token)
            })

    } catch(error) {
        console.error(error)
    }
}
return (
    <>
    <form className="login" onSubmit={loginUser}>
            <h1>Log Into Your Account</h1>
            <label>Email: 
            <input type="username" value={username} onChange={(e) => setUsername(e.target.value)} required ref={usernameInputRef}/>
         </label><br/>
            <label>Password: 
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required ref={passwordInputRef}/>
         </label><br/>
         <button>Log in</button><br/>
        </form>
       
    </>
)
}