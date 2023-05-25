"use client"
import Link from 'next/link';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


function NavScrollExample() {
  return (
    <Navbar  bg="dark" variant="dark" expand="lg">
      <Container fluid>
        <Navbar.Brand href="/">NiquitoMorgani</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0  "
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
           <Link href="/" className='nav-link' >HOME</Link>
           <Link href="/pagina1" className='nav-link' >pagina1</Link>
           <Link href="/pagina1" className='nav-link' >pagina2</Link>
          </Nav>

        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavScrollExample;