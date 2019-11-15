import React, { Component } from 'react';
import Checkbox from '../../app/common/Checkbox';
import Button from '../../app/common/Button';

class TodoItem extends Component {
  constructor(props) {
    super(props);
    this.props = props;
  }

  completedStyle() {
    const { todo } = this.props;
    return {
      fontWeight: todo.completed && 'bold',
      color: todo.completed && '#aaa',
      textDecoration: todo.completed ? 'line-through' : 'none',
    };
  }

  render() {
    const { todo, markComplete, delTodo } = this.props;
    const { id, title, completed } = todo;
    this.markComplete = markComplete.bind(this, id);
    this.delTodo = delTodo.bind(this, id);

    return (
      <div className="items">
        <div className="row-items">
          <Checkbox markComplete={this.markComplete} checked={completed} />
          <p style={this.completedStyle()}>{title}</p>
        </div>
        <Button type="submit" onClick={this.delTodo} myClass="btn-danger">
          <i className="fas fa-trash-alt" />
        </Button>
      </div>
    );
  }
}

export default TodoItem;
