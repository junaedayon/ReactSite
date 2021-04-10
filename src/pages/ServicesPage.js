import React, { Component, Fragment } from 'react';
import PageTop from '../components/PageTop/PageTop';
import TopNavigation from '../components/TopNavigation/TopNavigation';
import Services from '../components/Services/Services';
import ContactForm from '../components/ContactSection/ContactForm';
import Footer from '../components/Footer/Footer';


class ServicesPage extends Component {
    componentDidMount() {
        window.scroll(0,0);
    }
    render() {
        return (
            <Fragment>
                <TopNavigation title="Services"></TopNavigation>
                <PageTop pageTitle="My Services"></PageTop>
                <Services></Services>
                <ContactForm></ContactForm>
                <Footer></Footer>
            </Fragment>
        );
    }
}

export default ServicesPage;