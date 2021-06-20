import styled from 'styled-components';

export const Container = styled.div`
  padding-top: 30px;
  width: 80%; 
  margin: 0 auto;
  text-align: left;
  margin-top: 10px;
`;

export const RegisterForm = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const StyledInput = styled.input`
  width: 50%;
  @media(max-width: 800px) {
    width: 80%;
  }
`;