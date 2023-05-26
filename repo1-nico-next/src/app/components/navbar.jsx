"use client"
import Link from 'next/link';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


function NavScrollExample() {
  return (
    
    <Navbar  style={{backgroundColor:"black"}} variant="dark" expand="lg">
      <Container >
        
      <Link href="/" style={{textDecoration:"none"}}> <Navbar.Brand >OperacionRosario</Navbar.Brand></Link>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0  "
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
           <Link href="/pagina1" className='nav-link' >Pagina1</Link>
           <Link href="/pagina2" className='nav-link' >pagina2</Link>
           
          </Nav>

        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavScrollExample;