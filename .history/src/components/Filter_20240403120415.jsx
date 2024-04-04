import { useEffect, useState } from "react"

export default function Filter({filterCategory, filterPrice}){

    const categories = ['Electronics', 'Jewelry', 'Mens Clothing', 'Womens Clothing']
    const priceRange = [ 'under $10', '$10 - $50', '$50 - $100', 'Over $100' ]

    return (
        <div>
            <h2>Filter:</h2>
            <div>
            <h3>Category:</h3>
            {categories.map((category, index) => (
                <button key={index} onClick={() => filterCategory(category)} className="dot">{category}</button>
            ))}
            </div>

        </div>
    )
}