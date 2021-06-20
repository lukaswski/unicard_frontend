import React from 'react';
import {
  Tooltip, OverlayTrigger, Nav,
} from 'react-bootstrap';
import { Container, RegisterForm, StyledInput } from '../styledComponents/styledRegisterPage';
import { StyledButton } from '../styledComponents/styledLogin';

const Register = () => (
  <>
    <Nav className="justify-content-center" activeKey="/home">
      <Nav.Item>
        <Nav.Link>1 dane podstawowe</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link disabled>2 dane karty</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link disabled>3 dane teleadresowe</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link disabled>
          4 weryfikacja konta
        </Nav.Link>
      </Nav.Item>
    </Nav>
    <Container>

      <h4>Krok 1 </h4>
      <h5>dane podstawowe</h5>

      <RegisterForm>
        <h5>Rejestracja nowego użytkownika Qcards jest prosta i szybka, sprawdź!</h5>
        <hr />
        <StyledInput placeholder="imię" />
        <StyledInput placeholder="nawisko" />
        <hr />
        <StyledInput placeholder="adres e mail" />
      </RegisterForm>
      <OverlayTrigger overlay={(
        <Tooltip id="tooltip-disabled">
          {' '}
          Rejestracja nowych użytowników już niebawem!
        </Tooltip>
)}
      >
        <span className="d-inline-block">
          <StyledButton disabled style={{ pointerEvents: 'none' }}>
            dalej
          </StyledButton>
        </span>
      </OverlayTrigger>


    </Container>
  </>
);

export default Register;
