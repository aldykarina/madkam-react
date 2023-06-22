import './scss/app.scss';
import NavBar from './components/NavBar/NavBar';
import ItemmListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Cart from './components/Cart/Cart';
import { CartProvider } from './context/CartContext';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import OrderConfirm from './components/OrderConfirm/OrderConfirm';


function App() {

  return (
    <div className='App'>
      <BrowserRouter>
        <CartProvider>
          <NavBar/>
          <Routes>
            <Route path='/' element={ <ItemmListContainer greeting={'Bienvenidos a Madkam Creation'} /> } />
            <Route path='/category/:categoryId' element={ <ItemmListContainer greeting={'Bienvenidos a Madkam Creation'} /> }/>
            <Route path='/item/:prodId' element={ <ItemDetailContainer /> }/>
            <Route path='/cart' element={<Cart/>}/>
            <Route path='/orderConfirmation/:orderid' element={<OrderConfirm/>}/>
            <Route path='*' element={<h1>No es por acá. 404 NOT FOUND</h1>}/>
          </Routes>
          <ToastContainer/>
        </CartProvider>
      </BrowserRouter>
    </div>
  )
}

export default App