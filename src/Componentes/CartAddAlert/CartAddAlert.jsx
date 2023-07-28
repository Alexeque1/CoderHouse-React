import React from 'react'
import './CartAddAlert.css'
import { Link } from 'react-router-dom'

const CartAddAlert = ({img, nombre, precio, cantidad }) => {

    const nuevoPrecio = "$" + ((precio) * parseInt(cantidad))
    console.log(cantidad)

  return (
    <div className='ProdAddAlert'>
        <div className='ProdAddContainer'>
            <div>
            <Link to="/">
              <svg className='exitIcon' xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24"><path fill="currentColor" d="M14.5 18H8c-1.1 0-2-.9-2-2V9.5C6 8.67 6.67 8 7.5 8S9 8.67 9 9.5v3.27L14.95 7c.57-.55 1.48-.54 2.04.02s.56 1.47.01 2.04L11.15 15h3.35c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5z"/></svg>
            </Link>
                <h3 className='ItemBox_title boxTitle'>¡Item(s) agregado(s)!</h3>
            </div>
            <div>
                <img src={img}/>
            </div>
            <div>
                <div className='boxSubtitle'>
                    <p className='ItemBox_title'> {nombre} </p>
                    <p className='ItemBox_subTitle'> {nuevoPrecio} </p>
                    <p className='ItemBox_subTitle'> Cantidad: {cantidad} </p>
                </div>
                <div>
                    <button className='btn spaceItems'> Ver carrito </button>
                    <button className='btn spaceItems'> Continuar comprando </button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default CartAddAlert