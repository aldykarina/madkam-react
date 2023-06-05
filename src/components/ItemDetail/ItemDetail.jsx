import { useContext, useState } from 'react';
import ItemCount from '../ItemCount/ItemCount'
import { Link } from 'react-router-dom';

import { CartContext } from "../../context/CartContext"


export default function ItemDetail( {product} ) {

  const [countAdd, setCountAdd] = useState(0);



  const { addItem } = useContext(CartContext)

  const handleOnAdd = (count) => {
    setCountAdd(count)


    const itemAdd = {...product} 

    addItem(itemAdd, count)
    
  }



  return (
    <article>
       <div className="saludo">
         <h1>Producto Personalizable</h1>
       </div>
       <div className='itemDetail'>
         <img src={product.img} alt={product.name} />
         <div>
           <div className='itemDescription'>
             <h2 className='iTitulo'>{product.name}</h2>
             <p className='iDescription'>{product.description}</p>
             <p className='iCategory'>Categoria: {product.category}</p>
             <p className='iPrecio'>${product.price}</p>
           </div>
           <div className='divItemCount'>
            {
              countAdd > 0 ? (
                <Link to="/cart" >Terminar Compra</Link>
              ) : (
                <ItemCount stock={product.stock} onAdd={handleOnAdd}/>
              )
            }
            <p>stock disponible: {product.stock}</p>
           </div>
         </div>
       </div>
    </article>
   )

}




