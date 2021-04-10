import React, { Component, Fragment } from 'react';
import { Container , Row , Col , Button } from "react-bootstrap"


class PrivacyPolicy extends Component {
    render() {
        return (
           <Fragment>
               <Container>
                   <Row>
                       <Col className="mt-5" sm={12} md={12} lg={12}>
                          
                          <ul>
                              <li>First 30 days Money Back!!!</li>
                              <br/>
                              <li>This is not a buy and try product</li>
                              <br/>
                              <li>Creating a Return & Refund Policy for your application or website can take a lot of time. You could either spend tons of money on hiring a lawyer, or you could simply use our service and get a unique Return & Refund Policy fully custumized to your website.</li>
                              <br/>
                              <li>After 30 days there are no refund offer</li>
                              <br/>
                              <li>If you want to host your customized Return & Refund Policy on your site, you can just download the Return & Refund Policy and give them the use you want.</li>
                              <br/>
                              <li>We will create your customized Return & Refund Policy in a variety of formats: PDF, DOCX, TXT & HTML files.</li>


                          </ul>



                       </Col>
                   </Row>
               </Container>

           </Fragment>
        );
    }
}

export default PrivacyPolicy;