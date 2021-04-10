import React, { Component, Fragment } from 'react';
import CourseDetails from '../components/CourseDetails/CourseDetails';
import Footer from '../components/Footer/Footer';
import PageTop from '../components/PageTop/PageTop';
import TopNavigation from '../components/TopNavigation/TopNavigation';


class CourseDetailsPage extends Component {

    constructor({match}){
        super();
        this.state={
            myCourseID:match.params.courseID,
            
            

        }
    }


   
    render() {
    
        return (
           <Fragment>
               <TopNavigation  title="courses Details"></TopNavigation>
               <CourseDetails id={this.state.myCourseID}></CourseDetails>
               <Footer></Footer>

           </Fragment>
        );
    }
}

export default CourseDetailsPage;