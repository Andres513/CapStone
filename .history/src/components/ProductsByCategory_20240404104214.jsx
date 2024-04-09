import { Link, useParams } from "react-router-dom"

export default function ProductsByCategories({products}){
    
    const { category } = useParams()

    const filteredProducts = products.filter(product => product.category === category)
    
    return (
        <div>
            <h1>{category}</h1>
            <Link to={`/category/${category}`}>{category}</Link>
            <div className="category-container">
                {filteredProducts.map((product)=> (
                    <div key={product.id}>
                        <h3>{product.title}</h3>
                        <img src={product.image} alt={product.title}/>
                        <Link to={`/products/${product.id}`}>View Details</Link>
                       
                    </div>
                ))}
            </div>
            
            <Link to="/">Back Home</Link>
        </div>
    )
}