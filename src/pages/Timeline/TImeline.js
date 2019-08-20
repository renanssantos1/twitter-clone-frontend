import React, { Component } from 'react';
import API from '../../services/api';

import './Timeline.css';
import twitterLogo from '../../twitter.svg';

export default class Timeline extends Component {
  state = {
    newTweet : ''
  }

  handleChange = (event) => {
    this.setState({ newTweet: event.target.value });
  };

  handleNewTweet = async (event) => {
    if (event.keyCode !== 13){
      return;
    }

    const content = this.state.newTweet;
    const author = localStorage.getItem('@GoTwitter:username');
  
    await API.post('tweets', { content, author })
    
    this.setState({ newTweet : ''})
  };

  render(){
    return (
      <div className="timeline-wrapper">
        <img height={24} src={twitterLogo} alt="Gotwitter" />

        <form>
          <textarea 
            onChange={this.handleChange}
            value={this.state.newTweet}
            onKeyDown={this.handleNewTweet}
            placeholder="O que esta acontecendo?"
          />
        </form>

      </div>
    );
  }
}