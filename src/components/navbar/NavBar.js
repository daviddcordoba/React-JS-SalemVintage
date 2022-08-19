import './NavBar.scss'
import CartWidget from './CartWidget';
import {Link} from 'react-router-dom'
import { useContext } from 'react';
import { CartContext } from '../Context/CartContext';
import { Dropdown } from 'react-bootstrap';
import DropdownToggle from 'react-bootstrap/esm/DropdownToggle';
import DropdownMenu from 'react-bootstrap/esm/DropdownMenu';
import DropdownItem from 'react-bootstrap/esm/DropdownItem';
import { NavLink } from 'react-router-dom';




function NavBar() {

  const {cart} =useContext(CartContext)
  return (
    <div className='navBar'>
      <nav>
      <Link to='/'>
        <h2><span>Salem Vintage</span></h2>
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

          <li >
              <Dropdown>
                <Dropdown.Toggle className='' variant="" id="dropdown-basic">
                  Productos
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item href="/categoria/camisas">Camisas</Dropdown.Item>
                  <Dropdown.Item href="/categoria/pantalones">Pantalones</Dropdown.Item>
                  <Dropdown.Item href="/productos">Ver todo</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>          
          </li>  

          {/* <Link to='/productos'>
          <li >
            Productos
          </li>
          </Link>
          <Link to='/categoria/camisas'>
          <li >
            Camisas
          </li>
          </Link>
          <Link to='/categoria/pantalones'>
          <li >
            Pantalones
          </li>
          </Link> */}
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