import React, { Component } from "react";
import Axios from "axios";
import qs from 'qs';

class ForumPost extends Component {
  constructor(props) {
    super(props);
    this.state = {
      //get url id
      postingId: this.props.match.params.id, 
      postingData: ''
    };
  }

  componentDidMount() {
    Axios.post("http://localhost/myapartment/forum.php", qs.stringify(this.state))

      .then((response) => {
        console.log(response.data, 'response', response, );
        this.setState({
          postingData: response.data
        })
      })
      .catch((e) => {
        console.log('e:', e);
      });
  }
  

  render() {
    // console.log('this.state.postingData:', this.state.postingData)
    // this.state.postingData.map((posting) => {
    //   console.log('posting.id:', posting.id)
    // })
    return (
      <div>
        <div>test</div>
      </div>
    );
  }
}

export default ForumPost;