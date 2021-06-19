import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { loginTigger } from "../Utilities/index";
import { useRecoilState } from "recoil";
import { userState } from "../recoilState/recoilAtoms";
import { Alert, Spinner } from "react-bootstrap";

import {
  LoginWrapper,
  InputsWrapper,
  StyledButton,
  SingleInputWrapper,
  StyledSpan,
  StyledSpinner,

} from "../styledComponents/styledLogin";
import { userIcon, lockIcon, userQrIcon, userQrIconGray } from "../img/icons/svg";

const LoginPage = () => {
  const [login, setLogin] = useState();
  const [state, setState] = useState({
    login: "",
    password: "",
  });

  const history = useHistory();

  const handleChange = (event) => {
    setState({
      ...state,
      [event.target.name]: event.target.value,
    });
  };
  const [show, setShow] = useState(false);
  const [showSpinner, setShowSpinner] = useState(false);

  const logIn = async (login, password) => {
    fetch(
      `https://hack4lem-backend.herokuapp.com/user?login=${login}&password=${password}`
    )
      .then((response) => response.json())
      .then((data) => {
        if (data.success) {
          setShowSpinner(true)
          sessionStorage.setItem("login", data.data[0].login);
          loginTigger(history)
        } else {
          setShow(true);
        }
      });
  };
  return (
    <LoginWrapper>
      <InputsWrapper>
        <StyledButton className="signIn" variant="secondary" type="button">
          zarejestruj sie
        </StyledButton>
        {showSpinner && <StyledSpinner animation="border" variant="primary" />}
        <SingleInputWrapper icon>
          {showSpinner ? userQrIconGray : userQrIcon }
          </SingleInputWrapper>
        <SingleInputWrapper>
          {userIcon}
          <StyledSpan>nazwa</StyledSpan>
          <input
            type="text"
            name="login"
            placeholder="login"
            value={state.login}
            onChange={handleChange}
          />
        </SingleInputWrapper>
        <SingleInputWrapper>
          {lockIcon}
          <StyledSpan>hasło</StyledSpan>
          <input
            type="password"
            name="password"
            placeholder="password"
            value={state.password}
            onChange={handleChange}
          />
        </SingleInputWrapper>
        <SingleInputWrapper className="strech">
          <div>zapomniałeś hasła?</div>
        </SingleInputWrapper>
        <StyledButton
          className="second"
          variant="secondary"
          type="submit"
          onClick={() => {
            logIn(state.login, state.password);
          }}
        >
          zaloguj się
        </StyledButton>
      </InputsWrapper>
      {show && (
        <Alert variant="danger" onClose={() => setShow(false)} dismissible>
          <Alert.Heading>Błąd podczas próby zalogowania!</Alert.Heading>
          <p>Błędny login lub hasło.</p>
        </Alert>
      )}
      
    </LoginWrapper>
  );
};

export default LoginPage;