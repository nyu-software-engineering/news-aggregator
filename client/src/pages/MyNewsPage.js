import React from "react";
import { MDBContainer, MDBRow, MDBCol, Jumbotron, MDBBtn, MDBBtnGroup } from "mdbreact";
import Newscard from "../components/Newscard";

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
        .then(json => {this.setState({items: json, sources: source})})
  }

  // componentDidMount() {
  //   this.callAPI();
  // }

 
  render() {
    const items = this.state.items;
    const source = this.state.sources;


    console.log("items");
    console.log(items);

    return (
      <MDBContainer fluid>
        <MDBRow>
          <MDBCol style={{width: '50%'}}>
            <Jumbotron className="mt-3" style={{ padding: 10 }}>
                <h4>News Sources</h4>
                <MDBRow center>
                  <MDBBtnGroup vertical>
                    <MDBBtn outline color="cyan" className="ml-0" onClick={()=>this.callAPI('http://localhost:9000/news/publisher/NYT > Business', 'NYTimes')}>NYTimes</MDBBtn>

                    <MDBBtn outline color="cyan" onClick={() => this.callAPI('http://localhost:9000/news/publisher/www.espn.com - NFL', 'ESPN')}>ESPN</MDBBtn>

                    <MDBBtn outline color="cyan" onClick={() => this.callAPI('http://localhost:9000/news/publisher/TechCrunch', 'TechCrunch')}>TechCrunch</MDBBtn>  

                    <MDBBtn outline color="cyan" onClick={() => this.callAPI('http://localhost:9000/news/publisher/Reuters: Entertainment News', 'Reuters')}>Reuters</MDBBtn>  

                    <MDBBtn outline color="cyan" onClick={() => this.callAPI('http://localhost:9000/news/publisher/Where We Live', 'Washington Post')}>Washington Post</MDBBtn>                   
                  </MDBBtnGroup>
              </MDBRow>
            </Jumbotron>
            </MDBCol>
          <MDBCol md="9">
            <Jumbotron className="mt-3" style={{ padding: 20 }} fluid>
                <h2><strong>News Articles</strong></h2>

                {items.map((item) => <div><Newscard cardContent={item.Summary} cardTitle={item.Title} link={item.Link} source={source}/> <br></br></div>)}
                
            </Jumbotron>
          </MDBCol>
        </MDBRow>
       
      </MDBContainer>
      
    );
  }
}

export default MyNewsPage;
