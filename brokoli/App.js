/*
  Created by Brigel Pineti

  Redux and React Navigation
*/

import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux';
import {createStore, applyMiddleware, combineReducers, compose} from 'redux'
import thunkMiddleware from 'redux-thunk'
import {createLogger} from 'redux-logger'
import reducer from './app/reducers'
import AppContainer from './app/containers/AppContainer'

import ProjectScreen from './app/containers/ProjectScreen'
import BookmarkScreen from './app/containers/BookmarkScreen'
import BrokoliScreen from './app/containers/BrokoliScreen'
import ProfileScreen from './app/containers/ProfileScreen'
import NotificationScreen from './app/containers/NotificationScreen'

//middleware that logs actions
const loggerMiddleware = createLogger({ predicate : (getState, action) => __DEV__});

function configureStore(initialState) {
   const enhancer = compose(
     applyMiddleware(
       thunkMiddleware, //lets us dispatch() functions
       loggerMiddleware,
      ),
   );
   return createStore(reducer, initialState, enhancer);
}

const store = configureStore({});

// TODO: pass an initial state to store



export default class App extends React.Component {
  render() {
    return (

      <Provider store={store}>

     <AppContainer />

      </Provider>
    );
  }
}


