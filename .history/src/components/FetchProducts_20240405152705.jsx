import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import Login from "./Login"
import Categories from "./Categories"
import Cart from "./Cart"
import { useCart } from "./CartContext"

export default function FetchProducts({products, setProducts, price, setPrice, token}){
    const [ error, setError ] = useState(null)
    const [ searched, setSearched ] = useState('')
    const [addedToCart, setAddedToCart] = useState(false);
    const { cart, setCart } = useCart()
    
    useEffect(()=>{
        async function fetchProducts(){
        try {
            const response = await fetch('https://fakestoreapi.com/products')
            const result = await response.json()
            setProducts(result)
            setPrice(result.price)
            console.log(result)
            } catch(error) {
                setError(error.message)
            }
        }
        fetchProducts()
    },[])

    const searchedProduct = products.filter((product) => {
         return product.title.toLowerCase().includes(searched.toLowerCase());
     });

     const addToCart = (product) => {
        const updatedCart = [...cart, product]
        setCart(updatedCart)
        setAddedToCart(true)
    }


return (
        <>
        <h1>Fake Store</h1>
        <Link to="/cart">View Cart</Link>
            <Categories products={products}/>
            <label className="search-bar">Search for Product: 
                <input type="text" value={searched} onChange={(e) => setSearched(e.target.value)}/>
            </label><br/>
        <Link to="/login" element={<Login />}>Log in!</Link>
        <div className="items-container">
    {searchedProduct.map((product) => (
                <div key={product.id} className="item">
                    <h3>{product.title}</h3>
                    <img src={product.image} alt={product.title} /><br/>
                    
                    <button onClick={addToCart}>Add to Cart</button><br/>
                    {addedToCart && <p>Added to cart!</p>}
                    <Link to={`/products/${product.id}`}>View Details</Link>
                </div>     
            ))}
            </div>
        </>
    )
}