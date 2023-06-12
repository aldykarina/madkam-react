import { useState, useEffect } from "react"
import getProductById from "../../data/datoProductos"
import ItemDetail from "../ItemDetail/ItemDetail"
import { useParams } from "react-router-dom";
import Loader from "../Loader/Loader";

export default function ItemDetailContainer() {
  const [product, setProduct] = useState(null);

  const { prodId } = useParams();
  useEffect(()=>{
    getProductById(Number(prodId))
      .then(response => {
          setProduct(response)
      })
      .catch(error => {
          console.error(error) 
      })
  }, [prodId])

  
  return (
    <div>
      {product ? <ItemDetail product={product} /> : <Loader/>  }
    </div>
  )
}

/* return (
  <div>
      <ItemDetail {...product} />
  </div>
) */
