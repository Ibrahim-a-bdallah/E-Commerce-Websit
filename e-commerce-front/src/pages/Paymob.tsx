import Loading from "@components/feedback/loading/Loading";
import PaymentIframe from "@components/paymob/PaymentIframe";
import { useAppSelector } from "@store/hook";

const Paymob = () => {
  const payment = useAppSelector((state) => state.paymob);
  const { payment_key, loading, error } = payment;

  const iframeId = import.meta.env.IFRAME || 917571;
  return (
    <Loading loading={loading} error={error} type="category">
      <div>
        <PaymentIframe iframeId={iframeId} paymentToken={payment_key} />
      </div>
    </Loading>
  );
};

export default Paymob;
