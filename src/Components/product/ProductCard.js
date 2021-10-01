import React, { useContext } from 'react'
import './productCard.css'
import { CartContext } from '../../Context/CartContext'
import StarBorderOutlinedIcon from '@material-ui/icons/StarBorderOutlined';
function ProductCard({ products }) {
    const { addi , exist} = useContext(CartContext);

    function addcart() {
        if(exist(products)){

            console.log(exist(products));
        }
        else{

            addi(products);
        }
    }
    
    return (
      
      

            <div className="productwrapper">
                <img className='productImage' src={products.image}alt="" />
                <h3>{products.name}</h3>
                <div className="priceRating" >

                    <h4>{`Rs ${products.price}`}</h4>
                    <div className="rating">

                        <h4>{products.rating}</h4>
                        <StarBorderOutlinedIcon style={{ color: '#3300ff' }} />
                    </div>
                </div>
                <button onClick={addcart}>Add To Cart</button>
            </div>
       
    )
}



export default ProductCard
