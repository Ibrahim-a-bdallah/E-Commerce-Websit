import { Container, Dropdown, Nav, Navbar } from "react-bootstrap";
import styles from "./style.module.css";
import { NavLink } from "react-router-dom";
import HeaderSideBar from "./headerLeftBar/HeaderLeftBar";
import LogoSun from "@assets/svg/sun-2-svgrepo-com.svg?react";
import { logOut } from "@store/signInAuth/authSlice";
import LogoMoon from "@assets/svg/moon-svgrepo-com.svg?react";
import User from "@assets/svg/user.svg?react";
import useHeader from "@hooks/useHeader";

const { headerContainer, headerLogo, navstyle, button_bg, navLink, form } =
  styles;
export const Header = () => {
  const { user, accessToken, handleMood, isDarkMode, dispatch } = useHeader();
  return (
    <header>
      <div className={headerContainer}>
        <h1 className={`col-2 col-md-3 ${headerLogo}`}>
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

          {isDarkMode === "dark" ? (
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
              <Dropdown>
                <Dropdown.Toggle
                  variant="success"
                  id="dropdown-basic"
                  className="no-arrow"
                >
                  <User
                    width="30px"
                    height="30px"
                    overflow="visible"
                    cursor="pointer"
                    className="mood fill"
                    title={user?.firstName}
                  />
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item as={NavLink} to="profile">
                    Profile
                  </Dropdown.Item>
                  <Dropdown.Item as={NavLink} to="/settings">
                    Settings
                  </Dropdown.Item>
                  <Dropdown.Divider />
                  <Dropdown.Item
                    as={NavLink}
                    to="/home"
                    onClick={() => dispatch(logOut())}
                  >
                    LogOut
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};
