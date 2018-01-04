import React, { Component } from 'react';
import './css/App.css';

import Header from './Components/Header/Header';
import About from './Components/About';
import Footer from './Components/Footer/Footer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <header className="App-header">
          <h1>Bards against Bumanity</h1>
        </header>
        <div className="container card-cont">
          <About />
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
