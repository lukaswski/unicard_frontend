import React from 'react';
import { useHistory } from 'react-router-dom';
import {
  Navbar, Nav,
} from 'react-bootstrap';
import { StyledLink, LogoImg, Logo } from '../styledComponents/styledNavbar';
import Logo_Qcard from '../img/Logo_Qcard.png';

const NavbarComponent = () => {
  const history = useHistory()
return(
  <>
    <Navbar collapseOnSelect expand="lg" bg="light" variant="dark">
      <StyledLink to="/">
        <Logo>
          <LogoImg src={Logo_Qcard} className="nav" />
          Qcard
        </Logo>
      </StyledLink>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">{' '}</Nav>
        <Nav>
          <Nav.Link>
            <StyledLink to="/login">
              Zaloguj się
            </StyledLink>
          </Nav.Link>
          <Nav.Link>
            <StyledLink to="/register" >
              Nowe konto
            </StyledLink>
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  </>


);
};

export default NavbarComponent;
