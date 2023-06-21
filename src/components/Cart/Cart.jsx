import { useContext, useState } from "react"
import { CartContext } from "../../context/CartContext"
import { Link, useNavigate } from "react-router-dom"
import CartItem from "../CartItem/CartItem"
import swal from "sweetalert"
import { createrOrderWithStockUpdate } from "../../services/firebase"
import CheckoutForm from "../CheckoutForm/CheckoutForm"


export default function Cart() {

  const { cart, clearCart, totalCount, totalPrice} = useContext(CartContext)
  const navigateTo = useNavigate()

 async function handleConfirm(data){
    const order ={
      items: cart,
      buyer: data,
      data: new Date(),
      price: totalPrice()
    }

    try{
      const id = await createrOrderWithStockUpdate(order);
      console.log("respuesta", id)
      clearCart();
      navigateTo(`/orderConfirmation/${id}`)
    }
    catch (error){
      swal({
        title: "No se puede completar la compra", 
        text: `${error}`,
        icon: "warning",
      })
    }
  }

  function clearCartAlert() {
    swal({
      title: "Vaciar Carrito",
      text: "Estas seguro que quieres eliminar todo el carrito :o",
      icon: "warning",
      buttons: ["ups, noooo!", "Si"]
    }).then(respuesta => {
      if(respuesta){
        clearCart()
        swal({
          text: "El carrito se ha eliminado con éxito. Te esperamos pronto",
          icon: "success"
        })
      }
    })
    
  }

  const [mostrarFormulario, setMostrarFormulario] = useState(false);
  const handleClick = () => {
    setMostrarFormulario(true);
  };

  return (
    <>
    { totalCount() === 0 ? 
      (
        <div>
          <h1>El carrito esta vacio :/ </h1>
          <Link to="/" >Productos</Link>
        </div>
      ) : 
      
      (
        <div>
          <div className="itemCard">
            <h1>Carrito</h1>

            { cart.map (product => <CartItem key={product.id} {...product}/>)}

            <h3>Precio Total: ${totalPrice()}</h3>
            <button className='btnDetalle' onClick={clearCartAlert} >Vaciar Carrito</button>
            
            <button className='btnDetalle' onClick={handleClick}>Finalizar compra</button>
          </div>

          {mostrarFormulario && <CheckoutForm onConfirm={handleConfirm} />}
          
        
        </div>
      )
    }
    </>
  )
}

/* 
import CheckoutForm from "../CheckoutForm"
<Link to="/checkout" >Checkout</Link> 


<button onClick={handleConfirm} >Crear orden de compra</button>

*/