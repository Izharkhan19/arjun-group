import React from "react";
import { Button, Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const PersonalLoan = () => {
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
                  <span className="text-custom"> | Personal Loan </span>
                </h3>
                <p className="text-start">
                  We help's you to make your dreams comes true, <br />
                  Lets get the Personal Loan!.
                </p>
                <div className="">
                  <i className=""></i>
                </div>
              </div>
            </div>
          </div>

          <div className="row vertical_content_manage mt-5">
            <div className="text-center mb-5">
              <h1> Personal Loan in your hand in easy steps</h1>
            </div>
          </div>
          <div className="row vertical_content_manage">
            <div className="col-lg-6">
              <div>
                <img
                  src="https://data.personalfn.com/images/benifits-of-personal-loans.jpg"
                  width={"100%"}
                  height={"450px"}
                  alt=""
                />
              </div>
            </div>
            <div className="col-lg-6">
              <div>
                <img
                  src="https://www.dialabank.com/wp-content/uploads/2019/11/personalloan-2-1.jpg"
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
                        href="https://hdfcpl.mymoneymantra.com/?utm_source=google_search&utm_medium=cpc&utm_term=hdfc%20online%20personal%20loan&utm_campaign=personalloan-|-hdfc-|-search&gad=1&gclid=CjwKCAjw3dCnBhBCEiwAVvLcu3fFWI8Fl6SP9h5-FWBjJd2RQJJ6cSbkA50Hl0CSM-NxgfD7Dkvp5BoCuG4QAvD_BwE"
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
                        href="https://maximus.axisbank.co.in/external/customer/login?product=personal&utm_source=google_brand&utm_medium=cpc&utm_campaign=dbg_pl_ntb_leads_ntb_brand_exact_july22&utm_content=pl_personalloan&utm_term=personal%20loan%20axis&gclid=CjwKCAjw3dCnBhBCEiwAVvLcu1kUZcA3TLbfNOVc0XIqF3eRmLCOMMg4dYKNgzeeREY-bvyUS8v8BBoCpS8QAvD_BwE"
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
                      <a href="https://sbi.co.in/web/personal-banking/loans/personal-loans" target="_blank">
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
                        href="https://www.icicibank.com/personal-banking/loans/personal-loan"
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

export default PersonalLoan;
