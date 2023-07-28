import { useState, useEffect } from "react"
import { db } from "../Services/config"
import { collection, addDoc, doc, setDoc, getDoc, updateDoc, deleteDoc } from 'firebase/firestore';

export const useCart = (producto) => {

  const agregarProductoAFirestore = async (producto) => {
    const collectionRef = collection(db, "Carrito");
    const usuarioRef = doc(collectionRef, "usuario1");
    const productoRef = doc(usuarioRef, "productos", producto.nombre);

    const productoSnapshot = await getDoc(productoRef);

  if (productoSnapshot.exists()) {
    const productoExistente = productoSnapshot.data();

    const nuevaCantidad = productoExistente.cantidad + producto.cantidad;
    const nuevoPrecio = productoExistente.precio + producto.precio;

    await updateDoc(productoRef, {
      cantidad: nuevaCantidad,
      precio: nuevoPrecio,
    });

    console.log("Producto actualizado correctamente.");
  } else {
    await setDoc(productoRef, producto);
    console.log("Producto agregado correctamente.");
  }
};

  const productosCart = async (producto) => {
    
  }
    
    return { agregarProductoAFirestore }
}