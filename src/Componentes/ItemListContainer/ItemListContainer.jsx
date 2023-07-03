import './ItemListContainer.css'
import { getMyProducts, getProductByCategory } from '../AsyncMock/AsynMock'
import { useState, useEffect } from 'react'
import ItemList from '../ItemList/ItemList'
import { useParams } from 'react-router-dom'

const ItemListContainer = () => {
    
    const [productos, setProductos] = useState([])
    const {idCategoria} = useParams()

    useEffect(() => {
        const funcion = idCategoria ? getProductByCategory : getMyProducts;

        console.log(funcion)

        funcion(idCategoria)
            .then((res) => setProductos(res))

    }, [idCategoria])


  return (
    <div className='ItemContainer'>
        <div className='ItemsList'>
            <ItemList className='ItemBox' productos={productos}/>
        </div>
        
    </div>
  )
}

export default ItemListContainer