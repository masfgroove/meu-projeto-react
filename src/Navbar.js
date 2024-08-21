import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Navbar.Brand as={Link} to="/">Meu Projeto</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link as={Link} to="/">Home</Nav.Link>
          <Nav.Link as={Link} to="/formulario">Formulário</Nav.Link>
          <Nav.Link as={Link} to="/tabela">Tabela</Nav.Link>
          <Nav.Link as={Link} to="/sobre">Sobre</Nav.Link> {/* Link para a página Sobre */}
          <Nav.Link href="https://github.com/masfgroove/meu-projeto-react/" target="_blank" rel="noopener noreferrer">GitHub</Nav.Link> {/* Link para o GitHub */}
    
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default NavBar;
