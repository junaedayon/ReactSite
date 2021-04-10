import React, { Component , Fragment } from 'react';
import { Container , Row , Col , Button , Card } from "react-bootstrap"
import ReactPlayer from "react-player";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import RestClient from '../../RestAPI/RestClient';
import AppUrl from '../../RestAPI/AppUrl';




class CourseDetails extends Component {

  constructor(props){
    super(props);
    this.state={
      myCourseAll:props.id,
      LongTitle:'',
      LongDes:"",
      totalStudent:"",
      totalProject:"",
      ViedoUrl:""

    }
  }

 


  componentDidMount() {
    window.scroll(0,0);

    RestClient.GetRequest(AppUrl.coursesany+this.state.myCourseAll).then(result=>{

      this.setState({
          
        LongTitle:result[0]['long_title'],
        LongDes:result[0]['long_des'],
        totalStudent:result[0]['total_student'],
        totalProject:result[0]['total_lecture'],

        ViedoUrl:result[0]['video_url']
      
      })

    }).catch(error=>{

    })

   

}


    render() {


        return (
            <Fragment>
            <Container fluid={true} className="topPageBannerCourses p-0">
                <div className="topPageOverlayCourses">
                    <Container className="pageContentCourses">
                        <Row>
                            <Col lg={6} md={6} sm={12}>
                                <h3 className="topPageText">{this.state.LongTitle}</h3>
                                <p className="coursesText">{this.state.totalProject}</p>
                                <p className="coursesText">{this.state.totalStudent}</p>


                            </Col>

                            <Col lg={6} md={6} sm={12}>
                                     

                                     <p className="coursesPara">{this.state.LongDes}</p>
                                
                                </Col>
                        </Row>
                        </Container>
                        </div>

                    </Container>

                    <Container className="mt-5">
                        <Row>
                            <Col md={6} lg={6} sm={6}>
                            
                    
                      <h3 className="cardTitle text-justify">
                        How I work
                      </h3>
                      <div className="cardSub text-justify">
                        <p>
                          {" "}
                          <FontAwesomeIcon
                            className="iconEdit"
                            icon={faCheckCircle}
                          />{" "}
                          Requirement Gathering
                        </p>
                        <p>
                          {" "}
                          <FontAwesomeIcon
                            className="iconEdit"
                            icon={faCheckCircle}
                          />{" "}
                          System Analysis
                        </p>
                        <p>
                          {" "}
                          <FontAwesomeIcon
                            className="iconEdit"
                            icon={faCheckCircle}
                          />{" "}
                          Coding Testing
                        </p>
                        <p>
                          {" "}
                          <FontAwesomeIcon
                            className="iconEdit"
                            icon={faCheckCircle}
                          />{" "}
                          Implementation
                        </p>
                        <p>
                          {" "}
                          <FontAwesomeIcon
                            className="iconEdit"
                            icon={faCheckCircle}
                          />{" "}
                          Coding Testing
                        </p>
                        <p>
                          {" "}
                          <FontAwesomeIcon
                            className="iconEdit"
                            icon={faCheckCircle}
                          />{" "}
                          Implementation
                        </p>
                      </div>
                    
                  
                            </Col>
                            <Col md={6} lg={6} sm={6}>
                            <ReactPlayer
                controls
                className="react-player"
                url="https://www.youtube.com/watch?v=zYpgDQrFZJg&list=RDzYpgDQrFZJg&start_radio=1"
                width="100%"
                height="100%"
              />
                    </Col>

                        </Row>
                    </Container>


                

           
        </Fragment>
        );
    }
}

export default CourseDetails;