import { useEffect } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link } from "react-router-dom";
import { NavLink } from "reactstrap";

function NavBar() {
  const user = JSON.parse(localStorage.getItem("user"));
  let isAdmin = user?.isAdmin;
  const handleLogout = () => {
    localStorage.removeItem("user");
    window.location.href = "/login";
  };
  const token = localStorage.getItem("user");

  if (user) {
    return (
      <Navbar style={{background:'rgb(12,76,145)'}} variant="dark" expand="lg" className="header p-3 g-0">
        <Container>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto" style={{ fontSize: "18px" }}>
              <Nav.Link href="/" className="text-white">
                Home
              </Nav.Link>
              <Nav.Link href="/about" className="text-white">
                About
              </Nav.Link>
              <Nav.Link href="/gallery" className="text-white">
                Gallery
              </Nav.Link>
              <Nav.Link href="/contact" className="text-white">
                Contact
              </Nav.Link>
              <Nav.Link href="/booking" className="text-white">
                Book Now
              </Nav.Link>
              <Nav.Link href="/reservation" className="text-white">
                Resevation
              </Nav.Link>
              <Nav.Link href="/payment" className="text-white">
                Payment
              </Nav.Link>
              <Nav.Link href="/job" className="text-white">
                Job
              </Nav.Link>
              <Nav.Link href="/blogs" className="text-white">
Blogs              </Nav.Link>
            </Nav>
            <Nav className="ml-auto text-white">
              {user ? (
                <NavDropdown
                  title={user?.firstName}
                  id="basic-nav-dropdown"
                  menuVariant="dark"
                >
                  {isAdmin === "true" ? (
                    <NavDropdown.Item href="/dashboard">
                      Dashboard
                    </NavDropdown.Item>
                  ) : (
                    ""
                  )}

                  <NavDropdown.Item href="/profile">Profile</NavDropdown.Item>
                  <NavDropdown.Item>
                    <p>
                      <button
                        style={{
                          background: "none",
                          border: "none",
                          color: "white",
                        }}
                        onClick={handleLogout}
                      >
                        Logout
                      </button>
                    </p>
                  </NavDropdown.Item>
                </NavDropdown>
              ) : (
                <NavLink className="text-white" href="/login">
                  Log In
                </NavLink>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  } else {
    return (
      <Navbar bg="dark" variant="dark" expand="lg" className="p-3 g-0">
        <Container>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto" style={{ fontSize: "18px" }}>
              <Nav.Link href="/" className="text-white">
                Home
              </Nav.Link>
              <Nav.Link href="/about" className="text-white">
                About
              </Nav.Link>
              <Nav.Link href="/gallery" className="text-white">
                Gallery
              </Nav.Link>
              <Nav.Link href="/contact" className="text-white">
                Contact
              </Nav.Link>
            </Nav>
            <Nav className="ml-auto">
              {user ? (
                <NavDropdown
                  className="text-white"
                  title={user?.firstName}
                  id="basic-nav-dropdown"
                  menuVariant="dark"
                >
                  {isAdmin === "true" ? (
                    <NavDropdown.Item href="/dashboard">
                      Dashboard
                    </NavDropdown.Item>
                  ) : (
                    ""
                  )}

                  <NavDropdown.Item href="/profile">Profile</NavDropdown.Item>
                  <NavDropdown.Item>
                    <p>
                      <button
                        style={{
                          background: "none",
                          border: "none",
                          color: "white",
                        }}
                        onClick={handleLogout}
                        className="text-white"
                      >
                        logout
                      </button>
                    </p>
                  </NavDropdown.Item>
                </NavDropdown>
              ) : (
                <NavLink href="/login">Log In</NavLink>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  }
}

export default NavBar;
