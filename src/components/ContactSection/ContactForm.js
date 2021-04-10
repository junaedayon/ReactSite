import React, { Component, Fragment } from 'react';
import { Container , Row , Col , Button ,Form } from "react-bootstrap"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope , faPhone } from "@fortawesome/free-solid-svg-icons";
import RestClient from '../../RestAPI/RestClient';
import AppUrl from "../../RestAPI/AppUrl";


class ContactForm extends Component {

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

    sendData() {
        let name = document.getElementById("name").value;
        let email = document.getElementById("email").value;
        let pass = document.getElementById("pass").value;

        let postData={name:name,email:email,pass:pass};

        RestClient.PostRequest(AppUrl.contact,postData).then(result=>{
            alert(result);
        }).catch(erorr=>{
            alert("Wrong bro")
        })

    }
    






    render() {
        return (
            <Fragment>
                <Container>
                    <Row className="mt-4">
                        <Col lg={6} md={6} sm={12}>

                                                        <Form>
                                             <Form.Group controlId="formBasicName">
                                    <Form.Label>Name</Form.Label>
                                    <Form.Control id="name" type="text" placeholder="Enter Name" />
                                
                                </Form.Group>


                                <Form.Group controlId="formBasicEmail">
                                    <Form.Label>Email address</Form.Label>
                                    <Form.Control id="email" type="email" placeholder="Enter email" />
                                    <Form.Text className="text-muted">
                                    We'll never share your email with anyone else.
                                    </Form.Text>
                                </Form.Group>

                                <Form.Group controlId="formBasicPassword">
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control id="pass" type="password" placeholder="Password" />
                                </Form.Group>
                                <Form.Group controlId="formBasicCheckbox">
                                    <Form.Check type="checkbox" label="Check me out" />
                                </Form.Group>
                                <Button onClick={this.sendData} variant="primary" >
                                    Submit
                                </Button>
                                </Form>


                        </Col>
                        <Col lg={6} md={6} sm={12}>

                        <h4  className="serviceHead">Quick Discussion</h4>
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
                    </Row>
                </Container>
            </Fragment>
        );
    }
}

export default ContactForm;