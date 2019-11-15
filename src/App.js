import React, { Component } from 'react';

class App extends Component {
  state = {
    text: 'This is a to do app',
  };

  render() {
    const { text } = this.state;
    return (
      <h1>{text}</h1>
    );
  }
}

export default App;
