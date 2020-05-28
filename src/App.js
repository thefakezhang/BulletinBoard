import React, { Component } from "react";
import logo from './logo.svg';
import './App.css';
import Bulletin from './Components/Bulletin';
import Main from "./Components/Main";
import HomePage from './Components/HomePage';
import Progress from './Components/Progress';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import axios from 'axios';

class App extends Component {
  state = {
    requests: []
  };

  componentDidMount() {
    axios
      .get('https://jsonplaceholder.typicode.com/todos?_limit=10')
      .then(res => this.setState({ requests: res.data }));
  }

  // Toggle Complete
  markComplete = id => {
    this.setState({
      requests: this.state.requests.map(request => {
        if (request.id === id) {
          request.completed = !request.completed;
        }
        return request;
      })
    });
  };

render() {
  return (
  	<Router>
	    <div className="App">
	      <Main /> 
	      <Link to = "/home">Home</Link>
	      <Link to = "/progress">Progress</Link>
	      <Progress /> 
	    </div>
    </Router>
  );
}
}

export default App;
