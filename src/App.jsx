import './scss/app.scss';
import NavBar from './components/NavBar/NavBar';
import ItemmListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route path='/' element={ <ItemmListContainer greeting={'Bienvenidos a Madkam Creation'} /> } />
          <Route path='/category/:categoryId' element={ <ItemmListContainer greeting={'Bienvenidos a Madkam Creation'} /> }/>
          <Route path='/item/:prodId' element={ <ItemDetailContainer /> }/>
          <Route path='*' element={<h1>No es por acá. 404 NOT FOUND</h1>}/>
          
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App