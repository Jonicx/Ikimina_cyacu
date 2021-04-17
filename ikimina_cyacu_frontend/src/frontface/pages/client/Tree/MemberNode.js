import React, { useState } from "react";
import { Modal, Col, Row } from "react-bootstrap";
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

  const handleClose = () => setShow(false);
  const handleShow = (id) => {
    MemberService.getMemberById(id).then((res) => {
      console.log(res.data);
    });
    // console.log(id);
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
          <h1>{nodeData.id}</h1>
        </Modal>
      </>
    </>
  );
};

MemberNode.propTypes = propTypes;

export default MemberNode;
