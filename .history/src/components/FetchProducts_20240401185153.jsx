import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import Login from "./Login"

export default function FetchProducts({token}){
    const [ error, setError ] = useState(null)
    const [ products, setProducts ] = useState([])
    const [ searched, setSearched ] = useState('')
    
    useEffect(()=>{
        async function fetchProducts(){
        try {
            const response = await fetch('https://fakestoreapi.com/products')
            const result = await response.json()
            setProducts(result)
            console.log(products)

            } catch(error) {
                setError(error.message)
            }
        }
        fetchProducts()
    },[products])
    

    const searchedProduct = products.filter((product) => {
         return product.title.toLowerCase().includes(searched.toLowerCase());
     });

    return (
        <>
        <h2>Products</h2>
        <label className="search-bar">Search for Product: <input type="text" value={searched} onChange={(e) => setSearched(e.target.value)}/></label><br/>
        <Link to="/login" element={<Login />}>Log in!</Link>
        <div className="items-container">
    {searchedProduct.map((product) => (
                <div key={product.id} className="item">
                    <h3>{product.title}</h3>
                    <img src={product.image} alt={product.title} /><br/>
                </div>
                
            ))}
            </div>
        </>
    )
}