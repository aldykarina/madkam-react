import { NavLink } from 'react-router-dom'

export default function Item({id, name, img, price, stock}) {
  return (
    <article className="itemCard">
        <div>
          <h2>{name}</h2>
          <img src={img} alt={name} />
          <p>${price}</p>
        </div>
        <button className='btnDetalle'>
          <NavLink to={`/item/${id}`}> Ver detalles</NavLink>
        </button>
        <div className='divItemStock'>
          <p>stock disponible: {stock}</p>
        </div>
    </article>
  )
}
