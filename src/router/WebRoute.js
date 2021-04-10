import React, { Component, Fragment } from 'react';
import { BrowserRouter, Route, Link ,Switch } from "react-router-dom";
import HomePage from '../pages/HomePage'
import ServicesPage from '../pages/ServicesPage'
import CoursesPage from '../pages/CoursesPage'
import Portfoilo from '../pages/Portfoilo'
import AboutPage from '../pages/AboutPage'
import Contact from '../pages/Contact'
import RefundPage from '../pages/RefundPage';
import TermsPages from '../pages/TermsPages';
import PrivacyPages from '../pages/PrivacyPages';
import SingleProPages from '../pages/SingleProPages';
import CourseDetailsPage from '../pages/CourseDetailsPage';







class WebRoute extends Component {
    render() {
        return (
          <Fragment>
              <Switch>

                  <Route exact path="/" component={HomePage} />
                  <Route exact path="/services" component={ServicesPage} />
                  <Route exact path="/courses" component={CoursesPage} />
                  <Route exact path="/portfoilo" component={Portfoilo} />
                  <Route exact path="/about" component={AboutPage} />
                  <Route exact path="/contact" component={Contact} />
                  <Route exact path="/refund" component={RefundPage} />
                  <Route exact path="/terms" component={TermsPages} />
                  <Route exact path="/privacy" component={PrivacyPages} />
                  <Route exact path="/project/:projectID/:projectName" component={SingleProPages} />
                  <Route exact path="/coursesdetails/:courseID" component={CourseDetailsPage} />








              </Switch>

          </Fragment>
        );
    }
}

export default WebRoute;