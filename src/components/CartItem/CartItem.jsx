import React from 'react'

export default function CartItem(product) {
  return (
    <div className='itemDetail'>
      <img src={product.img} alt={product.name} />
      <div>
        <div className='itemDescription'>
          <h2 className='iTitulo'>{product.name}</h2>
          <p className='iPrecio'>Precio x unidad ${product.price}</p>
          <p className='iPrecio'>Precio x total ${product.price * product.count}</p>
          <p className='iPrecio'>${product.count}</p>
        </div>
      </div>
    </div>
  )
}
