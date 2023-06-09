import './NavBar.css'

const NavBar = () => {
    const carImg = 'https://api.iconify.design/material-symbols/shopping-cart.svg?color=%232f7391&width=50&height=50'

  return (
    <header>
        <div class="Header_logo">
            <h1>Funko<span class="logo_span">Pop</span></h1>
        </div>
        <div class="Header_navBox">
            <nav class="Header_nav">
                <ul class="Header_navList">
                    <li>
                        <a href="">Home</a>
                    </li>
                    <li>
                        <a href="">Colección</a>
                    </li>
                    <li>
                        <a href="">Sobre Nosotros</a>
                    </li>
                    <li>
                        <a href="">Contacto</a>
                    </li>
                </ul>
            </nav>
        </div>
        <div class="Header_shopping">
            <img src={carImg} alt="Imagen de carrito de compras" />
            <p class="shop_counter">1</p>
        </div>
    </header>
  )
}

export default NavBar