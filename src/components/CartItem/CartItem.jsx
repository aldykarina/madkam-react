import React, { useContext } from 'react'
import { CartContext } from '../../context/CartContext'

export default function CartItem(product) {

  const { removeItem } = useContext(CartContext)

  return (
    <div className='itemDetail'>
      <img src={product.img} alt={product.name} />
      <div>
        <div className='itemDescription'>
          <h2 className='iTitulo'>{product.name}</h2>
          <p className='iPrecio'>Cantidad: {product.count} x unidad ${product.price}</p>
          <p className='iPrecio'>Precio total ${product.price * product.count}</p>
          <button className='btnDetalle' onClick={() => removeItem(product.id)} >Eliminar producto</button>
        </div>
      </div>
    </div>
  )
}
