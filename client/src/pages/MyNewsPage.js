import React from "react";
import { MDBContainer, MDBRow, MDBCol, Jumbotron, MDBBtn, MDBBtnGroup } from "mdbreact";
import Listgroup from "../components/Listgroup";
import Newscard from "../components/Newscard";
import Newmodal from "../components/Newmodal";

class MyNewsPage extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
        items: []
    }
    this.callAPI = this.callAPI.bind(this);
  }

  callAPI = (apihref) => {
    fetch(apihref, {mode: 'cors'})
        .then(res => res.json())
        .then(json => {this.setState({items: json})});
  
  }

  // componentDidMount() {
  //   this.callAPI();
  // }

 
  render() {
    const items = this.state.items;
    // const espnItems = this.state.espnItems;


    console.log("items");
    console.log(items);
    // console.log("espn");
    // console.log(espnItems);
    // console.log("allItems");
    // console.log(allItems);

    return (
      <MDBContainer fluid>
        <MDBRow>
          <MDBCol >
            <Jumbotron className="mt-3" style={{ padding: 10 }}>
                <h4>News Sources</h4>
                <MDBRow center>
                  <MDBBtnGroup vertical>
                    <MDBBtn color="amber" className="ml-0" onClick={()=>this.callAPI('http://localhost:9000/news/publisher/NYT > Business')}>NYTimes</MDBBtn>
                    <MDBBtn color="amber" onClick={() => this.callAPI('http://localhost:9000/news/publisher/www.espn.com - NFL')}>ESPN</MDBBtn>
                    <MDBBtn color="amber">Button</MDBBtn>
                  </MDBBtnGroup>
              </MDBRow>
            </Jumbotron>
            </MDBCol>
          <MDBCol md="9">
            <Jumbotron className="mt-3" style={{ padding: 20 }} fluid>
                <h2><strong>News Articles</strong></h2>

                {items.map((item) => <div><Newscard cardContent={item.Summary} cardTitle={item.Title} link={item.Link} source="NYTimes"/> <br></br></div>)}
                
            </Jumbotron>
          </MDBCol>
        </MDBRow>
       
      </MDBContainer>
      
    );
  }
}

export default MyNewsPage;
