import React, { useState } from 'react';
import QRCode from 'react-qr-code';
import { StyledButton } from '../styledComponents/styledLogin';
import QrModal from '../Components/QrModal';
import { StyledDashboardWarpper, Wrapper, QrItem } from '../styledComponents/styledDashboard';

const Dashboard = () => {
  const [show, setShow] = useState(true);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <StyledDashboardWarpper>
        <Wrapper head>
          <h4>
            Witaj ponownie Tomasz
          </h4>
        </Wrapper>
        <Wrapper>
          <StyledButton onClick={handleShow}>generuj QR</StyledButton>
          <StyledButton>Historia</StyledButton>
        </Wrapper>
        <hr />
        <Wrapper>
          <QrItem>
            <h3>50zł</h3>
            <QRCode value="asdhjhgjasd" size="100" />
            <h6>17.11.2021</h6>
          </QrItem>
          <QrItem>
            <h3>25zł</h3>
            <QRCode value="asdghjghjasd" size="100" />
            <h6>11.02.2021</h6>
          </QrItem>
          <QrItem>
            <h3>120zł</h3>
            <QRCode value="asdaghjgjsd" size="100" />
            <h6>07.15.2021</h6>
          </QrItem>
        </Wrapper>
        <hr />
      </StyledDashboardWarpper>
      <QrModal
        show={show}
        handleClose={handleClose}
      />
    </>
  );
};

export default Dashboard;
