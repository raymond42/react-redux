import React, { Component } from 'react';
import Button from './component/common/Button';
import Input from './component/common/Input';

class App extends Component {
  state = {
    text: 'This is a to do app',
  };

  render() {
    const { text } = this.state;
    return (
      <div>
        <Input />
        <Button type="submit" myClass="btn-primary">
          {text}
        </Button>
      </div>
    );
  }
}

export default App;
