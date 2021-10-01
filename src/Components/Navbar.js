import './Navbar.css'
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import { Badge } from '@material-ui/core';
import { CartContext } from '../Context/CartContext';
import { useContext } from 'react';
import { Link } from 'react-router-dom'
function Navbar() {
    const { cartItem } = useContext(CartContext);
    return (
        <div className='navbar'>

            <div className="left">
                <Link to='/' style={{textDecoration:'none', color:'black'}}>
                <h3>ElectRo</h3>
                </Link>
            </div>
            <div className="right">
                <h4 style={{ margin: '10px', fontSize: '25px', color: '#2797cc' }}>
                    <Link to='/p' style={{ textDecoration: 'none', margin: '10px', fontSize: '25px', color: '#2797cc' }}>
                        STORE
                    </Link>
                </h4>

                    <Badge className='badge' badgeContent={cartItem?.length} color="primary">
                <Link to='/cart'>
                        <ShoppingCartOutlinedIcon style={{ fontSize: '30px', color: '#05e88a' }} />
                </Link>
                    </Badge>
            </div>
        </div>
    )
}

export default Navbar
