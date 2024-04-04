import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function Categories({products}) {
    const [ categories, setCategories ] = useState([])



    useEffect(()=>{
        async function fetchCategories(){
            try {
            const response = await fetch('https://fakestoreapi.com/products/categories')
            const result = await response.json()
            setCategories(result)
            console.log(categories)
        } catch(error){
            console.error(error)
        }
    } fetchCategories()
},[])

    const filteredCategories =(category) =>{
        return products.filter(product => product.category === category)
    }

    return (
        <div>    
           <h2>Categories</h2>
           <div>
            {categories.map((category, index)=> (
                <button key={index}>
                    <Link to={`/category/${category}`}>{category}</Link>
                    </button>
            ))}
           </div>
           <Link to="/">Back Home</Link>
        </div>
    );
}
