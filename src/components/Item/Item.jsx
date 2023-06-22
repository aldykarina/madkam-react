import { NavLink } from 'react-router-dom'

export default function Item({producto}) {

  return (
    <article className="itemCard">
        <div>
          <h2>{producto.name}</h2>
          <img src={producto.img} alt={producto.name} />
          <p>${producto.price}</p>
        </div>
        <button className='btnDetalle'>
          <NavLink to={`/item/${producto.id}`}> Ver detalles</NavLink>
        </button>
        <div className='divItemStock'>
          <p>stock disponible: {producto.stock}</p>
        </div>
    </article>
  )
}
