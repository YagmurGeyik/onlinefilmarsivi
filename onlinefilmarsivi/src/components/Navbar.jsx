import React, { useState } from 'react';
import { Navbar, Container, Nav, Form, FormControl } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { BsSun, BsMoon, BsSearch } from 'react-icons/bs';
import "../styles/index.css";

function NavigationBar({ searchTerm, setSearchTerm, toggleTheme, theme }) {
  const [showSearch, setShowSearch] = useState(false);

  return (
    <Navbar className="my-navbar" expand="lg">
      <Container className="d-flex justify-content-between align-items-center">
        {/* Logo */}
        <Navbar.Brand as={Link} to="/" className="me-3">CineLİST</Navbar.Brand>

        {/* Sayfa linkleri */}
        <Nav className="d-none d-lg-flex me-auto">
          <Nav.Link as={Link} to="/">Anasayfa</Nav.Link>
          <Nav.Link as={Link} to="/favorites">Favoriler</Nav.Link>
        </Nav>

        {/* Arama çubuğu */}
        {showSearch && (
          <Form className="d-flex align-items-center search-form me-2">
            <FormControl
              type="search"
              placeholder="Film Ara..."
              className="me-2"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              autoFocus
            />
          </Form>
        )}

        {/* Butonlar */}
        <div className="d-flex align-items-center">
          <button
            className="btn btn-outline-light me-2"
            onClick={() => setShowSearch(!showSearch)}
            title="Ara"
          >
            <BsSearch />
          </button>

          <button
            className="btn btn-outline-light"
            onClick={toggleTheme}
            title="Tema Değiştir"
          >
            {theme === "light" ? <BsMoon size={20} /> : <BsSun size={20} />}
          </button>
        </div>
      </Container>
    </Navbar>
  );
}

export default NavigationBar;
