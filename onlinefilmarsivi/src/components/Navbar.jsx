import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';

function NavigationBar() {
  return (
   <Navbar className="my-navbar" expand="lg">
      <Container>
        <Navbar.Brand href="#">CineLİST</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#">Anasayfa</Nav.Link>
            <Nav.Link href="#">Favoriler</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavigationBar;
