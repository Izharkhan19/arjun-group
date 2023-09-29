import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";

const Certificates = () => {
  const cardData = [
    {
      link: "https://images.jdmagicbox.com/comp/kota-rajasthan/u4/9999px744.x744.140419114819.u8u4/catalogue/arjun-group-of-education-itawa-kota-rajasthan-colleges-bbzd2olm8d.jpg?temp=1",
    },
    {
      link: "https://images.jdmagicbox.com/comp/kota-rajasthan/u4/9999px744.x744.140419114819.u8u4/catalogue/arjun-group-of-education-itawa-kota-rajasthan-colleges-fg9ghm1qp8.jpg?temp=1",
    },
    {
      link: "https://images.jdmagicbox.com/comp/kota-rajasthan/u4/9999px744.x744.140419114819.u8u4/catalogue/arjun-group-of-education-itawa-kota-rajasthan-colleges-e7u7p6xcuu.jpg?temp=1",
    },
    {
      link: "https://images.jdmagicbox.com/comp/kota-rajasthan/u4/9999px744.x744.140419114819.u8u4/catalogue/arjun-group-of-education-itawa-kota-rajasthan-colleges-dsud6frdm0.jpg?temp=1",
    },

    {
      link: "https://images.jdmagicbox.com/comp/kota-rajasthan/u4/9999px744.x744.140419114819.u8u4/catalogue/arjun-group-of-education-itawa-kota-rajasthan-colleges-azd6n1f9xj.jpg?temp=1",
    },

    {
      link: "https://images.jdmagicbox.com/comp/kota-rajasthan/u4/9999px744.x744.140419114819.u8u4/catalogue/arjun-group-of-education-itawa-kota-rajasthan-colleges-u2q5uigfaz.jpg?temp=1",
    },
    {
      link: "https://images.jdmagicbox.com/comp/kota-rajasthan/u4/9999px744.x744.140419114819.u8u4/catalogue/arjun-group-of-education-itawa-kota-rajasthan-colleges-ssr2cm5d91.jpg?temp=1",
    },
    {
      link: "https://images.jdmagicbox.com/comp/kota-rajasthan/u4/9999px744.x744.140419114819.u8u4/catalogue/arjun-group-of-education-itawa-kota-rajasthan-colleges-83h95p7l45.jpg?temp=1",
    },
    {
      link: "https://images.jdmagicbox.com/comp/kota-rajasthan/u4/9999px744.x744.140419114819.u8u4/catalogue/arjun-group-of-education-itawa-kota-rajasthan-colleges-lmu87qnag1.jpg?temp=1",
    },
    {
      link: "https://images.jdmagicbox.com/comp/kota-rajasthan/u4/9999px744.x744.140419114819.u8u4/catalogue/arjun-group-of-education-itawa-kota-rajasthan-colleges-erz9lrsgkw.jpg?temp=1",
    },

    {
      link: "https://images.jdmagicbox.com/comp/kota-rajasthan/u4/9999px744.x744.140419114819.u8u4/catalogue/arjun-group-of-education-itawa-kota-rajasthan-colleges-odw4htgj1v.jpg?temp=1",
    },
    {
      link: "https://images.jdmagicbox.com/comp/kota-rajasthan/u4/9999px744.x744.140419114819.u8u4/catalogue/arjun-group-of-education-itawa-kota-rajasthan-colleges-w7ufhmito1.jpg?temp=1",
    },
    {
      link: "https://images.jdmagicbox.com/comp/kota-rajasthan/u4/9999px744.x744.140419114819.u8u4/catalogue/arjun-group-of-education-itawa-kota-rajasthan-colleges-wjgd883wlr.jpg?temp=1",
    },
    {
      link: "https://images.jdmagicbox.com/comp/kota-rajasthan/u4/9999px744.x744.140419114819.u8u4/catalogue/arjun-group-of-education-itawa-kota-rajasthan-colleges-242dwqturf.jpg?temp=1",
    },
 
  ];

  return (
    <>
      <Card>
        <Card.Text>
          <div className="text-center mb-5 mt-5">
            <h1> Our Certificates </h1>
          </div>
        </Card.Text>
      </Card>
      <Container>
        <Row xs={1} md={2} className="g-4 mt-5 mb-5 text-center">
          {cardData.length &&
            cardData.map((itm, idx) => (
              <Col md={6} key={idx}>
                <Card>
                  <Card.Img variant="top" src={itm.link} />
                  {/* <Card.Body>
                    <Card.Title>Card title</Card.Title>
                    <Card.Text>
                      This is a longer card with supporting text below as a
                      natural lead-in to additional content. This content is a
                      little bit longer.
                    </Card.Text>
                  </Card.Body> */}
                </Card>
              </Col>
            ))}
        </Row>
      </Container>
    </>
  );
};

export default Certificates;
