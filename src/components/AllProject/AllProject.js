import React, { Component, Fragment } from 'react';
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import {Link} from "react-router-dom";
import AppUrl from "../../RestAPI/AppUrl";
import RestClient from "../../RestAPI/RestClient";
import Loading from '../Loading/Loading';



class AllProject extends Component {



  constructor() {
    super();
    this.state={
      myData:[],
      loading:true
    }
  }



  componentDidMount(){
    RestClient.GetRequest(AppUrl.projectall).then(result=>{

      this.setState({myData:result,loading:false});

    })
  }









  render() {

    if(this.state.loading==true) {
      return <Loading></Loading>
    }else {

      
    const myProject = this.state.myData;
    const projectsOkey= myProject.map(myProject=>{
       return <Col lg={4} md={6} sm={12} className="p-2">
 
       <Card className="projectCard">
         <Card.Img
            
           variant="top"
           src={myProject.projectimg_one}
         />
         <Card.Body>
           <Card.Title className="projectCardTitle">
             {myProject.project_name}
           </Card.Title>
           <Card.Text className="projectCardDes">
            {myProject.project_shortdes}
           </Card.Text>
           <Button  variant="primary"><Link className="linkButton" to={"/project/"+ myProject.id+"/"+myProject.project_name}>Go somewhere</Link></Button>
         </Card.Body>
       </Card>
     </Col>
     })
 

        return (
            <Fragment>
                    <Container className="text-center">
          
          <Row className="mt-4"> 
          {projectsOkey}
          </Row>
        </Container>
            </Fragment>
        );

    }

    }
}

export default AllProject;