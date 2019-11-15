import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getTodos, deleteTodo, checkTodo } from '../../redux/actions';
import TodoItem from './TodoItem';
import HomeButton from './HomeButton';

class Todos extends Component {
  componentDidMount() {
    const { onGetTodos } = this.props;
    onGetTodos();
  }

  markComplete = id => {
    const { onMarkComplete } = this.props;
    onMarkComplete(id);
  };

  delTodo = id => {
    const { onDeleteTodo } = this.props;
    onDeleteTodo(id);
  };

  render() {
    const { todos } = this.props;
    return [
      todos.map(todo => (
        <TodoItem
          key={todo.id}
          todo={todo}
          markComplete={this.markComplete}
          delTodo={this.delTodo}
        />
      )),
      <HomeButton />,
    ];
  }
}

const mapStateToProps = ({ todos }) => ({
  todos,
});

const mapDispatchToProps = dispatch => ({
  onGetTodos: () => dispatch(getTodos()),
  onDeleteTodo: id => dispatch(deleteTodo(id)),
  onMarkComplete: id => dispatch(checkTodo(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Todos);
