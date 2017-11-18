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
import NotificationScreen from './app/containers/RegisterScreen'

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
    <Image style={[styles.icon, {tintColor: selected ? '#228B22' :'#dad9de'}]} source={source}/>
  );
}

export default class App extends React.Component {
  render() {
    return (

      <Provider store={store}>
      <Router>
        <Scene key="root">
        <Scene key="tabbar"
               tabs={true}
               hideNavBar
               tabBarStyle={styles.customizeFooter}
               tabBarPosition="bottom">

               <Scene key="projectTab" 
                      title="Project" 
                      source={require('./img/icons/project.png')}
                      icon={TabIcon}
                      component={ProjectScreen}
                      hideNavBar />
                
               <Scene key="bookmarkTab" 
                      title="Bookmarks" 
                      source={require('./img/icons/bookmark.png')}
                      icon={TabIcon}
                      component={BookmarkScreen} 
                      hideNavBar />


               <Scene key="brokoliTab" 
                      title="Brokoli"
                      source={require('./img/icons/brokoli.png')}
                      icon={TabIcon}
                      component={BrokoliScreen}
                      hideNavBar />

                      

               <Scene key="profileTab" 
                      title="Profile" 
                      source={require('./img/icons/profile.png')}
                      icon={TabIcon}
                      component={ProfileScreen} 
                      hideNavBar />

             

               <Scene key="notificationTab" 
                      title="Notification"
                      source={require('./img/icons/mail.png')}
                      icon={TabIcon}
                      component={NotificationScreen} 
                      hideNavBar />


        </Scene>

        </Scene>

      </Router>

      </Provider>
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


