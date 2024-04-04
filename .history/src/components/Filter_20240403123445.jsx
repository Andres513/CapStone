import { useEffect, useState } from "react"

export default function Filter({handleFilterChange}){

    const categories = ['Electronics', 'Jewelry', 'Mens Clothing', 'Womens Clothing']
    const priceRange = [ 'under $10', '$10 - $50', '$50 - $100', 'Over $100' ]

    return (
        <div>    
            <div>
            {categories.map((category, index) => (
                <button key={index} onClick={() => handleFilterChange('category', category)} className="dot">{category}</button>
            ))}
            </div>
                <div>
                    {priceRange.map((price, index) => (
                        <button key={index} onClick={() => handleFilterChange('price', price)} className="dot">{price}</button>
                    ))}
                </div>
        </div>
    )
}