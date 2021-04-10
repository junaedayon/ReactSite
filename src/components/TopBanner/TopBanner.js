import React, { Component, Fragment } from 'react';
import { Container , Row , Col , Button } from "react-bootstrap"
import RestClient from '../../RestAPI/RestClient';
import AppUrl from '../../RestAPI/AppUrl';



class TopBanner extends Component {

    constructor(){
        super();
        this.state={
            title:"",
            subTitle:""
        };
    };


    
    componentDidMount() {
        RestClient.GetRequest(AppUrl.hometitle).then(result=>{

            this.setState({title:result[0]['home_title'], subTitle: result[0]['home_subtitile']});

        }).catch(error=> {
            this.setState({title:"Error 404", subTitle: "Try few moments later"});


        } )
    }

    render() {
        return (
            <Fragment>
                <Container fluid={true} className="topFixedBanner p-0">
                    <div className="topBannerOverlay">
                        <Container className="bannerContent">
                            <Row>
                                <Col className="text-center">
                                   < h1 className="topTitle">{this.state.title}</h1>
                                   <h4 className="topSubTitle">{this.state.subTitle}</h4>
                                   <Button variant="primary">More Info</Button>{' '}
                                </Col>

                            </Row>

                        </Container>


                    </div>

                </Container>
            </Fragment>
        );
    }
}

export default TopBanner;