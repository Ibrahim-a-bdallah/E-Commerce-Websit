import { Badge, Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import styles from "./style.module.css";
import { NavLink } from "react-router-dom";
import HeaderSideBar from "./headerLeftBar/HeaderLeftBar";
import { useAppDispatch, useAppSelector } from "@store/hook";
import { logOut } from "@store/signInAuth/authSlice";
import { useEffect } from "react";
import actGetWishlist from "@store/wishlist/act/actGetWishlist";

const { headerContainer, headerLogo } = styles;
export const Header = () => {
  const dispatch = useAppDispatch();
  const { accessToken, user } = useAppSelector((state) => state.auth);

  useEffect(() => {
    if (accessToken) {
      dispatch(actGetWishlist("ProductIds"));
    }
  }, [dispatch, accessToken]);

  return (
    <header>
      <div className={headerContainer}>
        <h1 className={headerLogo}>
          <span>Our</span> <Badge bg="info">Ecom</Badge>
        </h1>
        <div className="d-flex justify-content-center align-items-center gap-2 ">
          <div className="d-flex align-items-center gap-2">
            <HeaderSideBar />
            <div />
          </div>
        </div>
      </div>
      <Navbar
        expand="lg"
        className="bg-body-tertiary mb-3"
        bg="dark"
        data-bs-theme="dark"
      >
        <Container>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={NavLink} to="/">
                Home
              </Nav.Link>
              <Nav.Link as={NavLink} to="/categories">
                Categories
              </Nav.Link>
              <Nav.Link as={NavLink} to="/about-us">
                AboutUs
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
          {!accessToken ? (
            <Nav className="d-flex flex-row gap-2">
              <Nav.Link as={NavLink} to="login">
                Login
              </Nav.Link>
              <Nav.Link as={NavLink} to="register">
                Register
              </Nav.Link>
            </Nav>
          ) : (
            <NavDropdown
              className="bg-white"
              title={`Welcome: ${user?.firstName} ${user?.lastName} `}
              id="basic-nav-dropdown"
            >
              <NavDropdown.Item as={NavLink} to="profile">
                Profile
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item
                as={NavLink}
                to="/"
                onClick={() => dispatch(logOut())}
              >
                LogOut
              </NavDropdown.Item>
            </NavDropdown>
          )}
        </Container>
      </Navbar>
    </header>
  );
};
