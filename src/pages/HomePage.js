import React, { Component, Fragment } from 'react';
import Analaysis from '../components/Analaysis/Analaysis';
import ClientPreview from '../components/ClientPreview/ClientPreview';
import Courses from '../components/Courses/Courses';
import Footer from '../components/Footer/Footer';
import RecentProject from '../components/RecentPoject/RecentProject';
import Services from '../components/Services/Services';
import Summary from '../components/Summary/Summary';
import TopBanner from '../components/TopBanner/TopBanner';
import TopNavigation from '../components/TopNavigation/TopNavigation';
import Video from '../components/Video/Video';

class HomePage extends Component {
    componentDidMount() {
        window.scroll(0,0);
    }
    render() {
        return (
            <Fragment>
                    <TopNavigation title="Home"></TopNavigation>
                    <TopBanner></TopBanner>
                    <Services></Services>
                    <Analaysis></Analaysis>
                    <Summary></Summary>
                    <RecentProject></RecentProject>
                    <Courses></Courses>
                    <Video></Video>
                    <ClientPreview></ClientPreview>
                    <Footer></Footer>
            </Fragment>
        );
    }
}

export default HomePage;