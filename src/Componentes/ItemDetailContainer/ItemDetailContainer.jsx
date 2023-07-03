import { getAProducts } from "../AsyncMock/AsynMock"
import { useState, useEffect } from "react"
import ItemDetail from "../ItemDetail/ItemDetail"
import './ItemDetailContainer.css'
import { useParams } from "react-router-dom"

const ItemDetailContainer = ({productoID, onClose}) => {

    
    const [producto, setProducto] = useState([])
    const {idProd} = useParams()

    console.log(idProd)

    useEffect(() => {
        getAProducts(idProd)
            .then(response => setProducto(response))
    },[])

    console.log(producto)

  return (
    <div className='ItemDetailContainer'>
        <div className='ItemDetail'>
            <ItemDetail className='ItemBox' {...producto} onClose={onClose} />
        </div>
    </div>
  )
}

export default ItemDetailContainer