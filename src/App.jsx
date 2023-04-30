import './scss/app.scss';
import NavBar from './components/NavBar/NavBar';
import ItemmListContainer from './components/ItemListContainer/ItemListContainer'

function App() {
  return (
    <div className='App'>
      <NavBar/>
      <ItemmListContainer greeting={'Bienvenidos a Madkam Creation'} />   
    </div>
  )
}

export default App
