import { Link } from "react-router-dom"

export default function Checkout(){

    return (
        <>
                <h1>Thank you for your purchase!</h1>
                <h3>Expect delivery within 3-5 business days.</h3>
                <Link to="/">Back Home</Link>
        </>
    )
}