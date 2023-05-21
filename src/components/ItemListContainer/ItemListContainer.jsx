import { useState, useEffect } from "react"
import ItemList from "../ItemList/ItemList"
import { getProducts } from "../../data/datoProductos"

import { useParams } from "react-router-dom"




const ItemmListContainer = ({ greeting }) =>{
    const [products, setProducts] = useState([]);
    const [titulo, setTitulo] = useState("Productos");
    const { categoryId } = useParams();
   

    useEffect(()=>{
        
       getProducts(categoryId )
            .then(response => {
                const categoryFilter = response.filter(prod => prod.category === categoryId); setTitulo(categoryId);
                setProducts( categoryId ? categoryFilter : response)
                setTitulo( categoryId ? categoryId : "Productos")
            })
            .catch(error =>{
                console.error(error)
            })
    }, [categoryId]) 
    



    return(
        <div className="hero">
            <div className="saludo">
                <h1>{greeting}</h1>
            </div> 
            <div>
                <ItemList products={products} tituloCateg={titulo} />
            </div>
        </div>
    )

}

export default ItemmListContainer





/* 
const ItemmListContainer = ({ greeting }) =>{
    const [products, setProducts] = useState([])

    useEffect(()=>{
      
        
        getProducts()
            .then(response => {
                setProducts(response)
            })
            .catch(error =>{
                console.error(error)
            })
    }, []) 
    
    
    
    
    
    
    const ItemmListContainer = ({ greeting }) =>{
    const [products, setProducts] = useState([])

    const { categoryId } = useParams()


    useEffect(()=>{
        const asyncFunc = categoryId ? getProductByCategory : getProducts
        
        
        asyncFunc(categoryId)
            .then(response => {
                setProducts(response)
            })
            .catch(error =>{
                console.error(error)
            })
    }, [categoryId])*/
