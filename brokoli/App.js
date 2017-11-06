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

/*
 * Displays the icon for the tab w/ color dependent upon selection
*/
const TabIcon = ({ selected, source }) => {
  return (
    <Image style={[styles.icon, {tintColor: selected ? '#5d95c4' :'#dad9de'}]} source={source}/>
  );
}

export default class App extends React.Component {
  render() {
    return (

      <Provider store={store}>

      <Router>
        <Scene key="root">
        <Scene key="footerTab"
               tabs={true}
               hideNavBar
               tabBarStyle={styles.customizeFooter}>

               <Scene key="projectTab" 
                      title="Project" 
                      component={ProjectScreen}
                      source={require('./img/icons/project.png')}
                      icon={TabIcon}
                      hideNavBar/>
                
               <Scene key="bookmarkTab" 
                      title="Bookmarks" 
                      component={BookmarkScreen}
                      source={require('./img/icons/bookmark.png')}
                      icon={TabIcon}
                      hideNavBar/>

               <Scene key="brokoliTab" 
                      title="Brokoli"
                      component={BrokoliScreen}
                      source={require('./img/icons/broccoli.png')}
                      icon={TabIcon}
                      hideNavBar/>

               <Scene key="profileTab" 
                      title="Profile" 
                      component={ProfileScreen}
                      source={require('./img/icons/profile.png')}
                      icon={TabIcon}
                      hideNavBar/>

               <Scene key="notificationTab" 
                      title="Notification"
                      component={NotificationScreen}
                      source={require('./img/icons/mail.png')}
                      icon={TabIcon}
                      hideNavBar/>


        </Scene>

        </Scene>

      </Router>

     {/* <AppContainer /> */}

      </Provider>
    );
  }
}
const styles = StyleSheet.create({
customizeFooter: {
  flexDirection: 'row',
  justifyContent: 'flex-end',
  alignItems: 'center',
  backgroundColor: 'white',
  borderTopWidth: 0.7,
  borderColor: '#5d95c4',
},
icon:{
  height: 22.5,
  width: 22.5,
  resizeMode: 'contain'
}
});


