import PriceFilter from "./PriceFilter"

export default function ProductsByPrices({ filteredProducts }){
    
    return (
        <>
<div>
        <PriceFilter products={filteredProducts}/>
            <h1>Filtered Products</h1>
            <div className="items-container">
                {filteredProducts.map((product) => (
                    <div key={product.id} className="item">
                        <h3>{product.title}</h3>
                        <img src={product.image} alt={product.title} /><br/>
                        <p>Price: ${product.price}</p>
                        {/* Add other product details as needed */}
                    </div>
                ))}
            </div>
        </div>
        </>
    )
}