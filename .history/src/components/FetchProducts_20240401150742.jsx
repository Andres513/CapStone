import { useEffect, useState } from "react"

export default function FetchProducts(){
    const [ error, setError ] = useState(null)
    const [ products, setProducts ] = useState([])
    const [ searched, setSearched ] = useState([])
    
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
    },[allProducts])

    const searchedProduct = products.filter((product) => {
        return product.title.toLowerCase().includes(searched.toLowerCase());
    });

    return (
        <>
        <h2>Products</h2>
        <div className="items-container">
    {searched.map((product) => (
                <div key={product.id} className="item">
                    <h3>{product.title}</h3>
                    <img src={product.coverimage} alt={product.title} /><br/>
                </div>
                
            ))}
            </div>
        </>
    )
}