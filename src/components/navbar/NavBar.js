import './NavBar.scss'
import CartWidget from './CartWidget';
import {Link} from 'react-router-dom'
import { useContext } from 'react';
import { CartContext } from '../Context/CartContext';




function NavBar() {

  const {cart} =useContext(CartContext)
  return (
    <div className='navBar'>
      <nav>
      <Link to='/'>
        <h2>Salem <span>Vintage</span></h2>
        </Link>
        <ul>
          <Link to='/'>
          <li>
            Home
          </li>
          </Link>

          <Link to='/nosotros'>
          <li>
            Nosotros
          </li>
          </Link>

          <Link to='/productos'>
          <li >
            Productos
          </li>
          </Link>
          <Link to='/contacto'>
          <li >
            Contacto
          </li>
          </Link>
          
        </ul>
        <div className='cart'>
        <Link to='/cart'>
            {cart.length !== 0 && <p>{cart.length}</p>} <CartWidget></CartWidget> 
        </Link>
        </div>
      </nav>
    </div>
  );
}

export default NavBar;