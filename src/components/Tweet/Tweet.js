import React, { Component } from 'react';
import './Tweet.css';

import like from '../../like.svg';

export default class extends Component {
  render(){
    const { tweet, } = this.props
    return (
      <li className="tweet">
        <strong>{tweet.author}</strong>
        <p>{tweet.content}</p>
        <button type="button">
          <img src={like} alt="Like" />
          {tweet.likes}
        </button>
      </li>
    );
  }
}