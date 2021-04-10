import React, { Component, Fragment } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import {Link} from "react-router-dom";
import RestClient from "../../RestAPI/RestClient";
import AppUrl from "../../RestAPI/AppUrl";


class Courses extends Component {

  constructor() {
    super();
    this.state={
      myData:[]
    }
  }





  componentDidMount() {
    RestClient.GetRequest(AppUrl.coursesfour).then(result=>{

      this.setState({myData:result});

    })
  }





  render() {

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
          <h1 className="serviceMainTitle text-center">OUR COURSES</h1>

          <Row>
           
        {coursesView}
          </Row>
        </Container>
      </Fragment>
    );
  }
}

export default Courses;
