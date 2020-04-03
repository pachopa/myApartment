import React, { Component } from "react";
import "whatwg-fetch";

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      error: null,
      users: []
    };
    // this.getPHP = this.getPHP.bind(this);
  }

  componentDidMount() {
    fetch("http://localhost/myApartment/phpinfo.php", {
      headers: {
        'Accept': 'application/json'
      }
    })
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            users: [result]
          });

        },
        (error) => {
          this.setState({ error });
        }

        // res => {
        // this.setState({
        //   users: users
        // });
      );

  }

  render() {
    console.log(this.state.users, "chris");
    return (
      <div>
        <p className="mainText">JUST React</p>
        {/* <button onClick={this.getPHP}>load</button> */}
        <h1> Users </h1>
        {this.state.users.map((user) => (

          < div key={user.id} > {user.title} </div>
        ))
        }
      </div>
    );
  }
}

export default Home;