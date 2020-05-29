import React, { Component } from 'react';
import RequestsItem from './RequestsItem';
import PropTypes from 'prop-types';

class Todos extends Component {
  render() {
    return this.props.todos.map((request) => (
      <RequestsItem key={request.id} request={request} />
    ));
  }
}

// PropTypes
Todos.propTypes = {
  todos: PropTypes.array.isRequired,
}

export default Requests;