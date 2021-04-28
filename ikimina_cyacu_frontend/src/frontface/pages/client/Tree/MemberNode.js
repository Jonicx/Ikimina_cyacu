import React, { useState } from "react";
import { Form, Button, Modal, Col, Row, ListGroup, Container } from "react-bootstrap";
import PropTypes from "prop-types";
import MemberService from "../../../../service/members.service";
import dropdown from "../../../../assets/drop_down_16px.png";
import "./index.css";
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
const moment = require("moment");

const propTypes = {
  nodeData: PropTypes.object.isRequired,
};

function MemberNode  ( {nodeData},props ) {
  const initialInputState = {
    firstName: "",
    lastName: "",
    phoneNumber: "",
  };
  const [show, setShow] = useState(false);
  const [currentMember, setCurrentMember] = useState({});
  
  const handleClose = () => setShow(false);
  const [count, setCount] = React.useState(0);
  const [eachEntry, setEachEntry] = useState(initialInputState);

  const components = [
    document.getElementById("count1"),
    document.getElementById("count2Update")
  ]


  const fetchCurrentMember = (id) => {
    MemberService.getMemberById(id).then((res) => {
      setCurrentMember(res.data);
    });
  };
  

  const handleShow = (id) => {
    fetchCurrentMember(id);
    setShow(true);
    console.log(currentMember);
  };

  const handlePhoneChange = (value, data, e, formattedValue) => {
    setEachEntry({rawPhone: value.slice(data.dialCode.length) })
    console.log(setEachEntry)
  }

  const handleInputChange = (e) => {
    setEachEntry({ ...eachEntry, [e.target.name]: e.target.value });
    console.log(setEachEntry)
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
        <Modal show={show} onHide={handleClose}>
          <Row>
            <Col xs={12}>
              <ListGroup variant="flush">
                <ListGroup.Item variant="primary">
                  <strong>ID:</strong>{" "}
                  {currentMember.member ? currentMember.member.memberId : ""}
                </ListGroup.Item>
                <div id="count1">
                {count < components.length - 1 && <>
                  <ListGroup.Item>
                    <strong>Names:</strong>{" "}
                    {currentMember.member ? currentMember.member.firstName : ""}&nbsp;
                    {currentMember.member ? currentMember.member.lastName : ""}
                  </ListGroup.Item>
                  <Row>
                    <Col lg={9}>
                    <ListGroup.Item>
                    <strong>Telephone:</strong>&nbsp;
                    {currentMember.member ? currentMember.member.phoneNumber : ""}
                    </ListGroup.Item>
                    </Col>
                    <Col lg={2}>
                    <Button variant="danger" onClick={() => setCount(count + 1)} className="mt-2 px-4">Edit</Button>
                    </Col>
                  </Row>
                  </>}
                </div>
                <div id="count2Update">
                {count > 0 && <>
                  <Row>
                    <Col>
                    <Form className="p-4">
                      <Form.Row>
                        <Col lg={6} xs={12} className='mt-2'>
                          <Form.Control
                            type='text'
                            id='fname'
                            name='firstname'
                            placeholder={currentMember.member ? currentMember.member.firstName : ""}
                            autoFocus={true}
                            onChange={handleInputChange}
                          />
                        </Col>
                        <Col lg={6} xs={12} className='mt-2'>
                          <Form.Control
                            type='text'
                            id='sname'
                            name='Surname'
                            placeholder={currentMember.member ? currentMember.member.lastName : ""}
                            onChange={handleInputChange}
                          />
                        </Col>
                      </Form.Row>
                      <Form.Row>
                        <Col lg={6} xs={12} className='mt-2'>
                        <PhoneInput
                              placeholder='Telephone'
                              id='tel'
                              name="phoneNumber"
                              type='number'
                              onChange={handlePhoneChange}
                              containerClass="my-container-class"
                              inputClass="my-input-class"
                              containerStyle={{
                                border: "1px",
                                width: "100%"
                              }}
                              inputStyle={{
                                width: "100%"

                              }}
                              enableSearch={true}
                              disableSearchIcon={true}
                              countryCodeEditable={false}
                              enableTerritories={true}
                            />
                        </Col>
                        <Col lg={6} xs={12} className='mt-2'>
                          <Row>
                            <Col lg={3} xs={3}>
                              <Button onClick={() => setCount(count - 1)} className="ml-1 px-4" variant="dark">Cancle</Button>
                            </Col>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <Col lg={3} xs={3}>
                              <Button variant="primary" className="ml-4 px-4">
                                Update
                              </Button>
                            </Col>
                          </Row>
                        </Col>
                      </Form.Row>
                    </Form>
                    </Col>
                  </Row>
                </>}
                </div>
                <ListGroup.Item>
                  <strong>Registered:</strong>&nbsp;
                  {currentMember.member
                    ? `${moment(currentMember.member.createdAt).format(
                        " Do MMMM YYYY hh:mm A"
                      )}`
                    : ""}
                </ListGroup.Item> 
                <ListGroup.Item variant="dark">
                  <h4>Oriented to:</h4>
                  <ListGroup variant="flush">
                    <ListGroup.Item variant="dark">
                      Orientation ID:&nbsp;
                      {currentMember.member ? currentMember.orientation.memberId : ""}
                    </ListGroup.Item>
                    <ListGroup.Item variant="dark">
                      Names:&nbsp;
                      {currentMember.member ? currentMember.orientation.firstName : ""}&nbsp;
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
          </Row>
        </Modal>
      </Container>
    </section>
  );
};

MemberNode.propTypes = propTypes
export default MemberNode; 
