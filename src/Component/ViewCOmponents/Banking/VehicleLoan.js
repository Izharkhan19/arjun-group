import React from "react";
import { Button, Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const VehicleLoan = () => {
  let navigate = useNavigate();

  return (
    <>
      <div className="section_all bg-light mb-5" id="about">
        <Container fluid>
          <div className="home-loan-image row">
            <div className="col-lg-12">
              <div className="section_title_all text-start mt-3">
                <h3 className="font-weight-bold">
                  Arjun Group's{" "}
                  <span className="text-custom"> | Vehicle Loan </span>
                </h3>
                <p className="text-start">
                  We help's you to make your dreams comes true, <br />
                  Lets get the Vehicle Loan!.
                </p>
                <div className="">
                  <i className=""></i>
                </div>
              </div>
            </div>
          </div>

          <div className="row vertical_content_manage mt-5">
            <div className="text-center mb-5">
              <h1> Vehicle Loan in your hand in easy steps</h1>
            </div>
          </div>
          <div className="row vertical_content_manage">
            <div className="col-lg-6">
              <div>
                <img
                  src="https://blog.mint.com/wp-content/uploads/2021/02/pasted-image-0-1.png"
                  width={"100%"}
                  height={"450px"}
                  alt=""
                />
              </div>
            </div>
            <div className="col-lg-6">
              <div>
                <img
                  src="https://www.myayan.com/assets/images/art/top-car-loan-banks-in-dubai.webp"
                  width={"100%"}
                  height={"450px"}
                  alt=""
                />
              </div>
            </div>
          </div>

          <div className="text-center mt-5 mb-3">
            <h1> Our Partner Banks</h1>
          </div>
          <div className="row mt-3">
            <div className="col-lg-3">
              <div className="about_content_box_all mt-3">
                <div className="about_detail text-center">
                  <div className="about_icon">
                    <i className="fas fa-pencil-alt"></i>
                  </div>
                  <h5 className="text-dark text-capitalize mt-3 font-weight-bold">
                    HDFC
                  </h5>
                  <p className="edu_desc mt-3 mb-0 text-muted">
                    <Button variant="outline-success">
                      <a
                        href="https://www.hdfcbank.com/personal/borrow/popular-loans/new-car-loan"
                        target="_blank"
                      >
                        {" "}
                        Visit site >
                      </a>{" "}
                    </Button>{" "}
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="about_content_box_all mt-3">
                <div className="about_detail text-center">
                  <div className="about_icon">
                    <i className="fas fa-pencil-alt"></i>
                  </div>
                  <h5 className="text-dark text-capitalize mt-3 font-weight-bold">
                    AXIS
                  </h5>
                  <p className="edu_desc mt-3 mb-0 text-muted">
                    <Button variant="outline-success">
                      <a
                        href="https://maximus.axisbank.co.in/external/customer/login?product=four_wheeler&utm_source=google_brand&utm_medium=cpc&utm_campaign=dbg_al_ntb_leads_brand_exact_feb23&utm_content=al_car&utm_term=axis%20vehicle%20loan&gclid=CjwKCAjw3dCnBhBCEiwAVvLcu6gXc7lsfr0zw2QjSpSq8o4xzWo2b5_x3WPbrcWVjsjv_ZAsQ8-JWBoCdgMQAvD_BwE"
                        target="_blank"
                      >
                        {" "}
                        Visit site >
                      </a>{" "}
                    </Button>{" "}
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="about_content_box_all mt-3">
                <div className="about_detail text-center">
                  <div className="about_icon">
                    <i className="fas fa-pencil-alt"></i>
                  </div>
                  <h5 className="text-dark text-capitalize mt-3 font-weight-bold">
                    SBI
                  </h5>
                  <p className="edu_desc mt-3 mb-0 text-muted">
                    <Button variant="outline-success">
                      <a
                        href="https://sbi.co.in/web/personal-banking/loans/auto-loans"
                        target="_blank"
                      >
                        {" "}
                        Visit site >
                      </a>{" "}
                    </Button>{" "}
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="about_content_box_all mt-3">
                <div className="about_detail text-center">
                  <div className="about_icon">
                    <i className="fas fa-pencil-alt"></i>
                  </div>
                  <h5 className="text-dark text-capitalize mt-3 font-weight-bold">
                    ICICI
                  </h5>
                  <p className="edu_desc mt-3 mb-0 text-muted">
                    <Button variant="outline-success">
                      <a
                        href="https://www.icicibank.com/personal-banking/loans/car-loan"
                        target="_blank"
                      >
                        {" "}
                        Visit site >
                      </a>{" "}
                    </Button>{" "}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};

export default VehicleLoan;
