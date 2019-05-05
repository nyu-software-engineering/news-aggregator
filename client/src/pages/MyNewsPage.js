import React from "react";
import { MDBContainer, MDBRow, MDBCol, Jumbotron, MDBBtn, MDBBtnGroup } from "mdbreact";
import Listgroup from "../components/Listgroup";
import Newscard from "../components/Newscard";
import Newmodal from "../components/Newmodal";

// function callAPI2(apihref) {
//   fetch(apihref, {mode: 'cors'})
//       .then(res => res.json())
//       //.then(res => this.setState({ apiResponse: res }));
//       //'http://localhost:9000/news/publisher/NYT > Business'
//       .then(json => {this.setState({isLoaded: true, items: json})});
  
//   //  fetch('http://localhost:9000/news/publisher/www.espn.com - NFL', {mode: 'cors'})
//   //      .then(res2 => res2.json())
//   //      //.then(res => this.setState({ apiResponse: res }));
//   //      .then(json => {this.setState({espnItems: json})});
// }




class MyNewsPage extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
        items: [],
        isLoaded: false
    }
}

  callAPI() {
    fetch('http://localhost:9000/news/publisher/NYT > Business', {mode: 'cors'})
        .then(res => res.json())
        //.then(res => this.setState({ apiResponse: res }));
        //'http://localhost:9000/news/publisher/NYT > Business'
        .then(json => {this.setState({isLoaded: true, items: json})});
    
    //  fetch('http://localhost:9000/news/publisher/www.espn.com - NFL', {mode: 'cors'})
    //      .then(res2 => res2.json())
    //      //.then(res => this.setState({ apiResponse: res }));
    //      .then(json => {this.setState({espnItems: json})});
  }
  componentDidMount() {
    this.callAPI();
  }

 
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
          <MDBCol md="3">
            <Jumbotron className="mt-3" style={{ padding: 20 }}>
                <h4>News Sources</h4>
                <MDBRow center>
                  <MDBBtnGroup vertical>
                    <MDBBtn color="amber" className="ml-0" >NYTimes</MDBBtn>
                    {/* onClick={callAPI2('http://localhost:9000/news/publisher/NYT > Business')} */}
                    <MDBBtn color="amber">WSJ</MDBBtn>
                    <MDBBtn color="amber">ESPN</MDBBtn>
                    <MDBBtn color="amber">Button</MDBBtn>
                  </MDBBtnGroup>
              </MDBRow>
                <br></br>
                <Newmodal btnSize="sm" modalTitle='Add News Source' btnTxt='+ Add Source'/>
            </Jumbotron>
            </MDBCol>
          <MDBCol md="9">
            <Jumbotron className="mt-3" style={{ padding: 20 }} fluid>
                <h2><strong>News Articles</strong></h2>

                {items.map((item) => <div><Newscard cardContent={item.Summary} cardTitle={item.Title} link={item.Link}/> <br></br></div>)}
                
            </Jumbotron>
          </MDBCol>
        </MDBRow>
       
      </MDBContainer>
      
    );
  }
}

export default MyNewsPage;
