import React from 'react';
import {Container, Nav, Navbar, NavDropdown} from 'react-bootstrap';
  
export default function NavBar() {
    return (
        <Navbar expand="lg" className="nav-container">
      <Container>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav class="nav">
            <Nav.Link href="#aboutMe" class="nav-link">ABOUT ME</Nav.Link>
            <Nav.Link href="#projects" class="nav-link">PROJECTS</Nav.Link>
            <Nav.Link href="#resume" class="nav-link">RESUME</Nav.Link>
            <Nav.Link href="#contact" class="nav-link">CONTACT</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    );
}