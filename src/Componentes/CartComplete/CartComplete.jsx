import CartItems from '../CartItems/CartItems'
import ItemCounter from '../ItemCounter/ItemCounter';
import { useState, useEffect } from 'react'
import { collection, getDocs, doc } from 'firebase/firestore';
import { db } from '../../Services/config';
import './CartComplete.css'

const CartComplete = () => {
    const [productos, setProductos] = useState([])
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const obtenerDatosUsuario = async () => {
            try {
              const carritoRef = doc(collection(db, 'Carrito'), 'usuario1');
      
              const carritoSnapshot = await getDoc(carritoRef);
      
              if (carritoSnapshot.exists()) {
                const data = carritoSnapshot.data();
                setUserData(data);
              } else {
                setUserData({});
              }
              setLoading(false);
            } catch (error) {
              console.error('Error al obtener los datos del usuario:', error);
              setLoading(false);
            }
          };
          obtenerDatosUsuario()
    }, []);

  return (
    <div className='cartBoxHome'>
        <div className='cartBox_Products cartDetails'>
            <div className='cartBox_TitleSection'>
                <h3 className='cartBox_Title'>Carrito</h3>
            </div>
            <div>
                    {loading ? (
                        <img className='loadingGif' src='../src/Componentes/IMG/LoadingCart.svg' alt="" />
                    ) : productos.length === 0 ? (
                        <p className='cartBox_text'>No hay productos todavía.</p>
                    ) : (
                        productos.map(prod => <ItemCounter key={prod.id} {...prod} />)
                    )}
            </div>
        </div>
        <div className='cartBox_Resume cartDetails'>
                <div className='cartBox_TitleSection'>
                    <span className='cartBox_Title'> Resumen </span>
                </div>
                <div>
                    <p className='cartBox_text'>Productos: </p>
                    <p className='cartBox_text'>Total: </p>
                </div>
                <div className='cartBoxBtn'>
                    <button className='btn'>Continuar compra</button>
                </div>
          </div>
    </div>
  )
}

export default CartComplete