import styles from "./styles.module.css";
import { Button, Spinner } from "react-bootstrap";
import UnLike from "@assets/svg/unlike.svg?react";
import Like from "@assets/svg/like.svg?react";
import { TProduct } from "@type";
import { memo } from "react";
import { useProduct } from "@hooks/useProduct";
const { product, productImg, maximumNotice, wishlist } = styles;

const Product = memo(
  ({ id, title, img, price, max, quantity, like }: TProduct) => {
    const {
      likedHandler,
      addToCartHandler,
      QuantityReachedToMax,
      disableBtn,
      currentReminingQuantity,
      isLoading,
    } = useProduct({ id, max, quantity: quantity ?? 0 });
    return (
      <div className={product}>
        <div className={wishlist} onClick={likedHandler}>
          {isLoading ? (
            <Spinner animation="border" size="sm" variant="primary" />
          ) : like ? (
            <Like />
          ) : (
            <UnLike />
          )}
        </div>
        <div className={productImg}>
          {/* <img src={img} alt={title} /> */}
          <link rel="preload" href={img} as="image" />
        </div>
        <h2>{title}</h2>
        <h3>{price.toFixed(2)} EGP</h3>
        <p className={maximumNotice}>
          {QuantityReachedToMax
            ? "You reach to limit"
            : `you can add ${currentReminingQuantity} item(s) to cart`}
        </p>
        <Button
          className="btn-primary"
          onClick={addToCartHandler}
          variant="into"
          disabled={disableBtn || QuantityReachedToMax}
        >
          {disableBtn ? (
            <>
              <Spinner animation="border" size="sm" /> loading...
            </>
          ) : (
            "Add to Cart"
          )}
        </Button>
      </div>
    );
  }
);

export default Product;
