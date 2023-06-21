import { useState, useEffect } from "react"
import ItemDetail from "../ItemDetail/ItemDetail"
import { getProductById } from "../../services/firebase";
import { useParams } from "react-router-dom";
import Loader from "../Loader/Loader";



export default function ItemDetailContainer() {
  const [errors, setErrors] = useState(null)
  const [product, setProduct] = useState(null);

  const { prodId } = useParams();
  useEffect(()=>{
    getProductById(prodId)
      .then(response => {
          setProduct(response)
      })
      .catch(error => {
          setErrors(error.message)
      })
  }, [prodId])

  if (errors) return (
    <div>
      <h1>Error</h1>
      <p>{errors}</p>
    </div>

  )

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
)

import getProductById from "../../data/datoProductos"

const { prodId } = useParams();
  useEffect(()=>{
    getProductById(Number(prodId))
      .then(response => {
          setProduct(response)
      })
      .catch(error => {
          setErrors(error.message)
      })
  }, [prodId])



import { doc, getDoc } from "firebase/firestore";
import { db } from "../../services/firebase";

    useEffect(()=>{
    
    const docRef = doc(db, "productos", prodId);
    getDoc(docRef)
      .then((res)=>{
        setProduct({...res.data(), id: res.id});
      })

  }, [prodId])

*/
