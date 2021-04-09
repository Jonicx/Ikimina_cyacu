import React, { useState } from "react";
import publicIp from "public-ip";
import { Container, Form, Row, Col, Button, Alert, Spinner } from "react-bootstrap";
import "./index.css";
import AppLayout from "../../../layouts/AppLayout";
import AuthService from "../../../../service/auth.service";

export const LoginView = () => {
  const initialInputState = { username: "", password: "" };
  const [eachEntry, setEachEntry] = useState(initialInputState);
  const { username, password } = eachEntry;
  const [show, setShow] = useState(false);

  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState();

  const getClientIp = async () =>
    await publicIp.v4({
      fallbackUrls: ["https://ifconfig.co/ip"],
    });

  const handleInputChange = (e) => {
    setEachEntry({ ...eachEntry, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    getClientIp().then((ip) => {
      const { username, password } = eachEntry;
      setIsLoading(true);
      AuthService.login(username, password, ip).then(
        () => {
          window.location.reload();
        },
        (error) => {
          const resMessage =
            (error.response && error.response.data && error.response.data.message) ||
            error.message ||
            error.toString();
          setErrorMessage(resMessage);
          setIsLoading(false);
          setShow(true);
        }
      );
    });
  };

  return (
    <AppLayout>
      <section className="Login-slide">
        <Container>
          <Row>
            <Col lg={3} md={12} sm={12} xs={12} className="Form_Side mt-4">
              <p className="Sub_Title_Head text-capitalize text-center">
                <span className=" title">IKIMINA</span>
                <br />
                CYACU
              </p>
            </Col>

            <Col lg={3}></Col>

            <Col lg={6} md={12} sm={12} xs={12} className="Form_Side">
              <Form className="mt-0">
                <p className="Sub_Title text-capitalize  text-center">LOGIN</p>
                <Form.Group>
                  <Form.Control
                    type="text"
                    name="username"
                    placeholder="Username"
                    onChange={handleInputChange}
                    value={username}
                  />
                </Form.Group>
                <Form.Group>
                  <Form.Control
                    type="password"
                    name="password"
                    placeholder="Password"
                    onChange={handleInputChange}
                    value={password}
                  />
                </Form.Group>
                {!isLoading ? (
                  <Button
                    variant="primary"
                    className="btn-block mt-4 py-2 px-4 text-bold"
                    style={{ fontSize: "14px" }}
                    onClick={handleSubmit}
                  >
                    <>Login</>
                  </Button>
                ) : (
                  <Button
                    variant="primary"
                    className="btn-block mt-4 py-2 px-4 text-bold"
                    style={{ fontSize: "14px" }}
                    onClick={handleSubmit}
                  >
                    <Spinner
                      as="span"
                      animation="border"
                      size="sm"
                      role="status"
                      aria-hidden="true"
                    />
                    <span className="sr-only">Loading...</span>
                  </Button>
                )}
              </Form>
              <br />
              <Alert show={show} variant="danger">
                <Alert.Heading>Error</Alert.Heading>
                <p>{errorMessage}</p>
                <hr />
                <div className="d-flex justify-content-end">
                  <Button onClick={() => setShow(false)} variant="danger">
                    Retry
                  </Button>
                </div>
              </Alert>{" "}
            </Col>
          </Row>
        </Container>
      </section>
    </AppLayout>
  );
};
