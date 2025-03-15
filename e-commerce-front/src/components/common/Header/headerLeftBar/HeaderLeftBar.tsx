import LogoCart from "@assets/svg/cart.svg?react";
import LogoWishlist from "@assets/svg/wislist.svg?react";
import getCartQauntitySelctor from "@store/selctores";
import HeaderIconsHandler from "../HeaderIconsHandler/HeaderIconsHandler";

import style from "./style.module.css";

const { headerLeftBar } = style;

const HeaderLeftBar = () => {
  return (
    <div className={headerLeftBar}>
      <HeaderIconsHandler
        navigated="/wishlist"
        svgIcon={<LogoWishlist title="wishlist icon" />}
        QuantityURL={(state) => state.wishlist.itemsId.length}
        title="Wishlist"
      />
      <HeaderIconsHandler
        navigated="/cart"
        svgIcon={<LogoCart title="basket icon" />}
        QuantityURL={getCartQauntitySelctor}
        title="Cart"
      />
    </div>
  );
};

export default HeaderLeftBar;
