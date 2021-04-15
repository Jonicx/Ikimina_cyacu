import React from "react";
import PropTypes from "prop-types";
import "./index.css";
const moment = require("moment");

const propTypes = {
  nodeData: PropTypes.object.isRequired,
};

const MemberNode = ({ nodeData }) => {
  return (
    <>
      {nodeData ? (
        <div>
          <div className={nodeData.level === 0 ? "red" : "green"}>{}</div>
          <div className="white">
            <strong id="code"> {nodeData.memberId}</strong>
            <br />
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
          </div>
        </div>
      ) : (
        <div>Loading ...</div>
      )}
    </>
  );
};

MemberNode.propTypes = propTypes;

export default MemberNode;
