import cart from './assets/cart.png'


export default function CartWidget(){

    return(
        <div className='carWidget'>
            <img src={cart} alt=" carrito compras " />
            <span>0</span>
        </div>
    )
}