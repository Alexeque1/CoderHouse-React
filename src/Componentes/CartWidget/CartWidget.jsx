import React from 'react'
import './CartWidget.css'

const CartWidget = () => {
    const carImg = 'https://api.iconify.design/material-symbols/shopping-cart.svg?color=%232f7391&width=50&height=50'

  return (
    <div class="Header_shopping">
        <img src={carImg} alt="Imagen de carrito de compras" />
        <p class="shop_counter">1</p>
    </div>
  )
}

export default CartWidget