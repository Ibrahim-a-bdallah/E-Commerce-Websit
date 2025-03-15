import style from "./style.module.css";
type TTotal = { total: number };

const SubTotal = ({ total }: TTotal) => {
  return (
    <div className={style.container}>
      <span>SubTotal:</span>
      <span>{total}</span>
    </div>
  );
};

export default SubTotal;
