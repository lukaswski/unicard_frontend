import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import {
  LoginWrapper, InputsWrapper, StyledButton, SingleInputWrapper, StyledSpan,
} from '../styledComponents/styledLogin';
import { fetchData } from '../Utilities';
import { userIcon, lockIcon, userQrIcon } from '../img/icons/svg';

const LoginPage = () => {
  const [fetchedUser, setFetchedUser] = useState();
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const [submit, setSubmit] = useState(false);
  const history = useHistory();

  useEffect(() => {
    fetchData(setFetchedUser, login, password);
  }, [submit]);
  console.log(fetchedUser);

  const handleSubmit = () => (
  setSubmit(true),
  history.push('/')
  );

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
          <input type="password" onChange={(e) => setPassword(e.target.value)} />
        </SingleInputWrapper>
        <SingleInputWrapper className="strech">
          <div>
            zapomniałeś hasła?
          </div>
        </SingleInputWrapper>
        <StyledButton variant="secondary" type="submit" onClick={() => handleSubmit()}>zaloguj się</StyledButton>
      </InputsWrapper>
    </LoginWrapper>
  );
};

export default LoginPage;
