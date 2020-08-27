import React, { Component } from 'react';
import Search from '../SearchGIF/SearchGIF.js'
import Favorites from '../Favorites/Favorites.js'
import { HashRouter as Router, Route, Link } from 'react-router-dom'
import SearchGIF from '../SearchGIF/SearchGIF.js';
import Display from '../DisplayGIFs/DisplayGIFs.js'
import './App.css';



class App extends Component {

  render() {
    return (
      <div className="App">
      <Router>

        <header>
        <div>
        <h1>Giphy Search!</h1>
        <h5></h5>

        </div>
        <nav>
          <Link to="/">Search</Link>
          <Link to="/favorites" >Favorites</Link>
        </nav>
        </header>

        <Display />

        <Route exact path="/" component={Search} />
        <Route path="/favorites" component={Favorites} />

      </Router>
      
      </div>
    );
  }

}

export default App;
