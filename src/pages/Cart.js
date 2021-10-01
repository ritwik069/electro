import React, { useContext, useEffect } from 'react'
import { Link } from 'react-router-dom';
import CartItem from '../Components/Cart/CartItem'
import { CartContext } from '../Context/CartContext'
import './Cart.css'
function Cart() {

    const { cartItem, tot, gett ,empty} = useContext(CartContext);
    function checkout(){
        empty();
        
    }
    useEffect(() => {

        gett()

    }, [])

    return (

        <div className='CartContainer'>
            {cartItem.length > 0 ? <>
                <div className="items">
                    {cartItem.map((items) => (

                        <CartItem key={items._id} item={items} />)

                    )
                    }


                </div>
                {cartItem.length > 0 &&
                    <div className="billing">
                        <h1>Total:</h1>
                        <h2>
                            {`$ ${tot}`}
                        </h2>
                        <button onClick={checkout}>CheckOut</button>
                    </div>

                }
            </>

                :
                <>
                    <div className="empty">
                        <h3>Cart is empty</h3>
                        <Link to='/'>
                            <button>
                                Start Shopping

                            </button>
                        </Link>
                    </div>
                </>


            }

        </div>
    )
}

export default Cart
