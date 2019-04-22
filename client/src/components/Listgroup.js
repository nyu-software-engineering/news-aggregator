import React from 'react';
import { MDBListGroup, MDBListGroupItem, MDBContainer } from "mdbreact";

const Listgroup = props => {
return (
<MDBContainer>
  <MDBListGroup >
    <MDBListGroupItem href="#" active>All</MDBListGroupItem>
    <MDBListGroupItem href="#" hover>NYTimes</MDBListGroupItem>
    <MDBListGroupItem href="#" hover>WSJ</MDBListGroupItem>
    <MDBListGroupItem href="#" hover>ESPN</MDBListGroupItem>
    <MDBListGroupItem href="#" hover>CNN</MDBListGroupItem>
  </MDBListGroup>
</MDBContainer>

);
};

export default Listgroup;