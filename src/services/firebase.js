import { initializeApp } from "firebase/app";
import {  getFirestore, collection, getDocs, doc, getDoc, query, where, addDoc, orderBy, writeBatch } from "firebase/firestore";


const firebaseConfig = {
  apiKey: import.meta.env.VITE_APP_KEY,
  authDomain: import.meta.env.VITE_APP_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_APP_PROJECT_ID,
  storageBucket: import.meta.env.VITE_APP_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_APP_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_APP_APP_ID,
};



const app = initializeApp(firebaseConfig);
const db = getFirestore(app);



export async function getProducts(){
  const productosCollectionRef = collection( db, "products" );

  const q = query(productosCollectionRef, orderBy("index"));
  const productosSnapshot = await getDocs(q);
  const arrayDocs = productosSnapshot.docs;

  const dataDocs = arrayDocs.map((doc)=>{
    return {...doc.data(), id: doc.id }
  })

  return dataDocs;
}



export async function getProductById(idUrl) {
  const docRef = doc(db, "products", idUrl);
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()){
    return { id: docSnap.id, ...docSnap.data()}
  } else {
    console.log("No existe ese producto")
  }
  
}

export async function getCategoryData(idCat){

  const productosCollectionRef = collection (db, "products")
  const q = query(productosCollectionRef, where("category", "==", idCat));

  const productosSnapshot = await getDocs(q);
  const arrayDocs = productosSnapshot.docs;
  const dataDocs = arrayDocs.map((doc)=>{
    return {...doc.data(), id: doc.id }
  })

  return dataDocs;
}

export async function createrOrder(data) {
  const orderCollectionRef = collection(db, "orders")
  const response = await addDoc(orderCollectionRef, data);
  console.log("Orden creadaa ", response.id)

  return response.id

}


export async function getProductOrder(orderid) {

  const docRef = doc(db, "orders", orderid);
  const docSnap =  await getDoc(docRef);
  console.log(docSnap.data())
  
  return docSnap.data();  
}


export async function createrOrderWithStockUpdate(data) {
  const orderCollectionRef = collection(db, "orders")
  const batch = writeBatch(db);
  const { items } = data;

  for(let itemInCart of items){
    const refDoc = doc(db, "products", itemInCart.id);
    const docSnap = await getDoc(refDoc);

    const { stock } = docSnap.data();
    console.log(stock);

    const stockUpdate = stock - itemInCart.count;
    if (stockUpdate < 0){
      throw new Error (`Sin stock de ${itemInCart.name}`)
    } else {
      const docRef = doc(db, "products", itemInCart.id)
      batch.update(docRef, { stock: stockUpdate})
    }
  }

  await batch.commit();
  const response = await addDoc(orderCollectionRef, data);

  return response.id

}
