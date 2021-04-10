import React, { Component, Fragment } from 'react';
import { Container , Row , Col , Button } from "react-bootstrap"


class TermsAndCo extends Component {
    render() {
        return (
            <Fragment>
                  <Container>
                   <Row>
                       <Col className="mt-5" sm={12} md={12} lg={12}>
                           <h1 className="serviceHead">Terms And Condition</h1>
                           <br/>
                           <p className="serviceDescrip">It has been exactly 3 years since I wrote my first blog series entitled “Flavorful Tuscany”, but starting it was definitely not easy. Back then, I didn’t know much about blogging, let alone think that one day it could become my full-time job. Even though I had many recipes and food-related stories to tell, it never crossed my mind that I could be sharing them with the whole world.</p>

                        
                           <br/>
                           <p className="serviceDescrip">I am now a full-time blogger and the curator of the Simply delicious newsletter, sharing stories about traveling and cooking, as well as tips on how to run a successful blog.</p>


                           
                           <br/>
                           <p className="serviceDescrip">If you are tempted by the idea of creating your own blog, please think about the following:

                           <ul>
                               <li>Your story (what do you want to tell your audience)</li>
                               <li>Your audience (who do you write for)</li>
                               <li>Your blog name and design</li>
                               
                           </ul>
                           
                           
                           </p>

                           <p className="ServiceDescribe">After you get your head around these 3 essentials, all you have to do is grab your keyboard and the rest will follow.</p>




                       </Col>
                   </Row>
               </Container>

            </Fragment>
        );
    }
}

export default TermsAndCo;