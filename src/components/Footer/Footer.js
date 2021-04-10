import React, { Component ,Fragment } from 'react';
import { Container, Row, Col, Button, Card } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope , faPhone } from "@fortawesome/free-solid-svg-icons";
import { faFacebook , faYoutube } from '@fortawesome/free-brands-svg-icons'
import {Link} from 'react-router-dom'
import RestClient from '../../RestAPI/RestClient';
import AppUrl from "../../RestAPI/AppUrl";





class Footer extends Component {

  constructor(){
    super();

    this.state={
      address:"",
      email:"",
      phone:"",
      facebook:"",
      youtube:""
    }
  }




componentDidMount() {
  RestClient.GetRequest(AppUrl.footer).then(result=> {
    this.setState({address:result[0]['address'],
                   email:result[0]['email'],
                   phone:result[0]['phone'],
                   facebook:result[0]['facebook'],
                   youtube:result[0]['youtube']   
  
  })
  })
}



    render() {
        return (
         <Fragment>
             <Container fluid='true' className="footerBox text-center okey">
                 
                 <Row>
                     <Col lg={3} md={6} sm={12} className="text-justify">
                     <h4  className="serviceHead">Follow Me</h4>
                     < a className="footerLinkLogo" target="_blank" href={"//" + this.state.facebook}> {" "}
                          <FontAwesomeIcon
                           
                            icon={faFacebook}
                          />{" "} Facebook</a> <br/>
                     <a className="footerLinkLogo" href="#"> {" "}
                          <FontAwesomeIcon
                            
                            icon={faYoutube}
                          />{" "} YouTube</a> 


                       
                     
                     
                     </Col>

                     <Col lg={3} md={6} sm={12} className="text-justify">
                     <h4  className="serviceHead">Address</h4>
                     <p className="clientPara">{this.state.address}</p>
                     <p className="clientPara"> {" "}
                          <FontAwesomeIcon
                            
                            icon={faEnvelope}
                          />{" "} {this.state.email}</p>
                     <p className="clientPara"> {" "}
                          <FontAwesomeIcon
                           
                            icon={faPhone}
                          />{" "} {this.state.phone}</p>
                     

                     
                     
                     </Col>

                     <Col lg={3} md={6} sm={12} className="text-justify">
                     <h4  className="serviceHead">Information</h4>
                     <Link className="footerLink" to="/about">About Me</Link> <br/>
                     <Link className="footerLink" to="/contact">Contact Me</Link> 
                     

                    

                     
                     
                     </Col>

                     <Col lg={3} md={6} sm={12} className="text-justify">
                     <h4  className="serviceHead">Legal</h4>
                     <Link className="footerLink" to="/refund">Refund Policy</Link> <br/>
                     <Link className="footerLink" to="/terms">Terms And Condition</Link> <br/>
                     <Link className="footerLink" to="/privacy">Privacy Policy</Link> 

                     

                     
                     
                     </Col>
                 </Row>

                 

                 
             </Container>
             <Container fluid={true} className="text-center lastLine">
                 <a href="#" className="lastText">Junaed Ayo#"2020-21</a>
             </Container>
         </Fragment>
        );
    }
}

export default Footer;