import { React, useState } from "react";
import {
  Card,
  Col,
  Container,
  FloatingLabel,
  Form,
  Row,
} from "react-bootstrap";
import ApplyDetails from "../../Modals/ApplyDetails";

const PgCourses = () => {
  const [modalShow, setModalShow] = useState(false);
  const [courseData, setcourseData] = useState({});

  const pgData = [
    {
      imageLogo:
        "https://collegevidya.com/_next/image/?url=https%3A%2F%2Fcollegevidya.com%2Fblog%2Fwp-content%2Fuploads%2F2021%2F09%2Fwhat-is-m-tech-master-of-technology.jpg&w=3840&q=100",
      title: "Master of Technology (M-TECH)",
      details:
        "MTech Duration is 2 years in India. MTech is a postgraduation degree in the field of engineering that focuses on the advanced studies. MTech Duration is different in different countries. MTech duration varies from 1-2 years depending on the country.",
      footerData: "View Details",
      FullForm: "Master of Technology",
      CourseDuration: "2 years",
      ExaminationType: "Semester Based",
      Levelofprogramme: "Postgraduate",
      EligibilityCriteria: "After B-Tech from a recognised university",
      CourseFees: "NR 1 lakh - 2 lakhs per year",
      AverageSalary: "INR 1 LPA - INR 2.5 LPA",
    },
    {
      imageLogo: "https://www.edutantra.in/images/work/M.Lib.jpg",
      title: "Master of Library and Information Science (MLIB)",
      details:
        "MliblSc generally includes the study of subjects like Planning and Management, Computer Basics and Applications, Library Management, Research Methodology, Statistical Techniques, and the like. Interested students can check the table below to know the key highlgihts of the course.",
      footerData: "View Details",
      FullForm: "Master of Library and Information Science",
      CourseDuration: "3 Years",
      ExaminationType: "Semester Based",
      Levelofprogramme: "Postgraduate",
      EligibilityCriteria:
        "50%-60% in Bachelor's degree from a recognised university",
      CourseFees: "INR 20,000 to INR 2 lakh",
      AverageSalary: "Up to INR 3-4 lakh",
    },
    {
      imageLogo:
        "https://www.aeccglobal.in/images/easyblog_articles/215/msc-agriculture.webp",
      title: "Master of Science in Agriculture (MSC-AG)",
      details:
        "MSc Agriculture is a 2 year PG program that provides a foundation and scientific understanding of crop production through effective field management, including in-depth knowledge of weed science, water & nutrient management.",
      footerData: "View Details",
      FullForm: "Master of Science in Agriculture",
      CourseDuration: "2 years",
      ExaminationType: "Semester Based",
      Levelofprogramme: "Postgraduate",
      EligibilityCriteria:
        "Completed graduation in Agriculture, Horticulture, or Forestry from a recognized institute with a minimum of 50% marks.",
      CourseFees: "INR 50,000 - INR 150,000",
      AverageSalary: "INR 1 LPA - INR 2.5 LPA",
    },
    {
      imageLogo:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHseJ9mX7TPMAVyLrfxbZf_Y27wPnOvWSIYahH9PVBS8TCVXxQn1dZKMV2jVco24o_atw&usqp=CAU",
      title: "Master of Computer Applications (MCA)",
      details:
        "Master of Computer Application is a two-year postgraduate level course which delves deeper into the specialisations in the branch of computer applications. Technological issues require specialised solutions and MCA course provides hands-on training and skills to address to complex issues arising in the domains such as operating systems, computer languages and system administration.",
      footerData: "View Details",
      FullForm: "Master of Computer Applications",
      CourseDuration: "2 years",
      ExaminationType: "Semester Based",
      Levelofprogramme: "Postgraduate",
      EligibilityCriteria: "After graduation from a recognised university",
      CourseFees: "Up to INR 3 lakh",
      AverageSalary: "Rs. 4 - 7 lakh per annum",
    },
    {
      imageLogo: "https://www.anuonline.ac.in/images/courses/msw.jpg",
      title: "Master of Social Work (MSW)",
      details:
        "A Master of Social Work is a postgraduate degree of two years duration. This course not only helps the aspirants to make a successful career but also serves society as they work for the betterment of people and a community as a whole. A social worker is one of the noblest professions of all times. Aspirants need to remember that this course needs a lot of patience, work ethic, empathy and selflessness. It is a giving profession which involves making sure of bringing smiles on the faces of the people around.",
      footerData: "View Details",
      FullForm: "Master of Social Work",
      CourseDuration: "2 years",
      ExaminationType: "Semester Based",
      Levelofprogramme: "Postgraduate",
      EligibilityCriteria:
        "A Bachelor's degree from a recognised university with a minimum of 50 per cent marks",
      CourseFees: "Rs 10,000 to 60,000 per annum",
      AverageSalary: "Rs 2.42 lakh to 2.64 lakh",
    },
    {
      imageLogo:
        "https://iirfranking.com/courses/wp-content/uploads/2023/02/M.E.jpg",
      title: "Master of Engineering (MEng)",
      details:
        "The Master of Engineering degree can be either academic (with a focus on engineering theories and practice) or professional (with a focus on preparing students for work in the engineering field). While some MEng programs require students to become published in an industry journal, others involve training periods in industry or laboratories, or a combination of the two in order to graduate.",
      footerData: "View Details",
      FullForm: "Master of Engineering",
      CourseDuration: "2 years",
      ExaminationType: "Semester Based",
      Levelofprogramme: "Postgraduate",
      EligibilityCriteria: "After graduation from a recognised university",
      CourseFees: "50,000 - Rs. 2 laks",
      AverageSalary: "Rs. 4.5 - 12 lakh per annum",
    },
   
    {
      imageLogo:
        "https://cache.careers360.mobi/media/presets/860X430/article_images/2020/8/20/master-of-arts.webp",
      title: "Master of Arts (MA)",
      details:
        "A Master of Arts (MA) is usually awarded in disciplines categorized as arts or social sciences, such as communications, education, languages, linguistics, literature, geography, history and music. Candidates are taught through a combination of lectures and seminars and assessed through an examination and/or a dissertation based on an independent research project.",
      footerData: "View Details",
      FullForm: "Master of Arts",
      CourseDuration: "2 years",
      ExaminationType: "Semester Based",
      Levelofprogramme: "Postgraduate",
      EligibilityCriteria: "After graduation from a recognised university",
      CourseFees: "60,000 - Rs. 1.2 laks",
      AverageSalary: "Rs. 4 - 8 lakh per annum",
    },

    {
      imageLogo:
        "https://www.meloanimate.com/wp-content/uploads/2019/05/msc.jpg",
      title: "Master of Science (MS, MSc)",
      details:
        "A Master of Science (MS, MSc) is usually awarded in disciplines categorized as the sciences, such as biology, chemistry, engineering, health and statistics. Certain fields such as economics and the social sciences can fall under both arts and sciences, with the individual institution deciding on what to call their master’s degree program. In such subjects, it may be the case that the MS has a stronger research component and can be perceived to hold more weight than an MA in some industries.",
      footerData: "View Details",
      FullForm: "Master of Science",
      CourseDuration: "2 years",
      ExaminationType: "Semester Based",
      Levelofprogramme: "Postgraduate",
      EligibilityCriteria: "After graduation from a recognised university",
      CourseFees: "50,000 - Rs. 2 laks",
      AverageSalary: "Rs. 3.5 - 9 lakh per annum",
    },
    {
      imageLogo:
        "https://www.careerguide.com/blog/wp-content/uploads/2017/11/mba-vs-ma.jpg",
      title: "Master of Business Administration (MBA)",
      details:
        "The Master of Business Administration (MBA) is designed to give students the skills and knowledge required for career progression in business and management roles. Candidates are given broad training in all aspects of business, allowing them to apply their learning to a variety of careers. Many MBA candidates are mid-career professionals, with most programs requiring at least three years’ professional experience. You can also choose to combine an MBA with a specialization such as accounting or finance, and tailor the degree to a specific field of interest. Related master’s degrees include the Master of Professional Accountancy (MPAcc) and Master of Science in Information Systems (MSIS)",
      footerData: "View Details",
      FullForm: "Master of Business Administration",
      CourseDuration: "2 years",
      ExaminationType: "Semester Based",
      Levelofprogramme: "Postgraduate",
      EligibilityCriteria: "After graduation from a recognised university",
      CourseFees: "40,000 - Rs. 1.8 laks",
      AverageSalary: "Rs. 4.5 - 12 lakh per annum",
    },
  ];
  return (
    <>
      <Card>
        <Card.Text>
          <div className="text-center mb-5 mt-5">
            <h1> Post Graduate Courses </h1>
          </div>
        </Card.Text>
      </Card>
      <Container>
        <Row xs={1} md={2} className="g-4 p-4">
          {pgData.length &&
            pgData.map((itm, idx) => (
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

export default PgCourses;
