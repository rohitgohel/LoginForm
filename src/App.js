import React, { Component } from 'react';
import './App.css';

import PersonList from './component/PersonList'
import PersonInput from './component/PersonInput';

class App extends Component {
  render() {
    return (
      <div className="App">
        
        <PersonInput />
        <PersonList />
      </div>
    );
  }
}

export default App;
