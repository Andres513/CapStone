import { useState } from "react"

export default function PriceFilter({price, setPrice}){
    const [ error, setError ] = useState('')

    useEffect(()=>{
        async function fetchPrices(){
        try {
            const response = await fetch('https://fakestoreapi.com/products')
            const result = await response.json()
            setPrice(result.price)
        
            } catch(error) {
                setError(error.message)
            }
        }
        fetchProducts()
    },[])

    return (
        <>
        
        </>
    )
}