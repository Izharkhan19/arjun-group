import React from "react";
import { Button, Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const HomeLoan = () => {
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
                  <span className="text-custom"> | Home Loan </span>
                </h3>
                <p className="text-start">
                  We help's you to make your dreams comes true, <br />
                  Lets get the dream home!.
                </p>
                <div className="">
                  <i className=""></i>
                </div>
              </div>
            </div>
          </div>

          <div className="row vertical_content_manage mt-5">
            <div className="text-center mb-5">
              <h1> Home Loan in your hand in easy steps</h1>
            </div>
          </div>
          <div className="row vertical_content_manage">
            <div className="col-lg-6">
              <div>
                <img
                  src="https://homebuying101.com/wp-content/uploads/2022/02/FB-loan-process-simplified.jpg"
                  width={"100%"}
                  height={"450px"}
                  alt=""
                />
              </div>
            </div>
            <div className="col-lg-6">
              <div>
                <img
                  src="https://25174313.fs1.hubspotusercontent-eu1.net/hub/25174313/hubfs/83504839_2875620015834531_2981722023807418368_n.png?width=1200&height=1200&name=83504839_2875620015834531_2981722023807418368_n.png"
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
                        href="https://portal.hdfc.com/campaign/new?utm_agency=Metier&utm_source=Google&loantype=NEW&utm_medium=Desktop&utm_campaign=SEM&s_kwcid=AL%2113313%213%21651831899934%21e%21%21g%21%21hdfc%20home%20loan%20process&gclid=Cj0KCQjwusunBhCYARIsAFBsUP9TGQxeQ2zzGxAZCy64GtIhRYbWsJ1jMEFwiHOersvCpnC_qHUkBz4aAg5HEALw_wcB"
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
                        href="https://www.axisbank.com/retail/loans/home-loan"
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
                      <a href="https://homeloans.sbi/" target="_blank">
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
                        href="https://www.google.com/aclk?sa=l&ai=DChcSEwjJ-NC78I2BAxXcGoMDHdYbDtwYABAAGgJzZg&ase=2&gclid=CjwKCAjw3dCnBhBCEiwAVvLcu4gWxE5bbFAE_dP8pDeJ8XsoGs7FJnFwkKK-V8kgILLNKHw5QMn6QhoCE7AQAvD_BwE&sig=AOD64_2EjfUc5eAHqFps93QT1y_keDT0lg&q&nis=6&adurl&ved=2ahUKEwjjw8m78I2BAxUta2wGHfthDNIQ0Qx6BAgREAE"
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

export default HomeLoan;
