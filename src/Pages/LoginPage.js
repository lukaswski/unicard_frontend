import React from 'react';
import { LoginWrapper, InputsWrapper, StyledButton, SingleInputWrapper } from '../styledComponents/styledLogin';
import { userIcon, lockIcon, userQrIcon } from '../icons/svg';

const LoginPage = () => (
  <LoginWrapper>
    <InputsWrapper>
      <StyledButton className="signIn" variant="secondary" type="button">SIGN IN</StyledButton>
      <SingleInputWrapper icon>
        {userQrIcon}
      </SingleInputWrapper>
      <SingleInputWrapper>
        {userIcon}
        <span>name</span>
        <input type="text" />
      </SingleInputWrapper>
      <SingleInputWrapper>
        {lockIcon}
        <span>password</span>
        <input type="password" />
      </SingleInputWrapper>
      <StyledButton variant="secondary" type="submit">login</StyledButton>
    </InputsWrapper>
  </LoginWrapper>
);

export default LoginPage;
