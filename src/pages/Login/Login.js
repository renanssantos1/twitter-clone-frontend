import React, { Component } from 'react';

import './Login.css';
import twitterLogo from '../../twitter.svg';
export default class Login extends Component {
  state = {};

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();

    const { username } = this.state;

    if(username === undefined){
      return;
    }

    localStorage.setItem('@GoTwitter:username', username);

    this.props.history.push('/timeline');    
  };

  render() {
    return (
      <div className="login-wrapper">
        <img src={twitterLogo} alt="GoTwitter" />
        <form onSubmit={this.handleSubmit}>
          <input
            name="username"
            placeholder="Nome do usuario"
            onChange={this.handleChange} />
          <button type="submit">Entrar</button>
        </form>
      </div>
    );
  }
}