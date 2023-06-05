import { useContext } from "react"
import { CartContext } from "../../context/CartContext"
import { Link } from "react-router-dom"
import CartItem from "../CartItem/CartItem"

export default function Cart() {

    const { cart, clearCart, totalCount, total} = useContext(CartContext)

    if (totalCount() === 0){
        return(
           <div>
                <h1>El carrito esta vacio :/ </h1>
                <Link to="/" >Productos</Link>
           </div>
        )
    }

  return (
    <div className="itemCard">
        <h1>Carrito</h1>
        { cart.map (product => <CartItem key={product.id} {...product}/>)}
        <h3>Precio Total: ${total()}</h3>
        <button className='btnDetalle' onClick={clearCart} >Vaciar Carrito</button>
        <Link to="/checkout" >Checkout</Link>
    </div>
  )
}
