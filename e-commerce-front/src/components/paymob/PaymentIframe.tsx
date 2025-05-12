// PaymentIframe.tsx
import React from "react";

interface PaymentIframeProps {
  iframeId: string;
  paymentToken: string;
}

const PaymentIframe: React.FC<PaymentIframeProps> = ({
  iframeId,
  paymentToken,
}) => {
  const iframeUrl = `https://accept.paymob.com/api/acceptance/iframes/${iframeId}?payment_token=${paymentToken}`;

  return (
    <iframe
      src={iframeUrl}
      width="100%"
      height="600"
      frameBorder="0"
      allow="payment"
      title="Paymob Payment"
    ></iframe>
  );
};

export default PaymentIframe;
