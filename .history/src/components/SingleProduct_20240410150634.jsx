import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import { Link } from "react-router-dom"
import Categories from "./Categories"
import { useCart } from "./CartContext"

export default function SingleProduct({ token, isLoggedIn }) {
    const { id } = useParams()
    const [product, setProduct] = useState([])
    const { cart, setCart } = useCart()
    const [addedToCart, setAddedToCart] = useState(false);

    console.log("isLoggedIn:", isLoggedIn);

    useEffect(() => {
        async function fetchSingleProducts() {
            try {
                const response = await fetch(`https://fakestoreapi.com/products/${id}`, {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json"
                    }
                })
                const result = await response.json()

                setProduct(result)
                console.log(product)

            } catch (error) {
                console.error(error)
            }
        }
        fetchSingleProducts()
    }, [id])

    useEffect(() => {
        console.log(product)
    }, [product])

    const addToCart = () => {
        const updatedCart = [...cart, product]
        setCart(updatedCart)
        setAddedToCart(true)
    }

    const correctPriceFormat = parseFloat(product.price).toFixed(2)

    return (
        <>
            <Categories />
            <Link to="/cart">View Cart</Link>
            <div className="single-product">
                <h2>{product.title}</h2>
                <h4>Category: {product.category}</h4>
                <img src={product.image} /><br />
                <h3>{product.description}</h3>
                <p>Price: ${correctPriceFormat}</p>
                {isLoggedIn && (
                    <>
                        <button onClick={addToCart}>Add to Cart</button>
                        <br />
                    </>
                )}
                {addedToCart && <h1>Added to cart!</h1>}

                <Link to="/">Back Home</Link>
            </div>
        </>
    )
}