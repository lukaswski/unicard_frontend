import styled from 'styled-components';
import { Button } from 'react-bootstrap';

export const LoginWrapper = styled.div`
  width: 50%;
  height: 400px;
  border: solid grey 1px;
  border-radius: 10px;
  margin: 100px auto 0;
    @media(max-width: 775px) {
        width: 80%;
      }
`;

export const InputsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const StyledSpan = styled.span`
  position: absolute;
  left: 50px;
  top: -5%;
  background-color: white;
  padding: 0 40px 0 10px;

`;
export const StyledButton = styled(Button)`
  background-color: ${(props) => props.dissmiss ? "Silver" : '#00a2f9'} ;
  color: white;
  border: none;
  width: 250px;
  height: 60px;
  letter-spacing: 3px;
  font-weight: 800;
  text-transform: uppercase;
  margin-left: 25px;
  margin-right: 25px;
  margin-top: 2rem;
  box-shadow: 2px 2px 12px gray;
    &.QrModal{
      width: 200px;
      height: 40px;
      margin: 10px;
    }
    &.signIn{
      position: relative;
      top: -60px;
    }
    &:focus { 
      outline: 0; 
      }
    &:hover {
      background-color: #006093;
    }
    @media(max-width: 450px) {
      width: 180px;
      letter-spacing: 1px;
      font-size: 16px;
    }
  }`;

export const SingleInputWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: ${(props) => props.icon && '20px'};
  position: relative;
    &.strech{
      color: red;
      justify-content: flex-end;
      width: 55%;
      font-size: 14px;
      color: #5D8AA6;
    }
`;
