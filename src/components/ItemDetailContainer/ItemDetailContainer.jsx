import { useState, useEffect } from "react"
import getProductById from "../../data/datoProductos"
import ItemDetail from "../ItemDetail/ItemDetail"
import { useParams } from "react-router-dom";

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
        <ItemDetail {...product} />
    </div>
  )
}


/* 
const [product, setProduct] = useState(null);

useEffect(()=>{
  getProductById(prodId)
    .then(response => {
        setProduct(response)
    })
    .catch(error => {
        console.error(error) 
    })
}, []) */