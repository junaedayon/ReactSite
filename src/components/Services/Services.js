import React, { Component, Fragment } from 'react';
import { Container , Row , Col } from "react-bootstrap"
import gLogo from '../../asset/image/graphics.svg'

import wLogo from '../../asset/image/web.svg'
import mLogo from '../../asset/image/mobile.svg'
import RestClient from '../../RestAPI/RestClient';
import AppUrl from '../../RestAPI/AppUrl';
import Loading from '../Loading/Loading';



class Services extends Component {


    constructor() {
        super();

        this.state={
            myData:[],
            
        }
    }


 componentDidMount( ){

    RestClient.GetRequest(AppUrl.service).then(result=>{

        this.setState({myData:result})

    })
}




    render() {

        const myList=this.state.myData;

        const myView= myList.map(myList=>{
            return <Col lg={4} md={6} sm={12}>
            <div className="servicesCard text-center">
                    <img src={wLogo}>

                    </img>
                    <h4  className="serviceHead">{myList.service_name}</h4>
                    <p  className="serviceDescrip">{myList.service_des}</p>
                </div>
            
            </Col>
        })




        return (
            <Fragment>
                <Container className="text-center">
                    <h1 className="serviceMainTitle">MY SERVICES</h1>
                    <Row>
                        {myView}

                     
                    </Row>

                </Container>
            </Fragment>
        );


      
    }
}

export default Services;