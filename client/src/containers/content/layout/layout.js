import React, { Component } from "react";
import { Nav, Footer,
         } from '../../../components';

import './style.css';



class Layout extends Component {
    constructor(props) {
        super(props);
        this.state = {
          isDesktop: false 
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
        this.setState({ isDesktop: window.innerWidth > 750 });
      }
    render() {
        const isDesktop = this.state.isDesktop;
        return (
            // <div>
                 <div>
        {isDesktop ? (
          <div>I show on 1451px or higher</div>
        ) : (
          <div>I show on 1450px or lower</div>
        )}
      </div>
            //      <Nav />
            //     <div className='under-nav'>
            //         {this.props.children}
            //     </div>
            //     <Footer />
            // </div> 
        );
    }
}

export default Layout;