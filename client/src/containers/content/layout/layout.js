import React, { Component } from "react";
import {
  Nav, Footer, Sidedrawer,
} from '../../../components';

import './style.css';

/* WRAPS PAGES 
- uses screen size to determine what to render
in regards to navigation */
class Layout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isMobile: true
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
  render() {
    const isMobile = this.state.isMobile;
    return (
      <div>
        <div>

          {isMobile ? (
            <div>
              <Nav />
              <div className='under-nav'>
                {this.props.children}
              </div>
              <Footer />
            </div>
          ) : (
              <div>
                <div>
                  <Sidedrawer />
                  <div className='under-nav'>
                    {this.props.children}
                  </div>
                  <Footer />
                </div>
              </div>
            )}

        </div>

      </div>
    );
  }
}

export default Layout;