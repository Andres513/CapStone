import { Link, useParams } from "react-router-dom"
import Categories from "./Categories"

export default function ProductsByCategories({ products }) {

    const { category } = useParams()

    const filteredProducts = products.filter(product => product.category === category)

    return (
        <div>
            <h1>{category}</h1>
            <Categories /><br />
            <Link to="/">Back Home</Link>
            <div className="item">
                {filteredProducts.map((product) => (
                    <div key={product.id}>
                        <h3>{product.title}</h3>
                        <img src={product.image} alt={product.title} /><br />
                        <Link to={`/products/${product.id}`}>View Details</Link>

                    </div>
                ))}
            </div>


        </div>
    )
}