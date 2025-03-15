import { TToast } from "@type";
import styles from "./styles.module.css";
import { useToastItems } from "@hooks/useToastItems";

const { toastItem } = styles;

const ToastItems = ({ title, message, type, id }: TToast) => {
  const {
    handleMouseEvent,
    progressBarIndicator,
    closeToastHandler,
    intervalTime,
  } = useToastItems(id ?? "");
  return (
    <div
      className={`alert ${`alert-${type}`} ${toastItem}`}
      onMouseEnter={handleMouseEvent}
      onMouseLeave={handleMouseEvent}
    >
      <h5>{title ? title : type}</h5>
      <p>{message}</p>
      <button type="button" className="btn-close" onClick={closeToastHandler} />
      <span
        className="placeholder"
        style={{
          width: `${progressBarIndicator}%`,
          transition: `width ${intervalTime}ms linear`,
        }}
      ></span>
    </div>
  );
};

export default ToastItems;
