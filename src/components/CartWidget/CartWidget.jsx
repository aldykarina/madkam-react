import { useContext } from 'react';
import cart from './assets/cart.png';
import { CartContext } from '../../context/CartContext';
import { Link } from 'react-router-dom';


export default function CartWidget(){

    const { totalCount } = useContext(CartContext);

    return(
        <div>
            <Link to="/cart" className='carWidget' style={{display: totalCount() > 0 ? "block": "none"}}>
                <img src={cart} alt=" carrito compras " />
                <span>{totalCount()}</span>
            </Link>
        </div>
    )
}

/*  */