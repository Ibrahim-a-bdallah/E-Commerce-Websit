import { Link } from "react-router-dom";
import styles from "./styles.module.css";
import { TCategory } from "@type";
const { category, categoryImg, categoryTitle } = styles;

export const Category = ({ title, img, prefix }: TCategory) => {
  return (
    <div className={category}>
      <Link to={`/categories/products/${prefix}`}>
        <div className={categoryImg}>
          <img src={img} alt={title} />
          {/* <link rel="preload" href={img} as="image" /> */}
        </div>
        <div className={categoryTitle}>{title}</div>
      </Link>
    </div>
  );
};
