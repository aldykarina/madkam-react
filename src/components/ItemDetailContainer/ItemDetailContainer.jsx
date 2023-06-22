import { useState, useEffect } from "react"
import ItemDetail from "../ItemDetail/ItemDetail"
import { getProductById } from "../../services/firebase";
import { Link, useParams } from "react-router-dom";
import Loader from "../Loader/Loader";



export default function ItemDetailContainer() {
  const [errors, setErrors] = useState(null)
  const [product, setProduct] = useState(null);
  let [isloading, setIsLoading] = useState(true);

  const { prodId } = useParams();
  useEffect(()=>{
    getProductById(prodId)
      .then(response => {
          setProduct(response)
      })
      .catch(error => {
          setErrors(error.message)
      })
      .finally( ()=>{setIsLoading(false)})
  }, [prodId])

  if (errors) return (
    errorProducto()
  )

  function  errorProducto() {
    swal({
      title: "Lo siento",
      text: "El producto no existe",
      icon: "warning",
    }); 
    
  }
  
  
    

  return (
    <div>
      {product ? <ItemDetail product={product} isloading={isloading} /> :  
      
      ( isloading ? <Loader/> : (errorProducto(), <Link className="linkInicio" to="/" >Volver a Productos</Link>) )
      
      }
    </div>
  )
}
