import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import Login from "./Login"
import Categories from "./Categories"
import Cart from "./Cart"
import { useCart } from "./CartContext"

export default function FetchProducts({ products, setProducts, price, setPrice, token, setToken, isLoggedIn, setIsLoggedIn, handleLogout, loggedOut }) {
    const [error, setError] = useState(null)
    const [searched, setSearched] = useState('')
    const [addedToCart, setAddedToCart] = useState(false);
    const { cart, setCart } = useCart()

    useEffect(() => {
        async function fetchProducts() {
            try {
                const response = await fetch('https://fakestoreapi.com/products')
                const result = await response.json()
                setProducts(result)
                setPrice(result.price)
                console.log(result)
            } catch (error) {
                setError(error.message)
            }
        }
        fetchProducts()
    }, [])

    const searchedProduct = products.filter((product) => {
        return product.title.toLowerCase().includes(searched.toLowerCase());
    });

    console.log(isLoggedIn)
    return (
        <>
            <h1>Fake Store</h1>
            <nav className="navbar">
                {isLoggedIn ? (
                    <>
                        <Link to="/logout"><button onClick={handleLogout}>Log out</button><br /></Link>

                    </>
                ) : (
                    <Link to="/login"><button>Log in</button></Link>
                )}
                <br /><Link to="/cart">View Cart</Link>
            </nav>

            <Categories products={products} />
            <label className="search-bar">Search for Product:
                <input type="text" value={searched} onChange={(e) => setSearched(e.target.value)} />
            </label><br />

            <div className="items-container">
                {searchedProduct.map((product) => (
                    <div key={product.id} className="item">
                        <h3>{product.title}</h3>
                        <img src={product.image} alt={product.title} /><br />

                        <Link to={`/products/${product.id}`}>View Details</Link>

                    </div>
                ))}

            </div>
        </>
    )
}
// import React from "react";
// import { Link } from "react-router-dom";

// export default function Logout({ setIsLoggedIn, IsLoggedIn, setToken }) {
    
//     const handleLogout=()=> {
//     setToken(null)
//     setIsLoggedIn(false)
// }
// console.log(IsLoggedIn)
//     return (
//         <div>
//             <h2>Welcome!</h2>
//             <button onClick={handleLogout}>Log out</button>
//         </div>
//     );
// }
