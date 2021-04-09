import React from "react";
import { ListGroup, Row, Col } from "react-bootstrap";
import "./index.css";
import ID from "../../../../assets/id.svg";

export default class UserCard extends React.PureComponent {
  render() {
    return (
      <Row>
        <Col xs={9}>
          <ListGroup variant="flush">
            <ListGroup.Item>ID: {this.props.userData.memberId}</ListGroup.Item>
            <ListGroup.Item>
              Names: {this.props.userData.firstName} {this.props.userData.lastName}
            </ListGroup.Item>
            <ListGroup.Item>
              Telephone: +25{this.props.userData.phoneNumber}
            </ListGroup.Item>
          </ListGroup>
        </Col>
        <Col xs={3}>
          <img src={ID} alt="icon" className="id_card align-self-center my-auto" />
        </Col>
      </Row>
    );
  }
}
