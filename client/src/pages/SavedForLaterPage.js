import React from "react";
import { Container, Row, Col, Jumbotron } from "mdbreact";

class CSSPage extends React.Component {
  render() {
    return (
      <Container>
        <Row>
          <Col md="8" className="mx-auto">
            <Jumbotron className="mt-3">
              <h1>
                 Saved for Later
              </h1>
           
            </Jumbotron>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default CSSPage;
