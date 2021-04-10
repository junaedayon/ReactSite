import React, { Component, Fragment } from "react";
import { Container, Row, Col, Card, Button, Modal } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlayCircle } from "@fortawesome/free-solid-svg-icons";
import ReactPlayer from "react-player";
import RestClient from '../../RestAPI/RestClient';
import AppUrl from "../../RestAPI/AppUrl";


class Video extends Component {
  constructor() {
    super();
    this.state = {
      show: false,
      video_des:"",
      video_link:""
    };
  }

  componentDidMount() {
    RestClient.GetRequest(AppUrl.video).then(result=> {
      this.setState({video_des:result[0]['video_des'],
      video_link:result[0]['video_link']
                 
    
    })
    })
  }
  


  modalClose = () => this.setState({ show: false });
  modalOpen = () => this.setState({ show: true });

  render() {
    return (
      <Fragment>
        <Container className="text-center">
          <Row>
            <Col lg={12} md={12} sm={12}>
              <div className="videoCard">
                <p className="videoTitle ">How I Do</p>
                <p className="videoDes">
                  {" "}
                 {this.state.video_des}
                </p>

                <p>
                  {" "}
                  <FontAwesomeIcon
                    onClick={this.modalOpen}
                    className="iconEdit videoIcon"
                    icon={faPlayCircle}
                  />{" "}
                </p>
              </div>
            </Col>
          </Row>
        </Container>

        <Modal size="lg" show={this.state.show} onHide={this.modalClose}>
          <Modal.Body>
            <div className="player-wrapper">
              <ReactPlayer
                controls
                className="react-player"
                url={this.state.video_link}
                width="100%"
                height="100%"
              />
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="primary" onClick={this.modalClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </Fragment>
    );
  }
}

export default Video;
