import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react'
import FlipCoin from './components/FlipCoin.js'
import Action from './components/Action.js';


class App extends Component {
  constructor() {
    super();
    this.state = {
      status: true,
      headFlip: 0,
      tailFlip: 0,
    }
  }
  resultFlip = (status) => {
    if (status) {
      this.setState({
        status: true,
        headFlip: this.state.headFlip + 1,
      })
    }
    else {
      this.setState({
        status: false,
        tailFlip: this.state.tailFlip + 1,
      })
    }
  }

  render() {
    return (
      <div className="App" >
        <div>
          <h1>Let's flip a coin!</h1>
          <FlipCoin statusCoin={this.state.status}></FlipCoin>
          <Action result={this.resultFlip} statusCoin={this.state.status} headFlip={this.state.headFlip} tailFlip={this.state.tailFlip}></Action>
        </div>
      </div>
    );
  }
}
export default App;
