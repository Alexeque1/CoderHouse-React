import { collection, addDoc, setDoc, doc } from "firebase/firestore";
import { db } from "./config";

const agregarProductosMasivos = async (productos) => {
  try {
    for (const producto of productos) {
      // Obtener una referencia al documento con el ID personalizado del producto
      const productoRef = doc(db, "Productos", producto.id);

      // Agregar los datos del producto al documento con setDoc
      await setDoc(productoRef, producto);
    }
    console.log('Productos agregados exitosamente.');
  } catch (error) {
    console.error('Error al agregar los productos:', error);
  }
};

export default agregarProductosMasivos;

