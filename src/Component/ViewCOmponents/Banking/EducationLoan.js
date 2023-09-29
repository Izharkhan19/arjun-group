import React from "react";
import { Button, Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const EducationLoan = () => {
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
                  <span className="text-custom"> | Education Loan </span>
                </h3>
                <p className="text-start">
                  We help's you to make your dreams comes true, <br />
                  Lets get the Education Loan!.
                </p>
                <div className="">
                  <i className=""></i>
                </div>
              </div>
            </div>
          </div>

          <div className="row vertical_content_manage mt-5">
            <div className="text-center mb-5">
              <h1> Education Loan in your hand in easy steps</h1>
            </div>
          </div>
          <div className="row vertical_content_manage">
            <div className="col-lg-6">
              <div>
                <img
                  src="https://collegevidyanew.s3.amazonaws.com/uploads/2023/01/20/why-education-loan.webp"
                  width={"100%"}
                  height={"450px"}
                  alt=""
                />
              </div>
            </div>
            <div className="col-lg-6">
              <div>
                <img
                  src="https://www.idfcfirstbank.com/content/dam/idfcfirstbank/images/blog/education-loan/education-loan-india-benefits-interest-rate-717x404.jpg"
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
                        href="https://www.hdfcbank.com/personal/borrow/popular-loans/educational-loan/educational-loan-for-indian-education"
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
                        href="https://www.axisbank.com/retail/loans/education-loan/features-benefits"
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
                        href="https://sbi.co.in/web/personal-banking/loans/education-loans"
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
                        href="https://www.icicibank.com/personal-banking/loans/education-loan"
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

export default EducationLoan;
