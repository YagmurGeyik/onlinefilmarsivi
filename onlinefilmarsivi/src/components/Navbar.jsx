import React, { useState } from 'react';
import { Navbar, Container, Nav, Form, FormControl } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { BsSun, BsMoon, BsSearch } from 'react-icons/bs';
import "../styles/index.css";

function NavigationBar({ searchTerm, setSearchTerm, toggleTheme, theme, onLoginClick, onRegisterClick }) {
  const [showSearch, setShowSearch] = useState(false);

  return (
    <Navbar className="my-navbar" expand="lg">
      <Container className="d-flex justify-content-between align-items-center">
        <Navbar.Brand as={Link} to="/" className="me-3">CineLİST</Navbar.Brand>

        <Nav className="d-none d-lg-flex me-auto">
          <Nav.Link as={Link} to="/">Anasayfa</Nav.Link>
          <Nav.Link as={Link} to="/favorites">Favoriler</Nav.Link>
        </Nav>

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

        <div className="d-flex align-items-center gap-2">
          <button
            className="btn btn-outline-light"
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

          {/* Giriş ve Kayıt bağlantıları butona çevrildi */}
          <button className="btn btn-outline-light ms-2" onClick={onLoginClick}>Giriş Yap</button>
          <button className="btn btn-light ms-2" onClick={onRegisterClick}>Kayıt Ol</button>
        </div>
      </Container>
    </Navbar>
  );
}

export default NavigationBar;
