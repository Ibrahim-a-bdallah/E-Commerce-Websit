import { Container } from "react-bootstrap";
import styles from "./style.module.css";
import { Header } from "@components/common/index";
import { Footer } from "@components/common/Footer/Footer";
import { Outlet } from "react-router-dom";
import { ToastList } from "@components/feedback";

const { container, wrapper } = styles;

export const MainLayouts = () => {
  return (
    <Container className={container}>
      <Header />
      <Outlet />
      <div className={wrapper}></div>
      <ToastList />
      <Footer />
    </Container>
  );
};
