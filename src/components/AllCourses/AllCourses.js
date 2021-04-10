import React, { Component, Fragment } from 'react';
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import {Link} from "react-router-dom";
import RestClient from "../../RestAPI/RestClient";
import AppUrl from "../../RestAPI/AppUrl";
import Loading from '../Loading/Loading';



class AllCourses extends Component {

  constructor() {
    super();
    this.state={
      myData:[],
      loading:true
    }
  }





  componentDidMount() {
    RestClient.GetRequest(AppUrl.coursesall).then(result=>{

      this.setState({myData:result,loading:false});

    })
  }









    render() {

      if(this.state.loading==true){
        return <Loading/>
      }else{

        const myCourses = this.state.myData;

        const coursesView= myCourses.map(myCourses=>{
          return  <Col lg={6} md={12} sm={12} className="mt-4">
          <Row>
            <Col lg={6} md={12} sm={12} className="mt-3">
              <img
                className="coursesImg"
                src={myCourses.small_img}
              ></img>
            </Col>
    
            <Col lg={6} md={12} sm={12} className="mt-3">
              <h5 className="coursesTitle ">{myCourses.short_title}</h5>
              <p className="coursesDes">
             {myCourses.short_des}
              </p>
              <Link className="coursesLink" to={"/coursesdetails/"+myCourses.id}>
                Details
              </Link>
            </Col>
          </Row>
        </Col>
        })
    
    
    
            return (
               <Fragment>
                        <Container>
        
    
              <Row className="mt-4">
               {coursesView}
              </Row>
            </Container>
               </Fragment>
            );


      }

      
   
    }
}

export default AllCourses;