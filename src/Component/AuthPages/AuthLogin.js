import { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useNavigate } from "react-router-dom";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

function AuthLogin() {
  let authLogin = {
    userName: "arjun",
    password: "group123",
  };

  const [authLoginData, setAuthLoginData] = useState({
    userName: "",
    password: "",
  });

  let navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    if (
      authLogin.userName === authLoginData.userName &&
      authLogin.password === authLoginData.password
    ) {
      localStorage.setItem("IsLoggedIn", true);
      navigate("/home");
    } else {
      alert("Please enter valid credentials.");
    }
  };

  useEffect(() => {
  
    return () => {
    //   toast.success("Logged out Successfully");
    }
  }, [])

  return (
    <Container fluid className="login-bg-form">
      <Row>
        <Col xl={12}>
          <div className="login-form-size">
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Name"
                onChange={(e) =>
                  setAuthLoginData({
                    ...authLoginData,
                    userName: e.target.value,
                  })
                }
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="text"
                placeholder="Password"
                onChange={(e) =>
                  setAuthLoginData({
                    ...authLoginData,
                    password: e.target.value,
                  })
                }
              />
            </Form.Group>
            <Button className="mt-2" onClick={handleLogin} variant="primary">
              Login
            </Button>
          </div>
        </Col>
      </Row>
      {/* <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      /> */}
    </Container>
  );
}

export default AuthLogin;
