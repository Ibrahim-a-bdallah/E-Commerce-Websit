import { useAppDispatch, useAppSelector } from "@store/hook";
import {
  actGetproducts,
  cleanupProductRecords,
} from "@store/products/productsSlice";
import { useParams } from "react-router-dom";
import { useEffect } from "react";

export const useProducts = () => {
  const param = useParams();
  const dispatch = useAppDispatch();
  const { error, loading, records } = useAppSelector((state) => state.products);
  const wishlist = useAppSelector((state) => state.wishlist);
  const items = useAppSelector((state) => state.cart.items);

  useEffect(() => {
    const promise = dispatch(actGetproducts(param.prefix as string));
    return () => {
      promise.abort();
      dispatch(cleanupProductRecords());
    };
  }, [dispatch, param]);
  console.log(records);
  const productFullInfo = records.map((el) => ({
    ...el,
    quantity: items[el._id] || 0,
    like: wishlist.itemsId.includes(el._id),
  }));

  return { productFullInfo, loading, error, param };
};
