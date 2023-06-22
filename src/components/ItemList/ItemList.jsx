import Item from "../Item/Item"
import Loader from "../Loader/Loader"

export default function ItemList({products, tituloCateg, isloading}) {
   
  if (isloading) return <Loader/>;

  return (
    <>
    {products.length === 0 ? ( <h2>No se encontraron productos</h2> ) : (
      <div >
        <div className="contenedorItemListTitulo">
          <h2>{tituloCateg}</h2>
        </div>
        <div className="contenedorItemList">
          {products.map(prod => <Item producto={prod} key={prod.id} />)}
        </div>
      </div>)
    }
    </>
  )

}
