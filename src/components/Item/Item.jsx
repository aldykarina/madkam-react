import ItemCount from '../ItemCount/ItemCount'
import { Link } from 'react-router-dom'

export default function Item({id, name, img, price, stock}) {
  return (
    <article className="itemCard">
        <div>
          <h2>{name}</h2>
          <img src={img} alt={name} />
          <p>${price}</p>
        </div>
        <div className='divItemCount'>
          <ItemCount stock={stock} onAdd={(count) => console.log('Cantidad agregada ', count, stock)}/>
          <p>stock disponible: {stock}</p>
        </div>
        <button className='btnDetalle'>
          <Link to={`/item/${id}`}> Ver detalles</Link>
        </button>
    </article>
  )
}
