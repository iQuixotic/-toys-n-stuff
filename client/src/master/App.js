import React, { Component } from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import { Contact, Login, Test,
} from '../containers';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/" component={Login} />
          <Route exact path="/test" component={Test} />
        </div>
      </Router>
    );
  }
}

export default App;

