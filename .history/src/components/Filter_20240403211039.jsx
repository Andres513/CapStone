import { useEffect } from "react";
import { Link } from "react-router-dom";
export default function Categories() {

    useEffect(()=>{
        async function fetchCategories(){
            const response = await fetch('https://fakestoreapi.com/products/categories')
        }
    },[])
    return (
        <div>    
        </div>
    );
}
