import React, { Component, Fragment } from 'react';
import AboutDes from '../components/AboutDes/AboutDes';
import Footer from '../components/Footer/Footer';
import PageTop from '../components/PageTop/PageTop';
import TopNavigation from '../components/TopNavigation/TopNavigation';

class AboutPage extends Component {
    componentDidMount() {
        window.scroll(0,0);
    }
    render() {
        return (
           <Fragment>
               <TopNavigation title="About"></TopNavigation>
               <PageTop pageTitle="About Me"></PageTop>
               <AboutDes></AboutDes>
               <Footer></Footer>
           </Fragment>
        );
    }
}

export default AboutPage;