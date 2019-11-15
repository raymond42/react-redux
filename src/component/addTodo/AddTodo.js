import React, { Component } from 'react';
import { connect } from 'react-redux';
import Button from '../../app/common/Button';
import Input from '../../app/common/Input';
import { addTodo } from '../../redux/actions';

class AddTodo extends Component {
  state = {
    text: 'Add',
    title: '',
  };

  onChange = e => this.setState({ [e.target.name]: e.target.value });

  onClick = e => {
    e.preventDefault();
    const { addTodo, history } = this.props;
    const { title } = this.state;
    if (title) {
      addTodo(title);
      this.setState({ title: '' });
      history.push('/todos');
    }
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

const mapStateToProps = ({ todos, created }) => ({
  todos,
  created,
});

const mapDispatchToProps = {
  addTodo,
};

export default connect(mapStateToProps, mapDispatchToProps)(AddTodo);
