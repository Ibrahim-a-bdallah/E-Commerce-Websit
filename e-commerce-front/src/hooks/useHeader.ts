import { useAppDispatch, useAppSelector } from "@store/hook";
import { useEffect, useState } from "react";
import actGetWishlist from "@store/wishlist/act/actGetWishlist";

const useHeader = () => {
  const dispatch = useAppDispatch();
  const { accessToken, user } = useAppSelector((state) => state.auth);
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const savedMode = localStorage.getItem("darkMode");
    return savedMode ? JSON.parse(savedMode) : "light";
  });

  useEffect(() => {
    if (accessToken) {
      dispatch(actGetWishlist("ProductIds"));
    }
  }, [dispatch, accessToken]);

  useEffect(() => {
    if (isDarkMode === "dark") {
      document.documentElement.style.setProperty(
        "--color-background-mood",
        "#081229"
      );
      document.documentElement.style.setProperty("--color-text-mood", "#fff");
    } else {
      document.documentElement.style.setProperty(
        "--color-background-mood",
        "white"
      );
      document.documentElement.style.setProperty("--color-text-mood", "black");
    }
    // حفظ الحالة في localStorage
    localStorage.setItem("darkMode", JSON.stringify(isDarkMode));
  }, [isDarkMode]);

  // دالة التبديل بين الوضعين
  const handleMood = () => {
    setIsDarkMode((prevMode: string) =>
      prevMode === "dark" ? "light" : "dark"
    );
  };

  return { user, accessToken, dispatch, handleMood, isDarkMode };
};

export default useHeader;
