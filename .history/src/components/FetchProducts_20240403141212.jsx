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
    const [ filters, setFilters ] = useState({})
    
    useEffect(()=>{
        async function fetchProducts(){
        try {
            const response = await fetch('https://fakestoreapi.com/products')
            const result = await response.json()
            setProducts(result)
            setCategory(result.category)
            setPrice(result.price)
            console.log(products)
            

            } catch(error) {
                setError(error.message)
            }
        }
        fetchProducts()
    },[])
    useEffect(()=>{
    //   console.log(products)
    //   console.log(category)
    //     console.log(price)
    },[])

    const searchedProduct = products.filter((product) => {
         return product.title.toLowerCase().includes(searched.toLowerCase());
     });

     const applyCategoryFilter = (category) => {
        setFilters({ ...filters, category: category });
    }

    const applyPriceFilter = (priceRange) => {
        setFilters({ ...filters, priceRange: priceRange });
    }

    const filteredProducts = searchedProduct.filter((product) => {
        if (filters.category && product.category !== filters.category) {
            return false;
        }
        if (filters.priceRange) {
            const [min, max] = filters.priceRange.split("-");
            const price = parseFloat(product.price);
            if (price < parseFloat(min) || price > parseFloat(max)) {
                return false;
            }
        }
        return true;
    });


return (
        <>
        <h1>Products</h1>
            <label className="search-bar">Search for Product: 
                <input type="text" value={searched} onChange={(e) => setSearched(e.target.value)}/>
            </label><br/>
            <Filter applyCategoryFilter={applyCategoryFilter} applyPriceFilter={applyPriceFilter}/>
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