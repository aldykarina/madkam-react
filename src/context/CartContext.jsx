import { createContext, useEffect, useState } from "react"


export const CartContext = createContext({  cart: []  })
const cartInicial = JSON.parse(localStorage.getItem("cart")) || [];


export function CartProvider({children}) {

    const [cart, setCart] =useState(cartInicial)

    useEffect(()=>{
        localStorage.setItem("cart", JSON.stringify(cart))
    },[cart])

    const addItem = (itemAdd, count) => {
        let updateCart = [];

        if(!isInCart(itemAdd.id)){
            updateCart = [...cart, {...itemAdd, count}]
            console.log("agregaste producto, twstify")

        } else { 
            updateCart = cart.map(item => {
                if (item.id === itemAdd.id){
                    return { ...item, count: item.count + count };
                }
                return item;
            });
        }
        
        setCart(updateCart);
    }

    console.log(cart);
    

    /* 
 const addItem = (itemAdd, count) => {

        if(!isInCart(itemAdd.id)){
            setCart(prev => [...prev, {...itemAdd, count}])
            console.log("agregaste producto, twstify")

        } else { 
            setCart(prev => prev.map(item => {
                if (item.id === itemAdd.id) {
                    return { ...item, count: item.count + count };
                }
                return item;
                
            }));
        }

    }
    */

    const removeItem = (itemId) => {
        const cartUpdated = cart.filter(prod => prod.id !== itemId)
        setCart(cartUpdated)
        
        /* const updatedCart = [...cart]; 
        updatedCart.splice(itemId, 1); 
        setCart(updatedCart); */
    }

    const clearCart = () => {
        setCart([])
    }

    
    /* REVISAAAAR */
    const isInCart = (itemId) => {
        return cart.some(prod  => prod.id === itemId)
    }

    const totalCount = ()=>{
        return cart.reduce((acc, prod) => acc + prod.count, 0)
    }

    const totalPrice = ()=>{
        return cart.reduce((acc, prod) => acc + prod.price * prod.count, 0)
    }


 
    
  return (
    <CartContext.Provider value={{
        cart, 
        addItem, 
        removeItem, 
        clearCart, 
        totalCount, 
        totalPrice}}>

        {children}
    </CartContext.Provider>
  )
}

