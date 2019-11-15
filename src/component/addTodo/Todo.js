import React, { Component } from 'react';
import { connect } from 'react-redux';
import AddTodo from './AddTodo';

import { addTodo } from '../../redux/actions';

export class ToDo extends Component {
  addTodo = title => {
    const { onAddTodo, created } = this.props;
    onAddTodo(title);
    if (created) {
      window.location.assign('/todos');
    }
  };

  render() {
    return (
      <div className="column-wrapper">
        <AddTodo addTodo={this.addTodo} />
      </div>
    );
  }
}

const mapStateToProps = ({ todos, created }) => ({
  todos,
  created,
});

const mapDispatchToProps = dispatch => ({
  onAddTodo: title => dispatch(addTodo(title)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ToDo);
