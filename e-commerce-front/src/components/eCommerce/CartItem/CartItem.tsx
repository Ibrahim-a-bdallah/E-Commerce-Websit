import { Form, Button } from "react-bootstrap";
import { TProduct } from "@type";
import style from "./style.module.css";
import { memo } from "react";
const { cartItem, product, productImg, productInfo, cartItemSelection } = style;

type changeQuantity = {
  changeQuantity: (id: number, quantity: number) => void;
  removeProduct: (id: number) => void;
};

const CartItem = memo(
  ({
    id,
    title,
    price,
    quantity,
    max,
    img,
    changeQuantity,
    removeProduct,
  }: TProduct & changeQuantity) => {
    const renderOptions = Array(max)
      .fill(0)
      .map((_, i) => {
        const quantity = i + 1;
        return (
          <option value={quantity} key={quantity}>
            {quantity}
          </option>
        );
      });
    const eventChangeQuantity = (
      event: React.ChangeEvent<HTMLSelectElement>
    ) => {
      const quantity = +event.target.value;
      changeQuantity(id, quantity);
    };

    return (
      <div className={`${cartItem} d-flex gap-3 align-items-center`}>
        <div className={product}>
          <div className={productImg}>
            {/* <img style={{ width: "100px" }} src={img} alt={title} /> */}
            <link
              style={{ width: "100px" }}
              rel="preload"
              href={img}
              as="image"
            />
          </div>
          <div className={productInfo}>
            <h2>{title}</h2>
            <p>{price.toFixed(2)}</p>
            <Button onClick={() => removeProduct(id)}>remove</Button>
          </div>
        </div>

        <div className={cartItemSelection}>
          <span className="d-block mb-1">Quantity</span>
          <Form.Select value={quantity} onChange={eventChangeQuantity}>
            {renderOptions}
          </Form.Select>
        </div>
      </div>
    );
  }
);

export default CartItem;
