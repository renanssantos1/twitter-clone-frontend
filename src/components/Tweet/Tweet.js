import React, { Component } from 'react';
import './Tweet.css';

import like from '../../like.svg';
import API from '../../services/api';

export default class extends Component {

  handleLike = async (e) => {
    const { _id }  = this.props.tweet;
    await API.post('likes/'+_id);
  };

  render(){
    const { tweet } = this.props
    return (
      <li className="tweet">
        <strong>{tweet.author}</strong>
        <p>{tweet.content}</p>
        <button type="button" onClick={this.handleLike}>
          <img src={like} alt="Like" />
          {tweet.likes}
        </button>
      </li>
    );
  }
}