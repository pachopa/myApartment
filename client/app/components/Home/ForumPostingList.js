import React, { Component } from "react";
import { Link } from 'react-router-dom';


class ForumPostingList extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    return (
      <div>
        <div className="forum-item active">
          <div className="row">
            <div className="col-md-9">
              <div className="forum-icon">
                <i className="fa fa-shield"></i>
              </div>
              <a href="forum_post.html" className="forum-item-title">{this.props.title}</a>
              <div className="forum-item-title">  {this.props.content}  </div>

              <Link to={`/forum/${this.props.id}`}>test b</Link>
              {/* <div className="forum-sub-title">Talk about sports, entertainment, music, movies, your favorite color, talk about enything.</div> */}
            </div>
            <div className="col-md-1 forum-info">
              <span className="views-number">
                1216
              </span>
              <div>
                <small>Views</small>
              </div>
            </div>
            <div className="col-md-1 forum-info">
              <span className="views-number">
                368
              </span>
              <div>
                <small>Topics</small>
              </div>
            </div>
            <div className="col-md-1 forum-info">
              <span className="views-number">
                140
              </span>
              <div>
                <small>Posts</small>
              </div>
            </div>
          </div>
        </div>

      </div>
    );
  }
}

export default ForumPostingList;