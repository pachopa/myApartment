import React, { Component } from "react";
import "whatwg-fetch";
import {
  Link,
  BrowserRouter,
  Switch,
  Route,
  HashRouter,
} from "react-router-dom";

// import App from '../App/App'
import NotFound from '../App/NotFound';
import Home from './Home';
import ContactForm from './ContactForm';

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
              {/* <Route path="/contactform" component={ContactForm} /> */}
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