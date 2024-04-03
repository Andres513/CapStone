import { useEffect, useState } from "react"

export default function FetchProducts(){
    const [ error, setError ] = useState(null)
    const [ allProducts, setAllProducts ] = useState([])
    
    useEffect(()=>{
        async function fetchProducts(){
        try {
            const response = await fetch('https://fakestoreapi.com/products')
            const result = await response.json()
            setAllProducts(result)
            console.log(allProducts)
            } catch(error) {
                setError(error.message)
            }
        }
        fetchProducts()
    },[id])

    return (
        <>

        </>
    )
}