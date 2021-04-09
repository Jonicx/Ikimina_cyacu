import React from "react";
import PropTypes from "prop-types";
import "./index.css";

const propTypes = {
  nodeData: PropTypes.object.isRequired,
};

const MemberNode = ({ nodeData }) => {
  return (
    <>
      {nodeData ? (
        <div>
          <div className="color">{}</div>
          <div className="white">
            <strong style={{ fontSize: "15px", margin: "0px" }}>
              {" "}
              {nodeData.memberId}
            </strong>
            <br />
            {`${nodeData.firstName} ${nodeData.lastName}`}
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
