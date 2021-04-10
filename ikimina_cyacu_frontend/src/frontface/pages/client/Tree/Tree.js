import { useState, useEffect, useRef } from "react";
import { Container, Row, Col, Form, Button, Spinner, Modal } from "react-bootstrap";
import OrganizationChart from "@dabeng/react-orgchart";
import UserCard from "./UserCard";
import printIcon from '../../../../assets/print_30px.png'
import Register from '../../../../assets/registration_30px.png'
import Logout from '../../../../assets/logout_rounded_left_30px.png'
import Home from '../../../../assets/home_25px.png'
import MemberNode from "./MemberNode";
import Printer, { print } from 'react-pdf-print'
import "./index.css";
import AppLayout from "../../../layouts/AppLayout";
import MemberService from "../../../../service/members.service";
import UtilServices from "../../../../service/util.service";
import { Link } from "react-router-dom";
import { reverse } from "named-urls";
import RoutesName from "../../../../app/config/routes";
import AuthService from "../../../../service/auth.service";

export const TreeView = () => {
  const initialInputState = {
    firstName: "",
    lastName: "",
    parentMemberId: "",
    phoneNumber: "",
  };

  const handleLogout = () => {
    AuthService.logout();
  };

  const ids = ['1']
  const idss = ['1']

  const [rawMembers, setRawMembers] = useState({});
  const [afterRegister, setAfterRegister] = useState({});
  const [isBuilding, setIsBuilding] = useState(true);
  const [eachEntry, setEachEntry] = useState(initialInputState);
  const [isLoading, setIsLoading] = useState(false);
  const [show, setShow] = useState(false);
  const [modalShow, setModalShow] = useState(false);

  const loadMembers = () => {
    MemberService.getAllMembers().then((res) => {
      const [processedData] = UtilServices.processData(res.data);
      setRawMembers(processedData);
      setIsBuilding(false);
    });
  };

  useEffect(() => {
    loadMembers();
  }, []);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleInputChange = (e) => {
    setEachEntry({ ...eachEntry, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    setIsLoading(true);
    const { firstName, lastName, parentMemberId, phoneNumber } = eachEntry;
    MemberService.register(firstName, lastName, parentMemberId, phoneNumber)
      .then((newMember) => {
        setIsLoading(false);
        setShow(false);
        setAfterRegister(newMember.data.member);
        setModalShow(true);
        loadMembers();
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const componentRef = useRef();

  return (
    <AppLayout>
      <section className="home-slide">
        <Container>
          <Row>
            {/* <SlideBar></SlideBar> */}
            <Col lg={12} className="WhitePanel_Home ">
              <br />
              <Row class="justify-content-center">
                <Col lg={4} md={12} sm={12}>
                  <p className="mt-3 mb-0 title text-capitalize text-bold">
                    &nbsp; | Membership Tree
                  </p>
                </Col>
                <Col lg={5} md={12} sm={12}>
                  <Row class="justify-content-center">
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<Form class="mt-0">
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
                  <Row>
                    <Link
                        className=""
                      >
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<img src={printIcon} alt="Print all"/>
                    </Link>
                    <Link
                        className=""
                      >
                        &nbsp;&nbsp;<img  className=" mt-0 mb-0 title text-capitalize" onClick={handleShow}   src={Register} alt="Register"/>
                    </Link>
                    <Link
                        to={reverse(RoutesName.home)}
                        className=""
                      >
                        &nbsp;&nbsp;<img  src={Home} alt="Home"/>
                    </Link>
                    <Link
                      >
                        &nbsp;<img  src={Logout} alt="Logout user" onClick={handleLogout}/>
                    </Link>
                  </Row>
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
                                name="firstName"
                                onChange={handleInputChange}
                                placeholder="First Name"
                                disabled={isLoading}
                                autoFocus={true}
                              />
                            </Col>
                            <Col lg={12} xs={12} className="mt-2">
                              <Form.Control
                                type="text"
                                id="sname"
                                name="lastName"
                                onChange={handleInputChange}
                                disabled={isLoading}
                                placeholder="Sur Name"
                              />
                            </Col>
                            <Col lg={12} xs={12} className="mt-2">
                              <Form.Control
                                type="number"
                                id="tel"
                                name="phoneNumber"
                                onChange={handleInputChange}
                                disabled={isLoading}
                                placeholder="Telephone"
                              />
                            </Col>
                            <Col lg={12} xs={12} className="mt-2">
                              <Form.Control
                                type="text"
                                id="orientation"
                                name="parentMemberId"
                                onChange={handleInputChange}
                                disabled={isLoading}
                                placeholder="Orientation"
                              />
                            </Col>
                            <Form.Row>
                              <Col lg={6} xs={12}>
                                {!isLoading && (
                                  <Button
                                    className="btn-block py-2 mt-4"
                                    style={{ fontSize: "14px" }}
                                    variant="secondary"
                                    onClick={handleClose}
                                  >
                                    Close
                                  </Button>
                                )}
                              </Col>
                              <Col lg={6} xs={12}>
                                <Button
                                  variant="primary"
                                  onClick={handleSubmit}
                                  className="btn-block py-2 mt-4"
                                  style={{ fontSize: "14px" }}
                                >
                                  {isLoading ? (
                                    <Spinner
                                      as="span"
                                      animation="border"
                                      size="sm"
                                      role="status"
                                      aria-hidden="true"
                                    ></Spinner>
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
                  <Printer>
                    <div id={ids[0]} style={{ width:'295mm'}}>
                      <OrganizationChart
                        datasource={rawMembers}
                        chartClass="myChart"
                        zoom={true}
                        pan={true}
                        NodeTemplate={MemberNode}
                      />
                    </div>
                  </Printer>
                </Col>
              </Row>
            </Col>
          </Row>
          {/* Modal Preview */}
          <Printer>
            <div id={idss[0]} style={{ width:'220mm', height: '297mm' }}>
              <Modal
                show={modalShow}
                onHide={() => setModalShow(false)}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
              >
                <Modal.Header closeButton></Modal.Header>
                <Modal.Body>
                  <UserCard userData={afterRegister} />
                </Modal.Body>
                <Modal.Footer>
                  <Button onClick={() => print(idss)} type='button'>Print</Button>
                </Modal.Footer>
              </Modal>
            </div>
          </Printer>
          {/* End of Modal Preview */}
        </Container>
      </section>
    </AppLayout>
  );
};
