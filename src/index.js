import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga';
import logger from 'redux-logger';
import { takeEvery, put } from 'redux-saga/effects';
import axios from 'axios';
import App from './components/App/App';

const searchResults = (state=[], action) => {

    return state
}

const favoriteGifs = (state=[], action) => {

    return state
}


function* fetchSearchResults() {
    try{

    } catch(err) {
        console.log('error in fetchSearchResults', err)
    }
}

function* fetchFavorites() {
    try{

    } catch(err) {
        console.log('error in fetchFavorites', err)
    }
}





function* watcherSaga() {
    yield takeEvery('FETCH_GIFS', fetchSearchResults)
    yield takeEvery('FETCH_FAVORITES', fetchFavorites)
  }
  
  const sagaMiddleware = createSagaMiddleware();
  
  const store = createStore(
    combineReducers({
        searchResults,
        favoriteGifs
    }),
    applyMiddleware(sagaMiddleware, logger)
  );
  
  sagaMiddleware.run(watcherSaga);

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('react-root'));
