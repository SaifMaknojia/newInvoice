import React from "react";
import { Navbar, Container } from "react-bootstrap";
import Profile from "../assets/image-avatar.jpg";
import Logo from "../assets/logo.svg";

const Header = () => {
  const logo = {
    width: "48px",
    borderRadius: "50%"
  };
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand className="pointer">
          <img style={{ width: "35px" }} src={Logo} alt="logo" />
        </Navbar.Brand>
        <Navbar.Brand className="pointer">
          <img style={logo} src={Profile} alt="profile" />
        </Navbar.Brand>
      </Container>
    </Navbar>
  );
};

export default Header;
