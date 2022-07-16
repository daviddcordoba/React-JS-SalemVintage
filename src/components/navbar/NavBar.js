import './NavBar.scss'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown'; /* Este es para 'productos' que desde el se despliegan mas navlinks */
import CartWidget from './CartWidget';

function NavBar() {
  return (
    <Navbar collapseOnSelect expand="lg" >
      <Container>
        <Navbar.Brand href="#home">SalemVintage</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#features">Inicio</Nav.Link>
            <Nav.Link href="#pricing">Nosotros</Nav.Link>
            <NavDropdown title="Productos" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Remeras</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Pantalones
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Camperas</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Ver Mas
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            <Nav.Link href="#deets">Contacto</Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
              Ayuda
            </Nav.Link>
          </Nav>
          <Nav>
          <Nav.Link href="#deets"> <CartWidget/> </Nav.Link> {/* aca esta el icono del carrito */}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;