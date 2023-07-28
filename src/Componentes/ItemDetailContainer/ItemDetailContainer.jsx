// import { getAProducts } from "../AsyncMock/AsynMock"
import { useState, useEffect } from "react"
import ItemDetail from "../ItemDetail/ItemDetail"
import './ItemDetailContainer.css'
import { useParams } from "react-router-dom"
import { getDoc, doc } from "firebase/firestore"
import { db } from "../../Services/config"

const ItemDetailContainer = ({productoID, onClose}) => {

    
    const [producto, setProducto] = useState([])
    const {idProd} = useParams()

    console.log(idProd)

    useEffect(() =>{
        const nuevoDoc = doc(db, "Productos", idProd)

        getDoc(nuevoDoc)
          .then((res) => {
              const data = res.data()
              const nuevoProducto = {id: res.id, ...data}
              setProducto(nuevoProducto)
          })
          .catch(error => console.log(error))
    }, [idProd])

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