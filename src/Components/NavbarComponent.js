import React from 'react';
import {
  Navbar, Nav,
} from 'react-bootstrap';
import { StyledLink } from '../styledComponents/styledNavbar';

const NavbarComponent = () => (
  <>
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      
        <StyledLink to="/">Home</StyledLink>
      
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="#features">Features</Nav.Link>
          <Nav.Link href="#pricing">Pricing</Nav.Link>
        </Nav>
        <Nav>
          <Nav.Link href="#deets">Login</Nav.Link>
          <Nav.Link eventKey={2} href="#memes">
            New account
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  </>


);

export default NavbarComponent;
