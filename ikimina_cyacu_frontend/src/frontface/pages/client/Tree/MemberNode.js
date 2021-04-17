import React, { useState } from "react";
import { Modal, Col, Row, ListGroup } from "react-bootstrap";
import PropTypes from "prop-types";
import MemberService from "../../../../service/members.service";
import dropdown from "../../../../assets/drop_down_16px.png";
import ID from "../../../../assets/id.svg";

import "./index.css";
const moment = require("moment");

const propTypes = {
  nodeData: PropTypes.object.isRequired,
};

const MemberNode = ({ nodeData }) => {
  const [show, setShow] = useState(false);
  const [currentMember, setCurrentMember] = useState({});

  const handleClose = () => setShow(false);
  const handleShow = (id) => {
    MemberService.getMemberById(id).then((res) => {
      setCurrentMember(res.data);
    });
    setShow(true);
  };
  return (
    <>
      {nodeData ? (
        <div>
          <div className={nodeData.level === 0 ? "red" : "green"}>{}</div>
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
      <>
        <Modal show={show} onHide={handleClose}>
          {/* <h1>{nodeData.id}</h1> */}
          <Row>
            <Col xs={9}>
              <ListGroup variant="flush">
                <ListGroup.Item variant="primary">
                  {/* <strong>ID:</strong> {currentMember.member.memberId} */}
                </ListGroup.Item>
                <ListGroup.Item>
                  {/* <strong>Names:</strong> {currentMember.member.firstName}{" "} */}
                  {/* {currentMember.member.lastName} */}
                </ListGroup.Item>
                <ListGroup.Item>
                  {/* <strong>Telephone:</strong> +25{currentMember.member.phoneNumber} */}
                </ListGroup.Item>
                <ListGroup.Item>
                  <strong>Registered:</strong>
                  {/* {`${moment(currentMember.member.createdAt).format(
                    " Do MMMM YYYY hh:mm A"
                  )}`} */}
                </ListGroup.Item>
                <ListGroup.Item variant="dark">
                  <h4>Oriented to:</h4>
                  <ListGroup variant="flush">
                    <ListGroup.Item variant="dark">
                      {/* Orientation ID: {currentMember.orientation.memberId} */}
                    </ListGroup.Item>
                    <ListGroup.Item variant="dark">
                      {/* Names: {currentMember.orientation.firstName}{" "}
                      {currentMember.orientation.lastName} */}
                    </ListGroup.Item>
                    <ListGroup.Item variant="dark">
                      {/* Telephone: +25{currentMember.orientation.phoneNumber} */}
                    </ListGroup.Item>
                  </ListGroup>
                </ListGroup.Item>
              </ListGroup>
            </Col>
            <Col xs={3}>
              <img src={ID} alt="icon" className="id_card align-self-center my-auto" />
            </Col>
          </Row>
        </Modal>
      </>
    </>
  );
};

MemberNode.propTypes = propTypes;

export default MemberNode;
