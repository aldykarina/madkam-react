import ItemCount from '../ItemCount/ItemCount'

export default function ItemDetail({ id, name, img, category, description, price, stock}) {
  return (
   <article >
      <div className='itemDetail'>
        <img src={img} alt={name} />
        <div>
          <div className='itemDescription'>
            <h2 className='iTitulo'>{name}</h2>
            <p className='iDescription'>{description}</p>
            <p className='iCategory'>Categoria: {category}</p>
            <p className='iPrecio'>${price}</p>
          </div>
          <div className='divItemCount'>
            <ItemCount stock={stock} onAdd={(count) => console.log('Cantidad agregada ', count, stock)}/>
            <p>stock disponible: {stock}</p>
          </div>
        </div>
      </div>
   </article>
  )
}
