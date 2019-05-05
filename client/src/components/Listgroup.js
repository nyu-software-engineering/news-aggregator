import React from "react";
import { MDBBtn, MDBBtnGroup, MDBDropdown, MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem, MDBRow, MDBCol } from
"mdbreact";

const BtnGroupPage = () => {
  return (
  <MDBRow center>
      <MDBBtnGroup vertical>
        <MDBBtn color="amber" className="ml-0">NYTimes</MDBBtn>
        <MDBBtn color="amber">WSJ</MDBBtn>
        <MDBBtn color="amber">ESPN</MDBBtn>
        <MDBBtn color="amber">Button</MDBBtn>

      </MDBBtnGroup>
 
    
  </MDBRow>
  )
}

export default BtnGroupPage;