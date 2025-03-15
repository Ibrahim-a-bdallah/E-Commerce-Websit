import { useNavigate } from "react-router-dom";
import styles from "./styles.module.css";
import React, { memo, useEffect, useState } from "react";
import { useAppSelector } from "@store/hook";
import { RootState } from "@store/index";
const { basketContainer, basketQuantity, pumpCartQuantity, basketCart } =
  styles;

type TIconsProps = {
  QuantityURL: (state: RootState) => number;
  navigated: string;
  svgIcon: React.ReactNode;
  title: string;
};

const HeaderIconsHandler = memo(
  ({ QuantityURL, navigated, svgIcon, title }: TIconsProps) => {
    const Quantity = useAppSelector(QuantityURL);
    const [isAnimated, setIsAnimated] = useState(false);
    const navigat = useNavigate();

    const basketQuantityStyle = isAnimated
      ? `${basketQuantity} ${pumpCartQuantity}`
      : `${basketQuantity}`;

    useEffect(() => {
      if (Quantity <= 0) {
        setIsAnimated(false);
      } else {
        setIsAnimated(true);

        const debounc = setTimeout(() => {
          setIsAnimated(false);
        }, 300);
        return () => clearTimeout(debounc);
      }
    }, [Quantity]);

    return (
      <div className={basketContainer} onClick={() => navigat(`${navigated}`)}>
        <div className={basketCart}>
          {svgIcon}
          {Quantity > 0 && (
            <div className={basketQuantityStyle}>{Quantity}</div>
          )}
        </div>
        <h3>{title}</h3>
      </div>
    );
  }
);

export default HeaderIconsHandler;
