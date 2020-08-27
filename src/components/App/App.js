import React, { Component } from 'react';
import Search from '../SearchGIF/SearchGIF.js'
import Favorites from '../Favorites/Favorites.js'


class App extends Component {

  render() {
    return (
      <div>
        <h1>Giphy Search!</h1>
        <Search />
        <Favorites />
      </div>

    );
  }
  
}

export default App;
