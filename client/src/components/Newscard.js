import React, { Component } from 'react';
import { MDBCard, MDBCardBody, MDBCardTitle, MDBCardText, MDBCol, MDBBtn} from 'mdbreact';

class Newscard extends Component{
  saveArticle = (title2, link2, pubdate2) =>  {
    fetch('http://localhost:9000/save', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        title: title2,
        link: link2,
        date: pubdate2,
        username: "claudia"
      })
    })
    .then(res => res.json())
    .then(response => console.log("success: ", JSON.stringify(response)))
    .catch(error => console.error("Error", error));
   }
    render(){
  return (
    <MDBCol >
      <MDBCard>
        <MDBCardBody>
        <a href={this.props.link}><MDBCardTitle>{this.props.cardTitle}</MDBCardTitle></a>
          <MDBCardText>
            {this.props.cardContent}
            <br></br>
            {this.props.source}
            <br></br>
            {this.props.pubdate}
          </MDBCardText>
          <MDBBtn outline color="warning" size="sm"
          onClick={()=>this.saveArticle(
            this.props.cardTitle,
            this.props.link,
            this.props.pubdate
            )}
          >Save for Later</MDBBtn>
        </MDBCardBody>

      </MDBCard>
    </MDBCol>
  )
}
}

export default Newscard;