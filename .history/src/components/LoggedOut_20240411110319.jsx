import { Link } from "react-router-dom"

export default function LogOut() {

    return (
        <>
            <div className="logged-out-container">
                <h3>Logged Out!</h3>
                <Link to="/"><button>Back Home</button></Link>
            </div>
        </>
    )
}
