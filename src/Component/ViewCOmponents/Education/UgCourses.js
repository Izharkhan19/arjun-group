import { React, useState } from "react";
import {
  Button,
  Card,
  Col,
  Container,
  FloatingLabel,
  Form,
  Row,
} from "react-bootstrap";
import ApplyDetails from "../../Modals/ApplyDetails";

const UgCourses = () => {
  const [modalShow, setModalShow] = useState(false);
  const [courseData, setcourseData] = useState({});

  const udData = [
    {
      imageLogo:
        "https://researchmethod.net/wp-content/uploads/2023/05/Bachelor_of_Arts-1024x576.jpg",
      title: "Bachelor of Arts (B.A.)",
      details:
        "The Bachelor of Arts (B.A.) is mainly awarded to students in the areas of Humanities, Arts, Social Sciences, Linguistics, Cultural Sciences, but also, in some cases, Informatics and Business Sciences can be awarded with a Bachelor of Arts instead of a Bachelor of Science (B.Sc.).",
      footerData: "View Details",
      FullForm: "Bachelor of Arts",
      CourseDuration: "3 years",
      ExaminationType: "Semester Based",
      Levelofprogramme: "Undergraduate",
      EligibilityCriteria: "10+2 from a recognised university",
      CourseFees: "70,000 - Rs. 2 lakh",
      AverageSalary: "Rs. 2.5 - 8 lakh per annum",
    },

    {
      imageLogo:
        "https://www.successcds.net/wp-content/uploads/2018/12/bba.png",
      title: "Bachelor of Business Administration (BBA)",
      details:
        "A Bachelor of Business Administration (BBA) is a bachelor's degree that helps you establish a fundamental understanding of business and how various aspects of it apply to the real world. It's a well-rounded degree currently in high demand because it's so versatile.",
      footerData: "View Details",
      FullForm: "Bachelor of Business Administration",
      CourseDuration: "3 years",
      ExaminationType: "Semester Based",
      Levelofprogramme: "Undergraduate",
      EligibilityCriteria: "10+2 from a recognised university",
      CourseFees: "Rs. 1 lakhs - Rs. 2.5 lakhs",
      AverageSalary: "Rs. 5 lakhs per annum",
    },

    {
      imageLogo:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3EREhyhZ4wypU0yUqL5RKpni4hoSv9zl63xx-5hzO3KMfdY1ptJ8zucNiZu3N6iqf_vE&usqp=CAU",
      title: "Bachelor of Science Agriculture (BSC-AG)",
      details:
        "BSc Agriculture is a 4-year undergraduate course that primarily focuses on research and practices in agricultural science, dealing with disciplines like Genetics and Plant Breeding, Agricultural Microbiology, Soil Science, Plant Pathology, etc. It is a professional degree recognized by the Government of India in the field of agricultural science. This course aims to provide training to implement modern agricultural techniques and technologies in the real-world scenario. ",
      footerData: "View Details",
      FullForm: "Bachelor of Science Agriculture",
      CourseDuration: "4 years",
      ExaminationType: "Semester Based",
      Levelofprogramme: "Undergraduate",
      EligibilityCriteria:
        "50% marks in class 12 in Science (Physics, Chemistry, Biology) stream from a recognized educational board",
      CourseFees: "INR 2-3 Lakhs",
      AverageSalary: "INR 4 LPA to INR 6 LPA",
    },
    {
      imageLogo:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR04gKBIH6yj4hcp4_8dHtx1Zx5NRruuBW_Agqi6ymWNFPbP6Kd1sR1FGy4aw2uR985DKk&usqp=CAU",
      title: "Bachelor of Technology (B-TECH)",
      details:
        "A Bachelor of Technology (Latin Baccalaureus Technologiae; B. Tech.) is an undergraduate academic degree conferred after the completion of a three- to five-year program of studies at an accredited university or accredited higher education institution, such as a college or university.",
      footerData: "View Details",
      FullForm: "Bachelor of Technology",
      CourseDuration: "4 years",
      ExaminationType: "Semester Based",
      Levelofprogramme: "Undergraduate",
      EligibilityCriteria: "10+2 from a recognised university",
      CourseFees: "INR 3- 4 lakh",
      AverageSalary: "INR 4- 10 LPA",
    },

    {
      imageLogo:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2Bos5Wb7UlqJ3X2nVp681MTklYACNW597Uw&usqp=CAU",
      title: "Bachelor of Library and Information Science [B.Lib.I.Sc] ",
      details:
        "Bachelor in Library and Information Science (B.Lib.I.Sc.) is a one year undergraduate course that teaches the candidates about library management and administration. The course is generally divided into two semesters. Bachelor in Library and Information Science (B.Lib.I.Sc.) mainly deals with the preservation and maintenance of libraries.",
      footerData: "View Details",
      FullForm: "Bachelor of Library and Information Science",
      CourseDuration: "1 year",
      ExaminationType: "Semester Based",
      Levelofprogramme: "Undergraduate",
      EligibilityCriteria: "10+2 from a recognised university",
      CourseFees: "INR 2,000 to INR 50,000.",
      AverageSalary: "INR 1.2 LPA - INR 6 LPA",
    },

    {
      imageLogo:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2Bx3gDK_R7ZQuLfOyGwxlWX2IdNIs5fR3XA&usqp=CAU",
      title: "Bachelor of Social Work (BSW)",
      details:
        "Bachelor in Library and Information Science (B.Lib.I.Sc.) is a one year undergraduate course that teaches the candidates about library management and administration. The course is generally divided into two semesters. Bachelor in Library and Information Science (B.Lib.I.Sc.) mainly deals with the preservation and maintenance of libraries.",
      footerData: "View Details",
      FullForm: "Bachelor of Social Work",
      CourseDuration: "3 Years",
      ExaminationType: "Semester Based",
      Levelofprogramme: "Undergraduate",
      EligibilityCriteria: "Must have passed 12th along with a minimum of 50%",
      CourseFees: "INR 1.46 LPA - 2 LPA",
      AverageSalary: "INR 2 - 3.4 LPA",
    },

    {
      imageLogo:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJu9qdjNbT9dG64Aa98tJUzcUG7RR0oyAaZw&usqp=CAU",
      title: "Bachelor of Education (B.Ed.)",
      details:
        "The full form of B. Ed is the Bachelor of Education. B. Ed is an undergraduate educational degree course for learners wishing to pursue their teaching careers and related disciplines. This training has a period of 2 years.",
      footerData: "View Details",
      FullForm: "Bachelor of Education",
      CourseDuration: "4 years",
      ExaminationType: "Semester Based",
      Levelofprogramme: "Undergraduate",
      EligibilityCriteria: "10+2 from a recognised university",
      CourseFees: "1,00,000 - Rs. 4 lakh",
      AverageSalary: "Rs. 4.5 - 10 lakh per annum",
    },
    {
      imageLogo:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuHPvw9hParMDkEXxjOc24IM2MOYLmKOsdMg&usqp=CAU",
      title: "Bachelor of Commerce (B.Com.)",
      details:
        "B.Com course is an undergraduate degree programme offering a conceptual understanding of various subjects related to finance, such as Accounting, Economics, Business Law, Taxation, Insurance and Management. B.Com course duration is a three-year and it is an undergraduate degree programme in the field of commerce.",
      footerData: "View Details",
      FullForm: "Bachelor of Commerce",
      CourseDuration: "3 years",
      ExaminationType: "Semester Based",
      Levelofprogramme: "Undergraduate",
      EligibilityCriteria: "10+2 from a recognised university",
      CourseFees: "70,000 - Rs. 2 lakh",
      AverageSalary: "Rs. 2.5 - 8 lakh per annum",
    },
    {
      imageLogo:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRg1-Ke_OUGppuaPqZU4pJo7uGpCgkadPkupg&usqp=CAU",
      title: "Bachelor of Science (B.Sc.)",
      details:
        "The Bachelor of Science (B.Sc.) degree is mainly awarded to students in the areas of Natural Sciences, Business & Management, Engineering Sciences, Mathematics, and Informatics. Universities like Cambridge and Oxford offer B.A. degrees for all their undergraduate studies, including research and scientific programmes.",
      footerData: "View Details",
      FullForm: "Bachelor of Science",
      CourseDuration: "3 years",
      ExaminationType: "Semester Based",
      Levelofprogramme: "Undergraduate",
      EligibilityCriteria: "10+2 from a recognised university",
      CourseFees: "60,000 - Rs. 3 lakh",
      AverageSalary: "Rs. 4.5 - 9 lakh per annum",
    },
    {
      imageLogo:
        "https://cache.careers360.mobi/media/presets/860X429/article_images/2020/3/2/Bachelor-Of-Engineering-Course.webp",
      title: "Bachelor of Engineering (B.E./B.Eng.)",
      details:
        "Bachelor of Engineering is an undergraduate degree program that focuses on the study of engineering principles, concepts, and practices. It prepares students for a career in various engineering fields by providing them with a solid foundation of scientific, mathematical, and technical knowledge.",
      footerData: "View Details",
      FullForm: "Bachelor of Engineering",
      CourseDuration: "4 years",
      ExaminationType: "Semester Based",
      Levelofprogramme: "Undergraduate",
      EligibilityCriteria: "10+2 from a recognised university",
      CourseFees: "65,000 - Rs. 4 laks",
      AverageSalary: "Rs. 4.75 - 10 lakh per annum",
    },
    {
      imageLogo:
        "https://mltfzurcj7rp.i.optimole.com/w:auto/h:auto/q:mauto/f:avif/https://www.admissiondiscover.com/wp-content/uploads/2023/01/bca-admission-2021.jpeg",
      title: "Bachelor of Computer Application (B.C.A)",
      details:
        "Bachelor of Computer Applications is a 3-year (6 semesters) programme for undergraduates seeking career in the IT industry. The degree is awarded for completing the programme in the study fields of software testing, web design, software development and programming, computer networking and computer systems.",
      footerData: "View Details",
      FullForm: "Bachelor of Computer",
      CourseDuration: "3 years",
      ExaminationType: "Semester Based",
      Levelofprogramme: "Undergraduate",
      EligibilityCriteria: "10+2 from a recognised university",
      CourseFees: "35,000 - Rs. 3 laks",
      AverageSalary: "Rs. 2.75 - 8 lakh per annum",
    },
  ];

  return (
    <>
      <Card>
        <Card.Text>
          <div className="text-center mb-5 mt-5">
            <h1> Under Graduate Courses </h1>
          </div>
        </Card.Text>
      </Card>
      <Container>
        <Row xs={1} md={2} className="g-4 p-4">
          {udData.length &&
            udData.map((itm, idx) => (
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
                  <Card.Footer
                    style={{ cursor: "pointer" }}
                    onClick={() => {
                      setcourseData(itm);
                      setModalShow(true);
                    }}
                  >
                    <small className="text-muted">{itm.footerData}</small>
                  </Card.Footer>
                </Card>
              </Col>
            ))}
        </Row>
      </Container>
      {modalShow && (
        <ApplyDetails
          show={modalShow}
          onHide={() => setModalShow(false)}
          courseData={courseData}
        />
      )}
    </>
  );
};

export default UgCourses;
