import React, { useState } from 'react';
import QRCode from 'react-qr-code';
import { ModalWrapper } from '../styledComponents/styledModal';

const QrCodeGenerator = () => {
const [nameQr, setNameQr] = useState('');

  return (
    <div>
    <ModalWrapper>
      <div>
        <div>
          <input type="text" placeholder="nazwa kodu" value={nameQr} onChange={(e) => setNameQr(e.target.value)} />
        </div>
        <div>
          <input type="number" placeholder="przelej" />
        </div>
        <div>
          <input type="date" placeholder="temin" />
        </div>
      </div>
      <div>
        <QRCode size="180" value={nameQr} />
      </div>
    </ModalWrapper>
  </div>
);
};

export default QrCodeGenerator;
