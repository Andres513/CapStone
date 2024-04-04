import { useEffect, useState } from "react"
import { Link, useAsyncError } from "react-router-dom"
import Login from "./Login"
import Filter from "./Filter"

export default function FetchProducts({token}){
    const [ error, setError ] = useState(null)
    const [ products, setProducts ] = useState([])
    const [ category, setCategory ] = useState('')
    const [ price, setPrice ] = useState('')
    const [ searched, setSearched ] = useState('')
    
    useEffect(()=>{
        async function fetchProducts(){
        try {
            const response = await fetch('https://fakestoreapi.com/products')
            const result = await response.json()
            setProducts(result)
            setCategory(result.category)
            setPrice(result.price)
            const price1 = result.price
            console.log("Price:", price)
            console.log("Category:", category)
            console.log("Price1:", price1)

            } catch(error) {
                setError(error.message)
            }
        }
        fetchProducts()
    },[result.price])


    const searchedProduct = products.filter((product) => {
         return product.title.toLowerCase().includes(searched.toLowerCase());
     });

return (
        <>
        <h1>Products</h1>
            <label className="search-bar">Search for Product: 
                <input type="text" value={searched} onChange={(e) => setSearched(e.target.value)}/>
            </label><br/>
            <Filter products={products} category={category} price={price}/>
        <Link to="/login" element={<Login />}>Log in!</Link>
        <div className="items-container">
    {searchedProduct.map((product) => (
                <div key={product.id} className="item">
                    <h3>{product.title}</h3>
                    <img src={product.image} alt={product.title} /><br/>
                    <Link to={`/products/${product.id}`}>View Details</Link>
                </div>     
            ))}
            </div>
        </>
    )
}