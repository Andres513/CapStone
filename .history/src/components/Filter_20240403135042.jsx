
export default function Filter({ applyCategoryFilter, applyPriceFilter }) {
    const categories = ['Electronics', 'Jewelry', 'Men\'s Clothing', 'Women\'s Clothing'];
    const priceRanges = ['Under $10', '$10 - $50', '$50 - $100', 'Over $100'];

    return (
        <div>    
            <div>
                {categories.map((category, index) => (
                    <button key={index} onClick={() => applyCategoryFilter(category)} className="dot">{category}</button>
                ))}
            </div>
            <div>
                {priceRanges.map((priceRange, index) => (
                    <button key={index} onClick={() => applyPriceFilter(priceRange)} className="dot">{priceRange}</button>
                ))}
            </div>
        </div>
    );
}
