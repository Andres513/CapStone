import { useState, useEffect } from "react"
import { Link } from "react-router-dom"

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
         <div>
            <Link to="/filtered-products" state={{ filteredProducts: filterProductsByPrice(0, 10) }}>
                <button>Under $10</button>
            </Link>
            <Link to="/filtered-products" state={{ filteredProducts: filterProductsByPrice(10, 20) }}>
                <button>$10 - $20</button>
            </Link>
            <Link to="/filtered-products" state={{ filteredProducts: filterProductsByPrice(20, 30) }}>
                <button>$20 - $30</button>
            </Link>
            <Link to="/filtered-products" state={{ filteredProducts: filterProductsByPrice(30, 40) }}>
                <button>$30 - $40</button>
            </Link>
            {error && <p>{error}</p>}
        </div>
        </>
    )
}