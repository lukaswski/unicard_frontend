import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { fetchData } from '../Utilities/index';

import {
  LoginWrapper, InputsWrapper, StyledButton, SingleInputWrapper, StyledSpan,
} from '../styledComponents/styledLogin';
import { userIcon, lockIcon, userQrIcon } from '../img/icons/svg';

const LoginPage = () => {
  const [fetchedUser, setFetchedUser] = useState();
  const [login, setLogin] = useState();
  const [submit, setSubmit] = useState(false);
  const history = useHistory();

  useEffect(() => {
    fetchData(setLogin, 'test', 'test');
  }, []);
  console.log(login);

  return (
    <LoginWrapper>
      <InputsWrapper>
        <StyledButton className="signIn" variant="secondary" type="button">
          zarejestruj sie
        </StyledButton>
        <SingleInputWrapper icon>
          {userQrIcon}
        </SingleInputWrapper>
        <SingleInputWrapper>
          {userIcon}
          <StyledSpan>nazwa</StyledSpan>
          <input type="text" onChange={(e) => setLogin(e.target.value)} />
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
