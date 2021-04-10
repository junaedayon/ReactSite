import React, { Component, Fragment } from 'react';
import { Container , Row , Col , Button } from "react-bootstrap"
import AppUrl from '../../RestAPI/AppUrl';
import RestClient from '../../RestAPI/RestClient';


class SingleProject extends Component {

    constructor(props){
        super();
        this.state={
            myID:props.id,

            

            projectimg_two:" ",
            project_shortdes:"",
            project_name:""
        }
    }

    componentDidMount(){
        RestClient.GetRequest(AppUrl.projectdetails+this.state.myID).then(result=>{

            this.setState({projectimg_two:result[0]['projectimg_two'],
                          project_shortdes:result[0]['project_shortdes'] ,
                          project_name:result[0]['project_name']     
            
            })

        }).catch(erorr=>{

        })
    }



    render() {
        return (
           <Fragment>
               <Container className="mt-5">
                   <Row >
                       <Col lg={6} md={6} sm={12}>

                           <img src={this.state.projectimg_two}></img>
                       
                       </Col>

                       <Col lg={6} md={6} sm={12}>

                           <h1 className="serviceHead">{this.state.project_name}</h1>
                           <p className="serviceDescrip mt-4"> {this.state.project_shortdes}
                           <ul className="mt-4">
                               <li>Your story (what do you want to tell your audience)</li><br/>
                               <li>Your audience (who do you write for)</li><br/>
                               <li>Your blog name and design</li><br/>
                               <li>Your story (what do you want to tell your audience)</li><br/>
                               <li>Your blog name and design</li>


                               
                           </ul>
                           

                           </p>

                       
                       </Col>
                   </Row>
               </Container>
           </Fragment>
               
        );
    }
}

export default SingleProject;