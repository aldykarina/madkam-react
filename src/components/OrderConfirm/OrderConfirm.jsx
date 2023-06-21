import { Link, useParams } from "react-router-dom";
import { getProductOrder } from "../../services/firebase";
import { useEffect, useState } from "react";

export default function OrderConfirm() {

  const [productOrden, setProductOrden] = useState([]);
  const { orderid } = useParams();
  
  useEffect(()=>{
    getProductOrder(orderid)
      .then(response => {
        setProductOrden(response)
        console.log("datoooosorden ", productOrden)
      })
 }, [orderid])

    /* const productOrden2 = {...productOrden}; */
    const {items, buyer, data, price} = productOrden
    /* console.log("ooo2", productOrden2)
    console.log(typeof(productOrden), typeof(productOrden2)) */

    const buyer1 = productOrden.buyer

    console.log(items)
    console.log("buyer 111111111111",buyer1)
    console.log(data)

  return (
    <div>
      <div className="saludo">
        <h1>Gracias por tu compra!</h1>
      </div>
      <div>
        <small>{`Comprobante de compra: # ${orderid}`}</small>
        <p>Ticket con info de compra:</p>
        <p >Pago Total:{price} </p>

      </div>
      

      <div className="volverInicio">
        <Link to="/" >Volver a Productos</Link>
        </div>
    </div>
  )
}

/* {productOrden ? <h2 className='iTitulo'>{productOrden.description}</h2> : console.log("no existe") }
 
 <div>
      <div>
      {productOrden.map((item, index) => (
        <p key={index}>{item.description}</p>
      ))}
      </div>    




    {productOrden ? 
        <div>
          {productOrden.map((item, index) => (
            <p key={index}>{item.description}</p>
          ))}
        </div> : 
        console.log("no existe")}




        {productOrden ? 

        <div>
          <div className="saludo">
            <h1>Producto Personalizable</h1>
          </div>
          <div className='itemDescription'>
            <h2 className='iTitulo' key={productOrden.index}> Nombre {productOrden.name}</h2>
            <p className='iDescription' key={productOrden.email}>email {productOrden.email}</p>
            <p className='iPrecio'>${productOrden.price}</p>
          </div>
        </div>

      : <Loader/>  }

*/
