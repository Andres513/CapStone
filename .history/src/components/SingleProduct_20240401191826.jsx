import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"

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
                const result = response.json()
                console.log(result)
            }catch(error){
                console.error(error)
            }
        }
        fetchSingleProducts()
    },[id])

    return (
        <>
        </>
    )
}