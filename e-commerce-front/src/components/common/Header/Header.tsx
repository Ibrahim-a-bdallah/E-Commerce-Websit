import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import styles from "./style.module.css";
import { NavLink } from "react-router-dom";
import HeaderSideBar from "./headerLeftBar/HeaderLeftBar";
import { useAppDispatch, useAppSelector } from "@store/hook";
import { logOut } from "@store/signInAuth/authSlice";
import { useEffect, useState } from "react";
import actGetWishlist from "@store/wishlist/act/actGetWishlist";
import LogoSun from "@assets/svg/sun-2-svgrepo-com.svg?react";
import LogoMoon from "@assets/svg/moon-svgrepo-com.svg?react";

const { headerContainer, headerLogo, navstyle, button_bg, navLink, form } =
  styles;
export const Header = () => {
  const dispatch = useAppDispatch();
  const { accessToken, user } = useAppSelector((state) => state.auth);

  useEffect(() => {
    if (accessToken) {
      dispatch(actGetWishlist("ProductIds"));
    }
  }, [dispatch, accessToken]);

  const [isDarkMode, setIsDarkMode] = useState("light");

  const handleMood = () => {
    if (isDarkMode === "dark") {
      document.documentElement.style.setProperty(
        "--color-background-mood",
        "#081229"
      );
      document.documentElement.style.setProperty("--color-text-mood", "#fff");
      setIsDarkMode("light");
    } else {
      document.documentElement.style.setProperty(
        "--color-background-mood",
        "white"
      );
      document.documentElement.style.setProperty("--color-text-mood", "black");
      setIsDarkMode("dark");
    }
  };

  const logo = `col-2 col-md-4 ${headerLogo}`;
  return (
    <header>
      <div className={headerContainer}>
        <h1 className={logo}>
          <span>Tika</span>
        </h1>
        <div className={navLink}>
          <Navbar className={navstyle}>
            <Container>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse
                className="justify-content-center"
                id="basic-navbar-nav"
              >
                <Nav>
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
            </Container>
          </Navbar>
          <div className={button_bg}></div>
        </div>
        <div className="col-4 d-flex justify-content-center align-items-center gap-md-2 ms-1">
          <div className="d-flex align-items-center gap-md-2">
            <HeaderSideBar />
            <div />
          </div>

          {isDarkMode !== "dark" ? (
            <LogoSun
              width="30px"
              height="30px"
              overflow="visible"
              cursor="pointer"
              onClick={() => handleMood()}
              className="mood"
            />
          ) : (
            <LogoMoon
              width="30px"
              height="30px"
              overflow="visible"
              cursor="pointer"
              onClick={() => handleMood()}
              className="mood"
            />
          )}

          <div>
            {!accessToken ? (
              <Nav className={form}>
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
          </div>
        </div>
      </div>
    </header>
  );
};
