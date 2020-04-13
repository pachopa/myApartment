import React, { Component } from "react";
import axios from 'axios';
import qs from 'qs';

class ForumPosting extends Component {
  constructor(props) {
    super(props);

    this.state = {
      board_category: '1',
      board_type: '1',
      title: 'dasdfasfdasf',
      content: 'dasdfasdfsafsa',
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    axios.post("http://localhost/myApartment/forum.php", qs.stringify(this.state))

      .then((response) => {
        console.log("chris", response);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    return (
      <div className="forummPosting">
        <form id="fourmPostingId" onSubmit={this.handleSubmit.bind(this)} method="POST">
          <div className="forumGroup">
            <label htmlFor="fourmTitle">Title</label>
            <input type="text" className="forum-control" id="forumTitle" value={this.state.title} onChange={this.onTitleChange.bind(this)} />
          </div>
          <div className="forumGroup">
            <label htmlFor="forumContent">forumContent</label>
            <input type="text" className="forum-control" id="forumContent" value={this.state.content} onChange={this.onContentChange.bind(this)} />
          </div>
          <button type="submit" className="btn btn-primary">Submit</button>
        </form>
      </div>
    );
  }

  onTitleChange(event) {
    this.setState({ title: event.target.value })
  }

  onContentChange(event) {
    this.setState({ content: event.target.value })
  }
}

export default ForumPosting;

