import React, { Component, Fragment } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import AppUrl from "../../RestAPI/AppUrl";
import RestClient from "../../RestAPI/RestClient";

class Analaysis extends Component {
    constructor() {
        super(); 
        this.state= {
            data:[
              {technology:"Java" , Project:100},
              {technology:"SQL" , Project:45},
              {technology:"Kolin" , Project:60},
              {technology:"Bootstrap" , Project:100},
              {technology:"React" , Project:90},
              {technology:"Vue" , Project:60},
              {technology:"PHP" , Project:85},
             {technology:"Angular" , Project:50}
            ]
        }
    }

    

    

  render() {
      var blue = '#0073E6 '
    return (
      <Fragment>
        <Container className="text-center mb-5">
          <h1 className="serviceMainTitle">Technology Used</h1>

          <Row>
            <Col style={{width:"100%" , height:"320px"}}  lg={6} md={12} sm={12}>

            <ResponsiveContainer >
           <BarChart width={100} height={320} data={this.state.data}>
               <Tooltip></Tooltip>
               <XAxis dataKey="technology"></XAxis>
          <Bar dataKey="Project" fill={blue} />
         </BarChart>
        </ResponsiveContainer>

            </Col>
            <Col lg={6} md={12} sm={12}>
            <p className="text-justify des">To build native android apps i use Java as well as kotline mainly. React JS is used for cross platform mobile application. I use MySQL database for relational database system. To build NoSQL application i use MongoDB. Firebase database system is used where it is necessary to provide realtime data flow facilities.</p>
            <p className="text-justify des"> I always build dynamic application. Admin panel is the heart of such kinds of application. I always try to provide sufficient features in admin panel to dominate application. According to client demand I use PHP OOP, CodeIgniter and Laravel to build admin panel section. </p>
             <p className="text-justify des"> Application security is a big deal for commercial application. I always ensure security portion of my application, moreover i build a security alert system, to notify admin when his system at risk. </p>

            </Col>
          </Row>
        </Container>
      </Fragment>
    );
  }
}

export default Analaysis;
