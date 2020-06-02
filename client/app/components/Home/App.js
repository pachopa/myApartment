import React, { Component } from "react";
import "whatwg-fetch";
import {
  Switch,
  Route,
  HashRouter,
  Router,
  useRouterHistory,
  BrowserRouter,
  Link
} from "react-router-dom";

import NotFound from '../App/NotFound';
import Home from './Home';
import ContactForm from './ContactForm';
import Forum from './Forum';
import ForumPosting from './ForumPosting';
import ForumPost from './ForumPost';
import Sidebar from './Sidebar';
import Navbar from './Navbar';
import Callback from './userAuth/Callback';
import Login from './userAuth/Login'

class App extends Component {
  constructor(props) {
    super(props);

  }
  render() {
    return (
      <div>
        <Navbar /> 
        <Sidebar />
       
        <BrowserRouter>
      
          <div>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/contactform" component={ContactForm} />
              <Route exact path="/forum" component={Forum} />
              <Route exact path="/forumposting" component={ForumPosting} />
              <Route exact path="/forum/:id" component={ForumPost} />

              <Route exact path="/login" component={Login} />
              <Route exact path="/callback" component={Callback} />

              <Route component={NotFound} />
           
      
            </Switch>
          </div>
        </BrowserRouter>

      </div>
    );
  }
}

export default App;