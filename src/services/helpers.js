import products from "../data/datoProductos"

import { initializeApp } from "firebase/app";
import {  getFirestore, collection, addDoc, writeBatch } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyCcMmzezCLpQ-iy57hCqqHfGQ-Rx1CRAyk",
  authDomain: "madkam-react.firebaseapp.com",
  projectId: "madkam-react",
  storageBucket: "madkam-react.appspot.com",
  messagingSenderId: "850925228846",
  appId: "1:850925228846:web:fbe97c091b93ef0fc5e0bf"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);


export async function exportData(){
    const productsColletionRef = collection(db, "products")
    
    for(let item of products){
        item.index = item.id;
        delete item.id;
        const res = await addDoc(productsColletionRef, item);
        console.log("Documento creado: ", res.id);
    }

}



export async function exportDatawithBatch(){
  const batch = writeBatch (db);
  const collectionRef = collection(db, "products") 

  for(let item of products){
      item.index = item.id;
      delete item.id;

      const docRef = doc(collectionRef);
      batch.set(docRef, item);
  }

  await batch.commit();
  console.log("Items Importados");

}