import React, { Component, Fragment } from 'react';
import PrivacyPolicy from '../components/PrivacyPolicy/PrivacyPolicy';
import Footer from '../components/Footer/Footer';
import PageTop from '../components/PageTop/PageTop';
import TopNavigation from '../components/TopNavigation/TopNavigation';

class PrivacyPages extends Component {
    componentDidMount() {
        window.scroll(0,0);
    }
    render() {
        return (
           <Fragment>
                 <TopNavigation title="Privacy Policy"></TopNavigation>
               <PageTop pageTitle="Privacy Policy"></PageTop>
              <PrivacyPolicy></PrivacyPolicy>
               <Footer></Footer>
           </Fragment>
        );
    }
}

export default PrivacyPages;