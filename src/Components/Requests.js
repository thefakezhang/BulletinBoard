import React, { Component } from 'react';
import Requests from './Requests';
import PropTypes from 'prop-types';

class Requests extends Component {
  render() {
    return this.props.requests.map((request) => (
      <Requests key={request.id} request={request} markComplete={this.props.markComplete} />
    ));
  }
}

// PropTypes
Requests.propTypes = {
  todos: PropTypes.array.isRequired,
  markComplete: PropTypes.func.isRequired
}

export default Todos;