import React from "react";
import { Button, Card, Col, Container, Row, Table } from "react-bootstrap";

const Rscit = () => {
  return (
    <>
      <Card className="bg-dark text-white">
        <Card.Img
          src="https://www.apssb.in/wp-content/uploads/2021/02/RSCIT-Answer-Key.jpg"
          height={"450px"}
          alt="Card image"
        />
        <Card.ImgOverlay>
          {/* <Card.Title>Card title</Card.Title>
          <Card.Text>
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This content is a little bit longer.
          </Card.Text>
          <Card.Text>Last updated 3 mins ago</Card.Text> */}
        </Card.ImgOverlay>
      </Card>
      <Container fluid>
        <div className="text-center mt-5 mb-5">
          <h1> RS-CIT Introduction</h1>
        </div>
        <Row>
          <Col>
            <Card>
              <Card.Header>About RS-CIT</Card.Header>
              <Row>
                <Col md={7}>
                  <Card.Body>
                    <Card.Title>Description</Card.Title>
                    <Card.Text>
                      RS-CIT{" "}
                      <b>
                        {" "}
                        (Rajasthan State Certificate course in Information
                        Technology){" "}
                      </b>{" "}
                      has been recognized by Dept. of Information Technology and
                      Communication <b>(DoIT&C) </b>, Govt. of Rajasthan to
                      propagate IT Literacy among the people of Rajasthan.
                    </Card.Text>
                    <Card.Text>
                      In order to bridge the Digital Divide, RKCL has launched
                      an IT friendly course for the people of Rajasthan. RS-CIT
                      is a high quality and low cost IT literacy program which
                      offers a novel curriculum, excellent study material and
                      learning management system in both local Hindi language
                      and English. A state-of-the-art delivery mechanism leads
                      to State University governed Examination and
                      Certification.
                    </Card.Text>

                    <Card.Title>Course Objective</Card.Title>
                    <Card.Text>
                      To empower citizens with fundamental understanding of
                      Information Technology (I.T.) at affordable cost,
                      acquiring essential skills to begin computing with
                      confidence, be more productive at home and work and able
                      to explore career opportunities globally.
                    </Card.Text>
                    <Card.Text>
                      <b> Eligibility : </b> Anyone who is literate & has keen
                      desire to learn Computer & Information Technology
                    </Card.Text>
                    <Card.Text>
                      <b> Course Duration : </b> 3 Months or 132 Hours (2 hours
                      per day 1 Hour Practical and 1 Hour Theory)
                    </Card.Text>
                    <Card.Text>
                      <b>
                        {" "}
                        RS-CIT Course Fee : Rs 3350 /- only per candidate,
                        however for eligible Govt. Employees, the course fee is
                        Rs 2700/- only per candidate.{" "}
                      </b>
                    </Card.Text>
                    <Card.Text>
                      <b>
                        RS-CIT Certification: RS-CIT Examination and
                        Certification by Vardhman Mahaveer Open University
                        (VMOU), Kota.{" "}
                      </b>
                    </Card.Text>
                    <Card.Text>
                      <b>Course Medium :</b> Hindi & English
                    </Card.Text>
                  </Card.Body>
                </Col>
                <Col md={5}>
                  <img
                    src={
                      "https://sp-ao.shortpixel.ai/client/to_auto,q_glossy,ret_img,w_921,h_1140/https://cpitudaipur.com/wp-content/uploads/2020/04/rscit-online-course-1.jpg"
                    }
                    height={"700px"}
                    alt=""
                  />
                </Col>
              </Row>
            </Card>
          </Col>
        </Row>

        <div className="text-center mt-5 mb-5">
          <h1> RS-CIT Sylabous</h1>
        </div>

        <Row>
          <Col>
            <Card>
              <Card.Header>RS-CIT Sylabous</Card.Header>
              <Card.Body>
                <Card.Title>Course Syllabus</Card.Title>
                <Card.Text>
                  <Table>
                    <thead>
                      <tr>
                        <th>Chapter No.</th>
                        <th> Chapter Name</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>1</td>
                        <td>(Introduction to Computers)</td>
                      </tr>
                      <tr>
                        <td>2</td>
                        <td>(Computer System)</td>
                      </tr>
                      <tr>
                        <td>3</td>
                        <td>(Exploring your Computer)</td>
                      </tr>
                      <tr>
                        <td>4</td>
                        <td>(Introduction to Internet)</td>
                      </tr>
                      <tr>
                        <td>5</td>
                        <td>(Digital Payment and Platforms)</td>
                      </tr>
                      <tr>
                        <td>6</td>
                        <td>(Internet Applications)</td>
                      </tr>
                      <tr>
                        <td>7</td>
                        <td>(Digital Services for Citizens of Rajasthan)</td>
                      </tr>
                      <tr>
                        <td>8</td>
                        <td>(Accessing Citizen Service in Rajasthan)</td>
                      </tr>
                      <tr>
                        <td>9</td>
                        <td>(Exploring Common Citizen Centric Services)</td>
                      </tr>
                      <tr>
                        <td>10</td>
                        <td>(Working with Mobile Devices/Smartphones)</td>
                      </tr>
                      <tr>
                        <td>11</td>
                        <td>(Microsoft Word)</td>
                      </tr>
                      <tr>
                        <td>12</td>
                        <td>(Microsoft Excel)</td>
                      </tr>
                      <tr>
                        <td>13</td>
                        <td>(Microsoft Powerpoint)</td>
                      </tr>
                      <tr>
                        <td>14</td>
                        <td>(Cyber Security)</td>
                      </tr>
                      <tr>
                        <td>15</td>
                        <td>(Managing your Computer)</td>
                      </tr>
                      <tr>
                        <td>16</td>
                        <td>(Getting More from your Computer)</td>
                      </tr>
                    </tbody>
                  </Table>
                </Card.Text>

                <Card.Text>
                  <b>RS-CIT Syllabus </b>{" "}
                  <a
                    href="https://www.rkcl.in/myrkclwebsite/uploads/ckeditor/1552626554.pdf"
                    target="_blank"
                  >
                    Download
                  </a>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <div className="text-center mt-5 mb-5">
          <h1> RKCL RS-CIT</h1>
        </div>

        <Row>
          <Col md={12} className="mt-3 mb-3">
            <Card>
              <Card.Body>
                <Card.Title>
                  RSCIT Free Course for Female 2023 Education Qualification
                </Card.Title>
                <Card.Text>
                  राजस्थान फ्री आरएससीआईटी कोर्स 2023 के लिए शैक्षणिक योग्यता
                  दसवीं कक्षा पास रखी गई है। यानी महिला अभ्यर्थी मान्यता प्राप्त
                  बोर्ड से दसवीं कक्षा पास होनी चाहिए।
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={12} className="mt-3 mb-3">
            <Card>
              <Card.Body>
                <Card.Title>
                  Free RKCL RSCIT for Female 2023 Course duration
                </Card.Title>
                <Card.Text>
                  राजस्थान फ्री आरएससीआईटी कोर्स 2023 की प्रशिक्षण अवधि 132 घंटे
                  (3 महीने) की रखी गई है। जिला स्तरीय समिति द्वारा चयनित
                  प्रशिक्षणार्थियों को राजस्थान नॉलेज कॉरपोरेशन लिमिटेड द्वारा
                  उनके चिन्हित आईटी ज्ञान केदो पर चयनित कोर्स के अनुसार
                  प्रशिक्षण दिया जाएगा। प्रशिक्षणार्थियों की उपस्थिति
                  बायोमेट्रिक मशीन द्वारा की जाएगी और विभाग द्वारा तय समय पर
                  आईटी ज्ञान केदो पर प्रशिक्षण प्रदान किया जाएगा। आरएससीआईटी
                  प्रशिक्षण की निर्धारित अवधि पूर्ण होने के बाद
                  प्रशिक्षणार्थियों को परीक्षा में भाग लेना होगा। कुल प्रशिक्षण
                  अवधि की 65% से कम बायोमेट्रिक उपस्थिति वाले प्रशिक्षणार्थी
                  एग्जाम में भाग नहीं ले सकेंगे।
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={12} className="mt-3 mb-3">
            <Card>
              <Card.Body>
                <Card.Title>
                  Free RKCL RSCIT for Female 2023 Required documents
                </Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                  {" "}
                  राजस्थान फ्री आरएससीआईटी कोर्स 2023 के लिए महिला अभ्यर्थी के
                  पास निम्नलिखित डाक्यूमेंट्स होना अनिवार्य है।
                </Card.Subtitle>
                <Card.Text>
                  <ul>
                    <li>आयु के सत्यापन हेतु कक्षा 10वीं की मार्कशीट।</li>
                    <li>महिला अभ्यर्थी की 12वीं कक्षा की मार्कशीट।</li>
                    <li>
                      स्नातकोत्तर होने की स्थिति में स्नातक की अंक तालिका।
                    </li>
                    <li>
                      विधवा के प्रकरण में पति का मृत्यु प्रमाण पत्र/ तलाकशुदा के
                      प्रकरण में तलाकनामा/ परित्यक्ता की स्थिति में परित्यक्ता
                      होने का शपथ पत्र।
                    </li>
                    <li>जाति प्रमाण पत्र।</li>
                    <li>
                      हिंसा से पीड़ित महिला के प्रकरण में f.i.r. के प्रति/ घरेलू
                      हिंसा में संरक्षण अधिनियम 2005 के तहत घरेलू घटना रिपोर्ट/
                      महिला सुरक्षा एवं सलाह केंद्र/ अपराजिता पर प्रकरण दर्ज
                      करने के दस्तावेज के प्रति।
                    </li>
                    <li>
                      अन्य कोई डाक्यूमेंट्स जिसका अभ्यर्थी लाभ उठाना चाहता है।
                    </li>
                  </ul>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={12} className="mt-3 mb-3">
            <Card>
              <Card.Body>
                <Card.Title>
                  Free RKCL RSCIT for Female 2023 Course duration
                </Card.Title>
                <Card.Text>
                  राजस्थान फ्री आरएससीआईटी कोर्स 2023 की प्रशिक्षण अवधि 132 घंटे
                  (3 महीने) की रखी गई है। जिला स्तरीय समिति द्वारा चयनित
                  प्रशिक्षणार्थियों को राजस्थान नॉलेज कॉरपोरेशन लिमिटेड द्वारा
                  उनके चिन्हित आईटी ज्ञान केदो पर चयनित कोर्स के अनुसार
                  प्रशिक्षण दिया जाएगा। प्रशिक्षणार्थियों की उपस्थिति
                  बायोमेट्रिक मशीन द्वारा की जाएगी और विभाग द्वारा तय समय पर
                  आईटी ज्ञान केदो पर प्रशिक्षण प्रदान किया जाएगा। आरएससीआईटी
                  प्रशिक्षण की निर्धारित अवधि पूर्ण होने के बाद
                  प्रशिक्षणार्थियों को परीक्षा में भाग लेना होगा। कुल प्रशिक्षण
                  अवधि की 65% से कम बायोमेट्रिक उपस्थिति वाले प्रशिक्षणार्थी
                  एग्जाम में भाग नहीं ले सकेंगे।
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={12} className="mt-3 mb-3">
            <Card>
              <Card.Body>
                <Card.Title>
                  RSCIT Free Course for Female 2023 Necessary Guidelines
                </Card.Title>
                <Card.Text>
                  राजस्थान आरएससीआईटी फ्री कोर्स फॉर फीमेल 2023 के लिए आवश्यक
                  नियम और शर्तें इस प्रकार हैं।
                </Card.Text>
                <Card.Text>
                  इसके लिए सभी वर्गों की महिलाएं जैसे ग्रहणी, किशोरी, बालिकाएं,
                  स्वयं सहायता समूह सदस्य, कॉलेज छात्राएं, बीपीएल एवं अल्पसंख्यक
                  वर्ग की महिलाएं आवेदन कर सकती हैं।
                  <ul>
                    <li>
                      आरएससीआईटी कोर्स का प्रशिक्षण राजस्थान नॉलेज कॉरपोरेशन
                      लिमिटेड के माध्यम से दिया जाएगा।
                    </li>
                    <li>
                      आरएससीआईटी फ्री कोर्स फॉर फीमेल 2023 के लिए ऑनलाइन आवेदन
                      की अंतिम तिथि 8 सितंबर 2023 तक रखी गई है।
                    </li>
                    <li>
                      आरएससीआईटी कोर्स का प्रशिक्षण 132 घंटे यानी की 3 महीने का
                      होता है।
                    </li>
                    <li>
                      इस कोर्स के लिए 16 से 40 वर्ष तक की महिलाएं आवेदन कर सकती
                      हैं। इसमें आयु की गणना 1 जनवरी 2023 के आधार पर कर सकते
                      हैं।
                    </li>
                    <li>
                      आरएससीआईटी फ्री कोर्स फॉर फीमेल 2023 के लिए योग्यता 10वीं
                      पास रखी गई है।
                    </li>
                    <li>
                      इसमें विधवा, तलाकशुदा, परित्यक्ता, हिंसा से पीड़ित महिला,
                      आंगनवाड़ी कार्यकर्ताओं को प्राथमिकता दी जाएगी।
                    </li>
                    <li>
                      अभ्यर्थियों का चयन 10वीं कक्षा में प्राप्त अंकों की मेरिट
                      के आधार पर जिला स्तर पर गठित कमेटी द्वारा किया जाएगा।
                    </li>
                    <li>
                      चयनित अभ्यर्थियों को राजस्थान नॉलेज कॉरपोरेशन लिमिटेड
                      द्वारा चयनित आईटी ज्ञान केंद्रों पर प्रशिक्षण दिया जाएगा।
                    </li>
                    <li>
                      प्रशिक्षणार्थियों की उपस्थिति बायोमेट्रिक मशीन से की
                      जाएगी। अभ्यर्थियों के लिए न्यूनतम 65% बायोमेट्रिक उपस्थिति
                      अनिवार्य है।
                    </li>
                    <li>
                      आरएससीआईटी एग्जाम में पास होने के लिए न्यूनतम 40% अंक लाना
                      अनिवार्य है।
                    </li>
                  </ul>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <div className="text-center mt-5 mb-5">
          <h1> RSCIT Free Course for Female 2023 Important Links</h1>
        </div>

        <Row>
          <Col md={12}>
            <Table
              style={{ marginLeft: "260px", width: "700px", height: "350px" }}
            >
              <thead className="text-center">
                <tr>
                  <th>Start RSCIT Free Course for Female 2023</th>
                  <th>Start</th>
                </tr>
              </thead>
              <tbody className="text-center">
                <tr>
                  <th>Last Date Online Application form </th>
                  <th>8 September 2023</th>
                </tr>
                <tr>
                  <th>Apply Online</th>
                  <th>
                    <a
                      href="https://myrkcl.com/wcdnew/index.php"
                      target="_blank"
                    >
                      Click here
                    </a>
                  </th>
                </tr>
                <tr>
                  <th>Official Notification</th>
                  <th>
                    <a
                      href="https://skresult.com/wp-content/uploads/2023/08/RSCIT-Free-Course-for-Female-2023-Notification.pdf"
                      target="_blank"
                    >
                      Click here
                    </a>
                  </th>
                </tr>
                <tr>
                  <th>Official Website</th>
                  <th>
                    <a
                      href="https://myrkcl.com/wcdnew/index.php"
                      target="_blank"
                    >
                      Click here
                    </a>
                  </th>
                </tr>
                <tr>
                  <th>Join WhatsApp Group</th>
                  <th>
                    <a
                      href="https://skresult.com/rajasthan-shiksha-samachar-whatsapp-group/"
                      target="_blank"
                    >
                      Click here
                    </a>
                  </th>
                </tr>
                <tr>
                  <th>Join Telegram</th>
                  <th>
                    <a href="https://telegram.me/skresult" target="_blank">
                      Click here
                    </a>
                  </th>
                </tr>
                <tr>
                  <th>Check All Latest Jobs</th>
                  <th>
                    <a href="https://skresult.com/" target="_blank">
                      SKResult.com
                    </a>
                  </th>
                </tr>
              </tbody>
            </Table>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Rscit;
