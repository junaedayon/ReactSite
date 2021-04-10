import React, { Component, Fragment } from 'react';
import {Navbar , Nav , NavDropdown } from "react-bootstrap";
import whiteLogo from '../../asset/image/navlogowhite.svg'
import scrollLogo from '../../asset/image/navlogoScroll.svg'
import  "../../asset/css/custom.css"
import  "../../asset/css/bootstrap.min.css"
import {NavLink} from 'react-router-dom'



class TopNavigation extends Component {
    constructor(props){
        super();
        this.state={
            navBarTitle:"navTitle",
            navBarLogo:[whiteLogo],
            navBarVarient: "dark",
            navBack:"navBarBack",
            navItemColor:"navItem",
            pageTitle: props.title
        }
    }

    onScroll=()=>{
        if(window.scrollY > 100) {
            this.setState({navBarVarient: "light" ,navBarTitle: "navTitleScroll" , navBarLogo: [scrollLogo], navBack:"navBarBackScroll" , navItemColor: "navItemScroll"})

        } else if (window.scrollY < 100) {
            this.setState({navBarVarient: "dark" ,navBarTitle: "navTitle" , navBarLogo: [whiteLogo] , navBack:"navBarBack" , navItemColor: "navItem"})


        }
    }

    componentDidMount(){
        window.addEventListener('scroll' , this.onScroll)
    }




    render() {
        return (
            <Fragment>
                <title>{this.state.pageTitle}</title>
            <Navbar variant={this.state.navBarVarient} className={this.state.navBack} fixed="top" collapseOnSelect expand="lg"  >
            <Navbar.Brand className={this.state.navBarTitle}><NavLink className={this.state.navBarTitle} to="/"><img src={this.state.navBarLogo}></img> HeHe Boy</NavLink></Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="mr-auto">
              
              </Nav>
              <Nav>
                
             <Nav.Link>   < NavLink exact activeStyle={{color: '#0073E6'}} className={this.state.navItemColor} to="/">HOME</NavLink> </Nav.Link>
             <Nav.Link> <NavLink exact activeStyle={{color: '#0073E6'}} className={this.state.navItemColor} to="/services">SERVICES</NavLink></Nav.Link>
             <Nav.Link>  <NavLink exact activeStyle={{color: '#0073E6'}} className={this.state.navItemColor} to="/courses">COURSES</NavLink> </Nav.Link>
             <Nav.Link>  <NavLink exact activeStyle={{color: '#0073E6'}} className={this.state.navItemColor} to="/portfoilo">PORTFOILO</NavLink> </Nav.Link>
             <Nav.Link>  <NavLink exact activeStyle={{color: '#0073E6'}} className={this.state.navItemColor} to="/contact">CONTACT</NavLink> </Nav.Link>
             <Nav.Link> <NavLink exact activeStyle={{color: '#0073E6'}} className={this.state.navItemColor} to="/about">ABOUT</NavLink> </Nav.Link>


                
              </Nav>
            </Navbar.Collapse>
          </Navbar>

            </Fragment>
                
            
        );
    }
}

export default TopNavigation;