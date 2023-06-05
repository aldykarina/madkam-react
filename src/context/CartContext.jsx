import { createContext, useEffect, useState } from "react"


export const CartContext = createContext({
  cart: []
})

const cartInicial = JSON.parse(localStorage.getItem("cart")) ||  [];


export default function CartProvider({children}) {

    const [cart, setCart] =useState(cartInicial)

    useEffect(()=>{
        localStorage.setItem("cart", JSON.stringify(cart))
    },[cart])

    const addItem = (itemAdd, count) => {

        if(!isInCart(itemAdd.id)){
            setCart(prev => [...prev, {...itemAdd, count}])
        } else {
            console.log("El producto ya fue agregado")
        }      
    }


    const removeItem = (itemId) => {
        const cartUpdated = cart.filter(prod => prod.id !== itemId)
        setCart(cartUpdated)
    }

    const clearCart = () => {
        setCart([])
    }

    const isInCart = (itemId) => {
        return cart.some(prod  => prod.id === itemId)
    }

    const totalCount = ()=>{
        return cart.reduce((acc, prod) => acc + prod.count, 0)
    }

    const total = ()=>{
        return cart.reduce((acc, prod) => acc + prod.price * prod.count, 0)
    }


 
    
  return (
    <CartContext.Provider value={{
        cart, 
        addItem, 
        removeItem, 
        clearCart, 
        totalCount, 
        total}}>

        {children}
    </CartContext.Provider>
  )
}

