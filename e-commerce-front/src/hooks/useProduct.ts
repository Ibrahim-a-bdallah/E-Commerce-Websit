import { useAppDispatch, useAppSelector } from "@store/hook";
import { addToast } from "@store/toasts/ToastsSlice";
import { addtocart } from "@store/Cart/CartSlice";
import { actLikeToggle } from "@store/wishlist/wishlistSlice";
import { useEffect, useState } from "react";

type TProps = {
  _id: number;
  max: number;
  quantity: number;
};
export const useProduct = ({ _id, max, quantity }: TProps) => {
  const dispatch = useAppDispatch();

  const { accessToken } = useAppSelector((state) => state.auth);

  const [disableBtn, setdisableBtn] = useState(false);

  const [isLoading, setIsLoading] = useState(false);

  const currentReminingQuantity = max - (quantity ?? 0);

  const QuantityReachedToMax = currentReminingQuantity <= 0;

  const addToCartHandler = () => {
    setdisableBtn(true);
    dispatch(
      addToast({
        title: "Product added to cart",
        message: "Product added to cart successfully",
        type: "success",
      })
    );
    dispatch(addtocart(_id));
  };

  //disable

  useEffect(() => {
    if (!disableBtn) {
      return;
    }
    const debounc = setTimeout(() => {
      setdisableBtn(false);
    }, 300);
    return () => clearTimeout(debounc);
  }, [disableBtn]);

  const likedHandler = () => {
    if (!isLoading && accessToken) {
      setIsLoading(true);
      dispatch(actLikeToggle(_id))
        .unwrap()
        .then(() => setIsLoading(false))
        .catch(() => setIsLoading(false));
    }
    if (!accessToken) {
      dispatch(
        addToast({
          title: "Please Login",
          message: "Please Login to can add the product in your wishlist",
          type: "warning",
        })
      );
    }
  };
  return {
    likedHandler,
    addToCartHandler,
    QuantityReachedToMax,
    currentReminingQuantity,
    disableBtn,
    isLoading,
  };
};
