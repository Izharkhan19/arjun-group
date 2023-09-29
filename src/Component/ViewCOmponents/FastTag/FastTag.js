import React from "react";
import {
  Accordion,
  Button,
  Card,
  Col,
  Container,
  Row,
  Table,
} from "react-bootstrap";

const FastTag = () => {
  return (
    <>
      <Card>
        <Card.Img
          variant="top"
          src="https://v.hdfcbank.com/content/dam/hdfc-aem-microsites/fastag/FASTag_Gen-banner_1110x320.jpg"
        />
        <Card.Body>
          <Card.Text>
            {/* Some quick example text to build on the card title and make up the
            bulk of the card's content. */}
          </Card.Text>
        </Card.Body>
      </Card>
      <Container fluid>
        <div className="text-center mt-5 mb-5">
          <h1> Follow the setps to apply/get FASTag.</h1>
        </div>
        <Row>
          <Col md={12}>
            <Table>
              <thead>
                <tr>
                  <th>How to Get FastTag </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td> Log on to the HDFC Bank FASTag portal.</td>
                </tr>
                <tr>
                  <td>Select the option of login.</td>
                </tr>
                <tr>
                  <td> Click on first-time user and continue.</td>
                </tr>
                <tr>
                  <td> Fill in your details.</td>
                </tr>
                <tr>
                  <td> Make the payment.</td>
                </tr>
                <tr>
                  <td> Have the card delivered to your doorstep.</td>
                </tr>
                <tr>
                  <td>
                    {" "}
                    <div>
                      Apply Now &nbsp;&nbsp;&nbsp;
                      <a
                        href="https://fastag.hdfcbank.com/CustomerPortal/Login"
                        target="_blink"
                      >
                        Click to Visit site
                      </a>
                    </div>
                  </td>
                </tr>
              </tbody>
            </Table>
          </Col>
        </Row>
        <Row className="mb-5 mt-5">
          <Col md={2} className="text-end">
            <h1>FAQs </h1>
          </Col>
          <Col md={10}>
            <Accordion defaultActiveKey="0" flush>
              <Accordion.Item eventKey="0">
                <Accordion.Header> > What is FASTag?</Accordion.Header>
                <Accordion.Body>
                  The FASTag facility is a cashless model wherein the entire
                  toll tax amount is collected through the FASTag without having
                  to stop the vehicle. The FASTag is linked to the user’s
                  prepaid account, such as a Paytm wallet, and is then fixed to
                  the windscreen of his/her vehicle. As the user passes through
                  the toll gate, the toll amount is automatically debited from
                  the user’s prepaid account or a Paytm wallet linked to the
                  FASTag. The user will be informed of the charges and provides
                  an automated grievance redressal mechanism on the Paytm app
                  itself.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="1">
                <Accordion.Header>
                  > How can I recharge my FASTag?
                </Accordion.Header>
                <Accordion.Body>
                  You don’t need to recharge your FASTag if you have linked it
                  to your Paytm mobile application. For Paytm FASTag recharge,
                  you simply need to add money to your Paytm wallet and as you
                  pass through a FASTag-enable toll gate, the toll amount will
                  directly be deducted from your wallet.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="2">
                <Accordion.Header>
                  > Is it mandatory to have the FASTag?
                </Accordion.Header>
                <Accordion.Body>
                  Yes. Since 16 February 2021, the Government of India has made
                  it mandatory for users to have FASTag installed on their
                  four-wheeler vehicles. Without having the FASTag, the user
                  will have to pay double the toll amount.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="3">
                <Accordion.Header>
                  > What if I don’t have the FASTag for my vehicle?
                </Accordion.Header>
                <Accordion.Body>
                  If you don’t have the FASTag, you will have to pay double the
                  toll amount at every toll plaza that you cross.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="4">
                <Accordion.Header>
                  > What are the benefits of using the FASTag?
                </Accordion.Header>
                <Accordion.Body>
                  FASTag allows the seamless automatic payment of tolls without
                  any manual intervention. Using FASTag offers multiple
                  benefits, such as it saves a lot of time and effort for the
                  user by eliminating long queues at toll plazas. Additionally,
                  travelers can use a single wallet for tolls, fuel expenses,
                  vehicle parking expenses, or shopping, etc. while also making
                  the benefit of various offers and discounts by recharging
                  their FASTag on Paytm. On top of this, the use of FASTag is
                  also beneficial for the environment as it reduces the use of
                  paper and fuel.
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default FastTag;
