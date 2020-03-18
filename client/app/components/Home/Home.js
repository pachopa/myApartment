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
      headers : { 
      'Accept': 'application/json'
      }
    })
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            users: result
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

  // getPHP() {
  //   var formData = new FormData();
  //   formData.append("content", "test2");
  //   fetch(`http://localhost/myApartment/phpinfo.php`, {
  //     method: "POST",
  //     headers: {},
  //     body: formData
  //   })
  //     .then(res => res.json())
  //     .then(res => {
  //       console.log("response");
  //     });
  // }
  render() {
    console.log(this.state);
    return (
      <div>
        <p className="mainText">JUST React</p>
        {/* <button onClick={this.getPHP}>load</button> */}
        <h1> Users </h1>
        {this.state.users.map(user => (
          <div key={user.id}>{user.last_name} </div>
        ))}
      </div>
    );
  }
}

export default Home;
