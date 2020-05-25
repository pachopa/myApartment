import React, { Component } from "react";
import Axios from "axios";
import qs from 'qs';

class ForumPost extends Component {
  constructor(props) {
    super(props);
    this.state = {
      //get url id
      postingId: this.props.match.params.id, 
      postingData: []
    };
  }

  componentDidMount() {
    Axios.post("http://localhost/myapartment/forum.php", qs.stringify(this.state))

      .then((response) => {
        this.setState({
          postingData: response.data
        })
      })
      .catch((e) => {
        console.log('e:', e);
      });
  }
  
  render() {
    const posting = this.state.postingData.map((posting) => {
      return <div key={posting.id}> {posting.id}, {posting.title}, {posting.content}</div>
    })
    return (
      <div>
        {posting}
      </div>
    );
  }
}

export default ForumPost;