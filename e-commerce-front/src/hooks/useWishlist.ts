import { useAppDispatch, useAppSelector } from "@store/hook";
import actGetWishlist from "@store/wishlist/act/actGetWishlist";
import { cleanupWishlistProductFullinfo } from "@store/wishlist/wishlistSlice";
import { useEffect } from "react";

export const useWishlist = () => {
  const dispatch = useAppDispatch();
  const { productFullInfo, loading, error } = useAppSelector(
    (state) => state.wishlist
  );

  const items = useAppSelector((state) => state.cart.items);

  useEffect(() => {
    const promise = dispatch(actGetWishlist("productsFullInfo"));
    return () => {
      promise.abort();
      dispatch(cleanupWishlistProductFullinfo());
    };
  }, [dispatch]);

  const records = productFullInfo.map((el) => ({
    ...el,
    quantity: items[el._id],
    like: true,
  }));

  return { records, loading, error };
};
