import React, { useState } from "react";
import {
  Form,
  Button,
  Modal,
  Col,
  Row,
  ListGroup,
  Container,
  Spinner,
} from "react-bootstrap";
import PropTypes from "prop-types";
import MemberService from "../../../../service/members.service";
import dropdown from "../../../../assets/drop_down_16px.png";
import "./index.css";
import "react-phone-input-2/lib/style.css";
import printIcon from "../../../../assets/print_28px.png";
import EditCard from "../../../../assets/edit_property_24px.png";
const moment = require("moment");

const propTypes = {
  nodeData: PropTypes.object.isRequired,
};

function MemberNode({ nodeData }, props) {
  const initialInputState = {
    firstName: "",
    lastName: "",
    phoneNumber: "",
  };
  const print = () => {
    window.print();
  };
  const [show, setShow] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const [currentMember, setCurrentMember] = useState({});

  const handleClose = () => setShow(false);
  const [count, setCount] = React.useState(0);
  const [eachEntry, setEachEntry] = useState(initialInputState);

  const components = [
    document.getElementById("count1"),
    document.getElementById("count2Update"),
  ];

  const fetchCurrentMember = (id) => {
    MemberService.getMemberById(id).then((res) => {
      setCurrentMember(res.data);
    });
  };
  const handleEditSubmit = (e) => {
    setIsLoading(true);
    const memberId = currentMember.member.memberId;
    const { firstName, lastName, phoneNumber } = eachEntry;
    MemberService.editMember(firstName, lastName, memberId, phoneNumber)
      .then((editedMember) => {
        setIsLoading(false);
        setShow(false);
        window.location.reload();
      })
      .catch((err) => {
        alert(err.message);
        setIsLoading(false);
        setShow(false);
      });
  };

  const handleShow = (id) => {
    fetchCurrentMember(id);
    setShow(true);
  };

  const handleInputChange = (e) => {
    setEachEntry({ ...eachEntry, [e.target.name]: e.target.value });
  };
  return (
    <section>
      {nodeData ? (
        <div>
          <div className={nodeData.level === 0 ? "orange" : "green"}>{}</div>
          <Col className="white">
            <Row className="mb-1">
              <Col>
                <strong id="code"> {nodeData.memberId}</strong>
              </Col>
              <Col>
                <img src={dropdown} onClick={() => handleShow(nodeData.id)} alt="" />
              </Col>
            </Row>
            <p>
              {`${
                nodeData.firstName
                  ? nodeData.firstName.toUpperCase()
                  : "Please wait!, Loading"
              } ${nodeData.lastName ? nodeData.lastName : "..."}`}
              <br />

              {nodeData.createdAt
                ? `Since: ${moment(nodeData.createdAt).format("DD/MM/YYYY")}`
                : ""}
            </p>

            <br />
          </Col>
        </div>
      ) : (
        <div>Loading ...</div>
      )}
      <Container>
        <Modal show={show} onHide={handleClose} className="printme"
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
          <Modal.Header className="justify-content-center">
            <ListGroup.Item variant="primary" >
              <Row>
              <>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                </>
                <strong>ID:</strong>{" "}
                {currentMember.member ? currentMember.member.memberId : ""}
                <>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                </>
              </Row>
            </ListGroup.Item>
          </Modal.Header>
          <Modal.Body>
            <>
              <Col xs={12}>
                <ListGroup variant="flush">
                  <div id="count1">
                    {count < components.length - 1 && (
                      <>
                        <ListGroup.Item>
                          <strong>Names:</strong>{" "}
                          {currentMember.member ? currentMember.member.firstName : ""}&nbsp;
                          {currentMember.member ? currentMember.member.lastName : ""}
                        </ListGroup.Item>
                        <Row>
                          <Col lg={12} className="mt-1">
                            <ListGroup.Item>
                              <strong>Telephone:</strong>&nbsp;
                              {currentMember.member ? currentMember.member.phoneNumber : ""}
                            </ListGroup.Item>
                          </Col>
                        </Row>
                      </>
                    )}
                  </div>
                  <div id="count2Update">
                    {count > 0 && (
                      <>
                        <Row>
                          <Col>
                            <Form className="p-4">
                              <Form.Row >
                                <Col lg={6} xs={12} className="mt-2">
                                  <Form.Control
                                    type="text"
                                    id="fname"
                                    name="firstName"
                                    placeholder={
                                      currentMember.member
                                        ? currentMember.member.firstName
                                        : ""
                                    }
                                    autoFocus={true}
                                    onChange={handleInputChange}
                                  />
                                </Col>
                                <Col lg={6} xs={12} className="mt-2">
                                  <Form.Control
                                    type="text"
                                    id="sname"
                                    name="lastName"
                                    placeholder={
                                      currentMember.member
                                        ? currentMember.member.lastName
                                        : ""
                                    }
                                    onChange={handleInputChange}
                                  />
                                </Col>
                              </Form.Row>
                              <Form.Row>
                                <Col lg={6} xs={12} className="mt-2">
                                  <Form.Control
                                    type="number"
                                    id="tel"
                                    name="phoneNumber"
                                    onChange={handleInputChange}
                                    placeholder={
                                      currentMember.member
                                        ? currentMember.member.phoneNumber
                                        : ""
                                    }
                                  />
                                </Col>
                                <Col lg={6} xs={12} className="mt-2">
                                  <Row className='justify-content-center'>
                                    <Form.Row className='justify-content'>
                                      <Col lg={4} xs={3}>
                                        <Button
                                          onClick={() => {
                                            setCount(count - 1);
                                            setIsLoading(false);
                                          }}
                                          className="ml-1 px-4"
                                          variant="dark"
                                        >
                                          Cancel
                                        </Button>
                                      </Col>
                                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                      <Col lg={3} xs={3}>
                                        {!isLoading ? (
                                          <Button
                                            variant="primary"
                                            onClick={handleEditSubmit}
                                            className="px-4"
                                          >
                                            Update
                                          </Button>
                                        ) : (
                                          <Button
                                            disabled
                                            variant="primary"
                                            className="px-4"
                                          >
                                            <Spinner animation="border" size="sm" />
                                          </Button>
                                        )}
                                      </Col>
                                    </Form.Row>
                                  </Row>
                                </Col>
                              </Form.Row>
                            </Form>
                          </Col>
                        </Row>
                      </>
                    )}
                  </div>
                  <Row className="mb-3 mt-1">
                    <Col>
                      <ListGroup.Item>
                        <strong>Registered:</strong>&nbsp;
                        {currentMember.member
                          ? `${moment(currentMember.member.createdAt).format(
                              " Do MMMM YYYY hh:mm A"
                            )}`
                          : ""}
                      </ListGroup.Item> 
                    </Col>
                  </Row>
                  <ListGroup.Item variant="dark">
                    <h4>Oriented to:</h4>
                    <ListGroup variant="flush">
                      <ListGroup.Item variant="dark">
                        Orientation ID:&nbsp;
                        {currentMember.member ? currentMember.orientation.memberId : ""}
                      </ListGroup.Item>
                      <ListGroup.Item variant="dark">
                        Names:&nbsp;
                        {currentMember.member ? currentMember.orientation.firstName : ""}
                        &nbsp;
                        {currentMember.member ? currentMember.orientation.lastName : ""}
                      </ListGroup.Item>
                      <ListGroup.Item variant="dark">
                        Telephone:&nbsp;
                        {currentMember.member ? currentMember.orientation.phoneNumber : ""}
                      </ListGroup.Item>
                    </ListGroup>
                  </ListGroup.Item>
                </ListGroup>
              </Col>
            </>
          </Modal.Body>
          <Modal.Footer>
            <Row>
              <Col >
                <img src={EditCard} alt="icon" onClick={() => setCount(count + 1)}/>
              </Col>
              <Col>
                <Button className="px-4" onClick={print}>Print</Button>
              </Col>
            </Row>
          </Modal.Footer>
        </Modal>
      </Container>
    </section>
  );
}

MemberNode.propTypes = propTypes;
export default MemberNode;
