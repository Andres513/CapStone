import { useState, useEffect } from "react"

export default function PriceFilter({products, price}){
    const [ priceRanges, setPriceRanges ] = useState([])
    const [ error, setError ] = useState('')

    const filterProductsByPrice = (minPrice, maxPrice) => {
        const filteredProducts = products
    }

    return (
        <>
        
        </>
    )
}