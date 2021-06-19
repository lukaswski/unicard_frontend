import React, { useEffect, useState } from 'react';
import { useRecoilState } from 'recoil';
import { useHistory } from 'react-router-dom';
import { fetchData } from '../Utilities/index';
import {
  LoginWrapper, InputsWrapper, StyledButton, SingleInputWrapper, StyledSpan,
} from '../styledComponents/styledLogin';
import { userIcon, lockIcon, userQrIcon } from '../img/icons/svg';
import {userState} from '../recoilState/recoilAtoms';

const LoginPage = () => {
  const history = useHistory();
  const [login, setLogin] = useState();
  const [pass, setPass] = useState('');
  const [user, setUser] = useState();
  const [isLogged, setLogged] = useState(false);

  const [text, setText] = useRecoilState(userState);

  const handleSubmitButton = () => (
    setLogged(!isLogged)
  );

  useEffect(() => {
    fetchData(setText, login, pass);
  }, [isLogged]);

console.log(text);

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
          <input type="password"  onChange={(e) => setPass(e.target.value)} />
        </SingleInputWrapper>
        <SingleInputWrapper className="strech">
          <div>
            zapomniałeś hasła?
          </div>
        </SingleInputWrapper>
        <StyledButton variant="secondary" type="submit" onClick={() => handleSubmitButton()}>zaloguj się</StyledButton>
      </InputsWrapper>
    </LoginWrapper>
  );
};

export default LoginPage;
