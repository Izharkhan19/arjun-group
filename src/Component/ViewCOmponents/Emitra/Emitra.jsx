import React from "react";
import { Accordion, Button, Card, Col, Container, Row } from "react-bootstrap";

const Emitra = () => {
  return (
    <>
      <Card>
        <Card.Header>
          <Row>
            <img
              src={
                "https://smartpaymentbank.co.in/content/emservice/emitraupper.jpg"
              }
              alt=""
            />
          </Row>
        </Card.Header>
        <Card.Body>
          <Card.Title>
            <div className="text-center mb-4">
              <h1> Our E-mitra Goals Highlight</h1>
            </div>
          </Card.Title>
          <Card.Title>
            <p className="text-center mb-5">
              The eMitra site provides inhabitants of Rajasthan with access to
              more than 300 government services, such as Aadhar card, pan card,
              Income certificate, public hearing and training facilities to help
              train people to acquire skills, several eMitra kiosks provide the
              facility of cash withdrawal from Bhamashah accounts as well,
              Bhamashah card, caste certificate, residence certificate, water,
              gas utilities and electricity bill payment, mobile recharge,
              application for licence to sell fertiliser, application for SAIL,
              water storage tank subsidy application.
            </p>

            <Accordion defaultActiveKey="0">
              <Accordion.Item eventKey="0">
                <Accordion.Header>
                  <b>Cards </b>
                </Accordion.Header>
                <Accordion.Body>
                  <ul>
                    <li>Aadhar card</li>
                    <li>PAN card</li>
                    <li>Bhamashah card</li>
                    more...
                  </ul>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="1">
                <Accordion.Header>
                  <b>Certificates</b>
                </Accordion.Header>
                <Accordion.Body>
                  <ul>
                    <li>Income certificate</li>
                    <li>Caste certificate</li>
                    <li>Residence certificate</li>
                    more...
                  </ul>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="2">
                <Accordion.Header>
                  <b>Application</b>
                </Accordion.Header>
                <Accordion.Body>
                  <ul>
                    <li>Application for licence to sell fertiliser </li>
                    <li>Application Ror SAIL </li>
                    <li>Application water storage tank subsidy</li>
                    more...
                  </ul>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </Card.Title>
          <Card.Text className="text-center mt-5 mb-5">
            <h4> recent services... </h4>{" "}
          </Card.Text>
          <Row className="mb-5">
            <Col md={3}>
              <Card border="secondary" style={{ width: "18rem" }}>
                <Card.Header>Aadhar card</Card.Header>
                <Card.Body className="text-center">
                  <img
                    src={
                      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2X2RUr5x2dcRLU_1vGtKhyEbR5rcxn6txfhDZkXpK3EEx5NTwFP9pji4sMDzC8K_48-Q&usqp=CAU"
                    }
                    alt=""
                  />
                </Card.Body>
              </Card>
            </Col>
            <Col md={3}>
              <Card border="secondary" style={{ width: "18rem" }}>
                <Card.Header>Pan card</Card.Header>
                <Card.Body className="text-center">
                  <img
                    src={
                      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQo4xyb1Tifi1azN2bK2KaAs_NF2r3Kmi2Nw&usqp=CAU"
                    }
                    alt=""
                  />
                </Card.Body>
              </Card>
            </Col>
            <Col md={3}>
              <Card border="secondary" style={{ width: "18rem" }}>
                <Card.Header>Income certificate</Card.Header>
                <Card.Body>
                  <img
                    src={
                      "https://sarkarisuvidha.online/img/newimg/service/background/income-certificate.jpg"
                    }
                    width={"250px"}
                    height={"225px"}
                    alt=""
                  />
                </Card.Body>
              </Card>
            </Col>
            <Col md={3}>
              <Card border="secondary" style={{ width: "18rem" }}>
                <Card.Header>Income certificate</Card.Header>
                <Card.Body>
                  <img
                    src={
                      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYxdmhKR3s6hEpT9xXqEqFPQ1kZYRS_MuVLXQ7HkSTYRX8F7LyKhF2lrAQThll90BY8Tw&usqp=CAU"
                    }
                    width={"250px"}
                    height={"225px"}
                    alt=""
                  />
                </Card.Body>
              </Card>
            </Col>
          </Row>

          <Row>
            <img
              src={
                "https://5.imimg.com/data5/SELLER/Default/2020/12/QC/EU/ZR/38492122/airtel-payment-banking-service.jpg"
              }
              alt=""
            />
          </Row>

          <Card.Text className="text-center mt-5 mb-2">
            Arjun Group's objective of e-Mitra is to provide wide range of
            citizen friendly services of different departments under one roof
            through an e-platform so that the citizens do not have to run around
            various departments. Its aim is to deploy Information Technology(IT)
            for the benefit of the masses.
          </Card.Text>
          <div className="text-center">
            <a
              href="https://emitra.rajasthan.gov.in/pdf/Emitra_Project_Brochure.pdf"
              target="_blink"
            >
              <Button variant="primary">Download Detailed PDF</Button>
            </a>
          </div>
        </Card.Body>
      </Card>
    </>
  );
};

export default Emitra;
