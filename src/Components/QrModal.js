import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import { StyledButton, StyledSpan } from '../styledComponents/styledLogin';
import { ModalWrapper } from '../styledComponents/styledModal';
import QrCodeGenerator from './QrCodeGenerator';

const QrModal = ({show, handleClose}) => {

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

         <QrCodeGenerator />

        </Modal.Body>
        <Modal.Footer>
          <StyledButton dissmiss className="QrModal" variant="secondary" onClick={handleClose}>
            zamknij
          </StyledButton>
          <StyledButton className="QrModal" variant="primary">utwórz kod!</StyledButton>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default QrModal;
