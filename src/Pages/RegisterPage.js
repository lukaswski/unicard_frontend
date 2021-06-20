import React from 'react';
import {
 Tooltip, OverlayTrigger,
} from 'react-bootstrap';
import { Container, RegisterForm, StyledInput } from '../styledComponents/styledRegisterPage';
import { StyledButton } from '../styledComponents/styledLogin';

const Register = () => (
  <Container>
    <h4>Zarejestruj się</h4>
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
);

export default Register;
