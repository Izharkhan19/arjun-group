import {
  Card,
  Col,
  FloatingLabel,
  Form,
  ListGroup,
  Row,
  Table,
} from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

const ApplyDetails = (props) => {
  return (
    <>
      {" "}
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            {props.courseData.title}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <ListGroup variant="flush">
            <Table>
              <ListGroup.Item>
                {" "}
                <tr>
                  <td>
                    <b> Full Form : </b>
                  </td>
                  <td> {props.courseData.FullForm}</td>
                </tr>
              </ListGroup.Item>
              <ListGroup.Item>
                {" "}
                <tr>
                  <td>
                    <b> Course Duration : </b>
                  </td>
                  <td> {props.courseData.CourseDuration}</td>
                </tr>
              </ListGroup.Item>
              <ListGroup.Item>
                {" "}
                <tr>
                  <td>
                    <b> Examination Type : </b>
                  </td>
                  <td> {props.courseData.ExaminationType}</td>
                </tr>
              </ListGroup.Item>
              <ListGroup.Item>
                {" "}
                <tr>
                  <td>
                    <b> Level of programme : </b>
                  </td>
                  <td> {props.courseData.Levelofprogramme}</td>
                </tr>
              </ListGroup.Item>
              <ListGroup.Item>
                {" "}
                <tr>
                  <td>
                    <b> Eligibility Criteria : </b>
                  </td>
                  <td> {props.courseData.EligibilityCriteria}</td>
                </tr>
              </ListGroup.Item>
              <ListGroup.Item>
                {" "}
                <tr>
                  <td>
                    <b> Course Fees : </b>
                  </td>
                  <td> {props.courseData.CourseFees}</td>
                </tr>
              </ListGroup.Item>
              <ListGroup.Item>
                {" "}
                <tr>
                  <td>
                    <b> Average Salary : </b>
                  </td>
                  <td> {props.courseData.AverageSalary}</td>
                </tr>
              </ListGroup.Item>
            </Table>
            {/* <ListGroup.Item> <b> BCA Full Form : </b>  {props.courseData.FullForm}</ListGroup.Item>
            <ListGroup.Item> <b> Course Duration : </b>  {props.courseData.CourseDuration}</ListGroup.Item>
            <ListGroup.Item> <b> Examination Type : </b>  {props.courseData.ExaminationType}</ListGroup.Item>
            <ListGroup.Item> <b> Level of programme : </b>  {props.courseData.Levelofprogramme}</ListGroup.Item>
            <ListGroup.Item> <b> Eligibility Criteria : </b>  {props.courseData.EligibilityCriteria}</ListGroup.Item>
            <ListGroup.Item> <b> BCA Course Fees : </b>  {props.courseData.CourseFees}</ListGroup.Item>
            <ListGroup.Item> <b> Average BCA Salary : </b>  {props.courseData.AverageSalary}</ListGroup.Item> */}
          </ListGroup>
          {/* <Row>
            <Col md={6}>
              <Form.Group className="mb-3" controlId="formBasicFirst">
                <Form.Label>First Name</Form.Label>
                <Form.Control type="text" placeholder="First name" />
              </Form.Group>
            </Col>
            <Col md={6}>
              <Form.Group className="mb-3" controlId="formBasicLast">
                <Form.Label>Last Name</Form.Label>
                <Form.Control type="text" placeholder="Last name" />
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col md={6}>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Enter email</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
              </Form.Group>
            </Col>
            <Col md={6}>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Contact number</Form.Label>
                <Form.Control type="text" placeholder="Contact number" />
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <FloatingLabel
              controlId="floatingTextarea"
              label="Description"
              className="mb-3"
            >
              <Form.Control as="textarea" placeholder="Leave a comment here" />
            </FloatingLabel>
          </Row> */}

          {/* <h4>Centered Modal</h4>
          <p>{props.courseData.details}</p> */}
        </Modal.Body>
        <Modal.Footer>
          {/* <Button variant="success" onClick={props.onHide}>
            Save Details
          </Button> */}
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ApplyDetails;
