import { useEffect } from "react";
import { Link } from "react-router-dom";

export default function Categories() {

    useEffect(()=>{
        async function fetchCategories(){
            try {
            const response = await fetch('https://fakestoreapi.com/products/categories')
            const result = response.json()
            console.log(result)
        } catch(error){
            console.error(error)
        }
    } fetchCategories()
},[])
    return (
        <div>    
           <Link to="/">Back Home</Link>
        </div>
    );
}
