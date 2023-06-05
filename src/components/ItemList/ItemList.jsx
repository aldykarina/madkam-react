import Item from "../Item/Item"

export default function ItemList({products, tituloCateg}) {
   
  return (
    <div >
      <div className="contenedorItemListTitulo">
        <h2>{tituloCateg}</h2>
      </div>
      <div className="contenedorItemList">
        {products.map(prod => <Item producto={prod} key={prod.id} />)}
      </div>
    </div>
  )

}

/* return (
  <div >
    <div className="contenedorItemListTitulo">
      <h2>{tituloCateg}</h2>
    </div>
    <div className="contenedorItemList">
      {products.map(prod => <Item key={prod.id} {...prod}/>)}
    </div>
  </div>
) */
