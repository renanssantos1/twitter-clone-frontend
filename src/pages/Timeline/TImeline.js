import React, { Component } from 'react';
import socket from 'socket.io-client';
import API from '../../services/api';

import Tweet from '../../components/Tweet/Tweet';

import './Timeline.css';
import twitterLogo from '../../twitter.svg';

export default class Timeline extends Component {
  state = {
    newTweet: '',
    tweets: [],
  };

  async componentDidMount() {
    this.subscribe();
    const response = await API.get('tweets');

    this.setState({ tweets: response.data });
  }

  subscribe = () => {
    const io = socket('http://localhost:3000');
  
    io.on('tweet', data => {
      this.setState({ tweets: [data, ...this.state.tweets]});
    });

    io.on('like', data => {
      this.setState({ tweets: this.state.tweets.map((tweet) => {
        return tweet._id === data._id ? data : tweet;
      })});
    });
  };

  handleChange = (event) => {
    this.setState({ newTweet: event.target.value });
  };

  handleNewTweet = async (event) => {
    if (event.keyCode !== 13) {
      return;
    }

    const content = this.state.newTweet;
    const author = localStorage.getItem('@GoTwitter:username');

    await API.post('tweets', { content, author })

    this.setState({ newTweet: '' })
  };

  render() {
    const { tweets } = this.state;
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

        <ul className="tweet-list">
          {tweets.map((tweet) => {
            return (
              <Tweet key={tweet._id} tweet={tweet} />
            )
          })}
        </ul>
      </div>
    );
  }
}
