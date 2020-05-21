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
    // console.log(this.state.title[0]);
    // console.log(this.state.title.map((item) => {
    //   return item.id;
    // }));

    const postingList = this.state.title.map((posting) => {
      return <ForumPostingList key={posting.id} id={posting.id} title={posting.title} content={posting.content} />
    });
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




