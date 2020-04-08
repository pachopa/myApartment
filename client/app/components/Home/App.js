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
import Test from './Test';

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
              <Route path="/test" component={Test} />
              <Route component={NotFound} />
            </Switch>
            <Link to="/test">test</Link>
          </div>

        </HashRouter>
        <Test />

      </div>
    );
  }
}

export default App;