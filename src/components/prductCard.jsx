import "./productCard.css"
export default function ProductCard() {
    return (
        <div className="product-card">
            
            <img src="https://via.placeholder.com/300x200.png?text=Product+Image" alt="Product" />
            <h2 className="product-name">Product Name</h2>
            <p className="product-description">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequatur, temporibus.</p>
            <p className="product-price">Price: $99.99</p>
            <button className="add-to-cart">Add to Cart</button>
        </div>
    )
}