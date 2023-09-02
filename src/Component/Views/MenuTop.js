import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { React, useState } from "react";
import { Link, useNavigate } from "react-router-dom/dist";
import { Button } from "react-bootstrap";

const MenuTop = () => {
  let navigate = useNavigate();
  return (
    <div>
      <Navbar
        bg="primary"
        data-bs-theme="dark"
        collapseOnSelect
        expand="lg"
        className="bg-body-tertiary"
      >
        <Container fluid>
          <Navbar.Brand onClick={() => navigate("/home")}>
            {/* <img
              alt=""
                src="https://pelprek.sgp1.digitaloceanspaces.com/logo/6431/small-155920235931756.png"
              // src="https://assets.sutori.com/user-uploads/image/1d247cd1-9d87-44fa-97f4-a3c50fad0d15/699f3e38cb97222f235e0208227b7b50.png"
              width="100"
              height="30"
              className="d-inline-block align-top"
            />{" "} */}
            <i> Arjun Group's </i>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link onClick={() => navigate("/home")}>Home</Nav.Link>
              <Nav.Link onClick={() => navigate("/about")}>About</Nav.Link>
              <NavDropdown title="Education" id="collasible-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">
                  Certificate
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Diploma</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  UG Course
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  PG Course
                </NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="Banking" id="collasible-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">
                  Certificate
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Home Loan
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Personal Loan
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Property Loan
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Education Loan
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Vehicle Loan
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="#pricing">E-mitra</Nav.Link>
              <Nav.Link href="#pricing">CSC</Nav.Link>
              <Nav.Link href="#pricing">Fasttag</Nav.Link>
              <NavDropdown title="RKCL" id="collasible-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">RSCIT</NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="APES" id="collasible-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Rapi pay</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.1">Roi net</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.1">
                  Spice money
                </NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="Bank BC" id="collasible-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">SBI</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.1">BOB</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.1">CBI</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.1">BRKGB</NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="Photo/Gallery" id="collasible-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">
                  Online Coaching
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.1">
                  All Certificates
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.1">
                  Deploma/Degree
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Nav>
              <Button
                variant="outline-light"
                onClick={() => {
                  localStorage.clear();
                  navigate("/");
                }}
              >
                Logout
              </Button>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default MenuTop;
