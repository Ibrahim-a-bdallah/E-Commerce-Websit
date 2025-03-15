import Heading from "@components/common/Heading/heading";
import { SubTotal } from "@components/eCommerce";
import CartItemsList from "@components/eCommerce/CartItemsList/CartItemsList";
import Loading from "@components/feedback/loading/Loading";
import LottieHandler from "@components/feedback/LottieHandler/LottieHandler";
import { useCart } from "@hooks/useCart";

const Cart = () => {
  const { products, total, removeProduct, changedQuantity, error, loading } =
    useCart();
  return (
    <>
      <Heading title="Cart" />
      <Loading loading={loading} error={error} type="cart">
        {products.length > 0 ? (
          <>
            <CartItemsList
              products={products}
              changeQuantity={changedQuantity}
              removeProduct={removeProduct}
            />
            <SubTotal total={total} />
          </>
        ) : (
          <LottieHandler styled="" type="empty" message="Your Cart is Empty" />
        )}
      </Loading>
    </>
  );
};

export default Cart;
