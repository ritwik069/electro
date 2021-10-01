import { useContext, useEffect, useState } from 'react'
import { CartContext } from '../../Context/CartContext'
import './CartItem.css'
function CartItem({item}) {
    const [qty,setqty]=useState(item.qty);
    const {gett,remove}=useContext(CartContext);
   
  
    return (
        <div className='cartItem'>
           <div className="cartLeft">
                <img src={item?.image} alt="" />
               
            </div> 
            <div className='cartCentre'>
                <h3>{item?.name}</h3>

            </div>
            <div className='cartRight'>
                <div className='quantity'>
                    <button onClick={()=>{if(item.qty>1)item.qty--;setqty(item.qty);gett();}}>-</button>
                    <span>{qty>0?qty:1}</span>
                    <button onClick={()=>{item.qty++;setqty(item.qty);gett();}}>+</button>
                </div>
                <div className='cartprice'>{`$ ${item.qty * item?.price}`}</div>
                <button className='cancel' onClick={()=>{remove(item._id)}}> X</button>
            </div>
            
        </div>
    )
}

export default CartItem
