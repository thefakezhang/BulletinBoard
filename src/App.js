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
      .get('https://my-json-server.typicode.com/thefakezhang/BulletinBoard/rows')
      .then(res => {
      	const requests = res.data;
      	console.log(res);
      	this.setState({ requests });
      }
       );
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
        <li><Link to = "/">First Page</Link></li>
        <li><Link to = "/home">BB</Link></li>    
	      <li><Link to = "/progress">Progress</Link></li>
        <li><Link to = "/roles">Roles</Link></li>
        <li><Link to = "/walkthrough">Walkthrough</Link></li>
        <li><Link to = "/id/10">ID-10</Link></li>
        <li><Link to = "/user/test">Test's user page</Link></li>
	    </div>
    </Router>
  );
}
}

export default App;
