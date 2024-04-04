import { useEffect, useState } from "react"

export default function Filter({filterCategory, filterPrice}){

    const categories = ['Electronics', 'Jewelry', 'Mens Clothing', 'Womens Clothing']
    const priceRange = [ 'under $10', '$10 - $50', '$50 - $100', 'Over $100' ]

    return (
        <div>
            <h3>Filter:</h3>
            <div>
            <button onClick={()=> handleFilterChange}>Electronics</button>
            </div>

        </div>
    )
}