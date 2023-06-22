import { useState, useEffect } from "react"
import ItemList from "../ItemList/ItemList"
import { getCategoryData, getProducts } from "../../services/firebase";
import { useParams } from "react-router-dom"



const ItemmListContainer = ({ greeting }) =>{
    let [isloading, setIsLoading] = useState(true);

    const [products, setProducts] = useState([]);
    const [titulo, setTitulo] = useState("Productos");
    const { categoryId } = useParams();
   
    const fetchData = categoryId === undefined ? getProducts : getCategoryData;

    useEffect(()=>{
        fetchData(categoryId)
            .then((response) => {
                setProducts(response)
                categoryId ? setTitulo(categoryId) : setTitulo("Productos")             
            })
            .catch(error =>{
                console.error(error)
            })
            .finally( ()=>{setIsLoading(false)})
    }, [categoryId])
    

    return(
        <div className="hero">
            <div className="saludo">
                <h1>{greeting}</h1>
            </div> 
            <div>
                <ItemList products={products} tituloCateg={titulo} isloading={isloading}/>
            </div>
        </div>
    )

}

export default ItemmListContainer
