import { useState, useEffect } from "react";
import { useCounter } from "../../Hooks/useCounter";
import { db } from "../../Services/config";
import { collection, addDoc, doc, setDoc, getDoc, updateDoc, deleteDoc } from 'firebase/firestore';
import CartAddAlert from "../CartAddAlert/CartAddAlert";
import { useCart } from "../../Hooks/useCart";


const ItemCounter = ({colorInicial, stock, img, nombre, precio, productoID}) => {
    const [color, setColor] = useState(colorInicial)
    const {contador, sumar, restar} = useCounter(1,stock)
    const [visible, setVisible] = useState(false)
    const { agregarProductoAFirestore } = useCart()

    useEffect(() => {
        contador >= stock ? setColor('#be5960') : setColor(colorInicial);
    }, [contador])

    // Objeto con los elementos del producto.
    const producto = {
      id: productoID,
      img: img,
      nombre: nombre,
      precio: precio,
      cantidad: contador
    }

  // Función para restar el stock del producto
    const removeProductStock = async (cantidad) => {
      const productoRef = doc(db, "Productos", productoID);
      const nuevoStock = stock - cantidad;
    
      await updateDoc(productoRef, { stock: nuevoStock });
      setVisible(true)
      agregarProductoAFirestore(producto)
    };

  return (
    <div className="counter">
      <div className="countBox">
        <button className="btn counterButton" onClick={restar}> - </button>
        <p className="counterNumber" style={{ color: color }}> {contador} </p>
        <button className="btn counterButton" onClick={sumar}> + </button>
      </div>
      <div className="detailedMargin">
        {
          contador > stock ? <p className="ItemBox_subTitle"> No hay stock </p> : <button onClick={() => removeProductStock(contador)} className='btn finalBtn btnAgg'>Agregar al carrito</button>
        }
      </div>
      {visible && <CartAddAlert img={img} nombre={nombre} precio={precio} cantidad={contador}/>}
    </div>
  )
}

export default ItemCounter