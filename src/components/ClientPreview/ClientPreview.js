import React, { Component, Fragment } from 'react';
import { Container , Row , Col } from "react-bootstrap"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import RestClient from '../../RestAPI/RestClient';
import AppUrl from '../../RestAPI/AppUrl';



class ClientPreview extends Component {
  render() {
        var settings = {
            autoplay:true,
            autoplaySpeed:2000,
            dots: true,
            infinite: false,
            speed: 2000,
            vertical:true,
            verticalSwiping:true,
            slidesToShow: 1,
            slidesToScroll: 1,
            
            responsive: [
              {
                breakpoint: 1024,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1,
                  dots: true
                }
              },
              {
                breakpoint: 600,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1,
                 
                }
              },     
         {
                breakpoint: 480,
            settings: {
                  slidesToShow: 1,
              slidesToScroll: 1
                }
         }
            ]
          };

         
        return (
          <Fragment>
              < Container className="text-center">
              <h1 className="serviceMainTitle">CLIENT SAYS</h1>
              <Slider {...settings}>

              <div>
      <Row className="text-center">
      <Col>
      <img className="clientImg text-center" src="https://images.unsplash.com/photo-1616952593956-60591e777488?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80"></img>
      <h4 className="clientHead">Web development</h4>
      <p className="clientPara">Hey How Are You??</p>

      
      
      </Col>


      
       
      </Row>
  </div>


  <div>
      <Row className="text-center">
      <Col>
      <img className="clientImg text-center" src="https://images.unsplash.com/photo-1616952593956-60591e777488?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80"></img>
      <h4 className="clientHead">Web development</h4>
      <p className="clientPara">Hey How Are You??</p>

      
      
      </Col>


      
       
      </Row>
  </div>

  <div>
      <Row className="text-center">
      <Col>
      <img className="clientImg text-center" src="https://images.unsplash.com/photo-1616952593956-60591e777488?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80"></img>
      <h4 className="clientHead">Web development</h4>
      <p className="clientPara">Hey How Are You??</p>

      
      
      </Col>


      
       
      </Row>
  </div>


  
              </Slider>


              </Container>


          </Fragment>
        );
    }
}

export default ClientPreview;