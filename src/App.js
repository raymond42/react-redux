import React, { Component } from 'react';
import axios from 'axios';
import AddTodo from './component/AddTodo';
import Todos from './component/Todos';

const getUrl = 'https://jsonplaceholder.typicode.com/todos?_limit=8';
const deleteUrl = 'https://jsonplaceholder.typicode.com/todos/';
const postUrl = 'https://jsonplaceholder.typicode.com/todos';
class App extends Component {
  state = {
    todos: [],
  };

  componentDidMount() {
    axios.get(getUrl).then(res => this.setState({ todos: res.data }));
  }

  addTodo = title => {
    const { todos } = this.state;
    axios
      .post(postUrl, {
        title,
        completed: false,
      })
      .then(res => this.setState({ todos: [...todos, res.data] }));
  };

  markComplete = id => {
    const { todos } = this.state;
    this.setState({
      todos: todos.map(todo => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      }),
    });
  };

  delTodo = id => {
    const { todos } = this.state;
    axios
      .delete(`${deleteUrl}${id}`)
      .then(() => this.setState({ todos: [...todos.filter(todo => todo.id !== id)] }));
  };

  render() {
    const { todos } = this.state;
    return (
      <div className="column-wrapper">
        <AddTodo addTodo={this.addTodo} />
        <Todos todos={todos} markComplete={this.markComplete} delTodo={this.delTodo} />
      </div>
    );
  }
}

export default App;
