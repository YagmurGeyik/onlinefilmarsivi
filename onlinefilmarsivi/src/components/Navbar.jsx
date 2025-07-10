import React from 'react';
import { Navbar, Container, Nav, Form, FormControl } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { BsSun, BsMoon } from 'react-icons/bs'; // Güneş ve Ay ikonları
import "../styles/index.css";

function NavigationBar({ searchTerm, setSearchTerm, toggleTheme, theme }) {
  return (
    <Navbar className="my-navbar" expand="lg" collapseOnSelect>
      <Container>
        <Navbar.Brand as={Link} to="/">CineLİST</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar-content" className="ms-auto" />
        <Navbar.Collapse id="navbar-content" className="justify-content-between">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">Anasayfa</Nav.Link>
            <Nav.Link as={Link} to="/favorites">Favoriler</Nav.Link>
          </Nav>

          <Form className="d-flex align-items-center search-form mx-auto w-100 me-3">
            <FormControl
              type="search"
              placeholder="Film Ara..."
              className="me-2"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </Form>

          {/* Tema Değiştirici Buton */}
          <button className="btn btn-outline-light" onClick={toggleTheme} title="Tema Değiştir">
            {theme === "light" ? <BsMoon size={20} /> : <BsSun size={20} />}
          </button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavigationBar;
