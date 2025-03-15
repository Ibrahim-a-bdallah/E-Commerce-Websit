import { useAppSelector } from "@store/hook"
import ToastItems from "./ToastItems"
import styles from "./styles.module.css"

const { toastList } = styles

export const ToastList = () => {
  const { records } = useAppSelector(state => state.toasts)
  return (
    <div className={toastList}>
      {records.map(({ id, title, message, type }) => <ToastItems key={id} id={id} title={title} message={message} type={type} />)}
    </div>
  )
}
