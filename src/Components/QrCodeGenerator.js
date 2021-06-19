import React from 'react';
import QRCode from 'react-qr-code';
import { ModalWrapper } from '../styledComponents/styledModal';

const QrCodeGenerator = () => (
  <div>
    <ModalWrapper>
      <div>
        <div>
          <input type="text" placeholder="nazwa kodu" />
        </div>
        <div>
          <input type="text" placeholder="przelej" />
        </div>
        <div>
          <input type="date" placeholder="temin" />
        </div>
      </div>
      <div>
        <QRCode size="200" value="" />
      </div>
    </ModalWrapper>
  </div>
);

export default QrCodeGenerator;
