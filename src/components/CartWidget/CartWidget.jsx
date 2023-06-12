import { useContext } from 'react';
import cart from '/assets/cart.png';
import { CartContext } from '../../context/CartContext';
import { Link } from 'react-router-dom';


export default function CartWidget(){

    const { totalCount } = useContext(CartContext);

    return(
        <div  className='carWidget'>
            <Link to="/cart">
                <img className='carWidgetImg' src={cart} alt=" carrito compras " />
                {
                    totalCount() > 0  && <span className="carWidgetConter">{totalCount()}</span>
                }
            </Link>
        </div>
    )
}




