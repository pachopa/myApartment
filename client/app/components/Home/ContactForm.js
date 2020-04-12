import React from 'react';
import axios from 'axios';
import qs from 'qs';

class ContactForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      lName: 'a',
      fName: 'b',
      phone: '778',
      email: 'd@e.com',
      address: 'f',
      suiteNum: '3',
      author_type: '1',
      apart_id: '1',
      apart_building: '1',
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    axios.post("http://localhost/myApartment/contactInfo.php", qs.stringify(this.state))

      .then((response) => {
        console.log("chris", response);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    return (
      <div className="App">
        <form id="contact-form" onSubmit={this.handleSubmit.bind(this)} method="POST">
          <div className="form-group">
            <label htmlFor="lname">Name</label>
            <input type="text" className="form-control" id="lname" value={this.state.name} onChange={this.onNameChange.bind(this)} />
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputEmail1">Email address</label>
            <input type="email" className="form-control" id="email" aria-describedby="emailHelp" value={this.state.email} onChange={this.onEmailChange.bind(this)} />
          </div>

          <button type="submit" className="btn btn-primary">Submit</button>
        </form>
      </div>
    );
  }

  onNameChange(event) {
    this.setState({ lname: event.target.value })
  }

  onEmailChange(event) {
    this.setState({ email: event.target.value })
  }

}

export default ContactForm;