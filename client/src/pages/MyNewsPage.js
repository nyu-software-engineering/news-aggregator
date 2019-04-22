import React from "react";
import { MDBContainer, MDBRow, MDBCol, Jumbotron} from "mdbreact";
import Listgroup from "../components/Listgroup";

class MyNewsPage extends React.Component {
  render() {
    return (
      <MDBContainer fluid>
        <MDBRow>
          <MDBCol md="3">
            <Jumbotron className="mt-3" style={{ padding: 20 }}>
                <h4>News Sources</h4>
                <Listgroup />
            </Jumbotron>
            </MDBCol>
          <MDBCol md="9">
            <Jumbotron className="mt-3" style={{ padding: 20 }} fluid>
                <h4>News Sources</h4>
                <Listgroup />
            </Jumbotron>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    );
  }
}

export default MyNewsPage;
