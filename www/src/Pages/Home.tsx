import * as React from "react";
import { Button, Card, CardBody, CardGroup, CardImg, CardSubtitle, CardText, CardTitle, Col, Container, Form, FormGroup, FormText, Input, Label, Row } from "reactstrap";
import RPM from "../components/RPM";

import { useAuth } from "../hooks/useAuth";
import axios from 'axios';

function Home() {
   const { authed, loading, vote } = useAuth();

   const [data,setData] = React.useState([]);

   const LEADERBOARD_URL = "https://us-east-1.aws.data.mongodb-api.com/app/application-0-blkhf/endpoint/leaderboard";

   React.useEffect(() => {
      axios.get(LEADERBOARD_URL)
      .then(res => {
         console.log('res',res)
         setData(res.data);
      })
      let appRefreshInterval = setInterval(function(){
         axios.get(LEADERBOARD_URL)
            .then(res => {
               console.log('res',res)
               setData(res.data);
            })
      },5000);
      // Specify how to clean up after this effect:
      return function cleanup() {
         console.log('clearing refresh interval');
         clearInterval(appRefreshInterval);
      };
   },[]);
   return <div className="home-content">
            <div className="context">
               <div className="area" >
                                    <ul className="circles">
                                          <li></li>
                                          <li></li>
                                          <li></li>
                                          <li></li>
                                          <li></li>
                                          <li></li>
                                          <li></li>
                                          <li></li>
                                          <li></li>
                                          <li></li>
                                    </ul>
                           </div >
            </div>
            <div>
            <Container style={{height:"70vh", overflow:"auto"}}>
               <Row>
                  
                     {data.map((element, index) => 
                        <Col key={index} xs="12" sm="6" md="4" lg="3">
                           <Card key={index} style={{marginTop:"1em"}}> 
                              <CardImg
                                 alt=""
                                 src={element.cd[0].avatarURL}
                                 top
                                 width="100%"
                              />
                              <CardBody>
                                 <CardTitle tag="h5">
                                 {String(element.email).split("@")[0]}
                                 </CardTitle>
                                 <CardSubtitle
                                 className="mb-2 text-muted"
                                 tag="h6"
                                 >
                                 {String(element.email).split("@")[1]}
                                 </CardSubtitle>
                                 <CardSubtitle
                                 className="mb-2 text-muted"
                                 tag="h6"
                                 >
                                 {element.voters.length} likes
                                 </CardSubtitle>
                                 {authed &&                                 
                                    <Button color="danger" onClick={async ()=>{
                                       alert('voted!');
                                       await vote(element.email);
                                       axios.get(LEADERBOARD_URL)
                                       .then(res => {
                                          console.log('res',res)
                                          setData(res.data);
                                       })
                                    }}>
                                       &#10084;
                                    </Button>
                                 }
                              </CardBody>
                           </Card>
                        </Col>
                     )}
               </Row>   
            </Container>
                  
               
            </div>
         </div>;
}

export default Home;
