import React from "react";
import Batch2016 from "../../Assets/images/Batch2016.jpg";
import OrgTitleImage from "../../Assets/images/OrgTitleImage.jpg";
import { Card } from "react-bootstrap";

const About = () => {
  return (
    <>
      <Card className="bg-dark text-white text-center">
        <Card.Text>
          <h2 className="font-weight-bold mt-2">
            <i>
              {" "}
              Welcome To <span className="text-custom">Arjun Group's</span>
            </i>
          </h2>
          <h6 className="font-weight-bold mt-2">
            <i>
              {" "}
              - Lets know about{" "}
              <span className="text-custom">Arjun Group's </span>{" "}
            </i>
          </h6>
          <div className="">
            <i className=""></i>
          </div>
        </Card.Text>
        <Card.Img src={OrgTitleImage} alt="Card image" />
      </Card>
      <section className="section_all bg-light mb-5" id="about">
        {/* Top */}
        <div className="text-center mt-5 mb-5">
          <h1> Our Achivements.</h1>
        </div>
        <div className="container">
          <div className="row vertical_content_manage mt-5">
            <div className="col-lg-6">
              <div className="about_header_main mt-3">
                <div className="about_icon_box"></div>
                <h4 className="about_heading text-capitalize font-weight-bold mt-4">
                  Honored to introduce the distinguished founder of the Arjun
                  Group. - (Mr. Pradeep Suman)
                </h4>
                <p className="text-muted mt-3">
                  I stand before you today to applaud the Arjun Group and its
                  exceptional founder, Mr. Pradeep Suman. The Arjun Group is an
                  embodiment of innovation and excellence, led by Mr. Suman's
                  unwavering vision.
                </p>

                <p className="text-muted mt-3">
                  Under Mr. Suman's astute guidance, the Arjun Group has carved
                  its path to success with diverse ventures across industries.
                  His leadership is marked by a commitment to innovation and
                  ethical practices, setting a stellar example for the business
                  world.
                </p>
                <p className="text-muted mt-3">
                  Beyond business, the Arjun Group is a true philanthropic
                  force, thanks to Mr. Suman's dedication to corporate social
                  responsibility. From supporting education to environmental
                  sustainability, their initiatives demonstrate their commitment
                  to a better society.
                </p>
                <p className="text-muted mt-3">
                  Mr. Pradeep Suman's integrity and ethical values have earned
                  trust and respect in the industry. He embodies the principles
                  of leadership, resilience, and compassion.
                </p>
                <p className="text-muted mt-3">
                  In sum, the Arjun Group, under Mr. Pradeep Suman's
                  stewardship, is a shining symbol of success, ethics, and
                  social responsibility. Their journey inspires us to reach for
                  the stars and leave a lasting impact.
                </p>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="img_about mt-3">
                <img
                  src={
                    "https://images.jdmagicbox.com/comp/kota-rajasthan/u4/9999px744.x744.140419114819.u8u4/catalogue/arjun-group-of-education-itawa-kota-rajasthan-colleges-p1nsdvlc28.jpg?temp=1"
                  }
                  alt=""
                  className="img-fluid mx-auto d-block"
                />
              </div>
              <div className="img_about mt-3">
                <img
                  src={
                    "https://images.jdmagicbox.com/comp/kota-rajasthan/u4/9999px744.x744.140419114819.u8u4/catalogue/arjun-group-of-education-itawa-kota-rajasthan-colleges-24f6fd1z5c.jpg?temp=1"
                  }
                  alt=""
                  className="img-fluid mx-auto d-block"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Mid */}
        <div className="container">
          <div className="row vertical_content_manage mt-5">
            <div className="col-lg-6">
              <div className="img_about mt-3">
                <img
                  src={
                    "https://images.jdmagicbox.com/comp/kota-rajasthan/u4/9999px744.x744.140419114819.u8u4/catalogue/arjun-group-of-education-itawa-kota-rajasthan-colleges-jwz26vv8v7.jpg?temp=1"
                  }
                  alt=""
                  className="img-fluid mx-auto d-block"
                />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="img_about mt-3">
                <img
                  src={
                    "https://images.jdmagicbox.com/comp/kota-rajasthan/u4/9999px744.x744.140419114819.u8u4/catalogue/arjun-group-of-education-itawa-kota-rajasthan-colleges-bbzd2olm8d.jpg?temp=1"
                  }
                  alt=""
                  className="img-fluid mx-auto d-block"
                />
              </div>
            </div>
          </div>
          <div className="row vertical_content_manage mt-5">
            <div className="col-lg-6">
              <div className="img_about mt-3">
                <img
                  src={
                    "https://images.jdmagicbox.com/comp/kota-rajasthan/u4/9999px744.x744.140419114819.u8u4/catalogue/arjun-group-of-education-itawa-kota-rajasthan-colleges-69s2z15jgj.jpg?temp=1"
                  }
                  alt=""
                  className="img-fluid mx-auto d-block"
                />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="img_about mt-3">
                <img
                  src={
                    "https://images.jdmagicbox.com/comp/kota-rajasthan/u4/9999px744.x744.140419114819.u8u4/catalogue/arjun-group-of-education-itawa-kota-rajasthan-colleges-kkxoeq586d.jpg?temp=1"
                  }
                  alt=""
                  className="img-fluid mx-auto d-block"
                />
              </div>
            </div>
          </div>

          <div className="text-center mt-5 mb-5">
            <h1> Seminars, Events & Certification </h1>
          </div>

          <div className="row vertical_content_manage mt-5">
            <div className="col-lg-6">
              <div className=" mt-3">
                <img
                  src={
                    "https://images.jdmagicbox.com/comp/kota-rajasthan/u4/9999px744.x744.140419114819.u8u4/catalogue/arjun-group-of-education-itawa-kota-rajasthan-colleges-n3pidrfex6.jpg?temp=1"
                  }
                  alt=""
                  className="img-fluid mx-auto d-block"
                />
              </div>
            </div>
            <div className="col-lg-6">
              <div className=" mt-3">
                <img
                  src={
                    "https://images.jdmagicbox.com/comp/kota-rajasthan/u4/9999px744.x744.140419114819.u8u4/catalogue/arjun-group-of-education-itawa-kota-rajasthan-colleges-gvxbpcfo4r.jpg?temp=1"
                  }
                  alt=""
                  className="img-fluid mx-auto d-block"
                />
              </div>
            </div>
          </div>
          <div className="row vertical_content_manage mt-5">
            <div className="col-lg-6">
              <div className=" mt-3">
                <img
                  src={
                    "https://images.jdmagicbox.com/comp/kota-rajasthan/u4/9999px744.x744.140419114819.u8u4/catalogue/arjun-group-of-education-itawa-kota-rajasthan-colleges-m9v2ta4nb2.jpg?temp=1"
                  }
                  alt=""
                  className="img-fluid mx-auto d-block"
                />
              </div>
            </div>
            <div className="col-lg-6">
              <div className=" mt-3">
                <img
                  src={
                    "https://images.jdmagicbox.com/comp/kota-rajasthan/u4/9999px744.x744.140419114819.u8u4/catalogue/arjun-group-of-education-itawa-kota-rajasthan-colleges-4cqisrxu8d.jpg?temp=1"
                  }
                  alt=""
                  className="img-fluid mx-auto d-block"
                />
              </div>
            </div>
          </div>

          {/* End */}
          <div className="row mt-3">
            <div className="col-lg-4">
              <div className="about_content_box_all mt-3">
                <div className="about_detail text-center">
                  <div className="about_icon">
                    <i className="fas fa-pencil-alt"></i>
                  </div>
                  <h5 className="text-dark text-capitalize mt-3 font-weight-bold">
                    Creative
                  </h5>
                  <p className="edu_desc mt-3 mb-0 text-muted">
                    The Arjun Group: Crafting Creativity with Unwavering
                    Support.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-lg-4">
              <div className="about_content_box_all mt-3">
                <div className="about_detail text-center">
                  <div className="about_icon">
                    <i className="fab fa-angellist"></i>
                  </div>
                  <h5 className="text-dark text-capitalize mt-3 font-weight-bold">
                    We make Best Result
                  </h5>
                  <p className="edu_desc mb-0 mt-3 text-muted">
                    The Arjun Group excels in delivering exceptional results.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-lg-4">
              <div className="about_content_box_all mt-3">
                <div className="about_detail text-center">
                  <div className="about_icon">
                    <i className="fas fa-paper-plane"></i>
                  </div>
                  <h5 className="text-dark text-capitalize mt-3 font-weight-bold">
                    Best platform{" "}
                  </h5>
                  <p className="edu_desc mb-0 mt-3 text-muted">
                    The Arjun Group is the pinnacle platform for excellence.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
