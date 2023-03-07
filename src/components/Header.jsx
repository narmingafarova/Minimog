import { useContext } from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Search, Person, Star, Bag } from 'react-bootstrap-icons';
import { LinkContainer } from 'react-router-bootstrap';
import { CharacterContext } from '../context/CharacterContext';

function Header() {
  const [characters] = useContext(CharacterContext);
  return (
    <Navbar bg="white" expand="lg" sticky="top">
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className='menu-list'>
          <Nav className="me-auto d-flex align-items-center justify-content-center">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/">Shop</Nav.Link>
            <Nav.Link href="/">Products</Nav.Link>
            <Nav.Link href="/">Pages</Nav.Link>
            <Nav.Link href="/">Blogs</Nav.Link>
            <Nav.Link href="/">Features</Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <Navbar.Brand href="/" className='mx-auto'>
          <img src="https://cdn.shopify.com/s/files/1/0591/1350/4958/files/3.png?v=1628328728&width=500" alt="logo" width={145} />
        </Navbar.Brand>
        <Navbar.Collapse className='nav-icons ms-5'>
          <Nav className="ms-auto">
            <Nav.Link href="/" className='me-2'><Search fontSize={20} /></Nav.Link>
            <Nav.Link href="/" className='me-2'><Person fontSize={22} /></Nav.Link>
            <Nav.Link href="/" className='me-2'><Star fontSize={20} /></Nav.Link>
            <LinkContainer to="/characters">
              <Nav.Link><Bag fontSize={20} />&nbsp;({characters.length})</Nav.Link>
            </LinkContainer>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;