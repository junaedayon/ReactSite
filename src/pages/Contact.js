import React, { Component, Fragment } from 'react';
import ContactForm from '../components/ContactSection/ContactForm';
import Footer from '../components/Footer/Footer';
import PageTop from '../components/PageTop/PageTop';
import TopNavigation from '../components/TopNavigation/TopNavigation';

class Contact extends Component {
    componentDidMount() {
        window.scroll(0,0);
    }
    render() {
        return (
            <Fragment>
                <TopNavigation title="Contact"></TopNavigation>
                <PageTop pageTitle="Contact Me"></PageTop>
                <ContactForm></ContactForm>
                <Footer></Footer>
            </Fragment>
        );
    }
}

export default Contact;