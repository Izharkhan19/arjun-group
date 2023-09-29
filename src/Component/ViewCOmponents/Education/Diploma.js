import {React, useState} from "react";
import {
  Card,
  Col,
  Container,
  FloatingLabel,
  Form,
  Row,
} from "react-bootstrap";
import ApplyDetails from "../../Modals/ApplyDetails";

const Diploma = () => {
  const [modalShow, setModalShow] = useState(false);
  const [courseData, setcourseData] = useState({});

  const deplomaData = [
    {
      imageLogo:
        "https://sparc.org.in/wp-content/uploads/2018/12/diploma-in-computer-application.jpg",
      title: "Diploma in Computer Programming and Application (DCPA)",
      details:
        "Students aspiring to pursue Diploma in Computer Applications (DCA) course must have completed their higher school/ 10 + 2 from a recognized board. Choosing Computers as their main or optional subject after class 10 will give students an additional edge over others.",
      footerData: "View Details",
      FullForm: "Diploma in Computer Programming and Application",
      CourseDuration: "1-2 years",
      ExaminationType: "Semester Based",
      Levelofprogramme: "Postgraduate",
      EligibilityCriteria: "Passing standard 10th with a minimum of 45% marks and above from a recognized board.",
      CourseFees: "INR 4,000 to 12,000",
      AverageSalary: "INR 2 to 5 lacs per annum",
    },
    {
      imageLogo:
        "https://itcomputerinstitute.com/new/images/user/1547904941341.jpg",
      title: "Advanced Diploma In Computer Hardware & Networking (ADCHN)",
      details:
        "An advanced diploma is a certificate awarded by a school upon completion of a student's programs of study. This course require advanced learning, and the learning objectives require a lot more time to complete. They put an emphasis on theoretical knowledge and practical skills that are crucial for work and life.",
      footerData: "View Details",
      FullForm: "Advanced Diploma In Computer Hardware & Networking",
      CourseDuration: "1.6 year",
      ExaminationType: "Semester Based",
      Levelofprogramme: "ALL Levels",
      EligibilityCriteria: "ALL LEVELS",
      CourseFees: "8000.00 Thousand",
      AverageSalary: "Rs. 4.5 - 12 lakh per annum",
    },
    {
      imageLogo:
        "https://dirtprp.s3.ap-south-1.amazonaws.com/course/material/480/P001_logo.jpg",
      title: "Post Graduate Deploma in Computer Application PGDCA",
      details:
        "PGDCA is a one-year (with two semesters) postgraduate course offered by many Universities in India recognized by UGC.",
      footerData: "View Details",
      FullForm: "Post Graduate Deploma in Computer Application",
      CourseDuration: "1 year",
      ExaminationType: "Semester Based",
      Levelofprogramme: "Postgraduate",
      EligibilityCriteria: "Bachelor Degree with 50 per cent marks from any field.",
      CourseFees: "Rs. 25,000 to Rs. 3 lakhs",
      AverageSalary: "Rs. 5 lakh per annum",
    },

    {
      imageLogo:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPiXzvLEHjCf6TpQ4m-_-sdMFQPdt8Pk7aIQ&usqp=CAU",
      title: "Advance Diploma in Computer Applications (ADCA)",
      details:
        "Advance Diploma in Computer Applications (ADCA) from IISDT is a comprehensive program designed to provide students with the knowledge and skills needed to become proficient in the areas of computer hardware, software, networking, and web development.",
        footerData: "View Details",
        FullForm: "Advance Diploma in Computer Applications",
        CourseDuration: "1 year",
        ExaminationType: "Semester Based",
        Levelofprogramme: "Postgraduate",
        EligibilityCriteria: "10+2 from a Recognized Educational Board or its equivalent",
        CourseFees: "INR 15,000 – INR 30,000 per annum",
        AverageSalary: "INR 4.5 L per annum",
    },
    // {
    //   imageLogo: "",
    //   title: "ADFAP",
    //   details: "",
    //   footerData: "Apply Now",
    // },
    // {
    //   imageLogo: "",
    //   title: "ADMPM",
    //   details: "",
    //   footerData: "Apply Now",
    // },
  ];

  return (
    <>
      <Card>
        <Card.Text>
          <div className="text-center mb-5 mt-5">
            <h1> Our Diploma Courses </h1>
          </div>
        </Card.Text>
      </Card>
      <Container>
        <Row xs={1} md={2} className="g-4 p-4">
          {deplomaData.length &&
            deplomaData.map((itm, idx) => (
              <Col key={idx}>
                <Card>
                  <Card.Img
                    variant="top"
                    src={itm.imageLogo}
                    width={"300px"}
                    height={"250px"}
                  />
                  <Card.Body>
                    <Card.Title>{itm.title}</Card.Title>
                    <Card.Text>{itm.details}</Card.Text>
                  </Card.Body>
                  <Card.Footer style={{ cursor: "pointer" }}  onClick={() => {
                      setcourseData(itm);
                      setModalShow(true);
                    }}>
                    <small className="text-muted">{itm.footerData}</small>
                  </Card.Footer>
                </Card>
              </Col>
            ))}
        </Row>
        {modalShow && (
          <ApplyDetails
            show={modalShow}
            onHide={() => setModalShow(false)}
            courseData={courseData}
          />
        )}
      </Container>
    </>
  );
};

export default Diploma;
