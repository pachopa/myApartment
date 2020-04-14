import React, { Component } from "react";

class Forum extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: [],
      content: '',
    };
  }

  componentDidMount() {
    fetch("http://localhost/myApartment/forum.php", {
      headers: {
        'Accept': 'application/json'
      }
    })
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            title: result
          });
        },
        (error) => {
          this.setState({ error });
        }
      );

  }

  render() {
    // console.log(this.state.title[0]);
    console.log(this.state.title.map((item) => {
      return item.id;
    }));
    return (
      <div>
        <div>
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="wrapper wrapper-content animated fadeInRight">

                  <div className="ibox-content m-b-sm border-bottom">
                    <div className="p-xs">
                      <div className="pull-left m-r-md">
                        <i className="fa fa-globe text-navy mid-icon"></i>
                      </div>
                      <h2>Welcome to our forum</h2>
                      <span>Feel free to choose topic you're interested in.</span>
                    </div>
                  </div>

                  <div className="ibox-content forum-container">

                    <div className="forum-title">
                      <div className="pull-right forum-desc">
                        <samll>Total posts: 320,800</samll>
                      </div>
                      <h3>General subjects</h3>
                    </div>
                    {this.state.title.map((item) => {
                      return <div className="forum-item active">
                        <div className="row">
                          <div className="col-md-9">
                            <div className="forum-icon">
                              <i className="fa fa-shield"></i>
                            </div>
                            <a href="forum_post.html" className="forum-item-title">General Discussion</a>
                            <div key={item.id} className="forum-item-title"> {item.title} {item.content}  </div>
                            <div className="forum-sub-title">Talk about sports, entertainment, music, movies, your favorite color, talk about enything.</div>
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

                    })
                    }


                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    );
  }

}

export default Forum;




