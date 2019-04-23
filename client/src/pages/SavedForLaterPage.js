import React from "react";
import { Container, Row, Col, Jumbotron } from "mdbreact";
import Newscard from "../components/Newscard";

class CSSPage extends React.Component {
  render() {
    return (
      <Container>
        <Row>
          <Col md="12" className="mx-auto">
            <Jumbotron className="mt-3">
              <h1><strong>Saved for Later </strong></h1>
                <br></br>
                <Newscard cardContent='COLOMBO, Sri Lanka — The confidential security memo laid it all out: names, addresses, phone numbers, even the times in the middle of the night that one suspect would visit his wife.' cardTitle='Sri Lanka Was Warned of Possible Attacks. Why Didn’t It Stop Them?' link="https://www.nytimes.com/2019/04/22/world/asia/ntj-warning-sri-lanka-government.html" source="[NYTimes]" imgSource="https://static01.nyt.com/images/2019/04/22/world/22srilanka-warning1/merlin_153825870_0807bf43-dbba-493c-a9b2-b6c89a29a7f9-articleLarge.jpg?quality=75&auto=webp&disable=upscale"/>
                <br></br>
                <Newscard cardContent='SEOUL— Samsung Electronics Co. is delaying the rollout of its Galaxy Fold smartphone until at least next month, after tech reviewers reported their test devices had malfunctioned.' cardTitle='Samsung’s Galaxy Fold Smartphone Release Delayed' link="https://www.wsj.com/articles/samsungs-galaxy-fold-smartphone-release-delayed-11555941705?mod=hp_lead_pos4" source="[WSJ]" imgSource="https://images.wsj.net/im-68674?width=620&aspect_ratio=1.5"/>
                <br></br>
           
            </Jumbotron>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default CSSPage;
