import React, { Component } from "react";
import "whatwg-fetch";
import {
  Link,
  BrowserRouter,
  Switch,
  Route,
  HashRouter,
} from "react-router-dom";

import NotFound from '../App/NotFound';
import Home from './Home';
import ContactForm from './ContactForm';
import Fourm from './Fourm';
import './styles.scss';

class App extends Component {
  constructor(props) {
    super(props);

  }

  render() {
    return (
      <div>

        <HashRouter>
          <div>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/contactform" component={ContactForm} />
              <Route exact path="/fourm" component={Fourm} />
              <Route component={NotFound} />
            </Switch>
            {/* <Link to="/contactform">test</Link> */}
          </div>
        </HashRouter>

      </div>
    );
  }
}

export default App;