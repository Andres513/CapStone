import { useEffect, useState } from "react"

export default function FetchProducts(){
    const [ error, setError ] = useState(null)
    const [ products, setProducts ] = useState([])
    const [ se ]
    
    useEffect(()=>{
        async function fetchProducts(){
        try {
            const response = await fetch('https://fakestoreapi.com/products')
            const result = await response.json()
            setProducts(result)
            console.log(allProducts)

            } catch(error) {
                setError(error.message)
            }
        }
        fetchProducts()    
    },[allProducts])

    const searchedProduct = books.filter((book) => {
        return book.title.toLowerCase().includes(searched.toLowerCase());
    });

    return (
        <>
        <h2>Products</h2>
        <div key={allProducts.id}></div>
        </>
    )
}