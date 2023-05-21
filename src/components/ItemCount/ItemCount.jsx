import { useState } from "react";


export default function ItemCount({stock, onAdd}) {

    const [count, setCount] = useState(1);

    const add = () =>{
        if (count < stock)  {
            setCount(count +1);
        }
    }

    const subtract = () =>{
        if (count > 1)  {
            setCount(count -1);
        }
    }

    let disableSub = count === 1;
    let disableAdd = count === stock || !stock;


  return (
    <div className="itemCount" >
        <div className="contCount">
            <button className="btnCount" onClick ={subtract} disabled={disableSub} >-</button>
            <p className="countNumber">{count}</p>
            <button  className="btnCount" onClick ={add} disabled={disableAdd}>+</button>
        </div>
        <div>
            <button className="btnAddCart" onClick={() => onAdd(count)} disabled={!stock}> 
                Agregar al carrito
            </button>
        </div>
    </div>
  )
}
