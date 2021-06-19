import styled from 'styled-components';
import QRCode from 'react-qr-code';

export const StyledDashboardWarpper = styled.div`
  width: 80%;
  height: 70vh;
  margin: 50px auto 0;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: ${(props) => props.head ? 'flex-start' : 'center'};
`;

export const QrItem = styled.div`
  margin: 20px;
  text-align: center;
`;
