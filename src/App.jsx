import './App.css'
import ItemCounter from './Componentes/ItemCounter/ItemCounter'
import NavBar from './Componentes/Header/NavBar'
import ItemListContainer from './Componentes/ItemListContainer/ItemListContainer'

const App = () => {
  // Codigo
  
  // Interfaz del usuario
  return (
    <>
      <NavBar/>
      <ItemListContainer greetings="Bienvenidos a FunkoPop"/>
    </>
  )
}

export default App
