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
          text: "El carrito se ha eliminado con éxito. ¡Te esperamos pronto!",
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
        <div className="divLinkcito">
          <h1>El carrito esta vacio :/ </h1>
          <Link className="linkInicio" to="/" >Volver a Productos</Link>
        </div>
      ) : 
      
      (
        <>
          <div  className="saludo">
            <h1>Productos en tu Carrito</h1>
          </div>
          

          <table className="cart">
            <thead className="cartTitle">
              <tr className="cartRows">
                <th></th>
                <th>Producto</th>
                <th>Precio x un</th>
                <th>Cantidad</th>
                <th>Precio Total</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              { cart.map (product => <CartItem key={product.id} {...product}/>)}
            </tbody>
          </table>


          <div className="cartFinal">
            <h3>Total a pagar: ${totalPrice()}</h3> 
            <div className="divVaciar">
              <button className="btnVaciar" onClick={clearCartAlert} >Vaciar Carrito</button>
            </div>     
            <button className='btnDetalle' onClick={handleClick}>Finalizar compra</button>
            {mostrarFormulario && <CheckoutForm onConfirm={handleConfirm} />}
          </div>

          
        
        </>
      )
    }
    </>
  )
}
