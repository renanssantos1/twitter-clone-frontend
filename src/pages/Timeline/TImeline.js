import React, { Component } from 'react';
import './Timeline.css';

import twitterLogo from '../../twitter.svg';

export default class Timeline extends Component {
  state = {}

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleNewTweet = (event) => {
    if (event.keyCode !== 13){
      return;
    }

    const content = this.state.newTweet;
    const author = localStorage.getItem('@GoTwitter:username');
  };

  render(){
    return (
      <div className="timeline-wrapper">
        <img height={24} src={twitterLogo} alt="Gotwitter" />

        <form>
          <textarea 
            onChange={this.handleChange}
            onKeyDown={this.handleNewTweet}
            name="newTweet"
            placeholder="O que esta acontecendo?"
          />
        </form>

      </div>
    );
  }
}