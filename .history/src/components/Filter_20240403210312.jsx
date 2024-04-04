import { Link } from "react-router-dom";
export default function Filter({token, products, categories}) {

    return (
        <div>    
           {categories.map((category) => (
            <Link key={category} to={`/products/${category}`}>
            <button>{category}</button>
            </Link>
           ))}
        </div>
    );
}
