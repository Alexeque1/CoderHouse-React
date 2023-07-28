import './ItemListContainer.css'
import { useState, useEffect } from 'react'
import ItemList from '../ItemList/ItemList'
import { useParams } from 'react-router-dom'
import { getDocs, collection, where, query } from "firebase/firestore"
import { db } from "../../Services/config"

const ItemListContainer = () => {
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true);
  const { idCategoria } = useParams();

  useEffect(() => {
    const miProductos = idCategoria ? query(collection(db, "Productos"), where("categoria", "==", idCategoria)) : collection(db, "Productos");

    setLoading(true); // Comienza la carga de productos

    getDocs(miProductos)
      .then(res => {
        const nuevosProductos = res.docs.map(doc => {
          const data = doc.data();
          return { id: doc.id, ...data };
        });
        setProductos(nuevosProductos);
      })
      .catch(error => console.log(error))
      .finally(() => {
        setLoading(false); 
      });
  }, [idCategoria]);

  return (
    <div className='ItemContainer'>
      <div className='ItemsList'>
        {loading ? <img src='../src/Componentes/IMG/Loading.svg' alt="" /> : <ItemList className='ItemBox' productos={productos} />}
      </div>
    </div>
  )
}

export default ItemListContainer;

