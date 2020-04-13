import React, { Component } from "react";
import axios from 'axios';
import qs from 'qs';


/* 
  to do 
  1. 게시판 타이틀 시간 글쓴이 표시
  2. 게시판에 들어갔을때 컨텐츠 보이게끔
  3. 유저 로그인 로그아웃
  4. 

*/

class ForumPosting extends Component {
  constructor(props) {
    super(props);

    this.state = {
      board_category: '1',
      board_type: '1',
      title: 'chris',
      content: 'df',
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

