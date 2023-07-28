import React from 'react'
import ItemCounter from '../ItemCounter/ItemCounter'

const CartItems = ({id, cantidad, img, nombre, precio}) => {
  return (
    <div id={id}>
          <div>
              <div>
                  <img src={img}/>
              </div>
              <div>
                  <div>
                      <span> {nombre} </span>
                  </div>
                  <div>
                      <button>Eliminar</button>
                      <button>Ver detalles</button>
                  </div>
              </div>
              <div>
                    <div>
                        <p>Cantidad: {cantidad} </p>
                    </div>
                    <ItemCounter/>
              </div>
              <div>
                    <span> {precio} </span>
              </div>
          </div>
    </div>
  )
}

export default CartItems