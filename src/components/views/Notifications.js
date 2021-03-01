import React from "react";
// react-bootstrap components
import {
  Alert,
  Card,
  Container,
  Row,
  Col,
} from "react-bootstrap";

function Notifications() {
 
  return (
    <>
      <Container fluid>
        <Card>
          <Card.Header>
            <Card.Title as="h4">Notifications</Card.Title>
          </Card.Header>
          <Card.Body>
            <Row>
              <Col md="11">
               
                <Alert variant="info">
                  <span>This is a plain notification</span>
                </Alert>
                <Alert variant="info">
                 
                  <span>This is a notification with close button.</span>
                </Alert>
                <Alert variant="info">
                 
                  <span>
                    This is a notification.
                  </span>
                </Alert>
                <Alert variant="info">
                  <span>
                    This is a notification from NIT JAMSHEDPUR TRAINING AND PLACEMENT CELL,
                    THE DEADLINE FOR COMPANY ALPHA HAS BEEN EXTENDED.
                  </span>
                </Alert>
              </Col>
            </Row>
           
          </Card.Body>
        </Card>
      </Container>
    </>
  );
}

export default Notifications;
