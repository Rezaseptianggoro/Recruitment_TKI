import React from "react";
import { Nav, Navbar, Container } from "react-bootstrap";
import './Style.css';
function Navigasi() {
  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/">Dashboard</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="#features">Operasi Matematika</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <div className="judul">
        <h3>React Crud Dengan API</h3>
      </div>
    </div>
  );
}

export default Navigasi;
