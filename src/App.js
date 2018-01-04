import React, { Component } from 'react';
import Header from './Components/Header/Header';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <header className="App-header">
          <h1 className="App-title">Bards against Bumanity</h1>
        </header>
      </div>
    );
  }
}

export default App;
