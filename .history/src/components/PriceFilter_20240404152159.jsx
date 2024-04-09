import { useState, useEffect } from "react"

export default function PriceFilter({products, price}){
    const [ priceRanges, setPriceRanges ] = useState([])
    const [ error, setError ] = useState('')

    const filterProductsByPrice = (minPrice, maxPrice) => {
        const filteredProducts = products.filter(product =>
            parseFloat(price) >= minPrice && parseFloat(price) <= maxPrice)
            return filteredProducts
    }

    return (
        <>
        
        </>
    )
}