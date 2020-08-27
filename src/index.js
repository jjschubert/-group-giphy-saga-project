import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App/App';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger'
import axios from 'axios'
import createSagaMiddleware from 'redux-saga'
import {takeEvery, put} from 'redux-saga/effects'

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('react-root'));
