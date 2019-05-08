import React from "react";
import { MDBContainer, MDBRow, MDBCol, Jumbotron, MDBBtn, MDBBtnGroup, Row, Col } from "mdbreact";
import Newscardsaved from "../components/Newscardsaved";

class MyNewsPage extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
        items: [],
        sources: ""
    }
    this.callAPI = this.callAPI.bind(this);
  }

  callAPI = (apihref, source) => {
    fetch(apihref, {mode: 'cors'})
        .then(res => res.json())
        .then(json => {this.setState({items: json.saved, sources: source})})
  }

   componentDidMount() {
    this.callAPI('http://localhost:9000/saved?username=claudia', 'Latest');
   }

 
  render() {
    const items = this.state.items;


    console.log("items");
    console.log(items);

    return (
      <MDBContainer fluid>
        
        <Row>
          <Col md="9" className="mx-auto">
            <Jumbotron className="mt-3" style={{ padding: 20 }} >
                <h2><strong>Saved For Later</strong></h2>

                {items.map((item) => <div>
                  <Newscardsaved
                    cardTitle={item.title}
                    link={item.link}
                    pubdate={item.date.substring(0,10)}
                     /> 
                            <br></br></div>)}
                      
                    
            </Jumbotron>
          </Col>
      </Row>
      </MDBContainer>
      
    );
  }
}

export default MyNewsPage;
