import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"

export default function SingleProduct({token}){
    const { id } = useParams()
    useEffect(()=>{
        async function fetchSingleProducts(){
            try {
                const response = await fetch(`https://fakestoreapi.com/products/${id}`)
            }catch(error){
                console.error(error)
            }
        }
    },[])

    return (
        <>
        </>
    )
}