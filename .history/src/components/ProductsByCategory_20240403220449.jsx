import { Link, useParams } from "react-router-dom"

export default function ProductsByCategories({products}){
    
    const { category } = useParams()

    const filteredProducts = products.filter(product => product.category === category)
    
    return (
        <div>
            <h2>{category}</h2>
                
            <div>
                {filteredProducts.map((product)=> (
                    <div key={product.id}>
                        <h3>{product.title}</h3>
                        <img src={product.image} alt={product.title}/>
                        <h4>{product.description}</h4>
                        <p>Price: ${product.price}</p>
                    
                    </div>
                ))}
            </div>
            <Link to="/">Back Home</Link>
        </div>
    )
}