import { Carousel, Col, Container, Image, Row } from "react-bootstrap";
import carosole1 from "../../Assets/images/carosole1.jpg";
import Footer from "./Footer";

const Home = () => {
  return (
    <>
      <Container fluid>
        <Row>
          <Col className="home-bgImg">
            {/* <div className="header-manage">
            <h3>-Future is here with...</h3>
            <h2>Arjun Group of Education's</h2>
          </div> */}
          </Col>
          <Col className="home-bgImg2 text-center">
            {/* <img src={edu} className="course-Img text-center" alt="" /> */}
          </Col>
        </Row>

        <Row className="align-text">
          <div className="mar mb-3">
            {/* <div class="container"> */}
            <div class="marquee-changes">
              <marquee
                direction="left"
                onmouseover="this.stop()"
                onmouseout="this.start()"
                scrollamount="6"
              >
                <a
                  // href="#"
                  // target="_blank"
                  class="marl"
                  // title="Click here to register"
                >
                  ADMISSION OPEN FOR SESSION
                  2023-2024.&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                </a>
                <a
                  href="#"
                  // target="_blank"
                  class="marl"
                  title="Click here to register"
                >
                  एक भारत श्रेष्ठ भारत --- ( राजस्थान के रंग )&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                </a>
                <a
                  href="#"
                  // target="_blank"
                  class="marl"
                  title="Click here to register"
                >
                  एक भारत श्रेष्ठ भारत --- ( राजस्थान के रंग
                  )&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                </a>
                <a
                  href="#"
                  // target="_blank"
                  class="marl"
                  title="Click here to register"
                >
                  प्रताप विश्वविद्यालय द्वारा आयोजित 'एक भारत श्रेष्ठ भारत' की
                  पहले दिन की महत्वपूर्ण झलकियाँ ..
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                </a>
                <a
                  href="#"
                  // target="_blank"
                  class="marl"
                  title="Click here to register"
                >
                  WITH THE INSPIRATION OF HON'BLE PM MODI, ARJUN GROUP OF EDUCATION
                  CELEBRATED " Azaadi Ka Amrit Mahotsava" BY ORGANIZING TIRANGA
                  RALLY ON 14 AUGUST 2023.&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                </a>
                <a
                  href="#"
                  // target="_blank"
                  class="marl"
                  title="Click here to register"
                >
                  INDEPENDENCE DAY 2023
                  VIDEO...&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                </a>
                <a
                  href="#"
                  // target="_blank"
                  class="marl"
                  title="Click here to register"
                >
                  Hon'ble Vice Chancellor Prof. (Dr.) Abhay Kumar address on
                  Independence Day 2023.&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                </a>
              </marquee>
            </div>
            {/* </div> */}
          </div>
          <Col xs={9} md={9}>
            <Carousel style={{ background: "pink" }}>
              <Carousel.Item>
                <img
                  src={
                    "https://lh3.googleusercontent.com/p/AF1QipNl2piKLc80WxWs0997ZfqzO3TCeYTc_xJ_57-6=w1080-h608-p-no-v0"
                  }
                  width={"100%"}
                  height={"500px"}
                  alt=""
                />
                <Carousel.Caption>
                  {/* <h3>First slide label</h3>
                  <p>
                    Nulla vitae elit libero, a pharetra augue mollis interdum.
                  </p> */}
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  src={
                    "https://content3.jdmagicbox.com/comp/kota-rajasthan/u4/9999px744.x744.140419114819.u8u4/catalogue/arjun-group-of-education-itawa-kota-rajasthan-colleges-jjwkqoamp7.jpg"
                  }
                  width={"100%"}
                  height={"500px"}
                  alt=""
                />
                <Carousel.Caption>
                  {/* <h3>Second slide label</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p> */}
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  src={
                    "https://images.jdmagicbox.com/comp/junagadh/r9/9999px285.x285.190224175002.b8r9/catalogue/the-future-computer-science-college-keshod-keshod-junagadh-9ecvj6pmlm.jpg?clr="
                  }
                  width={"100%"}
                  height={"500px"}
                  text="Us."
                  alt=""
                />
                <Carousel.Caption>
                  {/* <h3>Third slide label</h3>
                  <p>
                    Praesent commodo cursus magna, vel scelerisque nisl
                    consectetur.
                  </p> */}
                </Carousel.Caption>
              </Carousel.Item>
            </Carousel>
          </Col>
          <Col xs={3} md={3}>
            <div className="text-center">
              <h3> Our Mission</h3>
              <hr></hr>
            </div>
            <h6 className="align-text">
              Arjun Group commenced its journey in the year 2008, with a mission
              to provide quality education to the youth of the world. Arjun
              Group has been providing excellence in education by offering
              various courses in the diverse streams of Engineering, Management,
              Pharmacy, Information Technology. Our campus is spread over 100
              hundred acres of lush green surroundings, well furnished hostel
              facilities, boast of modern infrastructure, well equipped
              libraries and labs. Arjun Group comprises a team of more than 100+
              highly qualified faculty members from prestigious institutions
              like IIT's, IIM's, committed to shape the future of over 10,000
              students.
            </h6>
          </Col>
        </Row>
        <hr />
        <Row className="mt-5">
          <div className="text-center mb-5">
            <h1> University Highlights</h1>
          </div>
          <Container fluid>
            <Row className="text-center mb-3">
              <Col xs={1} md={1}></Col>
              <Col xs={2} md={2}>
                <a href="#">
                  <Image
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8JXdHG8dyVxt9yXXq45LdMWip3X-JfXfAqQ&usqp=CAU"
                    width={"300"}
                    height={"300"}
                    thumbnail
                    alt=""
                  />
                </a>
              </Col>
              <Col xs={2} md={2}>
                <a
                  href="https://www.universityoftechnology.edu.in/"
                  target="_blank"
                >
                  <Image
                    src="https://www.universityoftechnology.edu.in/wp-content/uploads/2020/10/cropped-University_of_Technology_logo_Square-1.png"
                    width={"300"}
                    height={"300"}
                    thumbnail
                    alt=""
                  />
                </a>
              </Col>

              <Col xs={2} md={2}>
                <a href="https://nirmauni.ac.in/" target="_blank">
                  <Image
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9BlUNfO4PJqVPdksEvIkjlAh2SuuN2p2eow&usqp=CAU"
                    width={"300"}
                    height={"300"}
                    thumbnail
                    alt=""
                  />
                </a>
              </Col>
              <Col xs={2} md={2}>
                <a href="https://www.sgvu.edu.in/" target="_blank">
                  <Image
                    src="https://www.distancelearning.edu.in/courseimg/0y9vyhunv1.png"
                    width={"300"}
                    height={"300"}
                    thumbnail
                    alt=""
                  />
                </a>
              </Col>
              <Col xs={2} md={2}>
                <a href="https://mvgu.ac.in/" target="_blank">
                  <Image
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgSNH8OLJxCmlB5Z1NIdmI5XGujH4pzTE4Xw&usqp=CAU"
                    width={"300"}
                    height={"300"}
                    thumbnail
                    alt=""
                  />
                </a>
              </Col>
              <Col xs={1} md={1}></Col>
            </Row>
            <Row className="text-center mb-3">
              <Col xs={1} md={1}></Col>
              <Col xs={2} md={2}>
                <a href="https://www.pratapuniversity.in/" target="_blank">
                  <Image
                    src="https://images.shiksha.com/mediadata/images/1661329955php9pyitd.jpeg"
                    width={"300"}
                    height={"300"}
                    thumbnail
                    alt=""
                  />
                </a>
              </Col>
              <Col xs={2} md={2}>
                <a href="https://singhaniauniversity.co.in/" target="_blank">
                  <Image
                    src="https://singhaniauniversity.co.in/images/logo.png"
                    width={"300"}
                    height={"300"}
                    thumbnail
                    alt=""
                  />
                </a>
              </Col>
              <Col xs={2} md={2}>
                <a href="https://shyamuniversity.in/" target="_blank">
                  <Image
                    src="https://collegekampus.com/wp-content/uploads/2021/09/Shyam-University-Logo.jpg"
                    width={"300"}
                    height={"300"}
                    thumbnail
                    alt=""
                  />
                </a>
              </Col>
              <Col xs={2} md={2}>
                <a href="https://kalingauniversity.ac.in/" target="_blank">
                  <Image
                    src="https://www.kalingauniversity.ac.in/images/logo23.png"
                    width={"300"}
                    height={"300"}
                    thumbnail
                    alt=""
                  />
                </a>
              </Col>
              <Col xs={2} md={2}>
                <a href="https://admissions.jnujaipur.ac.in/" target="_blank">
                  <Image
                    src="https://career.rajasthandirect.com/wp-content/themes/career/thumbimg.php?src=http://career.rajasthandirect.com/wp-content/uploads/2012/10/jaipur-national-university-jaipur.jpg&w=400&h=300"
                    width={"300"}
                    height={"300"}
                    thumbnail
                    alt=""
                  />
                </a>
              </Col>
              <Col xs={1} md={1}></Col>
            </Row>
          </Container>
        </Row>

        <Row className="counts-section text-center mt-5 mb-3">
          <Col xs={3} md={3}>
            <div className="counts-section-data">
              <h1>15 Years</h1>
              <h6>of excellence in Education</h6>
            </div>
          </Col>
          <Col xs={3} md={3}>
            <div className="counts-section-data">
              <h1>75000+</h1>
              <h6>Students</h6>
            </div>
          </Col>
          <Col xs={3} md={3}>
            <div className="counts-section-data">
              <h1>50+</h1>
              <h6>Courses</h6>
            </div>
          </Col>
          <Col xs={3} md={3}>
            <div className="counts-section-data">
              <h1>500+</h1>
              <h6>Corporate Connect</h6>
            </div>
          </Col>
        </Row>

        <Row className="mt-5">
          <div className="text-center mb-5">
            <h1> Courses Offered</h1>
          </div>
        </Row>
        <Row>
          <div class="section hero has-background-primary-light is-clearfix">
            <div class="">
              <div class="columns is-variable is-4 is-multiline boxes-style-2">
                <Row>
                  <Col xs={4} md={4}>
                    <div class="column is-4 content">
                      <div class="box-item scr">
                        <h3>
                          <a href="#">
                            <i class="ion-ios-paper-outline"></i> CERTIFICATE
                            COURSES
                          </a>
                        </h3>
                        <ul class="list no-margin no-style list-radio-button-on">
                          <li>RSCIT</li>
                          <li>CCNSO</li>
                          <li>DTP</li>
                          <li>TALLY</li>
                          <li>SILAI BEAUTY PARLOUR</li>
                        </ul>
                      </div>
                    </div>
                  </Col>
                  <Col xs={4} md={4}>
                    <div class="column is-4 content">
                      <div class="box-item scr">
                        <h3>
                          <a href="#">
                            <i class="ion-ios-paper-outline"></i> DEPLOMA
                            COURSES
                          </a>
                        </h3>
                        <ul class="list no-margin no-style list-radio-button-on">
                          <li>DCPA</li>
                          <li>DCA</li>
                          <li>PGDCA</li>
                          <li>ADCHEN</li>
                          <li>ADCA</li>
                          <li>ADFAP</li>
                          <li>ADMPM</li>
                        </ul>
                      </div>
                    </div>
                  </Col>

                  <Col xs={4} md={4}>
                    <div class="column is-4 content">
                      <div class="box-item scr">
                        <h3>
                          <a href="#">
                            <i class="ion-ios-paper-outline"></i> DEGREE COURSES
                          </a>
                        </h3>
                        <ul class="list no-margin no-style list-radio-button-on">
                          <li>BCA</li>
                          <li>BSC</li>
                          <li>BCOM</li>
                          <li>BA</li>
                          <li>BBA</li>
                          <li>BED</li>
                          <li>BSC-AG</li>
                          <li>BTECH</li>
                          <li>BLIB</li>
                          <li>BSW</li>
                          <li>MCA</li>
                          <li>MSC</li>
                          <li>MA</li>
                          <li>MBA</li>
                          <li>MSC-AG</li>
                          <li>MTECH</li>
                          <li>MLIB</li>
                          <li>MSW</li>
                        </ul>
                      </div>
                    </div>
                  </Col>
                </Row>
                {/* <Col xs={4} md={4}>
                    <div class="column is-4 content">
                      <div class="box-item scr">
                        <h3>
                          <a href="#">
                            <i class="ion-ios-paper-outline"></i> ENGINEERING
                          </a>
                        </h3>
                        <ul class="list no-margin no-style list-radio-button-on">
                          <li>
                            DIPLOMA IN ENGINEERING ( CS/ EC/ EE/ ME/ CE/ ) - 3
                            YEARS
                          </li>
                          <li>
                            DIPLOMA IN ENGINEERING - LATERAL ( CS/ EC/ EE/ ME/
                            CE/ ) - 2 YEARS
                          </li>
                          <li>B.TECH ( CS/ EC/ EE/ ME/ CE/ ) - 4 YEARS</li>
                          <li>
                            B.TECH - LATERAL ( CS/ EC/ EE/ ME/ CE/ ) - 3 YEARS
                          </li>
                          <li>M.TECH - 2 YEARS</li>
                        </ul>
                      </div>
                    </div>
                  </Col>
                  <Col xs={4} md={4}>
                    <div class="column is-4 content">
                      <div class="box-item scr">
                        <h3>
                          <a href="#">
                            <i class="ion-ios-paper-outline"></i> MANAGEMENT
                            STUDIES
                          </a>
                        </h3>
                        <ul class="list no-margin no-style list-radio-button-on">
                          <li>PG DIPLOMA IN MANAGEMENT - 1 YEAR</li>
                          <li>BBA - 3 YEARS</li>
                          <li>BHM - 4 YEARS</li>
                          <li>
                            B.COM. ( ABST/ Business/ Administrations/ Accounts/
                            Economics/ ) - 3 YEARS
                          </li>
                          <li>MBA - EXECUTIVE - 1 YEAR</li>
                          <li>INTEGRATED MBA (I-MBA) - 5 Years</li>
                          <li>
                            MBA ( Human Resources/ Marketing/ Finance/ Tourism/
                            ) - 2 YEARS
                          </li>
                        </ul>
                      </div>
                    </div>
                  </Col>
                  <Col xs={4} md={4}>
                    <div class="column is-4 content">
                      <div class="box-item scr">
                        <h3>
                          <a href="#">
                            <i class="ion-ios-paper-outline"></i> COMPUTER
                            SCIENCES/INFORMATION TECHNOLOGY
                          </a>
                        </h3>
                        <ul class="list no-margin no-style list-radio-button-on">
                          <li>P.G. DIPLOMA IN COMPUTER APPLICATION - 1 YEAR</li>
                          <li>BCA - 3 YEARS</li>
                          <li>B.Sc. (IT) - 3 YEARS</li>
                          <li>MCA - 2 YEARS</li>
                          <li>M.Sc.(IT) - 2 YEARS</li>
                        </ul>
                      </div>
                    </div>
                  </Col>
                </Row> */}
                {/* <Row>
                  <Col xs={4} md={4}>
                    <div class="column is-4 content">
                      <div class="box-item scr">
                        <h3>
                          <a href="#">
                            <i class="ion-ios-paper-outline"></i> BASIC SCIENCES
                            &amp; HUMANITIES
                          </a>
                        </h3>
                        <ul class="list no-margin no-style list-radio-button-on">
                          <li>
                            CERTIFICATE IN ANCIENT INDIAN <br /> HISTORY,
                            CULTURE &amp; ARCHAEOLOGY <br /> - 3 MONTHS
                          </li>
                          <li>BA - 3 YEARS</li>
                          <li>B.Sc. - 3 YEARS</li>
                          <li>B.Sc. Hons. - 3 YEARS</li>
                          <li>M.A - 2 year</li>
                          <li>
                            M.Sc. ( Physics/ Chemistry/ Maths/ ) - 2 YEARS
                          </li>
                        </ul>
                      </div>
                    </div>
                  </Col>
                  <Col xs={4} md={4}>
                    <div class="column is-4 content">
                      <div class="box-item scr">
                        <h3>
                          <a href="#">
                            <i class="ion-ios-paper-outline"></i> LIBRARY &amp;
                            INFORMATION SCIENCE
                          </a>
                        </h3>
                        <ul class="list no-margin no-style list-radio-button-on">
                          <li>
                            DIPLOMA IN LIBRARY &amp; INFORMATION SCIENCE - 1
                            YEAR
                          </li>
                          <li>
                            BACHELOR OF LIBRARY &amp; INFORMATION SCIENCE - 1
                            YEAR
                          </li>
                          <li>
                            MASTER IN LIBRARY &amp; INFORMATION SCIENCE - 1 YEAR
                          </li>
                        </ul>
                      </div>
                    </div>
                  </Col>
                  <Col xs={4} md={4}>
                    <div class="column is-4 content">
                      <div class="box-item scr">
                        <h3>
                          <a href="#">
                            <i class="ion-ios-paper-outline"></i> EDUCATION
                          </a>
                        </h3>
                        <ul class="list no-margin no-style list-radio-button-on">
                          <li>BACHELOR OF EDUCATION (B.ED.) - 2 YEARS</li>
                        </ul>
                      </div>
                    </div>
                  </Col>
                </Row>
                <Row>
                  <Col xs={4} md={4}>
                    <div class="column is-4 content">
                      <div class="box-item scr">
                        <h3>
                          <a href="#">
                            <i class="ion-ios-paper-outline"></i> JOURNALISAM
                            &amp; MASS COMMUNICATION
                          </a>
                        </h3>
                        <ul class="list no-margin no-style list-radio-button-on">
                          <li>DIPLOMA IN JOURNALISM - 1 YEAR</li>
                          <li>P.G. DIPLOMA IN JOURNALISM - 1 YEAR</li>
                          <li>
                            BACHELOR OF JOURNALISM &amp; MASS COMMUNICATION - 3
                            YEARS
                          </li>
                          <li>
                            MASTER OF JOURNALISM &amp; MASS COMMUNICATION - 2
                            YEARS
                          </li>
                        </ul>
                      </div>
                    </div>
                  </Col>
                  <Col xs={4} md={4}>
                    <div class="column is-4 content">
                      <div class="box-item scr">
                        <h3>
                          <a href="#">
                            <i class="ion-ios-paper-outline"></i> PHARMACY
                          </a>
                        </h3>
                        <ul class="list no-margin no-style list-radio-button-on">
                          <li>D.PHARM - 2 YEARS</li>
                          <li>B.PHARM - 4 YEARS</li>
                          <li>B.PHARM - LATERAL - 3 YEARS</li>
                          <li>M.Pharm. - 2 YEARS</li>
                        </ul>
                      </div>
                    </div>
                  </Col>
                  <Col xs={4} md={4}>
                    <div class="column is-4 content">
                      <div class="box-item scr">
                        <h3>
                          <a href="#">
                            <i class="ion-ios-paper-outline"></i> PH.D.
                          </a>
                        </h3>
                        <ul class="list no-margin no-style list-radio-button-on">
                          <li>FULL TIME - 3 YEARS</li>
                          <li>PART TIME - 4 YEARS</li>
                        </ul>
                      </div>
                    </div>
                  </Col>
                </Row> */}
              </div>
            </div>
          </div>
        </Row>
        <Row className="mt-5">
          <div className="text-center mb-5">
            <h1> Quick Services</h1>
          </div>
        </Row>
        <div className="footer-section justify-content-between text-center">
          <Row className="mb-5">
            <Col className="text-start">
              <h6>Courses</h6>
              <ul>
                <li>UG/PG Courses</li>
                <li>RKCL Courses</li>
                <li>SKILL Courses</li>
                <li>many more...</li>
              </ul>
            </Col>
            <Col className="text-start">
              <h6>Banking</h6>
              <ul>
                <li>Accepting deposits</li>
                <li>Granting loans and advances</li>
                <li>Agency functions</li>
                <li>Discounting bills of exchange</li>
                <li>Credit creation</li>
                <li>Other functions</li>
              </ul>
            </Col>
            <Col className="text-start">
              <h6>E-mitra</h6>
              <ul>
                <li>Digital Certificate</li>
                <li>Minority Certificate</li>
                <li>Birth/Death Certificates</li>
                <li>Rashan Card</li>
                <li>PAN Card</li>
                <li>Passport</li>
                <li>Many facilities available...</li>
              </ul>
            </Col>
            <Col className="text-start">
              <h6>E-payments</h6>
              <ul>
                <li>SPICE MONEY</li>
                <li>AIRTEL MONEY</li>
                <li>RAPI PAY</li>
                <li>Other payments available...</li>
              </ul>
            </Col>
            <Col className="text-start">
              <h6>Credit Cards</h6>
              <ul>
                <li>Travel credit card</li>
                <li>Business credit card</li>
                <li>Shopping credit card</li>
                <li>All cards facilities available...</li>
              </ul>
            </Col>
          </Row>
        </div>
      </Container>
    </>
  );
};

export default Home;
