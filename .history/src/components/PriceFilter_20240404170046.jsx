import { useState, useEffect } from "react"
import { Link } from "react-router-dom"

export default function PriceFilter({products}){
    const [ priceRanges, setPriceRanges ] = useState([])
    const [ error, setError ] = useState('')

    
    useEffect(() => {
        async function fetchPrices() {
            try {
                const response = await fetch('https://fakestoreapi.com/products');
                const result = await response.json();
                const prices = result.map(product => parseFloat(product.price));
                const uniquePrices = Array.from(new Set(prices)).sort((a, b) => a - b);
                setPriceRanges(uniquePrices);
            } catch (error) {
                setError(error.message);
            }
        }
        fetchPrices();
    }, []);
    
    const filterProductsByPrice = (minPrice, maxPrice) => {
        const filteredProducts = products.filter(product =>
            parseFloat(price) >= minPrice && parseFloat(price) <= maxPrice)
            return filteredProducts
    }

    return (
        <>
         <div>
            <Link to="/sorted_by_prices" state={{ filteredProducts: filterProductsByPrice(0, 10) }}>
                <button>Under $10</button>
            </Link>
            <Link to="/sorted_by_prices" state={{ filteredProducts: filterProductsByPrice(10, 20) }}>
                <button>$10 - $20</button>
            </Link>
            <Link to="/sorted_by_prices" state={{ filteredProducts: filterProductsByPrice(20, 30) }}>
                <button>$20 - $30</button>
            </Link>
            <Link to="/sorted_by_prices" state={{ filteredProducts: filterProductsByPrice(30, 40) }}>
                <button>$30 - $40</button>
            </Link>
            {error && <p>{error}</p>}
        </div>
        </>
    )
}