import React, { Component } from 'react';
import Search from '../SearchGIF/SearchGIF.js'
import { HashRouter as Router, Route, Link } from 'react-router-dom'
import SearchGIF from '../SearchGIF/SearchGIF.js';
import Display from '../DisplayGIFs/DisplayGIFs.js'



class App extends Component {

  render() {
    return (

      <Router>
        <header>
        <div>
          <h1>Giphy Search!</h1>
        </div>
        <nav>
          <Link to="/">Search</Link>
          <Link to="/favorites" >Favorites</Link>
        </nav>
        </header>
        

        <Route exact path="/" component={Search} />
        <Route path="/favorites" component={Favorites} />

      </Router>
    );
  }

}

export default App;
