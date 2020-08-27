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
    switch (action.type) {
        case 'SEARCH_GIF':
        return action.payload;
        default:
            return state
    }
}

const favoriteGifs = (state=[], action) => {
    switch (action.type) {
        case 'SET_FAVORITES':
        return action.payload;
        default:
            return state
    }
}


function* fetchSearchResults(action) {

    try{
        let response = yield axios.get(`/api/search/${action.payload.search}`);
        yield put({type: 'SEARCH_GIF', payload: [response.data.data[0].images.original, response.data.data[1].images.original, 
            response.data.data[2].images.original, response.data.data[3].images.original, response.data.data[4].images.original]})
    } catch(err) {
        console.log('error in fetchSearchResults', err)
    }
}

function* fetchFavorites() {
    try{
        let response = yield axios.get('/api/favorite')
        console.log(response.data);
        //send to redux
        yield put({type: 'SET_FAVORITES', payload: response.data})
    } catch(err) {
        console.log('error in fetchFavorites', err)
    }
}

function* setCategory(action) {
    try {
        let favId = action.payload.id
        yield axios.put(`/api/favorite/${favId}`, action.payload)

    } catch (err) {
        console.log('error in set category', err);
    }
}



function* watcherSaga() {
    yield takeEvery('FETCH_GIFS', fetchSearchResults)
    yield takeEvery('FETCH_FAVORITES', fetchFavorites)
    yield takeEvery('ADD_CATEGORY', setCategory)
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
