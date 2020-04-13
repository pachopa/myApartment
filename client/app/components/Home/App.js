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
import Forum from './Forum';
import ForumPosting from './ForumPosting';

import '../../styles/styles.scss';


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
              <Route exact path="/forum" component={Forum} />
              <Route exact path="/forumposting" component={ForumPosting} />
              <Route component={NotFound} />
            </Switch>
            <Link to="/contactform">test</Link>
          </div>
        </HashRouter>

      </div>
    );
  }
}

export default App;