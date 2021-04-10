import React, { Component, Fragment } from 'react';
import TermsAndCo from '../components/TermsAndCon/TermsAndCo';
import Footer from '../components/Footer/Footer';
import PageTop from '../components/PageTop/PageTop';
import TopNavigation from '../components/TopNavigation/TopNavigation';

class TermsPages extends Component {
    componentDidMount() {
        window.scroll(0,0);
    }
    render() {
        return (
            <Fragment>
                 <TopNavigation title="TermsAndCo"></TopNavigation>
               <PageTop pageTitle="Terms & Condition"></PageTop>
               <TermsAndCo></TermsAndCo>
               <Footer></Footer>
            </Fragment>
        );
    }
}

export default TermsPages;