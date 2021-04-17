import React, { useState } from "react";
import { Modal, Col, Row, ListGroup } from "react-bootstrap";
import PropTypes from "prop-types";
import MemberService from "../../../../service/members.service";
import dropdown from "../../../../assets/drop_down_16px.png";

import "./index.css";
const moment = require("moment");

const propTypes = {
  nodeData: PropTypes.object.isRequired,
};

const MemberNode = ({ nodeData }) => {
  const [show, setShow] = useState(false);
  const [currentMember, setCurrentMember] = useState({});

  const handleClose = () => setShow(false);

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
            <Col xs={12}>
              <ListGroup variant="flush">
                <ListGroup.Item variant="primary">
                  <strong>ID:</strong>{" "}
                  {currentMember.member ? currentMember.member.memberId : ""}
                </ListGroup.Item>
                <ListGroup.Item>
                  <strong>Names:</strong>{" "}
                  {currentMember.member ? currentMember.member.firstName : ""}
                  {currentMember.member ? currentMember.member.lastName : ""}
                </ListGroup.Item>
                <ListGroup.Item>
                  <strong>Telephone:</strong> +25
                  {currentMember.member ? currentMember.member.phoneNumber : ""}
                </ListGroup.Item>
                <ListGroup.Item>
                  <strong>Registered:</strong>
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
                      Orientation ID:{" "}
                      {currentMember.member ? currentMember.orientation.memberId : ""}
                    </ListGroup.Item>
                    <ListGroup.Item variant="dark">
                      Names:
                      {currentMember.member ? currentMember.orientation.firstName : ""}
                      {currentMember.member ? currentMember.orientation.lastName : ""}
                    </ListGroup.Item>
                    <ListGroup.Item variant="dark">
                      Telephone: +25
                      {currentMember.member ? currentMember.orientation.phoneNumber : ""}
                    </ListGroup.Item>
                  </ListGroup>
                </ListGroup.Item>
              </ListGroup>
            </Col>
          </Row>
        </Modal>
      </>
    </>
  );
};

MemberNode.propTypes = propTypes;

export default MemberNode;
