import React, { useContext } from 'react'
import { CartContext } from '../../context/CartContext'

export default function CartItem(product) {

  const { removeItem } = useContext(CartContext)

  return (
    <tr className='cartRows'>
      <td className="imgCarrito">
        <img  src={product.img} alt={product.name} />
      </td>  
      <td>{product.name}</td>
      <td>{product.price}</td>
      <td>{product.count}</td>
      <td>{product.price * product.count}</td>
      <td>
        <button className='btnEliminar' onClick={() => removeItem(product.id)} >X</button>
      </td>
    </tr>
  )
}
