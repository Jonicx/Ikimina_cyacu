import React from "react";
import { ListGroup, Row, Col } from "react-bootstrap";
import "./index.css";
import moment from "moment";
import ID from "../../../../assets/id.svg";

export default class UserCard extends React.PureComponent {
  render() {
    return (
      <Row>
        <Col xs={9}>
          <ListGroup variant="flush">
            <ListGroup.Item variant="primary">
              <strong>ID:</strong> {this.props.userData.member.memberId}
            </ListGroup.Item>
            <ListGroup.Item>
              <strong>Names:</strong> {this.props.userData.member.firstName}{" "}
              {this.props.userData.lastName}
            </ListGroup.Item>
            <ListGroup.Item>
              <strong>Telephone:</strong> +25{this.props.userData.member.phoneNumber}
            </ListGroup.Item>
            <ListGroup.Item>
              <strong>Registered:</strong>
              {`${moment(this.props.userData.member.createdAt).format(
                " Do MMMM YYYY hh:mm A"
              )}`}
            </ListGroup.Item>
            <ListGroup.Item variant="dark">
              <h4>Oriented to:</h4>
              <ListGroup variant="flush">
                <ListGroup.Item variant="dark">
                  Orientation ID: {this.props.userData.orientation.memberId}
                </ListGroup.Item>
                <ListGroup.Item variant="dark">
                  Names: {this.props.userData.orientation.firstName}{" "}
                  {this.props.userData.orientation.lastName}
                </ListGroup.Item>
                <ListGroup.Item variant="dark">
                  Telephone: +25{this.props.userData.orientation.phoneNumber}
                </ListGroup.Item>
              </ListGroup>
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
