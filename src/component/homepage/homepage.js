/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';

export default class Homepage extends Component {
  onClick = () => {
    window.location.assign('/add');
  };

  render() {
    return (
      <div>
        <h1>WELCOME TO TODO APP</h1>
        <button type="submit" onClick={this.onClick} className="start-button">
          CREATE
        </button>
      </div>
    );
  }
}
