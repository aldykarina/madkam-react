import { Link, useParams } from "react-router-dom";

export default function OrderConfirm() {

  const { orderid } = useParams();

  return (
    <div>
      <div className="saludo">
        <h1>Gracias por tu compra!</h1>
      </div>
      <div className="divLinkcito">
        <small>{`Su comprobante de compra es el: # ${orderid}`}</small>
        <Link className="linkInicio" to="/" >Volver a Productos</Link>
      </div>
    </div>
  )
}
