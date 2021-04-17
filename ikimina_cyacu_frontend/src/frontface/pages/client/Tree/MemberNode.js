import React, { useState } from "react";
import { Modal, Dropdown, Col, Row } from "react-bootstrap";
import PropTypes from "prop-types";
import dropdown from  "../../../../assets/down_button_16px.png"

import "./index.css";
const moment = require("moment");

const propTypes = {
  nodeData: PropTypes.object.isRequired,
};

const MemberNode = ({ nodeData }) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = (id) => {
    // MemberService.getMemberById(id).then((res) => {
    //   console.log(res.data);
    // });
    // console.log(e);
    setShow(true);
  };
  return (
    <>
      {nodeData ? (
        <div onClick={handleShow}>
          <div className={nodeData.level === 0 ? "red" : "green"}>{}</div>
          <Col className="white">
            {/* TODO: view button  */}
            <Row>
              <Col className="mb-1">
              <strong id="code"> {nodeData.memberId}</strong>
              </Col>
              <Col>
              <img src={dropdown} alt="dropdown"/>
              </Col>
            </Row>
            {/* <br /> */}
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
