import React, { useState } from "react";
import QRCode from "react-qr-code";
import { useRecoilValue } from "recoil";
import { StyledButton } from "../styledComponents/styledLogin";
import QrModal from "../Components/QrModal";
import {
  StyledDashboardWarpper,
  Wrapper,
  QrItem,
} from "../styledComponents/styledDashboard";
import { userState } from "../recoilState/recoilAtoms";

const Dashboard = () => {
  const [show, setShow] = useState(false);
  const [qrCodes, setQrCodes] = useState([
    { amount: "50zł", date: "17.11.2021", value: "asdhjhgjasd" },
    { amount: "100zł", date: "02.09.2021", value: "asdhjhgjasd" },
    { amount: "70zł", date: "23.05.2021", value: "asdhjhgjasd" },
  ]);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const txt = useRecoilValue(userState);
  
  const updateData = (childState) => {
    childState.amount = childState.amount.concat("zł")
    setShow(false)
    qrCodes.push(childState)
  }


  return (
    <>
      <StyledDashboardWarpper>
        <Wrapper head>
          <h4>
            {txt} ponownie{" "}
            {sessionStorage
              .getItem("login")
              .substring(0, sessionStorage.getItem("login").lenght)}
          </h4>
        </Wrapper>

        <Wrapper />
        <Wrapper head>
          <h5>aktywne kody</h5>
        </Wrapper>
        <hr />
        <Wrapper>
          {qrCodes.map((item) => {
            return (
              <QrItem>
                <h3>{item.amount}</h3>
                <QRCode value={item.value} size={100} />
                <h6>{item.date}</h6>
              </QrItem>
            );
          })}
          {/* <QrItem>
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
          </QrItem> */}
        </Wrapper>
        <hr />
        <Wrapper>
          <StyledButton onClick={handleShow}>nowy QR</StyledButton>
        </Wrapper>
        <hr />
        <Wrapper />
        <Wrapper head>
          <h5>użyte kody</h5>
        </Wrapper>
        <Wrapper>
          <QrItem>
            <h3>50zł</h3>
            <QRCode value="asdhjhgjasd" size="100" fgColor="#C0C0C0" />
            <h6>17.11.2021</h6>
          </QrItem>
          <QrItem>
            <h3>25zł</h3>
            <QRCode value="asdghjghjasd" size="100" fgColor="#C0C0C0" />
            <h6>11.02.2021</h6>
          </QrItem>
          <QrItem>
            <h3>120zł</h3>
            <QRCode value="asdaghjgjsd" size="100" fgColor="#C0C0C0" />
            <h6>07.15.2021</h6>
          </QrItem>
        </Wrapper>
        <hr />
        <Wrapper>
          <StyledButton className="second" onClick={handleShow}>historia</StyledButton>
        </Wrapper>
        <hr />
      </StyledDashboardWarpper>
      <QrModal show={show} handleClose={handleClose} updateData={(childState) => updateData(childState)}/>
    </>
  );
};

export default Dashboard;