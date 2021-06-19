import React from 'react';
import {
  Navbar, Nav,
} from 'react-bootstrap';
import { StyledLink } from '../styledComponents/styledNavbar';

const NavbarComponent = () => (
  <>
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <StyledLink to="/">
        <h4>
          QCard
        </h4>
      </StyledLink>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto" />
        <Nav>
          <Nav.Link>
            <StyledLink to="/login">
              Zaloguj się
            </StyledLink>
          </Nav.Link>
          <Nav.Link>
            <StyledLink to="/login">
              Nowe konto
            </StyledLink>
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  </>


);

export default NavbarComponent;
