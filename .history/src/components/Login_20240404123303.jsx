import { useState, useEffect, useRef } from "react"
import { Link } from "react-router-dom"

export default function Login({token, setToken}){
    

    const [ username, setUsername ] = useState('')
    const [ password, setPassword ] = useState('')
    const [ error, setError ] = useState(null)
    const [ successMessage, setSuccessMessage ] = useState('')
    const usernameInputRef = useRef(null);
    const passwordInputRef = useRef(null);

    async function loginUser(event){  
        event.preventDefault()  
    try {
        const response = await fetch('https://fakestoreapi.com/auth/login', {
            method:'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                username: username,
                password: password
            })
        })
            const result = await response.json()
        
                console.log(result)
                setToken(result.token)

                 setUsername("");
                 setPassword("");
                 usernameInputRef.current.value = "";
                 passwordInputRef.current.value = "";

    } catch(error) {
        setError("Must log in with valid username and password!")
    }
}
//for testing log in
// username:'johnd',
//password:'m38rmF$',
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
         {error && <h2>{error}</h2>}
        </form>

       <Link to="/" token={token}>Home</Link>
    </>
)
}