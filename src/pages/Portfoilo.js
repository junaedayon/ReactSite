import React, { Component, Fragment } from 'react';
import AllProject from '../components/AllProject/AllProject';
import Footer from '../components/Footer/Footer';
import PageTop from '../components/PageTop/PageTop';
import TopNavigation from '../components/TopNavigation/TopNavigation';

class Portfoilo extends Component {
    componentDidMount() {
        window.scroll(0,0);
    }
    render() {
        return (
      <Fragment>
          <TopNavigation title="Portfoilo"></TopNavigation>
          <PageTop pageTitle="All Project"></PageTop>
          <AllProject></AllProject>
          <Footer></Footer>
      </Fragment>
        );
    }
}

export default Portfoilo;