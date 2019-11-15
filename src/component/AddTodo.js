import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import Button from './common/Button';
import Input from './common/Input';

class AddTodo extends Component {
  state = {
    text: 'Add',
    title: '',
  };

  onChange = e => this.setState({ [e.target.name]: e.target.value });

  onClick = e => {
    e.preventDefault();
    const { addTodo } = this.props;
    const { title } = this.state;
    addTodo(title);
    this.setState({ title: '' });
  };

  render() {
    const { text, title } = this.state;
    return (
      <div className="row-wrapper">
        <Input value={title} onChange={this.onChange} />
        <Button onClick={this.onClick} myClass="btn-primary">
          {text}
        </Button>
      </div>
    );
  }
}

// PropTypes
AddTodo.propTypes = {
  addTodo: PropTypes.func.isRequired,
};

export default AddTodo;
