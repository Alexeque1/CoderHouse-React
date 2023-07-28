import './App.css'
import NavBar from './Componentes/Header/NavBar'
import ItemListContainer from './Componentes/ItemListContainer/ItemListContainer'
import ItemCounter from './Componentes/ItemCounter/ItemCounter'
import HomeTitle from './Componentes/HomeTitle/HomeTitle'
import ItemDetailContainer from './Componentes/ItemDetailContainer/ItemDetailContainer'
import CartComplete from './Componentes/CartComplete/CartComplete'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

const App = () => {

  return (
    <>
      <BrowserRouter>
        <NavBar />
        <HomeTitle greetings="Bienvenidos a FunkoPop Argentina"/>
        <Routes>
          <Route path='/' element={<ItemListContainer greetings="Bienvenidos a FunkoPop Argentina" />} />
          <Route path='/Disney/:idCategoria' element={<ItemListContainer />} />
          <Route path='/Deportes/:idCategoria' element={<ItemListContainer />}/>
          <Route path='/TV/:idCategoria' element={<ItemListContainer />}/>
          <Route path='/Peliculas/:idCategoria' element={<ItemListContainer />}/>
          <Route path='/Item/:idProd' element={<ItemDetailContainer />}/>
          <Route path='*' element={<ItemListContainer />}/>
          <Route path='/Cart' element={<CartComplete />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App

/* <ItemCounter inicial={1} stock={10} hola={'Hola'} colorInicial={'cyan'} /> */
