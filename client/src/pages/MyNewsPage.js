import React from "react";
import { MDBContainer, MDBRow, MDBCol, Jumbotron,MDBBtn} from "mdbreact";
import Listgroup from "../components/Listgroup";
import Newscard from "../components/Newscard";

class MyNewsPage extends React.Component {
  render() {
    return (
      <MDBContainer fluid>
        <MDBRow>
          <MDBCol md="3">
            <Jumbotron className="mt-3" style={{ padding: 20 }}>
                <h4>News Sources</h4>
                <Listgroup />
                <br></br>
                <MDBBtn rounded size="sm" onClick={this.toggle}>+ Add Source</MDBBtn>
            </Jumbotron>
            </MDBCol>
          <MDBCol md="9">
            <Jumbotron className="mt-3" style={{ padding: 20 }} fluid>
                <h2><strong>News Articles</strong></h2>
                <Newscard cardContent='COLOMBO, Sri Lanka — The confidential security memo laid it all out: names, addresses, phone numbers, even the times in the middle of the night that one suspect would visit his wife.' cardTitle='Sri Lanka Was Warned of Possible Attacks. Why Didn’t It Stop Them?' link="https://www.nytimes.com/2019/04/22/world/asia/ntj-warning-sri-lanka-government.html" source="[NYTimes]" imgSource="https://static01.nyt.com/images/2019/04/22/world/22srilanka-warning1/merlin_153825870_0807bf43-dbba-493c-a9b2-b6c89a29a7f9-articleLarge.jpg?quality=75&auto=webp&disable=upscale"/>
                <br></br>
                <Newscard cardContent='SEOUL— Samsung Electronics Co. is delaying the rollout of its Galaxy Fold smartphone until at least next month, after tech reviewers reported their test devices had malfunctioned.' cardTitle='Samsung’s Galaxy Fold Smartphone Release Delayed' link="https://www.wsj.com/articles/samsungs-galaxy-fold-smartphone-release-delayed-11555941705?mod=hp_lead_pos4" source="[WSJ]" imgSource="https://images.wsj.net/im-68674?width=620&aspect_ratio=1.5"/>
                <br></br>
                <Newscard cardContent="INDIANAPOLIS -- It's hard to imagine how Easter Sunday could've gone much better for Gordon Hayward." cardTitle="Hayward returns home with 20 in Celtics' win" link="http://www.espn.com/nba/story/_/id/26575650/hayward-returns-home-20-celtics-win" source="[ESPN]" imgSource="https://a.espncdn.com/combiner/i?img=%2Fphoto%2F2019%2F0421%2Fr532270_1296x729_16%2D9.jpg&w=570&format=jpg"/>
                <br></br>
                <Newscard cardContent="President Trump sued his own accounting firm and the Democratic chairman of the House Oversight Committee at the same time on Monday — trying an unusual tactic to stop the firm from giving the committee details about Trump’s past financial dealings." cardTitle="Trump sues in bid to block congressional subpoena of financial records" link="https://www.washingtonpost.com/politics/trump-sues-in-bid-to-block-congressional-subpoena-of-financial-records/2019/04/22/a98de3d0-6500-11e9-82ba-fcfeff232e8f_story.html?utm_term=.9526939551b2" source="[Washington Post]" imgSource="https://www.washingtonpost.com/resizer/bV6OR2f0yw3MeMWHeuorjncNSdY=/1484x0/arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/DJ2733CKPUI6TDH4FROQTGOCDY.jpg"/>
                <br></br>
                <Newscard />
            </Jumbotron>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    );
  }
}

export default MyNewsPage;
