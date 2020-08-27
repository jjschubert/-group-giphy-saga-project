import React, { Component } from 'react';
import Search from '../SearchGIF/SearchGIF.js'
import Favorites from '../Favorites/Favorites.js'
import Display from '../DisplayGIFs/DisplayGIFs.js'


class App extends Component {

  render() {
    return (
      <div>
        <div>
        <h1>Giphy Search!</h1>
        <Search />
        <Favorites />

        </div>
  
        <Display/>
      </div>
 
    );
  }
  
}

export default App;
