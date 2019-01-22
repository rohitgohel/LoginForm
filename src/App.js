import React, { Component } from 'react';
import './App.css';
// import Signup from './component/signup';
import PersonList from './component/PersonList'
import PersonInput from './component/PersonInput';

export default class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <Signup /> */}
        <PersonInput />
        <PersonList />
      </div>
    );
  }
}

