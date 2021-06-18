import styled from 'styled-components';
import { Button } from 'react-bootstrap';

export const LoginWrapper = styled.div`
  width: 50%;
  height: 400px;
  border: solid grey 1px;
  border-radius: 10px;
  margin: 0 auto;
`;

export const InputsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const StyledButton = styled(Button)`
  background-color: #5D8AA6;
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
    &.signIn{
      position: relative;
      top: -60px;
    }
  @media(max-width: 980px){
    margin-left: 0;
    margin-right: 0;
    &.heroButton{
      margin-right: 20px;
    }
    };
    &:focus { 
      outline: 0; 
      }
    &:hover {
      background-color: #184059;
    }
  }`;

export const SingleInputWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: ${(props) => props.icon && '20px'};
  position: relative;
`;
