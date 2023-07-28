import './NavBar.css'
import CartWidget from '../CartWidget/CartWidget'
import { Link, NavLink } from 'react-router-dom'

const NavBar = () => {

  return (
    <header>
        <div class="Header_logo">
            <Link className='link' to="/">
                <h1>Funko<span class="logo_span">Pop</span></h1>
            </Link>
        </div>
        <div class="Header_navBox">
            <nav class="Header_nav">
                <ul class="Header_navList">
                    <li>
                        <NavLink className="link" to="/">Home</NavLink>
                    </li>
                    <li>
                        <NavLink className="link" to="/Disney/1">Disney</NavLink>
                    </li>
                    <li>
                        <NavLink className="link" to="/Deportes/2">Deportes</NavLink>
                    </li>
                    <li>
                        <NavLink className="link" to="/TV/3">TV</NavLink>
                    </li>
                    <li>
                        <NavLink className="link" to="/Peliculas/4">Peliculas</NavLink>
                    </li>
                </ul>
            </nav>
        </div>
        <NavLink to="/Cart">
            <CartWidget/>
        </NavLink>
    </header>
  )
}

export default NavBar