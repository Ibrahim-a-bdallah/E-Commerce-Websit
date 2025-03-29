import actGetItems from "@store/Cart/acGetItems/acGetItems";
import {
  changeQuantity,
  CleanupCartProductFullinfo,
  removeItem,
} from "@store/Cart/CartSlice";
import { useAppDispatch, useAppSelector } from "@store/hook";
import { useCallback, useEffect } from "react";

export const useCart = () => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    const promise = dispatch(actGetItems());
    return () => {
      promise.abort();
      dispatch(CleanupCartProductFullinfo());
    };
  }, [dispatch]);
  const { error, loading, productFullinfo, items } = useAppSelector(
    (state) => state.cart
  );
  const products = productFullinfo.map((el) => ({
    ...el,
    quantity: items[el._id],
    total: items[el._id] * el.price,
  }));
  const changedQuantity = useCallback(
    (id: number, quantity: number) => {
      dispatch(changeQuantity({ id, quantity }));
    },
    [dispatch]
  );
  const removeProduct = useCallback(
    (id: number) => {
      dispatch(removeItem({ id }));
    },
    [dispatch]
  );

  const total = products.map((el) => el.total).reduce((a, b) => a + b, 0);
  return { products, total, removeProduct, changedQuantity, error, loading };
};
