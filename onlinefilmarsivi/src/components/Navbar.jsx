import React from 'react';
import { Navbar, Container, Nav, Form, FormControl } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function NavigationBar({ searchTerm, setSearchTerm }) {
  return (
    <Navbar className="my-navbar" bg="dark" variant="dark" expand="lg" collapseOnSelect>
      <Container>
        <Navbar.Brand as={Link} to="/">CineLİST</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar-content" className="ms-auto" />
        <Navbar.Collapse id="navbar-content" className="justify-content-between">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">Anasayfa</Nav.Link>
            <Nav.Link as={Link} to="/favorites">Favoriler</Nav.Link>
          </Nav>
          <Form className="d-flex search-form mx-auto w-100">
            <FormControl
              type="search"
              placeholder="Film Ara..."
              className="me-2"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavigationBar;
