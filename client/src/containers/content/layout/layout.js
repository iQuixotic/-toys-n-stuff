import React, { Component } from "react";
import {
  Nav, Footer, Sidedrawer,
  Burger,
  BackDrop,
} from '../../../components';

import './style.css';

/* WRAPS PAGES 
- uses screen size to determine what to render
in regards to navigation */
class Layout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isMobile: true,
      sideDrawerOpen: false
    };

    this.updatePredicate = this.updatePredicate.bind(this);
  }
  componentDidMount() {
    this.updatePredicate();
    window.addEventListener("resize", this.updatePredicate);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updatePredicate);
  }

  updatePredicate() {
    this.setState({ isMobile: window.innerWidth > 600 });
  }

  sideDrawerToggle = () => {
    let toggle = !this.state.sideDrawerOpen
    this.setState({ sideDrawerOpen: toggle })
    console.log(this.state.sideDrawerOpen)
  }

  render() {
    const isMobile = this.state.isMobile;
    return (

            <div>
              {isMobile ? 
              <Nav /> : 
                (!this.state.sideDrawerOpen ?
                  
                <div className='hamburger' ><Burger size='4x' onClick={this.sideDrawerToggle}/></div>:
                <div onClick={this.sideDrawerToggle}><BackDrop/><Sidedrawer /></div>
                            
                )
              }
              <div className='under-nav'>
                {this.props.children}
              </div>
              <div className='above-footer'>
                <Footer />
              </div>
            </div>
          
    );
  }
}

export default Layout;