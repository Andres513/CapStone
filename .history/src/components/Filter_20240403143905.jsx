
export default function Filter({ products, price, category }) {

    return (
        <div>    
            {products.map((product) => (
                <div key={product.id}>
                    <h3>{price}</h3>
                </div>
                
            ))}
        </div>
    );
}
