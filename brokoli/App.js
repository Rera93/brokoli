/*
  Created by Brigel Pineti

  Redux and React Navigation
*/

import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { Provider } from 'react-redux';
import {createStore, applyMiddleware, combineReducers, compose} from 'redux'
import thunkMiddleware from 'redux-thunk'
import {createLogger} from 'redux-logger'
import reducer from './app/reducers'
import { Router, Scene, Actions, ActionConst, Stack } from 'react-native-router-flux'
import { StackNavigator } from 'react-navigation';
import getSlideFromRightTransition from 'react-navigation-slide-from-right-transition';


import AppContainer from './app/containers/AppContainer'
import LoginScreen from './app/containers/LoginScreen'
import RegisterScreen from './app/containers/RegisterScreen'
import HomeScreen from './app/containers/HomeScreen'

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



const StackNav = StackNavigator({
  
      Login: {screen: LoginScreen},
      Register: {screen: RegisterScreen},
      Home: {screen : HomeScreen}
  }, { headerMode: 'none',
       transitionConfig: getSlideFromRightTransition
      
  });
  
  
export default class App extends React.Component {

  constructor(props){
    super(props)
  }

  render() {
    return (
        <StackNav />
        //<LoginScreen />

          //<TabNav />
    );
  }
}
const styles = StyleSheet.create({

});


