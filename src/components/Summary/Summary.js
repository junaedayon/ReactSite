import React, { Component, Fragment } from "react";
import { Container, Row, Col, Button, Card } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";

class Summary extends Component {
  render() {
    return (
      <Fragment>
        <Container fluid={true} className="summaryBanner mt-5 p-0">
          <div className="summaryOverlay">
            <Container className="text-center">
              <Row>
                <Col lg={8} md={6} sm={12} className="numberSummary">
                  <Row>
                    <Col>
                      <h1 className="numberTitle">
                        <CountUp start={0} end={100}>
                          {({ countUpRef, start }) => (
                            <VisibilitySensor onChange={start} delayedCall>
                              <span ref={countUpRef} />
                            </VisibilitySensor>
                          )}
                        </CountUp>
                      </h1>
                      <h4 className="numberSubTitle">Total Project</h4>
                      <hr className="bg-white w-25"></hr>
                    </Col>

                    <Col>
                      <h1 className="numberTitle">
                        <CountUp start={0} end={100}>
                          {({ countUpRef, start }) => (
                            <VisibilitySensor onChange={start} delayedCall>
                              <span ref={countUpRef} />
                            </VisibilitySensor>
                          )}
                        </CountUp>
                      </h1>
                      <h4 className="numberSubTitle">Total Project</h4>
                      <hr className="bg-white w-25"></hr>
                    </Col>
                  </Row>
                </Col>

                <Col lg={4} md={6} sm={12}>
                  <Card className="cardCss">
                    <Card.Body>
                      <Card.Title className="cardTitle text-justify">
                        How I work
                      </Card.Title>
                      <Card.Text className="cardSub text-justify">
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
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
              </Row>
            </Container>
          </div>
        </Container>
      </Fragment>
    );
  }
}

export default Summary;
