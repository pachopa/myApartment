import React from 'react';
import axios from 'axios';
import qs from 'qs';

class ContactForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      name: 'h',
      email: 'h@h.com',
      message: 'h'
    }
  }

  handleSubmit(e) {
    e.preventDefault();

    const params = {
      name: "User",
      startTime: "2:00PM",
      endTime: "3:00PM",
      status: "pending",
      invitation: "test",
    };

    axios.post("http://localhost/myApartment/contactInfo.php", qs.stringify(this.state))

      .then((response) => {
        console.log("chris", response);
      })
      .catch((error) => {
        console.log(error);
      });


    // let params = new URLSearchParams();
    // params.append('email', 'test');
    // params.append('url', 'test');

    // this.$http.post(
    //   'http://localhost/myApartment/contactInfo.php', params
    // ).then((response) => {
    //   if (response.data.message === "success") this.$router.push('thankyou');
    // })
    //   .catch((error) => console.log(error));
    // axios({
    //   method: "POST",
    //   url: "http://localhost/myApartment/contactInfo.php",
    //   data: params,
    //   headers: {
    //     'content-type': 'application/json',
    //   },
    // }).then((response) => {
    //   if (response.data.status === 'success') {
    //     console.log("Message Sent.");
    //     this.resetForm()
    //   } else if (response.data.status === 'fail') {
    //     console.log("Message failed to send.")
    //   } else {
    //     console.log("failed", this.state, response.data.status);
    //   }
    // })
  }

  // resetForm() {

  //   this.setState({ name: '', email: '', message: '' })
  // }

  render() {
    return (
      <div className="App">
        <form id="contact-form" onSubmit={this.handleSubmit.bind(this)} method="POST">
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input type="text" className="form-control" id="name" value={this.state.name} onChange={this.onNameChange.bind(this)} />
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputEmail1">Email address</label>
            <input type="email" className="form-control" id="email" aria-describedby="emailHelp" value={this.state.email} onChange={this.onEmailChange.bind(this)} />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea className="form-control" rows="5" id="message" value={this.state.message} onChange={this.onMessageChange.bind(this)} />
          </div>
          <button type="submit" className="btn btn-primary">Submit</button>
        </form>
      </div>
    );
  }

  onNameChange(event) {
    this.setState({ name: event.target.value })
  }

  onEmailChange(event) {
    this.setState({ email: event.target.value })
  }

  onMessageChange(event) {
    this.setState({ message: event.target.value })
  }
}

export default ContactForm;