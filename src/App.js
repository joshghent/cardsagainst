import React, { Component } from 'react';
import './css/App.css';
import {
  BrowserRouter as Router,
  Route,
	Link,
	Switch
} from 'react-router-dom';

import Home from './Components/Pages/Home';
import About from './Components/Pages/About';
import Contact from './Components/Pages/Contact';

import Game from './Components/Game/Game';
import GamesList from './Components/Game/GamesList';

import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';

class App extends Component {
  render() {
    return (
      <div className="App">

        <Footer />
      </div>
    );
  }
}

const Routes = () => (
	<Router>
		<div className="App">
			<Header />
			<header className="App-header">
				<h1>Bards against Bumanity</h1>
				<ul>
					<li><Link to="/">Home</Link></li>
					<li><Link to="/about">About</Link></li>
					<li><Link to="/contact">Contact</Link></li>
				</ul>
			</header>

			<hr/>

			<Switch>
				<Route exact path="/" component={Home} />
				<Route path="/about" component={About} />
				<Route path="/contact" component={Contact} />
				<Route path="/play" component={Games} />
				<Route component={NoMatch} />
			</Switch>
		</div>
	</Router>
);

const Games = () =>(
	// This will be a list of cards with each of the games.
	// It may be worth moving this to an external file.
	<Switch>
		<Route exact path="/play" component={GamesList}/>
		<Route path="/play/:id" component={Game}/>
	</Switch>
);

const NoMatch = ({ location }) => (
	<div>
		<h3>Sorry we couldn't find the requested page - <code>{location.pathname}</code></h3>
	</div>
);

export default Routes;
