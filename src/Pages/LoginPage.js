import React from 'react';
import {
  LoginWrapper, InputsWrapper, StyledButton, SingleInputWrapper, StyledSpan,
} from '../styledComponents/styledLogin';
import { userIcon, lockIcon, userQrIcon } from '../img/icons/svg';

const LoginPage = () => {

  return (
    <LoginWrapper>
      <InputsWrapper>
        <StyledButton className="signIn" variant="secondary" type="button">zarejestruj sie</StyledButton>
        <SingleInputWrapper icon>
          {userQrIcon}
        </SingleInputWrapper>
        <SingleInputWrapper>
          {userIcon}
          <StyledSpan>nazwa</StyledSpan>
          <input type="text" />
        </SingleInputWrapper>
        <SingleInputWrapper>
          {lockIcon}
          <StyledSpan>hasło</StyledSpan>
          <input type="password" />
        </SingleInputWrapper>
        <SingleInputWrapper className="strech">
          <div>
            zapomniałeś hasła?
          </div>
        </SingleInputWrapper>
        <StyledButton variant="secondary" type="submit">zaloguj się</StyledButton>
      </InputsWrapper>
    </LoginWrapper>
  );
};

export default LoginPage;
