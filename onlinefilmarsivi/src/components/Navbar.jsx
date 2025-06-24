import React from 'react';
import { Navbar, Container, Nav, Form, FormControl, Button } from 'react-bootstrap';

function NavigationBar({ searchTerm, setSearchTerm }) {
  return (
    <Navbar className="my-navbar" bg="dark" variant="dark" expand="lg" collapseOnSelect>
      <Container>
        <Navbar.Brand href="#">Online Film Arşivi</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar-content" className="ms-auto" />
        <Navbar.Collapse id="navbar-content" className="justify-content-between">
          <Nav className="me-auto">
            <Nav.Link href="#">Anasayfa</Nav.Link>
            <Nav.Link href="#">Favoriler</Nav.Link>
          </Nav>
          <Form className="d-flex search-form mx-auto w-100">
            <FormControl
              type="search"
              placeholder="Film Ara..."
              className="me-2"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <Button variant="outline-light">Ara</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavigationBar;
