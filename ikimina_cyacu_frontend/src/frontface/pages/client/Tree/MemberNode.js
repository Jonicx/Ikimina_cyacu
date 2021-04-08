import React from "react";
import PropTypes from "prop-types";
import "./index.css";

const propTypes = {
    nodeData: PropTypes.object.isRequired
};

const MemberNode = ({ nodeData }) => {

    return (
        <div>
            <div className="color">{}</div>
            <div className="white">

                   <b> {nodeData.memberId}</b><br/>
                   {`${nodeData.firstName} ${nodeData.lastName}`}<br/>
                   {`+250${nodeData.phoneNumber}`}
            </div>
        </div>
    );
};

MemberNode.propTypes = propTypes;

export default MemberNode;
