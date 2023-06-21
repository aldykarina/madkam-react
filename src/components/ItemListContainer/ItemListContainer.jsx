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



/* PEDIR DATOS
import { getProducts } from "../../data/datoProductos"


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
            .finally( ()=>{setIsLoading(false)})
    }, [categoryId])
       
            
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../../services/firebase";

     useEffect(()=>{
       
        const productosRef = collection(db, "productos")
        const q = categoryId ? (query(productosRef, where("category", "==", categoryId))) : productosRef;
        getDocs(q)
            .then((res) => {
                setProducts(
                    res.docs.map((doc)=>{
                        return {...doc.data(), id: doc.id}
                    })
                )
            })
            .finally( ()=>{setIsLoading(false)})
    }, [categoryId]) 





    solu3

    useEffect(()=>{
        fetchData(categoryId)
            .then((response) => {
                if(categoryId){
                    const categoryFilter = response.filter(prod => prod.category === categoryId);
                    setProducts(categoryFilter);
                    setTitulo(categoryId)
                } else{
                    setProducts(response)
                    setTitulo("Productos")
                }                
            })
            .catch(error =>{
                console.error(error)
            })
            .finally( ()=>{setIsLoading(false)})
    }, [categoryId])
*/