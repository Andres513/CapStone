import { Link } from "react-router-dom"

export default function LogOut(){

    return (
        <>
        <h3>Logged Out!</h3>
         <Link to="/">Back Home</Link>
        </>
    )
}