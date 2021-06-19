import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const StyledLink = styled(Link)`
  color: #00a2f9;
    &:hover{
      color: #006093;
      text-decoration: none;
    }
`;

export const LogoImg = styled.img`
  width: 30%;
  margin-right: -45px;
    &.nav{
      width: 25%;
      margin-right: -20px;
    };
`;

export const Logo = styled.div`
  font-size: 24px;
  color: #00a2f9;
  font-weight: 500;
  letter-spacing: 2px;
  display: flex;
  align-items: center;
`;
