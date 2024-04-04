import { useEffect, useState } from "react"

export default function Filter({handleFilterChange}){

    const handleCategoryChange(event){

    }

    return (
        <div>
            <h3>Filter:</h3>
            <button onClick={()=> handleFilterChange}>Electronics</button>

        </div>
    )
}