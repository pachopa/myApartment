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
            <div className="col-md-1">
              <div className="forum-icon">
                <i className="fa fa-shield">user picture</i>
              </div>
            </div>
            <div className="col-md-8">

              <div>
                <Link className="postingLink" to={`/forum/${this.props.id}`}>test b</Link>
              </div>

              <div className="forum-sub-title">{this.props.content}</div>
              <div className="forum-item-title"> {this.props.date}   </div>


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
                <small>writer name will be here</small>
              </div>
            </div>
          </div>
        </div>

      </div>
    );
  }
}

export default ForumPostingList;