import React from "react";
import { Card, Carousel, Col, Container, Row } from "react-bootstrap";

const Csc = () => {
  return (
    <>
      <Card className="bg-dark text-white">
        <Card.Img
          src="https://grahaksevakendra.in/wp-content/uploads/2023/04/pngkey.com-bhim-logo-png-3606592-1.png"
          height={"350px"}
          alt="Card image"
        />
      </Card>
      <Container fluid className="mt-5">
        <Row>
          <Col md={8}>
            <Card>
              <Card.Header>
                {" "}
                <h4> Common Service Center (CSC) </h4>
              </Card.Header>
              <img src="https://pmmodiyojana.in/wp-content/uploads/2022/08/image-204.png" height={"230px"} alt="" />
              <Card.Body>
                <blockquote className="blockquote mb-0">
                  <p>
                    The Common Services Centres (CSCs) a Special Purpose Vehicle
                    (SPV), are internet enabled access points that provide last
                    mile access to various e-governance services through digital
                    connectivity to translate the dream of Digital India into a
                    reality.
                  </p>
                  <p>
                    CSCs offer access to e-services, delivering essential
                    government and public utility services, social welfare
                    schemes, financial inclusion services, health care and
                    agriculture services, apart from a host of B2C services.
                    CSCs have also been trying to bridge the gaps in digital
                    literacy
                  </p>
                  <footer className="blockquote-footer mt-5">
                    <a href="https://cscspv.in/" target="_blank">
                      <cite title="Source Title">Click to know more...</cite>
                    </a>{" "}
                  </footer>
                </blockquote>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card>
              <Card.Header>
                <h4> Lattest update/what's new </h4>
              </Card.Header>
              <Card.Body>
                <Carousel data-bs-theme="dark">
                  <Carousel.Item>
                    <img
                      className="d-block w-100"
                      src="https://cscspv.in/images/Aadhaar.jpg"
                      height={"500px"}
                      width={"500px"}
                      alt="First slide"
                    />
                  </Carousel.Item>
                  <Carousel.Item>
                    <img
                      className="d-block w-100"
                      src="https://cscspv.in/images/cscspvfakeweb.jpg"
                      height={"500px"}
                      width={"500px"}
                      alt="First slide"
                    />
                  </Carousel.Item>
                  <Carousel.Item>
                    <img
                      className="d-block w-100"
                      src="https://cscspv.in/images/Agriculture.jpg"
                      height={"500px"}
                      width={"500px"}
                      alt="First slide"
                    />
                  </Carousel.Item>
                  <Carousel.Item>
                    <img
                      className="d-block w-100"
                      src="https://cscspv.in/images/eStore.jpg"
                      height={"500px"}
                      width={"500px"}
                      alt="First slide"
                    />
                  </Carousel.Item>
                  <Carousel.Item>
                    <img
                      className="d-block w-100"
                      src="	https://cscspv.in/images/chandrayan.jpg"
                      height={"500px"}
                      width={"500px"}
                      alt="First slide"
                    />
                  </Carousel.Item>
                </Carousel>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <div className="text-center mt-5 mb-5">
          <h1> CSE Services</h1>
        </div>
        <Row className="mt-5">
          <Col md={6} className="mt-2">
            <img
              src="https://cscindia.info/wp-content/uploads/2022/08/IMG_20220121_160538.jpg"
              width={"100%"}
            />
          </Col>
          <Col md={6}>
            <Card>
              <Card.Header>
                {" "}
                <h4> Visit links to know more </h4>
              </Card.Header>
            </Card>
            <div className="row mt-3" >
              <div className="col-xs-6">
                <ul className="mt-15">
                  <li className="mb-2">
                    <i className="fa fa-angle-double-right text-theme-colored font-15"></i>
                     
                    <a
                      href="https://cscspv.in/government-to-citizen.html"
                      target="_blank"
                    >
                      G2C
                    </a>
                  </li>
                  <li className="mb-2">
                    <i className="fa fa-angle-double-right text-theme-colored font-15"></i>
                     
                    <a
                      href="https://cscspv.in/business-to-citizen.html"
                      target="_blank"
                    >
                      Business to Citizen
                    </a>
                  </li>
                  <li className="mb-2">
                    <i className="fa fa-angle-double-right text-theme-colored font-15"></i>
                     
                    <a
                      href="https://cscspv.in/financial-inclusion.html"
                      target="_blank"
                    >
                      Financial Inclusion
                    </a>
                  </li>
                  <li className="mb-2">
                    <i className="fa fa-angle-double-right text-theme-colored font-15"></i>
                     
                    <a href="https://cscspv.in/education.html" target="_blank">
                      Education
                    </a>
                  </li>
                </ul>
              </div>
              <div className="col-xs-6">
                <ul className="mt-15">
                  <li className="mb-2">
                    <i className="fa fa-angle-double-right text-theme-colored font-15"></i>
                     
                    <a
                      href="https://cscspv.in/agriculture.html"
                      target="_blank"
                    >
                      Agriculture
                    </a>
                  </li>
                  <li className="mb-2">
                    <i className="fa fa-angle-double-right text-theme-colored font-15"></i>
                     
                    <a
                      href="https://cscspv.in/health-services.html"
                      target="_blank"
                    >
                      Health Services
                    </a>
                  </li>
                  <li className="mb-2">
                    <i className="fa fa-angle-double-right text-theme-colored font-15"></i>
                     
                    <a
                      href="https://cscspv.in/grameen-e-Store.html"
                      target="_blank"
                    >
                      Grameen e-Store
                    </a>
                  </li>
                  <li className="mb-4">
                    <i className="fa fa-angle-double-right text-theme-colored font-15"></i>
                     
                    <a
                      href="https://cscspv.in/csc-tour-travels.html"
                      target="_blank"
                    >
                      Tours &amp; Travels
                    </a>
                  </li>
                </ul>
              </div>
              <div
                className="col-md-12 padding-0"
                style={{ marginTop: "0px", paddingTop: "0px" }}
              >
                <div className="panel panel-info">
                  <div className="panel-heading">
                    <strong>
                      <i
                        className="fa fa-hand-o-right"
                        aria-hidden="true"
                        style={{ fontSize: "20px" }}
                      ></i>
                      <a href="https://jaankari.csccloud.in/" target="_blank">
                        To Know More About CSC Click here
                      </a>
                    </strong>
                  </div>
                </div>
              </div>
            </div>
          </Col>
        </Row>
        <Row className="mt-5"></Row>
      </Container>
    </>
  );
};

export default Csc;
