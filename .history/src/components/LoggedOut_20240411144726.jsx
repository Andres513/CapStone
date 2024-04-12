import { Link } from "react-router-dom"

export default function LogOut() {

    return (
        <>
            <div className="logged-out-container">
                <h1>Logged Out!</h1>
                <Link to="/"><button>Back Home</button></Link>
            </div>
        </>
    )
}
