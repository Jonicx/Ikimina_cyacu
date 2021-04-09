import { useState, useEffect } from "react";
import { Container, Row, Col, Form, Button, Spinner, Modal } from "react-bootstrap";
import OrganizationChart from "@dabeng/react-orgchart";
import MemberNode from "./MemberNode";
import "./index.css";
import AppLayout from "../../../layouts/AppLayout";
import { SlideBar } from "../../../components/SlideBar";
import { useSelector } from "react-redux";

import authHeader from "../../../../service/auth-header";
import MemberService from "../../../../service/members.service";
import UtilServices from "../../../../service/util.service";

import API_URL from "../../../../api";

export const TreeView = () => {
  const [rawMembers, setRawMembers] = useState({});
  const [isBuilding, setIsBuilding] = useState(true);

  useEffect(() => {
    MemberService.getAllMembers().then((res) => {
      const [processedData] = UtilServices.processData(res.data);
      setRawMembers(processedData);
      setIsBuilding(false);
    });
  }, [rawMembers]);

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const loading = useSelector((store) => store.AuthReducer.loading);
  return (
    <AppLayout>
      <section className="home-slide">
        <Container>
          <Row>
            <SlideBar></SlideBar>
            <Col lg={9} className="WhitePanel_Home ">
              <br />
              <Row class="justify-content-center">
                <Col lg={4} md={12} sm={12}>
                  <p className="mt-3 mb-0 title text-capitalize text-bold">
                    &nbsp; | Membership Tree
                  </p>
                </Col>
                <Col lg={5} md={12} sm={12}>
                  <Row class="justify-content-center">
                    <Form class="mt-0">
                      <div class=" row no-gutters mb-0">
                        <div className="col">
                          <Form.Control
                            type="search"
                            placeholder="Telephone/Code"
                            className="form-control-lg "
                            style={{ textAlign: "center", fontSize: "13px" }}
                          />
                        </div>
                        <div class="col-auto">
                          <Button
                            className=" mt-0 mb-0 title text-capitalize"
                            type="submit"
                            variant="primary"
                          >
                            Search
                          </Button>
                        </div>
                      </div>
                    </Form>
                  </Row>
                </Col>
                <Col lg={3} md={12} sm={12}>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  <Button
                    className=" mt-0 mb-0 title text-capitalize"
                    variant="primary"
                    onClick={handleShow}
                  >
                    Register
                  </Button>
                  <Modal
                    show={show}
                    onHide={handleClose}
                    backdrop="static"
                    keyboard={false}
                  >
                    <Modal.Header>
                      <Modal.Title
                        className=" mt-0 mb-0 title text-capitalize"
                        style={{ fontSize: "14px" }}
                      >
                        | Membership registration form
                      </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                      <Col lg={12} className="FormPadding ">
                        <Form className="mt-0">
                          <Col>
                            <Col lg={12} xs={12} className="mt-1">
                              <Form.Control
                                type="text"
                                id="fname"
                                name="firstname"
                                placeholder="First Name"
                                disabled={loading ? true : false}
                                autoFocus={true}
                              />
                            </Col>
                            <Col lg={12} xs={12} className="mt-2">
                              <Form.Control
                                type="text"
                                id="sname"
                                name="Surname"
                                disabled={loading ? true : false}
                                placeholder="Sur Name"
                              />
                            </Col>
                            <Col lg={12} xs={12} className="mt-2">
                              <Form.Control
                                type="number"
                                id="tel"
                                name="tel"
                                disabled={loading ? true : false}
                                placeholder="Telephone"
                              />
                            </Col>
                            <Col lg={12} xs={12} className="mt-2">
                              <Form.Control
                                type="text"
                                id="orientation"
                                name="orientation"
                                disabled={loading ? true : false}
                                placeholder="Orientation"
                              />
                            </Col>
                            <Form.Row>
                              <Col lg={6} xs={12}>
                                <Button
                                  className="btn-block py-2 mt-4"
                                  style={{ fontSize: "14px" }}
                                  variant="secondary"
                                  onClick={handleClose}
                                >
                                  Close
                                </Button>
                              </Col>
                              <Col lg={6} xs={12}>
                                <Button
                                  type="submit"
                                  variant="primary"
                                  className="btn-block py-2 mt-4"
                                  style={{ fontSize: "14px" }}
                                >
                                  {loading ? (
                                    true ||
                                    false(
                                      <Spinner
                                        as="span"
                                        animation="grow"
                                        role="status"
                                        aria-hidden="true"
                                        size="sm"
                                      ></Spinner>
                                    )
                                  ) : (
                                    <>
                                      <i className="fa fa-check-circle"></i> Save
                                    </>
                                  )}
                                </Button>
                              </Col>
                            </Form.Row>
                            <Row className="mt-3"></Row>
                          </Col>
                        </Form>
                      </Col>
                    </Modal.Body>
                  </Modal>
                </Col>
              </Row>
              <p className="border-bottom mt-2"></p>
              <Row>
                <Col lg={12} className="mb-3">
                  <OrganizationChart
                    datasource={rawMembers}
                    chartClass="myChart"
                    zoom={true}
                    pan={true}
                    NodeTemplate={MemberNode}
                  />
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </section>
    </AppLayout>
  );
};
