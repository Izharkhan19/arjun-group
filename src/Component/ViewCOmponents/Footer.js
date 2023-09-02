import React from "react";
import { Card, Col, Container, ListGroup, Row } from "react-bootstrap";

const Footer = () => {
  return (
    <>
      <footer
        id="Footer"
        style={{ backgroundColor: "#560000", color: "white" }}
        className="page-footer font-small stylish-color-dark pt-4"
      >
        <div
          style={{ backgroundColor: "#560000", color: "white" }}
          className="container text-center text-md-left"
        >
          <div className="row">
            <Card variant="dark" style={{ width: "18rem" }}>
              <Card.Img
                variant="top"
                src="https://arjunengg.com/wp-content/uploads/2017/02/AEC-logo.png"
              />
              <ListGroup className="list-group-flush">
                <ListGroup.Item>
                   Founder : Pradeep Suman 
                </ListGroup.Item>
                <ListGroup.Item>
                   Contact : + 91 99295 85660 
                </ListGroup.Item>
              </ListGroup>
            </Card>

            <hr className="clearfix w-100 d-md-none" />
            <div
              id="link10"
              className="col-md-3 col-lg-3 col-xl-3 mx-auto mb-4 text-start"
            >
              <h6 className="text-uppercase font-weight-bold">SERVICES</h6>
              <hr
                // className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto"
                // style={{ width: "70px" }}
              />
              <ul>
                <li className="mt-3">Careers</li>
                <li className="mt-3">Admission Enquiry</li>
                <li className="mt-3">Life@PU</li>
                <li className="mt-3">Admission Contact </li>
                <li className="mt-3">Online Payment Policy</li>
                <li className="mt-3">Privacy Policy</li>
                <li className="mt-3">Refund Cancellation Policy</li>
                <li className="mt-3">Payment Gateway Disclaimer</li>
                <li className="mt-3">Terms and Conditions</li>

              </ul>
            </div>
            <hr className="clearfix w-100 d-md-none" />

            <hr className="clearfix w-100 d-md-none" />
            <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
              <h6 className="text-uppercase font-weight-bold text-start">
                CORPORATE OFFICE DETAILS
              </h6>
              <hr />
              <div className="text-start">
                <p>
                 Reg. No. : <i className="fas fa-home mr-3"></i> RAJ/35/2008
                </p>
                <p>
                 Email : <i className="fas fa-home mr-3"></i> arjungroupitawa@gmail.com
                </p>
                <p>
                <p>
                 Contact No. : <i className="fas fa-phone mr-3"></i> + 91 99295 85660
                </p>
                <p>
                 Office No. <i className="fas fa-print mr-3"></i> + 91 77375 10030
                </p>
                 Address : <i className="fas fa-home mr-3"></i> ARJUN GROUP OF EDUCATION,
                </p>
                <p>
                  <i className="fas fa-envelope mr-3"></i> Arjun Colony Pipalda
                  Road, Itawa,
                </p>
                <p>
                  <i className="fas fa-envelope mr-3"></i> Kota-rajasthan - 325004
                  (Arjun Colony)
                </p>
                
              </div>
            </div>
          </div>
        </div>

        <div className="hover-effect1">
          <ul
            style={{ backgroundColor: "#560000", color: "white" }}
            className="list-unstyled list-inline text-center"
          >
            <li className="list-inline-item">
              <a href="https://www.facebook.com" title="Facebook">
                <i className="fa fa-facebook"></i>
              </a>
            </li>
            <li className="list-inline-item">
              <a href="https://www.twitter.com" title="Twitter">
                <i className="fa fa-twitter"></i>
              </a>
            </li>
            <li className="list-inline-item">
              <a href="https://www.instagram.com" title="Instagram">
                <i className="fa fa-instagram"></i>
              </a>
            </li>
            <li className="list-inline-item">
              <a href="https://www.youtube.com" title="Youtube">
                <i className="fa fa-youtube"></i>
              </a>
            </li>
            <li className="list-inline-item">
              <a href="#." title="Github">
                <i className="fa fa-github"></i>
              </a>
            </li>
          </ul>
          <hr />
        </div>

        <div
          style={{ backgroundColor: "#560000", color: "white" }}
          className="footer-copyright text-center py-3"
        >
          © 2008 Arjun Group of Education Private Limited, Inc. All rights
          reserved.
        </div>
      </footer>
    </>
  );
};

export default Footer;
