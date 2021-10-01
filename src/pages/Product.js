import products from "../data"
import ProductCard from "../Components/product/ProductCard"
import './Product.css'
function Product() {
    return (
        <div className='productContainer'>
            {products.map((product) => (

                <ProductCard key={product._id} products={product} />
            ))}
        </div>
    )
}

export default Product
