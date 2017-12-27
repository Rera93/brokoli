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
import { TabNavigator } from 'react-navigation';
import { StackNavigator } from 'react-navigation';
import getSlideFromRightTransition from 'react-navigation-slide-from-right-transition';


import AppContainer from './app/containers/AppContainer'
import ProjectScreen from './app/containers/ProjectScreen'
import BookmarkScreen from './app/containers/BookmarkScreen'
import BrokoliScreen from './app/containers/BrokoliScreen'
import ProfileScreen from './app/containers/ProfileScreen'
import NotificationScreen from './app/containers/NotificationScreen'
import LoginScreen from './app/containers/LoginScreen'
import RegisterScreen from './app/containers/RegisterScreen'


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

const TabNav =  TabNavigator({
  Project: {
    screen: ProjectScreen,
  },
  Bookmark: {
    screen: BookmarkScreen,
  },
  Brokoli: {
    screen: BrokoliScreen,
  },
  Profile: {
    screen: ProfileScreen,
  },
  Mail: {
    screen: NotificationScreen,
  },
}, {
  initialRouteName: 'Brokoli',
  tabBarPosition: 'bottom',
  animationEnabled: true,
  swipeEnabled: false,
  tabBarOptions: {
    activeTintColor: '#42D260',
    showIcon: true,
    labelStyle: {
      fontSize: 9,
      fontWeight: 'bold'
    },
    style: {
      borderTopWidth: 1,
      borderColor: '#42D260',
      backgroundColor: 'white',
    },
    inactiveTintColor: 'grey',
    indicatorStyle: {
      backgroundColor: '#42D260',
    }
  
  },
});

const StackNav = StackNavigator({
  
      Login: {screen: LoginScreen},
      Register: {screen: RegisterScreen},
      Home: {screen : TabNav}
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
customizeFooter: {
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: 'white',
  borderTopWidth: 0.7,
  borderColor: '#228B22',
},
icon:{
  height: 30,
  width: 30,
  resizeMode: 'contain'
}
});


