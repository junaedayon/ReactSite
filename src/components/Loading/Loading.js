import React, { Component, Fragment } from 'react';
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import Loadingse from "../../asset/image/loader.svg"


class Loading extends Component {
    render() {
        return (
          <Fragment>
              <Container className="text-center">
              <Row>
                  <Col>
                  
                  <img className="loaderImg" src={Loadingse}></img>
                       
                  
                  </Col>
              </Row>
              </Container>
          </Fragment>
        );
    }
}

export default Loading;