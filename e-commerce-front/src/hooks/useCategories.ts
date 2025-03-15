import { useAppDispatch, useAppSelector } from "@store/hook";
import { useEffect } from "react";
import {
  actGetcategories,
  cleanupCategoriesRecords,
} from "@store/categories/categoriesSlice";

export const useCategories = () => {
  const dispatch = useAppDispatch();
  const { records, loading, error } = useAppSelector(
    (state) => state.categories
  );
  useEffect(() => {
    const promise = dispatch(actGetcategories());

    return () => {
      promise.abort();

      dispatch(cleanupCategoriesRecords());
    };
  }, [dispatch]);

  return { records, loading, error };
};
