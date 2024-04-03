import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import { Link } from "react-router-dom"

export default function SingleProduct({token}){
    const { id } = useParams()
    const [ product, setProduct ] = useState([])

    useEffect(()=>{
        async function fetchSingleProducts(){
            try {
                const response = await fetch(`https://fakestoreapi.com/products/${id}`, {
                    method: "GET",
                    headers: {
                        "Content-Type":"application/json"
                    }
                })
                const result = await response.json()
                
                setProduct(result)
                console.log(product)
            }catch(error){
                console.error(error)
            }
        }
        fetchSingleProducts()
    },[id])

    return (
        <>
        <div className="single-product">
            <h2>{product.title}</h2>
            <h4>Category: {product.category}</h4>
            <img src={product.image}/><br/>
            <h3>{product.description}</h3>
            
            <p>Price: {product.price}</p>
            <Link to="/">Back Home</Link>
            </div>
        </>
    )
}