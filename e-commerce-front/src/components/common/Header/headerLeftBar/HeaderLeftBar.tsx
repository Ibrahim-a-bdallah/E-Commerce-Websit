import LogoCart from "@assets/svg/cart.svg?react";
import LogoWishlist from "@assets/svg/wislist.svg?react";
import getCartQauntitySelctor from "@store/selctores";
import HeaderIconsHandler from "../HeaderIconsHandler/HeaderIconsHandler";

import style from "./style.module.css";
import { useAppSelector } from "@store/hook";

const { headerLeftBar } = style;

const HeaderLeftBar = () => {
  const { accessToken } = useAppSelector((state) => state.auth);
  return (
    <div className={headerLeftBar}>
      {accessToken && (
        <HeaderIconsHandler
          navigated="/wishlist"
          svgIcon={
            <LogoWishlist
              title="wishlist icon"
              className="bg_childes"
              style={{ color: "red" }}
            />
          }
          QuantityURL={(state) => state.wishlist.itemsId.length}
          title="Wishlist"
        />
      )}
      <HeaderIconsHandler
        navigated="/cart"
        svgIcon={<LogoCart title="basket icon" className="bg_childes" />}
        QuantityURL={getCartQauntitySelctor}
        title="Cart"
      />
    </div>
  );
};

export default HeaderLeftBar;
