import { TProduct } from "@type";
import CartItem from "../CartItem/CartItem";

type CartItemListProps = {
  products: TProduct[];
  changeQuantity: (id: number, quantity: number) => void;
  removeProduct: (id: number) => void;
};

const CartItemsList = ({
  products,
  changeQuantity,
  removeProduct,
}: CartItemListProps) => {
  const renderList = products.map((el) => (
    <CartItem
      key={el.id}
      {...el}
      changeQuantity={changeQuantity}
      removeProduct={removeProduct}
    />
  ));
  return <div>{renderList}</div>;
};

export default CartItemsList;
