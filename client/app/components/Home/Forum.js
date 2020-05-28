import React, { Component } from "react";
import ForumPostingList from './ForumPostingList';


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
    console.log('this.state.title:', this.state.title)
    const postingList = this.state.title.map((posting) => {
      return <ForumPostingList key={posting.id} id={posting.id} title={posting.title} content={posting.content} date={posting.date} />
    });
    return (
      <div>
        <div>
          <div className="container forumContainer">
            <div className="row">
              <div className="col-lg-12">
                <div className="wrapper wrapper-content animated fadeInRight forumWrapper">

                  <div className="ibox-content m-b-sm border-bottom">
                    <div className="p-xs">
                      {/* <div className="pull-left m-r-md">
                        <i className="fa fa-globe text-navy mid-icon"></i>
                      </div> */}
                      <h2>Welcome to our forum</h2>
                      <span>Feel free to choose topic you're interested in.</span>
                    </div>
                  </div>

                  <div className="btn-group groupButton rounded-top" role="group">
                    <button type="button" className="btn"><i className="fa fa-gift fa-sm"></i> Notice</button>
                    <button type="button" className="btn"><i className="fa fa-gift fa-sm"></i> Tenant Board</button>
                    <button type="button" className="btn"><i className="fa fa-gift fa-sm"></i> Right</button>
                    <div className="input-group md-form form-sm form-2 form-inline ml-auto forumSearch">
                      <input className="form-control my-0 py-1 amber-border" type="text" placeholder="Search" aria-label="Search" />
                      <div className="input-group-append">
                        <span className="input-group-text amber lighten-3 searchIcon" id="basic-text1"><i className="fas fa-search text-grey"
                          aria-hidden="true"></i></span>
                      </div>
                    </div>
                  </div>

                  <div className="ibox-content forum-container forumContent">

                    <div className="forum-title">
                      <div className="pull-right forum-desc">
                        <samll>Total posts: 320,800</samll>
                      </div>
                      <h3>General subjects
                      <button type="button" className="btn btn-info btn-sm postingBtn"> Write </button>
                      </h3>
                    </div>
                    <div>
                      {postingList}
                    </div>

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