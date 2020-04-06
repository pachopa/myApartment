import React, { Component } from "react";
import "whatwg-fetch";
import {
  Link,
  BrowserRouter,
  Switch,
  Route
} from "react-router-dom";


// import App from '../App/App'
import NotFound from '../App/NotFound';
import Home from './Home';
import Test from './Test';

import HelloWorld from '../HelloWorld/HelloWorld';


class App extends Component {
  constructor(props) {
    super(props);

    // this.state = {
    //   error: null,
    //   users: []
    // };

  }

  // componentDidMount() {
  //   fetch("http://localhost/myApartment/phpinfo.php", {
  //     headers: {
  //       'Accept': 'application/json'
  //     }
  //   })
  //     .then(res => res.json())
  //     .then(
  //       (result) => {
  //         this.setState({
  //           users: [result]
  //         });

  //       },
  //       (error) => {
  //         this.setState({ error });
  //       }

  //     );

  // }

  render() {
    // console.log(this.state.users, "chris");
    return (
      <div>


        <BrowserRouter>
          <div>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/test" component={Test} />
              <Route path="/helloworld" component={HelloWorld} />
              <Route component={NotFound} />
            </Switch>
            <Link to="/test">test</Link>
          </div>

        </BrowserRouter>
        <Test />
        <p className="mainText">JUST React</p>
        {/* <button onClick={this.getPHP}>load</button> */}
        <h1> Users </h1>
        {/* {this.state.users.map((user) => (

          < div key={user.id} > {user.lastName} {user.firstName} {user.phone} {user.email}</div>
        ))
        } */}



        <h1> contact form </h1>

        <p>Contact Me</p>
        <div>
          <form action="/phpinfo.php">
            <label>First Name</label>
            <input type="text" id="fname" name="firstname" placeholder="Your name.." />
            <label>Last Name</label>
            <input type="text" id="lname" name="lastname" placeholder="Your last name.." />

            <label>Email</label>
            <input type="email" id="email" name="email" placeholder="Your email" />

            <label>Subject</label>
            <textarea id="subject" name="subject" placeholder="Write something.."></textarea>
            <input type="submit" value="Submit" />
          </form>
        </div>
      </div>
    );
  }
}

export default App;