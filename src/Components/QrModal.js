import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import { StyledButton, StyledSpan } from "../styledComponents/styledLogin";
import { ModalWrapper } from "../styledComponents/styledModal";
import QRCode from "react-qr-code";

const QrModal = ({ show, handleClose,updateData }) => {
  const [state, setState] = useState({
    value: "",
    amount: "",
    date: "",
  });

  const handleChange = (event) => {
    setState({
      ...state,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>Wygeneruj nowy QRcode</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <ModalWrapper>
            <div>
              <div>
                <input
                  type="text"
                  name="value"
                  placeholder="nazwa kodu"
                  onChange={handleChange}
                />
              </div>
              <div>
                <input name="amount" type="number" placeholder="kwota" onChange={handleChange}/>
              </div>
              <div>
                <input name="date" type="date" placeholder="termin" onChange={handleChange}/>
              </div>
            </div>
            <div>
              <QRCode size="180" value={state.value} />
            </div>
          </ModalWrapper>
        </Modal.Body>
        <Modal.Footer>
          <StyledButton
            dissmiss
            className="QrModal"
            variant="secondary"
            onClick={handleClose}
          >
            zamknij
          </StyledButton>
          <StyledButton className="QrModal" variant="primary" onClick={()=> updateData(state)}>
            utwórz kod!
          </StyledButton>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default QrModal;
