import { useAppDispatch } from "@store/hook";
import actGetPaymobKey from "@store/paymob/actGetPaymobKey/actGetPaymobKey";
import { PaymentKeyRequestSchemaType } from "@type/paymobKey.type";
import { useEffect, useState } from "react";
import { Button, Spinner } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const CheckOut = () => {
  const dispatch = useAppDispatch();

  const navigate = useNavigate();

  const [disableBtn, setdisableBtn] = useState(false);

  const payload: PaymentKeyRequestSchemaType = {
    amount_cents: 10000,
    items: [
      {
        name: "White T-Shirt",
        amount_cents: 10000,
        description: "Size: M",
        quantity: 1,
      },
    ],
    billing_data: {
      apartment: "803",
      email: "test@example.com",
      floor: "42",
      first_name: "John",
      street: "Example Street",
      building: "12B",
      phone_number: "+201234567890",
      shipping_method: "PKG",
      postal_code: "12345",
      city: "Cairo",
      country: "EG",
      last_name: "Doe",
      state: "Cairo",
    },
    currency: "EGP",
  };

  const redirect = () => {
    setdisableBtn(true);
    dispatch(actGetPaymobKey(payload))
      .unwrap()
      .then(() => navigate("/paymobIframe"));
  };

  useEffect(() => {
    if (!disableBtn) {
      return;
    }
    const debounc = setTimeout(() => {
      setdisableBtn(false);
    }, 300);
    return () => clearTimeout(debounc);
  }, [disableBtn]);
  return (
    <>
      <Button
        className="btn-primary w-100"
        onClick={redirect}
        variant="into"
        disabled={disableBtn}
      >
        {disableBtn ? (
          <>
            <Spinner animation="border" size="sm" /> loading...
          </>
        ) : (
          "CheckOut"
        )}
      </Button>
    </>
  );
};

export default CheckOut;
