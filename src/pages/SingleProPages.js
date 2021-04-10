import React, { Component, Fragment } from 'react';
import Footer from '../components/Footer/Footer';
import PageTop from '../components/PageTop/PageTop';
import SingleProject from '../components/SingleProject/SingleProject';
import TopNavigation from '../components/TopNavigation/TopNavigation';

class SingleProPages extends Component {

    constructor({match}) {
        super();
        this.state={
            projectPassedID:match.params.projectID,
            projectName:match.params.projectName

        
        }
    }


    componentDidMount() {
        window.scroll(0,0);
    }
    render() {
        return (
           <Fragment>
                 <TopNavigation title="Project"></TopNavigation>
               <PageTop pageTitle={this.state.projectName}></PageTop>
               <SingleProject id={this.state.projectPassedID}></SingleProject>
               <Footer></Footer>

           </Fragment>
        );
    }
}

export default SingleProPages;